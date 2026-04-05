-- Add vertical focal-point position for cover images (0–100, default 50 = center)
ALTER TABLE blog_posts
  ADD COLUMN IF NOT EXISTS cover_image_position smallint DEFAULT 50;
