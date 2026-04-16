import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';

export const revalidate = 0;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt || `${post.title} – MHMDAA Blog`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: post } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, content, cover_image_url, published_at, html_url')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!post) notFound();

  // HTML-file posts: redirect the browser directly to the proxy route.
  // The proxy serves the file with the correct Content-Type so the browser
  // renders it as a standalone full-page HTML document — no site chrome,
  // no iframe stacking-context issues. The proxy independently validates
  // the slug and checks is_published, so security is unchanged.
  if (post.html_url) {
    redirect(`/view/blogs/html/${slug}`);
  }

  // Legacy rich-text content posts render inline
  return (
    <>
      <div className="blogs-hero" style={{ paddingBottom: '60px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Link href="/blogs" style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none', fontSize: '.92rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
            ← Back to Blog
          </Link>
          {post.published_at && (
            <p style={{ color: 'rgba(255,255,255,.5)', fontSize: '.85rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              {new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          )}
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
            {post.title}
          </h1>
          {post.excerpt && (
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: '700px' }}>
              {post.excerpt}
            </p>
          )}
        </div>
      </div>

      {post.cover_image_url && (
        <div style={{ maxWidth: '900px', margin: '-40px auto 0', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 48px rgba(10,31,61,.18)' }}>
            <Image
              src={post.cover_image_url}
              alt={post.title}
              width={900}
              height={480}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      )}

      <article className="section" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div
          className="cs-body"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
          style={{ fontSize: '1.1rem', color: '#3D4F63', lineHeight: 1.85 }}
        />

        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/blogs" style={{ color: '#2A3F7A', fontWeight: 600, textDecoration: 'none', fontSize: '.95rem' }}>
            ← More Articles
          </Link>
          <Link href="/contact" className="btn-p" style={{ fontSize: '.92rem', padding: '10px 22px' }}>
            Contact Our Team
          </Link>
        </div>
      </article>
    </>
  );
}
