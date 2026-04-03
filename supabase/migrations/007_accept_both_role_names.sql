-- The JWT user_metadata.role can be either the old name (nurse/blogger)
-- or the new name (jobs_admin/content_admin) depending on when the user
-- was created. Accept both in all write policies.

DROP POLICY IF EXISTS "Nurses can insert own job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Nurses can update own job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Nurses can delete own job postings" ON public.job_postings;

CREATE POLICY "Jobs admins can insert own job postings"
  ON public.job_postings FOR INSERT
  WITH CHECK (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('nurse', 'jobs_admin')
  );

CREATE POLICY "Jobs admins can update own job postings"
  ON public.job_postings FOR UPDATE
  USING (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('nurse', 'jobs_admin')
  );

CREATE POLICY "Jobs admins can delete own job postings"
  ON public.job_postings FOR DELETE
  USING (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('nurse', 'jobs_admin')
  );

DROP POLICY IF EXISTS "Bloggers can insert own blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Bloggers can update own blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Bloggers can delete own blog posts" ON public.blog_posts;

CREATE POLICY "Content admins can insert own blog posts"
  ON public.blog_posts FOR INSERT
  WITH CHECK (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin')
  );

CREATE POLICY "Content admins can update own blog posts"
  ON public.blog_posts FOR UPDATE
  USING (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin')
  );

CREATE POLICY "Content admins can delete own blog posts"
  ON public.blog_posts FOR DELETE
  USING (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin')
  );
