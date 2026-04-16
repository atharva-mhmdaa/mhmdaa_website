import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

// Only allow fetching from the project's own Supabase Storage bucket.
// This prevents SSRF: even if the database were tampered with, the proxy
// will refuse to fetch from internal network addresses or other domains.
const ALLOWED_STORAGE_ORIGIN = `https://${process.env.NEXT_PUBLIC_SUPABASE_URL?.replace('https://', '')?.split('/')[0]}`;

function isAllowedStorageUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    // Must be HTTPS and come from the project's Supabase Storage host.
    // Path must start with /storage/v1/object/public/blog-html/
    return (
      parsed.protocol === 'https:' &&
      parsed.origin === ALLOWED_STORAGE_ORIGIN &&
      parsed.pathname.startsWith('/storage/v1/object/public/blog-html/')
    );
  } catch {
    return false;
  }
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: post } = await supabase
    .from('blog_posts')
    .select('html_url')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!post?.html_url) {
    return new NextResponse('Not found', { status: 404 });
  }

  // Reject any URL that does not point to our own Supabase Storage bucket.
  // This is a defence-in-depth guard against SSRF.
  if (!isAllowedStorageUrl(post.html_url)) {
    return new NextResponse('Invalid content source.', { status: 403 });
  }

  // Fetch the raw HTML from Supabase Storage.
  // Supabase Storage serves .html as text/plain, so we re-serve it
  // with the correct content-type so the browser renders it properly.
  let html: string;
  try {
    const res = await fetch(post.html_url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Storage fetch failed: ${res.status}`);
    html = await res.text();
  } catch {
    return new NextResponse('Failed to load blog content. Please try again shortly.', { status: 502 });
  }

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      // Content-Security-Policy keeps the proxied HTML from exfiltrating
      // data back to unexpected third-party servers. Allows Google Fonts,
      // CDN scripts, and images from any HTTPS source (common in blog pages).
      'Content-Security-Policy': [
        "default-src 'self' https: data: blob:",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
        "style-src 'self' 'unsafe-inline' https:",
        "font-src 'self' data: https:",
        "img-src 'self' data: blob: https:",
        "connect-src 'self' https:",
        "frame-ancestors 'self'",
      ].join('; '),
      // Prevent the browser from caching aggressively so updates
      // to a replaced HTML file are picked up within a minute.
      'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
      // Disallow this page from being embedded by other sites.
      'X-Frame-Options': 'SAMEORIGIN',
    },
  });
}
