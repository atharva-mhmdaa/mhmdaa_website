import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

const VALID_STATUSES = ['pending', 'reviewed', 'shortlisted', 'rejected'] as const;

interface Props {
  params: Promise<{ applicationId: string }>;
}

export async function PATCH(request: Request, { params }: Props) {
  const { applicationId } = await params;

  // Verify the caller is an authenticated jobs admin / admin
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const role = user.user_metadata?.role as string | undefined;
  if (!['jobs_admin', 'admin', 'nurse'].includes(role ?? '')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const body = await request.json();
  const { status } = body as { status: string };

  if (!VALID_STATUSES.includes(status as typeof VALID_STATUSES[number])) {
    return NextResponse.json({ error: 'Invalid status value.' }, { status: 400 });
  }

  const admin = getSupabaseAdmin();
  const { error } = await admin
    .from('job_applications')
    .update({ status })
    .eq('id', applicationId);

  if (error) {
    console.error('Status update error:', error);
    return NextResponse.json({ error: 'Failed to update status.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
