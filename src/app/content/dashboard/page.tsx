import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export const metadata = { title: 'Content Dashboard — MHMDAA' };

export default async function ContentDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let posts: {
    id: string;
    title: string;
    excerpt: string | null;
    is_published: boolean;
    created_at: string;
  }[] = [];

  if (user) {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('author_id', user.id)
      .order('created_at', { ascending: false });
    if (data) posts = data;
  }

  const published = posts.filter((p) => p.is_published).length;
  const drafts = posts.filter((p) => !p.is_published).length;

  const hasPosts = posts.length > 0;

  return (
    <>
      <div className="dash-main__toolbar">
        <div>
          <h1 className="dash-main__title">Blog posts</h1>
          <p className="dash-main__subtitle">
            Manage your articles. Published posts appear on the public blog page.
          </p>
        </div>
        {hasPosts && (
          <Link href="/content/posts/new" className="btn-p" style={{ whiteSpace: 'nowrap' }}>
            + New post
          </Link>
        )}
      </div>

      {hasPosts && (
        <div className="dash-stat-grid">
          <div className="dash-card dash-stat-card">
            <div className="dash-stat-card__value dash-stat-card__value--total">{posts.length}</div>
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
        {!hasPosts ? (
          <div className="dash-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            <p>No blog posts yet</p>
            <p style={{ fontSize: '.9rem', color: '#94a3b8', marginTop: '-8px', marginBottom: '20px' }}>
              Get started by writing your first article.
            </p>
            <Link href="/content/posts/new" className="btn-p">
              + Write your first post
            </Link>
          </div>
        ) : (
          <table className="dash-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Excerpt</th>
                <th>Status</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td style={{ fontWeight: 600 }}>{post.title}</td>
                  <td
                    style={{
                      maxWidth: '240px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {post.excerpt || '—'}
                  </td>
                  <td>
                    <span
                      className={`dash-badge ${post.is_published ? 'published' : 'draft'}`}
                    >
                      {post.is_published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td style={{ fontSize: '.88rem', color: '#64748b' }}>
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td>
                    <Link href={`/content/posts/${post.id}/edit`} className="dash-table-link">
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
