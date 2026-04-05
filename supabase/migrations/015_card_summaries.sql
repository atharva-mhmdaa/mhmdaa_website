-- Add card-level summary columns for case studies.
-- Cards on the listing page use shorter text / fewer metrics than detail pages.

ALTER TABLE public.case_studies
  ADD COLUMN IF NOT EXISTS card_challenge TEXT,
  ADD COLUMN IF NOT EXISTS card_solution  TEXT,
  ADD COLUMN IF NOT EXISTS card_metrics   JSONB;
