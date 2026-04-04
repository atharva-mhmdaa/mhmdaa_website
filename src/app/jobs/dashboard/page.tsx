import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

export const metadata = { title: 'Jobs Dashboard — MHMDAA' };

export default async function JobsDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let jobs: {
    id: string;
    title: string;
    department: string | null;
    location: string | null;
    is_published: boolean;
    created_at: string;
  }[] = [];

  if (user) {
    const { data } = await supabase
      .from('job_postings')
      .select('*')
      .eq('author_id', user.id)
      .order('created_at', { ascending: false });
    if (data) jobs = data;
  }

  // Fetch applicant counts per job via admin client
  const applicantCounts: Record<string, number> = {};
  if (jobs.length > 0) {
    const admin = getSupabaseAdmin();
    const { data: counts } = await admin
      .from('job_applications')
      .select('job_posting_id')
      .in('job_posting_id', jobs.map((j) => j.id));

    if (counts) {
      for (const row of counts) {
        applicantCounts[row.job_posting_id] = (applicantCounts[row.job_posting_id] ?? 0) + 1;
      }
    }
  }

  const published = jobs.filter((j) => j.is_published).length;
  const drafts = jobs.filter((j) => !j.is_published).length;
  const totalApplicants = Object.values(applicantCounts).reduce((a, b) => a + b, 0);

  const hasJobs = jobs.length > 0;

  return (
    <>
      <div className="dash-main__toolbar">
        <div>
          <h1 className="dash-main__title">Job postings</h1>
          <p className="dash-main__subtitle">
            Manage your job listings. Published posts appear on the public careers page.
          </p>
        </div>
        {hasJobs && (
          <Link href="/jobs/jobs/new" className="btn-p" style={{ whiteSpace: 'nowrap' }}>
            + New job posting
          </Link>
        )}
      </div>

      {hasJobs && (
        <div className="dash-stat-grid">
          <div className="dash-card dash-stat-card">
            <div className="dash-stat-card__value dash-stat-card__value--total">{jobs.length}</div>
            <div className="dash-stat-card__label">Total</div>
          </div>
          <div className="dash-card dash-stat-card">
            <div className="dash-stat-card__value dash-stat-card__value--pub">{published}</div>
            <div className="dash-stat-card__label">Published</div>
          </div>
          <div className="dash-card dash-stat-card">
            <div className="dash-stat-card__value dash-stat-card__value--draft">{drafts}</div>
            <div className="dash-stat-card__label">Drafts</div>
          </div>
          <div className="dash-card dash-stat-card">
            <div className="dash-stat-card__value" style={{ color: '#2A3F7A' }}>{totalApplicants}</div>
            <div className="dash-stat-card__label">Applicants</div>
          </div>
        </div>
      )}

      <div className="dash-card dash-panel">
        {!hasJobs ? (
          <div className="dash-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 3H8l-2 4h12L16 3z" />
            </svg>
            <p>No job postings yet</p>
            <p style={{ fontSize: '.9rem', color: '#94a3b8', marginTop: '-8px', marginBottom: '20px' }}>
              Get started by creating your first job listing.
            </p>
            <Link href="/jobs/jobs/new" className="btn-p">
              + Create job posting
            </Link>
          </div>
        ) : (
          <table className="dash-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Department</th>
                <th>Location</th>
                <th>Status</th>
                <th>Applicants</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => {
                const count = applicantCounts[job.id] ?? 0;
                return (
                  <tr key={job.id}>
                    <td style={{ fontWeight: 600 }}>{job.title}</td>
                    <td>{job.department || '—'}</td>
                    <td>{job.location || '—'}</td>
                    <td>
                      <span className={`dash-badge ${job.is_published ? 'published' : 'draft'}`}>
                        {job.is_published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td>
                      <Link
                        href={`/jobs/jobs/${job.id}/applicants`}
                        className="applicants-count-link"
                        title="View applicants"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        {count} {count === 1 ? 'applicant' : 'applicants'}
                      </Link>
                    </td>
                    <td style={{ fontSize: '.88rem', color: '#64748b' }}>
                      {new Date(job.created_at).toLocaleDateString()}
                    </td>
                    <td style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Link href={`/jobs/jobs/${job.id}/edit`} className="dash-table-link">
                        Edit
                      </Link>
                      <Link href={`/jobs/jobs/${job.id}/applicants`} className="dash-table-link">
                        Applicants
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
