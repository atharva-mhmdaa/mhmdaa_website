import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import ApplicantStatusSelect from './ApplicantStatusSelect';

export const revalidate = 0;

interface Props {
  params: Promise<{ id: string }>;
}

const STATUS_LABELS: Record<string, string> = {
  pending: 'Pending',
  reviewed: 'Reviewed',
  shortlisted: 'Shortlisted',
  rejected: 'Rejected',
};

export default async function ApplicantsPage({ params }: Props) {
  const { id } = await params;

  // Verify the job exists and belongs to this user
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) notFound();

  const { data: job } = await supabase
    .from('job_postings')
    .select('id, title, department, is_published')
    .eq('id', id)
    .eq('author_id', user.id)
    .single();

  if (!job) notFound();

  // Fetch applications via admin client (bypasses RLS read restrictions for service-level view)
  const admin = getSupabaseAdmin();
  const { data: applications } = await admin
    .from('job_applications')
    .select('*')
    .eq('job_posting_id', id)
    .order('submitted_at', { ascending: false });

  const apps = applications ?? [];

  return (
    <>
      <Link
        href="/jobs/dashboard"
        style={{
          color: '#2A3F7A',
          fontSize: '.92rem',
          fontWeight: 600,
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '20px',
        }}
      >
        ← Back to Dashboard
      </Link>

      <div className="dash-main__toolbar" style={{ marginBottom: '24px' }}>
        <div>
          <h1 className="dash-main__title">Applicants</h1>
          <p className="dash-main__subtitle">
            <span style={{ fontWeight: 600, color: '#2A3F7A' }}>{job.title}</span>
            {job.department ? ` · ${job.department}` : ''}
            {' · '}
            <span className={`dash-badge ${job.is_published ? 'published' : 'draft'}`}>
              {job.is_published ? 'Published' : 'Draft'}
            </span>
          </p>
        </div>
        <div className="applicants-count-badge">
          {apps.length} {apps.length === 1 ? 'Applicant' : 'Applicants'}
        </div>
      </div>

      <div className="dash-card dash-panel">
        {apps.length === 0 ? (
          <div className="dash-empty">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <p>No applications yet</p>
            <p style={{ fontSize: '.9rem', color: '#94a3b8', marginTop: '-8px' }}>
              Applications will appear here once candidates submit the form.
            </p>
          </div>
        ) : (
          <div className="applicants-list">
            {apps.map((app) => (
              <details key={app.id} className="applicant-card">
                <summary className="applicant-card__summary">
                  <div className="applicant-card__main">
                    <div className="applicant-card__name">
                      {app.first_name} {app.last_name}
                    </div>
                    <div className="applicant-card__meta">
                      <a href={`mailto:${app.email}`} className="applicant-card__email">{app.email}</a>
                      <span className="applicant-card__sep">·</span>
                      <span>{app.phone}</span>
                      <span className="applicant-card__sep">·</span>
                      <span>{app.city}, {app.state}</span>
                    </div>
                  </div>
                  <div className="applicant-card__right">
                    <span className={`app-status-badge app-status-badge--${app.status}`}>
                      {STATUS_LABELS[app.status] ?? app.status}
                    </span>
                    <span className="applicant-card__date">
                      {new Date(app.submitted_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </summary>

                <div className="applicant-card__body">
                  {/* Row 1: eligibility + professional */}
                  <div className="applicant-detail-grid">
                    <div className="applicant-detail-section">
                      <div className="applicant-detail-label">Work Authorization</div>
                      <div className="applicant-detail-value">
                        {app.work_authorized ? '✓ Authorized to work in the US' : '✗ Not authorized'}
                      </div>
                    </div>
                    <div className="applicant-detail-section">
                      <div className="applicant-detail-label">Visa Sponsorship Required</div>
                      <div className="applicant-detail-value">
                        {app.visa_sponsorship ? 'Yes' : 'No'}
                      </div>
                    </div>
                    <div className="applicant-detail-section">
                      <div className="applicant-detail-label">Veteran Status</div>
                      <div className="applicant-detail-value" style={{ textTransform: 'capitalize' }}>
                        {app.veteran_status?.replace(/_/g, ' ') ?? '—'}
                      </div>
                    </div>
                    {app.earliest_start_date && (
                      <div className="applicant-detail-section">
                        <div className="applicant-detail-label">Available From</div>
                        <div className="applicant-detail-value">
                          {new Date(app.earliest_start_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                    )}
                    {app.linkedin_url && (
                      <div className="applicant-detail-section">
                        <div className="applicant-detail-label">LinkedIn</div>
                        <div className="applicant-detail-value">
                          <a href={app.linkedin_url} target="_blank" rel="noopener noreferrer" className="applicant-card__email">
                            View Profile
                          </a>
                        </div>
                      </div>
                    )}
                    {app.address && (
                      <div className="applicant-detail-section">
                        <div className="applicant-detail-label">Address</div>
                        <div className="applicant-detail-value">
                          {app.address}, {app.city}, {app.state} {app.zip_code}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CV download */}
                  <div className="applicant-cv-row">
                    <CvDownloadLink storagePath={app.cv_url} applicantName={`${app.first_name} ${app.last_name}`} />
                  </div>

                  {/* Cover letter */}
                  {app.cover_letter && (
                    <div className="applicant-cover-letter">
                      <div className="applicant-detail-label" style={{ marginBottom: '8px' }}>Cover Letter</div>
                      <div className="applicant-cover-letter__text">{app.cover_letter}</div>
                    </div>
                  )}

                  {/* Status updater */}
                  <div className="applicant-status-row">
                    <span className="applicant-detail-label">Update Status:</span>
                    <ApplicantStatusSelect applicationId={app.id} currentStatus={app.status} />
                  </div>
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

async function CvDownloadLink({ storagePath, applicantName }: { storagePath: string; applicantName: string }) {
  const admin = getSupabaseAdmin();
  const { data } = await admin.storage
    .from('job-applications')
    .createSignedUrl(storagePath, 3600);

  if (!data?.signedUrl) {
    return <span style={{ fontSize: '.88rem', color: '#94a3b8' }}>CV unavailable</span>;
  }

  const fileName = storagePath.split('/').pop() ?? 'cv';

  return (
    <a
      href={data.signedUrl}
      download={fileName}
      className="applicant-cv-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download CV — {applicantName}
    </a>
  );
}
