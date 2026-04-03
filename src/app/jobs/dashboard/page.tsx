import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

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

  const published = jobs.filter((j) => j.is_published).length;
  const drafts = jobs.filter((j) => !j.is_published).length;

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
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td style={{ fontWeight: 600 }}>{job.title}</td>
                  <td>{job.department || '—'}</td>
                  <td>{job.location || '—'}</td>
                  <td>
                    <span
                      className={`dash-badge ${job.is_published ? 'published' : 'draft'}`}
                    >
                      {job.is_published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td style={{ fontSize: '.88rem', color: '#64748b' }}>
                    {new Date(job.created_at).toLocaleDateString()}
                  </td>
                  <td>
                    <Link href={`/jobs/jobs/${job.id}/edit`} className="dash-table-link">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
