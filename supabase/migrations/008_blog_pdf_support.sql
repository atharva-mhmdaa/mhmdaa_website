-- Add PDF URL and tags support to blog_posts
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS pdf_url TEXT;
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS tags TEXT[];
