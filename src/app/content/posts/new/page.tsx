'use client';

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import slugify from 'slugify';
import { createClient } from '@/lib/supabase/client';

const HTML_MAX_BYTES = 3 * 1024 * 1024; // 3 MB hard limit

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function NewBlogPost() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [uploadingHtml, setUploadingHtml] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState(50);
  const [isDraggingPosition, setIsDraggingPosition] = useState(false);
  const [htmlFile, setHtmlFile] = useState<File | null>(null);
  const [htmlSizeError, setHtmlSizeError] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const htmlRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  function handleImageSelect(file: File) {
    if (!file.type.startsWith('image/')) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  function handleHtmlSelect(file: File) {
    setHtmlSizeError('');
    const isHtml =
      file.type === 'text/html' ||
      file.name.toLowerCase().endsWith('.html') ||
      file.name.toLowerCase().endsWith('.htm');
    if (!isHtml) {
      setHtmlSizeError('Please choose an HTML file (.html or .htm).');
      return;
    }
    if (file.size > HTML_MAX_BYTES) {
      setHtmlSizeError(
        `This file is ${formatBytes(file.size)}, which is over the 3 MB limit. ` +
        `Please reduce the file size by hosting images online instead of embedding them directly.`
      );
      return;
    }
    setHtmlFile(file);
  }

  function addTag(raw: string) {
    const t = raw.trim().replace(/,$/, '').trim();
    if (t && !tags.includes(t)) setTags((prev) => [...prev, t]);
    setTagInput('');
  }

  function handleTagKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(tagInput);
    } else if (e.key === 'Backspace' && tagInput === '' && tags.length > 0) {
      setTags((prev) => prev.slice(0, -1));
    }
  }

  function removeTag(t: string) {
    setTags((prev) => prev.filter((x) => x !== t));
  }

  const handlePositionDrag = useCallback((clientY: number) => {
    const el = previewContainerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
    setImagePosition(Math.round(pct));
  }, []);

  useEffect(() => {
    if (!isDraggingPosition) return;
    const onMove = (e: MouseEvent) => { e.preventDefault(); handlePositionDrag(e.clientY); };
    const onTouchMove = (e: TouchEvent) => { handlePositionDrag(e.touches[0].clientY); };
    const onUp = () => setIsDraggingPosition(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [isDraggingPosition, handlePositionDrag]);

  async function handleSubmit(publish: boolean) {
    if (!title.trim()) { setError('Please enter a title for your post.'); return; }
    if (!htmlFile) { setError('Please upload an HTML file before saving.'); return; }
    if (htmlSizeError) { setError(htmlSizeError); return; }

    setSaving(true);
    setError('');

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setError('You are not signed in. Please sign in and try again.');
      setSaving(false);
      return;
    }

    // Upload cover image if selected
    let coverImageUrl: string | null = null;
    if (imageFile) {
      setUploadingImage(true);
      const ext = imageFile.name.split('.').pop() || 'jpg';
      const safeName = `${Date.now()}-cover.${ext}`;
      const { data: imgData, error: imgError } = await supabase.storage
        .from('blog-images')
        .upload(safeName, imageFile, { contentType: imageFile.type, upsert: false });
      setUploadingImage(false);

      if (imgError) {
        setError(`Cover image upload failed: ${imgError.message}. Please try again.`);
        setSaving(false);
        return;
      }
      const { data: imgUrl } = supabase.storage.from('blog-images').getPublicUrl(imgData.path);
      coverImageUrl = imgUrl.publicUrl;
    }

    // Upload HTML file
    setUploadingHtml(true);
    const safeHtmlName = `${Date.now()}-${htmlFile.name.replace(/\s+/g, '-')}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('blog-html')
      .upload(safeHtmlName, htmlFile, { contentType: 'text/html', upsert: false });
    setUploadingHtml(false);

    if (uploadError) {
      setError(`HTML file upload failed: ${uploadError.message}. Please try again.`);
      setSaving(false);
      return;
    }

    const { data: urlData } = supabase.storage.from('blog-html').getPublicUrl(uploadData.path);
    const slug = slugify(title, { lower: true, strict: true });

    const { error: insertError } = await supabase.from('blog_posts').insert({
      author_id: user.id,
      title: title.trim(),
      slug,
      excerpt: excerpt.trim() || null,
      cover_image_url: coverImageUrl,
      cover_image_position: imagePosition,
      html_url: urlData.publicUrl,
      tags: tags.length > 0 ? tags : null,
      content: null,
      is_published: publish,
      published_at: publish ? new Date().toISOString() : null,
    });

    if (insertError) {
      setError(insertError.message);
      setSaving(false);
      return;
    }

    router.push('/content/dashboard');
    router.refresh();
  }

  const isBusy = saving || uploadingHtml || uploadingImage;
  const busyLabel = uploadingImage ? 'Uploading cover image…' : uploadingHtml ? 'Uploading HTML file…' : 'Saving…';

  return (
    <>
      <Link href="/content/dashboard"
        style={{ color: '#2A3F7A', fontSize: '.92rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
        ← Back to Dashboard
      </Link>

      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#2A3F7A', marginBottom: '8px' }}>
        New Blog Post
      </h1>
      <p style={{ fontSize: '.9rem', color: '#64748b', marginBottom: '28px', lineHeight: 1.6 }}>
        Fill in the details below and upload your HTML page. Once published, a card will
        automatically appear on the blog and visitors will be taken to your custom page.
      </p>

      {error && (
        <div style={{ background: 'rgba(200,16,46,.08)', border: '1px solid rgba(200,16,46,.2)', color: '#C8102E', padding: '12px 16px', borderRadius: '8px', fontSize: '.9rem', marginBottom: '18px', lineHeight: 1.55 }}>
          {error}
        </div>
      )}

      <div className="dash-card">

        {/* Title */}
        <div className="fg" style={{ marginBottom: '16px' }}>
          <label htmlFor="title">Post Title <span style={{ color: '#C8102E' }}>*</span></label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Denials Management Trends — 2026 Overview" />
          <span className="fg-hint">
            This becomes the headline on the blog listing card and is used to create the page address (URL).
            Choose something clear and descriptive.
          </span>
        </div>

        {/* Excerpt */}
        <div className="fg" style={{ marginBottom: '16px' }}>
          <label htmlFor="excerpt">Short Summary</label>
          <textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)}
            placeholder="A 1–2 sentence description that readers see on the card before clicking through…" rows={3} />
          <span className="fg-hint">Keep it short and engaging — this is what convinces someone to click and read.</span>
        </div>

        {/* Tags */}
        <div className="fg" style={{ marginBottom: '16px' }}>
          <label>Topic Tags</label>
          <span className="fg-hint">
            Type a topic and press <strong>Enter</strong> to add it. Click the × on any tag to remove it.
            Example: <em>Revenue Cycle</em>, <em>Denials</em>, <em>Compliance</em>
          </span>
          <div className="tag-pill-input">
            {tags.map((t) => (
              <span key={t} className="tag-pill">
                {t}
                <button type="button" onClick={() => removeTag(t)} className="tag-pill__remove" aria-label={`Remove ${t}`}>×</button>
              </span>
            ))}
            <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown} onBlur={() => tagInput.trim() && addTag(tagInput)}
              placeholder={tags.length === 0 ? 'e.g. Revenue Cycle, Denials Management…' : 'Add another tag…'}
              className="tag-pill-input__field" />
          </div>
        </div>

        {/* Cover Image Upload */}
        <div className="fg" style={{ marginBottom: '16px' }}>
          <label>Card Preview Image</label>
          <span className="fg-hint">
            This image appears on the blog listing card. If you skip it, a stylised
            colour background will be used instead. Accepted formats: JPG, PNG, WebP.
          </span>

          {imagePreview && (
            <div
              ref={previewContainerRef}
              onMouseDown={(e) => { e.preventDefault(); setIsDraggingPosition(true); handlePositionDrag(e.clientY); }}
              onTouchStart={(e) => { setIsDraggingPosition(true); handlePositionDrag(e.touches[0].clientY); }}
              style={{ position: 'relative', marginTop: 8, marginBottom: 8, borderRadius: 10, overflow: 'hidden', border: '1px solid #e2e8f0', height: 180, cursor: 'ns-resize', userSelect: 'none' }}
            >
              <Image src={imagePreview} alt="Cover preview" width={800} height={400}
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: `center ${imagePosition}%`, display: 'block', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: isDraggingPosition ? 1 : 0, transition: 'opacity .15s', background: 'rgba(0,0,0,.25)' }}>
                <span style={{ background: 'rgba(0,0,0,.7)', color: '#fff', fontSize: '.78rem', fontWeight: 600, padding: '4px 12px', borderRadius: 6 }}>
                  {imagePosition}%
                </span>
              </div>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '6px 10px', background: 'linear-gradient(transparent, rgba(0,0,0,.5))', display: 'flex', alignItems: 'center', justifyContent: 'space-between', pointerEvents: 'none' }}>
                <span style={{ color: 'rgba(255,255,255,.85)', fontSize: '.75rem', fontWeight: 500 }}>Drag up/down to adjust which part of the image is shown</span>
              </div>
              <button type="button" onClick={(e) => { e.stopPropagation(); setImageFile(null); setImagePreview(null); setImagePosition(50); if (imageRef.current) imageRef.current.value = ''; }}
                style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,.55)', border: 'none', color: '#fff', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                ×
              </button>
            </div>
          )}

          <div className="pdf-drop-zone" onClick={() => imageRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) handleImageSelect(f); }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={imageFile ? '#2A3F7A' : '#94a3b8'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <div>
              <div style={{ fontWeight: 600, color: '#1B2A5B', fontSize: '.95rem' }}>
                {imageFile ? imageFile.name : 'Click to choose an image, or drag & drop it here'}
              </div>
              <div style={{ fontSize: '.82rem', color: '#94a3b8', marginTop: 2 }}>
                {imageFile ? `${formatBytes(imageFile.size)} — click to replace` : 'JPG, PNG, or WebP'}
              </div>
            </div>
          </div>
          <input ref={imageRef} type="file" accept="image/*" style={{ display: 'none' }}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageSelect(f); }} />
        </div>

        {/* HTML File Upload */}
        <div className="fg" style={{ marginBottom: '24px' }}>
          <label>
            HTML Page File <span style={{ color: '#C8102E' }}>*</span>
          </label>
          <span className="fg-hint">
            Upload the HTML file for your blog post. This is the page visitors will see when they click the card.
            <strong> Maximum file size: 3 MB.</strong>{' '}
            If your file is too large, move images to an online host (e.g. Google Drive, Imgur) and link to them instead of embedding them directly.
          </span>

          {htmlSizeError && (
            <div style={{ background: 'rgba(200,16,46,.07)', border: '1px solid rgba(200,16,46,.2)', color: '#C8102E', padding: '10px 14px', borderRadius: '8px', fontSize: '.86rem', marginTop: 8, lineHeight: 1.55 }}>
              ⚠️ {htmlSizeError}
            </div>
          )}

          <div className="pdf-drop-zone" onClick={() => htmlRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const f = e.dataTransfer.files?.[0];
              if (f) handleHtmlSelect(f);
            }}
            style={{ marginTop: htmlSizeError ? 8 : undefined }}>
            {htmlFile ? (
              <>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
                <div>
                  <div style={{ fontWeight: 600, color: '#1B2A5B', fontSize: '.95rem' }}>{htmlFile.name}</div>
                  <div style={{ fontSize: '.8rem', color: '#94a3b8', marginTop: 2 }}>
                    {formatBytes(htmlFile.size)} of 3 MB limit — click to replace
                  </div>
                </div>
              </>
            ) : (
              <>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <div>
                  <div style={{ fontWeight: 600, color: '#1B2A5B', fontSize: '.95rem' }}>Click to choose your HTML file, or drag & drop it here</div>
                  <div style={{ fontSize: '.82rem', color: '#94a3b8', marginTop: 2 }}>.html files only · Max 3 MB</div>
                </div>
              </>
            )}
          </div>
          <input ref={htmlRef} type="file" accept=".html,.htm,text/html" style={{ display: 'none' }}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleHtmlSelect(f); }} />

          {/* Tips for non-technical users */}
          <div style={{ marginTop: 14, background: '#f0f4ff', border: '1px solid #c7d2fe', borderRadius: 10, padding: '14px 16px' }}>
            <div style={{ fontWeight: 700, color: '#2A3F7A', fontSize: '.85rem', marginBottom: 8 }}>
              ✅ Tips for a successful upload
            </div>
            <ul style={{ margin: 0, padding: '0 0 0 18px', color: '#3D4F63', fontSize: '.83rem', lineHeight: 1.75 }}>
              <li>Open the HTML file in your browser first — if it looks right there, it will look right on the website.</li>
              <li>All styles and fonts must be <strong>inside</strong> the HTML file or loaded from the internet (e.g. Google Fonts links are fine).</li>
              <li>Images must use full web addresses (starting with <code>https://</code>), not file names like <code>photo.jpg</code>.</li>
              <li>Do <strong>not</strong> upload a folder — only the single <code>.html</code> file.</li>
              <li>If your file is over 3 MB, it is likely because images are embedded. Host them online and link to them instead.</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <button type="button" className="btn-o" onClick={() => handleSubmit(false)} disabled={isBusy}>
            {isBusy && !saving ? busyLabel : 'Save as Draft'}
          </button>
          <button type="button" className="btn-p" onClick={() => handleSubmit(true)} disabled={isBusy}>
            {isBusy ? busyLabel : 'Publish Now'}
          </button>
        </div>

        <p style={{ fontSize: '.8rem', color: '#94a3b8', marginTop: 14, textAlign: 'right', lineHeight: 1.5 }}>
          <strong>Draft</strong> — saved but hidden from the public.&nbsp;
          <strong>Publish</strong> — live immediately on the blog.
        </p>
      </div>
    </>
  );
}
