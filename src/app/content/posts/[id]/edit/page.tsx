'use client';

import { useState, useEffect, useRef, useCallback, KeyboardEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import slugify from 'slugify';
import { createClient } from '@/lib/supabase/client';

export default function EditBlogPost() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [uploadingPdf, setUploadingPdf] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');

  const [existingCoverUrl, setExistingCoverUrl] = useState<string | null>(null);
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState(50);
  const [isDraggingPosition, setIsDraggingPosition] = useState(false);

  const [existingPdfUrl, setExistingPdfUrl] = useState<string | null>(null);
  const [existingPdfName, setExistingPdfName] = useState<string>('');
  const [newPdfFile, setNewPdfFile] = useState<File | null>(null);

  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const pdfRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadPost() {
      const supabase = createClient();
      const { data, error: fetchError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (fetchError || !data) {
        setError('Blog post not found.');
        setLoading(false);
        return;
      }

      setTitle(data.title);
      setExcerpt(data.excerpt || '');
      setExistingCoverUrl(data.cover_image_url || null);
      setImagePosition(data.cover_image_position ?? 50);
      setExistingPdfUrl(data.pdf_url || null);
      if (data.pdf_url) {
        const parts = data.pdf_url.split('/');
        setExistingPdfName(decodeURIComponent(parts[parts.length - 1]));
      }
      setTags(data.tags || []);
      setIsPublished(data.is_published);
      setLoading(false);
    }
    loadPost();
  }, [postId]);

  function handleImageSelect(file: File) {
    if (!file.type.startsWith('image/')) return;
    setNewImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  function clearNewImage() {
    setNewImageFile(null);
    setImagePreview(null);
    if (imageRef.current) imageRef.current.value = '';
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

  async function handleSave(publish: boolean) {
    if (!title.trim()) { setError('Title is required.'); return; }
    if (!existingPdfUrl && !newPdfFile) { setError('A PDF file is required.'); return; }

    setSaving(true);
    setError('');

    const supabase = createClient();

    // Upload new cover image if provided
    let coverImageUrl: string | null = existingCoverUrl;
    if (newImageFile) {
      setUploadingImage(true);
      const ext = newImageFile.name.split('.').pop() || 'jpg';
      const safeName = `${Date.now()}-cover.${ext}`;
      const { data: imgData, error: imgError } = await supabase.storage
        .from('blog-images')
        .upload(safeName, newImageFile, { contentType: newImageFile.type, upsert: false });
      setUploadingImage(false);

      if (imgError) {
        setError(`Image upload failed: ${imgError.message}`);
        setSaving(false);
        return;
      }
      const { data: imgUrl } = supabase.storage.from('blog-images').getPublicUrl(imgData.path);
      coverImageUrl = imgUrl.publicUrl;
    }

    // Upload new PDF if provided
    let pdfUrl = existingPdfUrl;
    if (newPdfFile) {
      setUploadingPdf(true);
      const safeName = `${Date.now()}-${newPdfFile.name.replace(/\s+/g, '-')}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('blog-pdfs')
        .upload(safeName, newPdfFile, { contentType: 'application/pdf', upsert: false });
      setUploadingPdf(false);

      if (uploadError) {
        setError(`PDF upload failed: ${uploadError.message}`);
        setSaving(false);
        return;
      }
      const { data: urlData } = supabase.storage.from('blog-pdfs').getPublicUrl(uploadData.path);
      pdfUrl = urlData.publicUrl;
    }

    const slug = slugify(title, { lower: true, strict: true });

    const { error: updateError } = await supabase
      .from('blog_posts')
      .update({
        title: title.trim(),
        slug,
        excerpt: excerpt.trim() || null,
        cover_image_url: coverImageUrl,
        cover_image_position: imagePosition,
        pdf_url: pdfUrl,
        tags: tags.length > 0 ? tags : null,
        is_published: publish,
        published_at: publish ? new Date().toISOString() : null,
      })
      .eq('id', postId);

    if (updateError) {
      setError(updateError.message);
      setSaving(false);
      return;
    }

    router.push('/content/dashboard');
    router.refresh();
  }

  async function handleDelete() {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    setDeleting(true);
    const supabase = createClient();
    const { error: deleteError } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', postId);

    if (deleteError) {
      setError(deleteError.message);
      setDeleting(false);
      return;
    }
    router.push('/content/dashboard');
    router.refresh();
  }

  if (loading) {
    return <div style={{ padding: '48px', textAlign: 'center', color: '#5A6E8A' }}>Loading blog post...</div>;
  }

  const isBusy = saving || uploadingPdf || uploadingImage;
  const busyLabel = uploadingImage ? 'Uploading image…' : uploadingPdf ? 'Uploading PDF…' : 'Saving…';
  const previewSrc = imagePreview ?? existingCoverUrl ?? null;

  return (
    <>
      <Link href="/content/dashboard"
        style={{ color: '#2A3F7A', fontSize: '.92rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
        ← Back to Dashboard
      </Link>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#2A3F7A' }}>
          Edit Blog Post
        </h1>
        <button type="button" onClick={handleDelete} disabled={deleting}
          style={{ background: 'none', border: '1px solid rgba(200,16,46,.3)', color: '#C8102E', padding: '8px 18px', borderRadius: '8px', fontSize: '.88rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
          {deleting ? 'Deleting…' : 'Delete'}
        </button>
      </div>

      {error && (
        <div style={{ background: 'rgba(200,16,46,.08)', border: '1px solid rgba(200,16,46,.2)', color: '#C8102E', padding: '10px 14px', borderRadius: '8px', fontSize: '.9rem', marginBottom: '18px' }}>
          {error}
        </div>
      )}

      <div className="dash-card">

        {/* Title */}
        <div className="fg" style={{ marginBottom: '16px' }}>
          <label htmlFor="title">Post Title *</label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <span className="fg-hint">This is the headline shown on the public blog listing.</span>
        </div>

        {/* Excerpt */}
        <div className="fg" style={{ marginBottom: '16px' }}>
          <label htmlFor="excerpt">Excerpt / Summary</label>
          <textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} />
          <span className="fg-hint">The short description readers see before clicking the card.</span>
        </div>

        {/* Tags */}
        <div className="fg" style={{ marginBottom: '16px' }}>
          <label>Tags</label>
          <span className="fg-hint">Type a tag and press Enter or comma to add. Click × to remove.</span>
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
          <label>Cover / Grid Image</label>
          <span className="fg-hint">
            {existingCoverUrl && !newImageFile
              ? 'Current cover image shown below. Click the drop zone to replace it.'
              : 'Shown as the card preview on the blog listing. Leave blank for a gradient placeholder.'}
          </span>

          {previewSrc && (
            <div
              ref={previewContainerRef}
              onMouseDown={(e) => { e.preventDefault(); setIsDraggingPosition(true); handlePositionDrag(e.clientY); }}
              onTouchStart={(e) => { setIsDraggingPosition(true); handlePositionDrag(e.touches[0].clientY); }}
              style={{ position: 'relative', marginTop: 8, marginBottom: 8, borderRadius: 10, overflow: 'hidden', border: '1px solid #e2e8f0', height: 180, cursor: 'ns-resize', userSelect: 'none' }}
            >
              <Image src={previewSrc} alt="Cover preview" width={800} height={400}
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: `center ${imagePosition}%`, display: 'block', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: isDraggingPosition ? 1 : 0, transition: 'opacity .15s', background: 'rgba(0,0,0,.25)' }}>
                <span style={{ background: 'rgba(0,0,0,.7)', color: '#fff', fontSize: '.78rem', fontWeight: 600, padding: '4px 12px', borderRadius: 6 }}>
                  {imagePosition}%
                </span>
              </div>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '6px 10px', background: 'linear-gradient(transparent, rgba(0,0,0,.5))', display: 'flex', alignItems: 'center', justifyContent: 'space-between', pointerEvents: 'none' }}>
                <span style={{ color: 'rgba(255,255,255,.85)', fontSize: '.75rem', fontWeight: 500 }}>Drag to adjust focal point</span>
              </div>
              <button type="button" onClick={(e) => { e.stopPropagation(); clearNewImage(); }}
                style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,.55)', border: 'none', color: '#fff', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                ×
              </button>
            </div>
          )}

          <div className="pdf-drop-zone" onClick={() => imageRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) handleImageSelect(f); }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={newImageFile || existingCoverUrl ? '#2A3F7A' : '#94a3b8'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <div>
              <div style={{ fontWeight: 600, color: '#1B2A5B', fontSize: '.95rem' }}>
                {newImageFile ? newImageFile.name : existingCoverUrl ? 'Click to replace image' : 'Click to upload or drag & drop'}
              </div>
              <div style={{ fontSize: '.82rem', color: '#94a3b8', marginTop: 2 }}>
                {newImageFile ? `${(newImageFile.size / 1024).toFixed(0)} KB` : 'JPG, PNG, WebP'}
              </div>
            </div>
          </div>
          <input ref={imageRef} type="file" accept="image/*" style={{ display: 'none' }}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageSelect(f); }} />
        </div>

        {/* PDF Upload */}
        <div className="fg" style={{ marginBottom: '24px' }}>
          <label>PDF Report</label>
          <span className="fg-hint">
            {existingPdfUrl ? 'Current PDF shown below. Upload a new file to replace it.' : 'Upload the PDF visitors open when they click the card.'}
          </span>

          {existingPdfUrl && !newPdfFile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#f1f5f9', borderRadius: 8, marginBottom: 10, marginTop: 6 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
              </svg>
              <a href={existingPdfUrl} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '.88rem', color: '#2A3F7A', fontWeight: 600, textDecoration: 'none', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {existingPdfName || 'Current PDF'}
              </a>
              <span style={{ fontSize: '.78rem', color: '#94a3b8' }}>Click below to replace</span>
            </div>
          )}

          <div className="pdf-drop-zone" onClick={() => pdfRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f?.type === 'application/pdf') setNewPdfFile(f); }}>
            {newPdfFile ? (
              <>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                </svg>
                <div>
                  <div style={{ fontWeight: 600, color: '#1B2A5B', fontSize: '.95rem' }}>{newPdfFile.name}</div>
                  <div style={{ fontSize: '.8rem', color: '#94a3b8', marginTop: 2 }}>{(newPdfFile.size / 1024 / 1024).toFixed(2)} MB — click to change</div>
                </div>
              </>
            ) : (
              <>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <div>
                  <div style={{ fontWeight: 600, color: '#1B2A5B', fontSize: '.95rem' }}>
                    {existingPdfUrl ? 'Click to replace PDF' : 'Click to upload or drag & drop'}
                  </div>
                  <div style={{ fontSize: '.82rem', color: '#94a3b8', marginTop: 2 }}>PDF files only</div>
                </div>
              </>
            )}
          </div>
          <input ref={pdfRef} type="file" accept=".pdf,application/pdf" style={{ display: 'none' }}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) setNewPdfFile(f); }} />
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <button type="button" className="btn-o" onClick={() => handleSave(false)} disabled={isBusy}>Save as Draft</button>
          <button type="button" className="btn-p" onClick={() => handleSave(true)} disabled={isBusy}>
            {isBusy ? busyLabel : isPublished ? 'Update & Publish' : 'Publish Now'}
          </button>
        </div>
      </div>
    </>
  );
}
