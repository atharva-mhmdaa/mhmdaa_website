-- ============================================================
-- FIX: Use auth.jwt() metadata for role checks to avoid
-- infinite recursion through the profiles table.
--
-- The root cause: profiles has a "FOR ALL" admin policy that
-- queries profiles itself, and all write policies on
-- job_postings / blog_posts also query profiles for role
-- checks -- creating circular recursion.
--
-- Solution: read role from auth.jwt() -> 'user_metadata' ->> 'role'
-- which is set during user creation and lives in the JWT token,
-- never touching the profiles table.
-- ============================================================

-- 1. Fix profiles table self-referencing policy
DROP POLICY IF EXISTS "Admins can manage all profiles" ON public.profiles;
CREATE POLICY "Admins can manage all profiles"
  ON public.profiles FOR ALL
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

-- 2. Fix job_postings write policies
DROP POLICY IF EXISTS "Nurses can insert own job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Nurses can update own job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Nurses can delete own job postings" ON public.job_postings;

CREATE POLICY "Nurses can insert own job postings"
  ON public.job_postings FOR INSERT
  WITH CHECK (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'nurse'
  );

CREATE POLICY "Nurses can update own job postings"
  ON public.job_postings FOR UPDATE
  USING (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'nurse'
  );

CREATE POLICY "Nurses can delete own job postings"
  ON public.job_postings FOR DELETE
  USING (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'nurse'
  );

-- 3. Fix blog_posts write policies
DROP POLICY IF EXISTS "Bloggers can insert own blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Bloggers can update own blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Bloggers can delete own blog posts" ON public.blog_posts;

CREATE POLICY "Bloggers can insert own blog posts"
  ON public.blog_posts FOR INSERT
  WITH CHECK (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'blogger'
  );

CREATE POLICY "Bloggers can update own blog posts"
  ON public.blog_posts FOR UPDATE
  USING (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'blogger'
  );

CREATE POLICY "Bloggers can delete own blog posts"
  ON public.blog_posts FOR DELETE
  USING (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') = 'blogger'
  );
