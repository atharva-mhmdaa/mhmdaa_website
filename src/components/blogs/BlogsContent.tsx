'use client';

import Link from 'next/link';
import Image from 'next/image';

interface DynamicPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  published_at: string | null;
  pdf_url: string | null;
  tags: string[] | null;
  cover_image_url: string | null;
}

interface BlogsContentProps {
  dynamicPosts: DynamicPost[];
}

function formatDate(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const GRADIENT_COLORS = [
  'linear-gradient(135deg, #0D2140 0%, #1B2A5B 60%, #2A3F7A 100%)',
  'linear-gradient(135deg, #1B2A5B 0%, #2A3F7A 55%, #1B2A5B 100%)',
  'linear-gradient(135deg, #0D2140 0%, #C8102E 100%)',
  'linear-gradient(135deg, #2A3F7A 0%, #0D2140 100%)',
];

export default function BlogsContent({ dynamicPosts }: BlogsContentProps) {
  if (dynamicPosts.length === 0) {
    return (
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="sc">
          <div className="sec-header c">
            <div className="sec-label">Articles &amp; Reports</div>
            <h2 className="sec-title">Latest <em>Publications</em></h2>
          </div>
          <div style={{ textAlign: 'center', padding: '48px 0', color: '#64748b', fontSize: '1.05rem' }}>
            Articles coming soon. Check back shortly.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="sc">
        <div className="sec-header c" style={{ marginBottom: 48 }}>
          <div className="sec-label">Clinical Intelligence</div>
          <h2 className="sec-title">Featured <em>Publications</em></h2>
          <p className="sec-sub" style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Physician-led analyses of regulations, OIG data, and emerging trends
            shaping hospital revenue cycle operations nationwide.
          </p>
        </div>

        <div className="cs-grid">
          {dynamicPosts.map((post, i) => {
            const href = post.pdf_url ?? `/blogs/${post.slug}`;
            const isExternal = !!post.pdf_url;

            return (
              <a
                key={post.id}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="cs-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {/* Preview area */}
                <div className="cs-card-preview">
                  {post.cover_image_url ? (
                    <Image
                      src={post.cover_image_url}
                      alt={post.title}
                      width={600}
                      height={375}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: GRADIENT_COLORS[i % GRADIENT_COLORS.length],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,.12)',
                      fontSize: '2.8rem',
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      textAlign: 'center',
                      padding: '24px',
                      letterSpacing: '-.02em',
                    }}>
                      MHMDAA
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="cs-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <span className="cs-badge" style={{ background: 'rgba(200,16,46,.1)', color: '#C8102E' }}>
                      {post.pdf_url ? 'Report' : 'Article'}
                    </span>
                    {post.published_at && (
                      <span style={{ fontSize: '.75rem', color: '#94a3b8', fontWeight: 600, whiteSpace: 'nowrap', marginTop: 2 }}>
                        {formatDate(post.published_at)}
                      </span>
                    )}
                  </div>

                  <h3>{post.title}</h3>

                  {post.excerpt && (
                    <p style={{ fontSize: '.95rem', color: '#3A4D66', lineHeight: 1.7 }}>
                      {post.excerpt.length > 140
                        ? post.excerpt.slice(0, 140).replace(/\s+\S*$/, '') + '\u2026'
                        : post.excerpt}
                    </p>
                  )}

                  {post.tags && post.tags.length > 0 && (
                    <div className="cs-card-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="cs-tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  <div className="cs-card-footer">
                    <span className="btn-p" style={{ fontSize: '.88rem', padding: '10px 20px', pointerEvents: 'none' }}>
                      {post.pdf_url ? 'Read Report \u2192' : 'Read Article \u2192'}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
