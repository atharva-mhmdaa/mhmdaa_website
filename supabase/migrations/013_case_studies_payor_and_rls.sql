-- Payor vs provider, payor-specific fields, and shared team edit/delete for content roles

ALTER TABLE public.case_studies
  ADD COLUMN IF NOT EXISTS kind text NOT NULL DEFAULT 'provider'
    CHECK (kind IN ('provider', 'payor'));

ALTER TABLE public.case_studies
  ADD COLUMN IF NOT EXISTS payor_dispute_type text;

ALTER TABLE public.case_studies
  ADD COLUMN IF NOT EXISTS payor_representation text;

ALTER TABLE public.case_studies
  ADD COLUMN IF NOT EXISTS payor_scope text;

ALTER TABLE public.case_studies
  ADD COLUMN IF NOT EXISTS payor_case_ref text;

ALTER TABLE public.case_studies
  ADD COLUMN IF NOT EXISTS payor_counsel text;

COMMENT ON COLUMN public.case_studies.kind IS 'provider = hospital engagements; payor = expert witness / payor defense';
COMMENT ON COLUMN public.case_studies.payor_dispute_type IS 'Filter key for payor tab: payment-dispute, medical-necessity, utilization-mgmt, auto-insurance';

-- Allow any staff content role to edit/delete any case study (small team, shared library)
DROP POLICY IF EXISTS "Content admins can update own case studies" ON public.case_studies;
DROP POLICY IF EXISTS "Content admins can delete own case studies" ON public.case_studies;

CREATE POLICY "Content roles can update case studies"
  ON public.case_studies FOR UPDATE
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );

CREATE POLICY "Content roles can delete case studies"
  ON public.case_studies FOR DELETE
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );
