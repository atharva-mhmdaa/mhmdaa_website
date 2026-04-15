-- Add html_url column to blog_posts (replaces pdf_url workflow)
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS html_url TEXT;

-- Create public blog-html storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-html', 'blog-html', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS for blog-html bucket
DROP POLICY IF EXISTS "Public can read blog html" ON storage.objects;
DROP POLICY IF EXISTS "Bloggers can upload blog html" ON storage.objects;
DROP POLICY IF EXISTS "Bloggers can update blog html" ON storage.objects;
DROP POLICY IF EXISTS "Bloggers can delete blog html" ON storage.objects;

CREATE POLICY "Public can read blog html" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-html');

CREATE POLICY "Bloggers can upload blog html" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'blog-html'
    AND auth.role() = 'authenticated'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );

CREATE POLICY "Bloggers can update blog html" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'blog-html'
    AND auth.role() = 'authenticated'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );

CREATE POLICY "Bloggers can delete blog html" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'blog-html'
    AND auth.role() = 'authenticated'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );
