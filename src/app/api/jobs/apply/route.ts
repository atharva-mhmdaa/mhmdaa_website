import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const jobPostingId = form.get('jobPostingId') as string | null;
    const firstName = (form.get('firstName') as string | null)?.trim();
    const lastName = (form.get('lastName') as string | null)?.trim();
    const email = (form.get('email') as string | null)?.trim().toLowerCase();
    const phone = (form.get('phone') as string | null)?.trim();
    const address = (form.get('address') as string | null)?.trim() || null;
    const city = (form.get('city') as string | null)?.trim();
    const state = (form.get('state') as string | null)?.trim();
    const zipCode = (form.get('zipCode') as string | null)?.trim();
    const workAuthorized = form.get('workAuthorized') as string | null;
    const visaSponsorship = form.get('visaSponsorship') as string | null;
    const veteranStatus = (form.get('veteranStatus') as string | null) || 'prefer_not_to_say';
    const linkedinUrl = (form.get('linkedinUrl') as string | null)?.trim() || null;
    const earliestStartDate = (form.get('earliestStartDate') as string | null) || null;
    const coverLetter = (form.get('coverLetter') as string | null)?.trim() || null;
    const cvFile = form.get('cv') as File | null;

    // Required field validation
    if (!jobPostingId || !firstName || !lastName || !email || !phone || !city || !state || !zipCode) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 },
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (workAuthorized === null) {
      return NextResponse.json(
        { error: 'Please answer the work authorization question.' },
        { status: 400 },
      );
    }
    if (visaSponsorship === null) {
      return NextResponse.json(
        { error: 'Please answer the visa sponsorship question.' },
        { status: 400 },
      );
    }
    if (!cvFile || cvFile.size === 0) {
      return NextResponse.json({ error: 'A CV/Resume file is required.' }, { status: 400 });
    }
    if (!ALLOWED_MIME.includes(cvFile.type)) {
      return NextResponse.json(
        { error: 'CV must be a PDF or Word document (.pdf, .doc, .docx).' },
        { status: 400 },
      );
    }
    if (cvFile.size > MAX_BYTES) {
      return NextResponse.json({ error: 'CV file must be 5 MB or smaller.' }, { status: 400 });
    }

    const admin = getSupabaseAdmin();

    // Duplicate check
    const { data: existing } = await admin
      .from('job_applications')
      .select('id')
      .eq('job_posting_id', jobPostingId)
      .eq('email', email)
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { error: 'You have already applied for this position.' },
        { status: 409 },
      );
    }

    // Upload CV to Supabase Storage
    const ext = cvFile.name.split('.').pop() ?? 'pdf';
    const safeName = cvFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const storagePath = `${jobPostingId}/${Date.now()}-${safeName}`;

    const cvBuffer = await cvFile.arrayBuffer();
    const { error: uploadError } = await admin.storage
      .from('job-applications')
      .upload(storagePath, cvBuffer, {
        contentType: cvFile.type,
        upsert: false,
      });

    if (uploadError) {
      console.error('CV upload error:', uploadError);
      return NextResponse.json(
        { error: 'Failed to upload CV. Please try again.' },
        { status: 502 },
      );
    }

    // Insert application row
    const { error: insertError } = await admin.from('job_applications').insert({
      job_posting_id: jobPostingId,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      address,
      city,
      state,
      zip_code: zipCode,
      work_authorized: workAuthorized === 'yes',
      visa_sponsorship: visaSponsorship === 'yes',
      veteran_status: veteranStatus,
      linkedin_url: linkedinUrl,
      earliest_start_date: earliestStartDate || null,
      cover_letter: coverLetter,
      cv_url: storagePath,
      status: 'pending',
    });

    if (insertError) {
      console.error('DB insert error:', insertError);
      // Clean up uploaded file on DB failure
      await admin.storage.from('job-applications').remove([storagePath]);
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again.' },
        { status: 502 },
      );
    }

    // Optional webhook notification
    const webhookUrl = process.env.POWER_AUTOMATE_WEBHOOK_URL;
    if (webhookUrl) {
      const { data: job } = await admin
        .from('job_postings')
        .select('title')
        .eq('id', jobPostingId)
        .single();

      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'job_application',
          applicant_name: `${firstName} ${lastName}`,
          applicant_email: email,
          job_title: job?.title ?? '',
          submitted_at: new Date().toISOString(),
        }),
      }).catch((err) => console.error('Webhook error:', err));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Apply route error:', err);
    return NextResponse.json({ error: 'Invalid request. Please try again.' }, { status: 400 });
  }
}
