-- Fix same infinite recursion pattern on blog_posts as was fixed on job_postings.
-- The old "Bloggers can manage own blog posts" FOR ALL policy queries profiles,
-- which itself has RLS that queries profiles again, causing infinite recursion
-- on anonymous SELECT.

DROP POLICY IF EXISTS "Bloggers can manage own blog posts" ON public.blog_posts;

CREATE POLICY "Bloggers can insert own blog posts"
  ON public.blog_posts FOR INSERT
  WITH CHECK (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'blogger'
    )
  );

CREATE POLICY "Bloggers can update own blog posts"
  ON public.blog_posts FOR UPDATE
  USING (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'blogger'
    )
  );

CREATE POLICY "Bloggers can delete own blog posts"
  ON public.blog_posts FOR DELETE
  USING (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'blogger'
    )
  );

CREATE POLICY "Bloggers can select own blog posts"
  ON public.blog_posts FOR SELECT
  USING (
    author_id = auth.uid()
  );
