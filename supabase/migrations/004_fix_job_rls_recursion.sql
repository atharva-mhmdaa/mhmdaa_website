-- Fix infinite recursion: the old "Nurses can manage own job postings"
-- policy used FOR ALL (including SELECT) and queried profiles, which itself
-- has RLS that queries profiles again.  Split into per-operation policies.

DROP POLICY IF EXISTS "Nurses can manage own job postings" ON public.job_postings;

CREATE POLICY "Nurses can insert own job postings"
  ON public.job_postings FOR INSERT
  WITH CHECK (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'nurse'
    )
  );

CREATE POLICY "Nurses can update own job postings"
  ON public.job_postings FOR UPDATE
  USING (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'nurse'
    )
  );

CREATE POLICY "Nurses can delete own job postings"
  ON public.job_postings FOR DELETE
  USING (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'nurse'
    )
  );

-- Authenticated users who own a job can always read their own postings
-- (even drafts), without triggering the profiles-based recursion.
CREATE POLICY "Nurses can select own job postings"
  ON public.job_postings FOR SELECT
  USING (
    author_id = auth.uid()
  );
