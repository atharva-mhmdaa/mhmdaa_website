-- Create blog-images public storage bucket for cover images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS policies for blog-images
DROP POLICY IF EXISTS "Public can read blog images" ON storage.objects;
DROP POLICY IF EXISTS "Content admins can upload blog images" ON storage.objects;
DROP POLICY IF EXISTS "Content admins can update blog images" ON storage.objects;
DROP POLICY IF EXISTS "Content admins can delete blog images" ON storage.objects;

CREATE POLICY "Public can read blog images" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-images');

CREATE POLICY "Content admins can upload blog images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'blog-images'
    AND auth.role() = 'authenticated'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );

CREATE POLICY "Content admins can update blog images" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'blog-images'
    AND auth.role() = 'authenticated'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );

CREATE POLICY "Content admins can delete blog images" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'blog-images'
    AND auth.role() = 'authenticated'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );
