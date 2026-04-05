import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export const metadata = { title: 'Case Studies — MHMDAA Staff' };

export default async function CaseStudiesDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let studies: {
    id: string;
    title: string;
    subtitle: string | null;
    kind: string | null;
    is_published: boolean;
    created_at: string;
  }[] = [];

  if (user) {
    const { data } = await supabase
      .from('case_studies')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) studies = data;
  }

  const published = studies.filter((s) => s.is_published).length;
  const drafts = studies.filter((s) => !s.is_published).length;
  const hasStudies = studies.length > 0;

  return (
    <>
      <div className="dash-main__toolbar">
        <div>
          <h1 className="dash-main__title">Case Studies</h1>
          <p className="dash-main__subtitle">
            Manage your case studies. Published entries appear on the public case studies page.
          </p>
        </div>
        {hasStudies && (
          <Link href="/content/case-studies/new" className="btn-p" style={{ whiteSpace: 'nowrap' }}>
            + New Case Study
          </Link>
        )}
      </div>

      {hasStudies && (
        <div className="dash-stat-grid">
          <div className="dash-card dash-stat-card">
            <div className="dash-stat-card__value dash-stat-card__value--total">{studies.length}</div>
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
        {!hasStudies ? (
          <div className="dash-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
              <path d="M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" />
              <polyline points="9 17 9 5 21 3 21 15" />
            </svg>
            <p>No case studies yet</p>
            <p style={{ fontSize: '.9rem', color: '#94a3b8', marginTop: '-8px', marginBottom: '20px' }}>
              Get started by creating your first case study.
            </p>
            <Link href="/content/case-studies/new" className="btn-p">
              + Create your first case study
            </Link>
          </div>
        ) : (
          <table className="dash-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Subtitle</th>
                <th>Status</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {studies.map((s) => (
                <tr key={s.id}>
                  <td style={{ fontWeight: 600 }}>{s.title}</td>
                  <td style={{ fontSize: '.88rem', color: '#64748b' }}>
                    {s.kind === 'payor' ? 'Payor' : 'Provider'}
                  </td>
                  <td
                    style={{
                      maxWidth: '240px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {s.subtitle || '—'}
                  </td>
                  <td>
                    <span className={`dash-badge ${s.is_published ? 'published' : 'draft'}`}>
                      {s.is_published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td style={{ fontSize: '.88rem', color: '#64748b' }}>
                    {new Date(s.created_at).toLocaleDateString()}
                  </td>
                  <td>
                    <Link href={`/content/case-studies/${s.id}/edit`} className="dash-table-link">
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
