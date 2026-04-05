-- Case Studies table
CREATE TABLE public.case_studies (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  subtitle text,
  description text,
  challenge text,
  solution text,
  results text,
  metrics jsonb DEFAULT '[]'::jsonb,
  cover_image_url text,
  region text,
  service_type text,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Reuse the existing updated_at trigger function
CREATE TRIGGER case_studies_updated_at
  BEFORE UPDATE ON public.case_studies
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- RLS
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Public can read published case studies
CREATE POLICY "Anyone can read published case studies"
  ON public.case_studies FOR SELECT
  USING (is_published = true);

-- Authors can read their own (including drafts)
CREATE POLICY "Authors can read own case studies"
  ON public.case_studies FOR SELECT
  USING (author_id = auth.uid());

-- Content roles can insert own case studies
CREATE POLICY "Content admins can insert own case studies"
  ON public.case_studies FOR INSERT
  WITH CHECK (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin')
  );

-- Content roles can update own case studies
CREATE POLICY "Content admins can update own case studies"
  ON public.case_studies FOR UPDATE
  USING (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin')
  );

-- Content roles can delete own case studies
CREATE POLICY "Content admins can delete own case studies"
  ON public.case_studies FOR DELETE
  USING (
    author_id = auth.uid()
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin')
  );

-- Storage bucket for case study images
INSERT INTO storage.buckets (id, name, public)
VALUES ('case-study-images', 'case-study-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS policies for case-study-images
CREATE POLICY "Public can read case study images" ON storage.objects
  FOR SELECT USING (bucket_id = 'case-study-images');

CREATE POLICY "Content admins can upload case study images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'case-study-images'
    AND auth.role() = 'authenticated'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );

CREATE POLICY "Content admins can update case study images" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'case-study-images'
    AND auth.role() = 'authenticated'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );

CREATE POLICY "Content admins can delete case study images" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'case-study-images'
    AND auth.role() = 'authenticated'
    AND (auth.jwt() -> 'user_metadata' ->> 'role') IN ('blogger', 'content_admin', 'admin')
  );
