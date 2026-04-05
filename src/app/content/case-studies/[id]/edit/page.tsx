'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import slugify from 'slugify';
import { createClient } from '@/lib/supabase/client';
import RichTextEditor from '@/components/editor/RichTextEditor';

const REGION_OPTIONS = [
  'California',
  'Texas',
  'Florida',
  'Pacific Northwest',
  'Northeast',
  'Midwest',
  'Southeast',
  'Southwest',
  'Regional',
  'National',
];

const SERVICE_TYPE_OPTIONS = [
  { value: 'ed-transformation', label: 'ED Transformation' },
  { value: 'capacity-expansion', label: 'Capacity Expansion' },
  { value: 'operations-redesign', label: 'Operations Redesign' },
  { value: 'los-reduction', label: 'LOS Reduction' },
  { value: 'revenue-cycle', label: 'Revenue Cycle' },
  { value: 'denials-management', label: 'Denials Management' },
  { value: 'other', label: 'Other' },
];

const PAYOR_DISPUTE_OPTIONS = [
  { value: 'payment-dispute', label: 'Payment Dispute' },
  { value: 'medical-necessity', label: 'Medical Necessity' },
  { value: 'utilization-mgmt', label: 'Utilization Management' },
  { value: 'auto-insurance', label: 'Auto Insurance' },
];

interface Metric {
  value: string;
  label: string;
}

export default function EditCaseStudy() {
  const router = useRouter();
  const params = useParams();
  const studyId = params.id as string;

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [challenge, setChallenge] = useState('');
  const [solution, setSolution] = useState('');
  const [results, setResults] = useState('');
  const [metrics, setMetrics] = useState<Metric[]>([{ value: '', label: '' }]);
  const [isPublished, setIsPublished] = useState(false);
  const [studyKind, setStudyKind] = useState<'provider' | 'payor'>('provider');
  const [rowSlug, setRowSlug] = useState('');

  const [payorRepresentation, setPayorRepresentation] = useState('');
  const [payorScope, setPayorScope] = useState('');
  const [payorCaseRef, setPayorCaseRef] = useState('');
  const [payorCounsel, setPayorCounsel] = useState('');
  const [payorDisputeType, setPayorDisputeType] = useState('');

  const [existingCoverUrl, setExistingCoverUrl] = useState<string | null>(null);
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const imageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data, error: fetchError } = await supabase
        .from('case_studies')
        .select('*')
        .eq('id', studyId)
        .single();

      if (fetchError || !data) {
        setError('Case study not found.');
        setLoading(false);
        return;
      }

      setTitle(data.title);
      setSubtitle(data.subtitle || '');
      setDescription(data.description || '');
      setRegion(data.region || '');
      setServiceType(data.service_type || '');
      setChallenge(data.challenge || '');
      setSolution(data.solution || '');
      setResults(data.results || '');
      setMetrics(
        Array.isArray(data.metrics) && data.metrics.length > 0
          ? data.metrics
          : [{ value: '', label: '' }],
      );
      setIsPublished(data.is_published);
      setExistingCoverUrl(data.cover_image_url || null);
      setStudyKind(data.kind === 'payor' ? 'payor' : 'provider');
      setRowSlug(data.slug || '');
      setPayorRepresentation(data.payor_representation || '');
      setPayorScope(data.payor_scope || '');
      setPayorCaseRef(data.payor_case_ref || '');
      setPayorCounsel(data.payor_counsel || '');
      setPayorDisputeType(data.payor_dispute_type || '');
      setLoading(false);
    }
    load();
  }, [studyId]);

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

  function addMetric() {
    setMetrics((prev) => [...prev, { value: '', label: '' }]);
  }

  function removeMetric(idx: number) {
    setMetrics((prev) => prev.filter((_, i) => i !== idx));
  }

  function updateMetric(idx: number, field: 'value' | 'label', val: string) {
    setMetrics((prev) => prev.map((m, i) => (i === idx ? { ...m, [field]: val } : m)));
  }

  async function handleSave(publish: boolean) {
    if (!title.trim()) { setError('Title is required.'); return; }

    setSaving(true);
    setError('');

    const supabase = createClient();

    let coverImageUrl: string | null = existingCoverUrl;
    if (newImageFile) {
      setUploadingImage(true);
      const ext = newImageFile.name.split('.').pop() || 'jpg';
      const safeName = `${Date.now()}-cover.${ext}`;
      const { data: imgData, error: imgError } = await supabase.storage
        .from('case-study-images')
        .upload(safeName, newImageFile, { contentType: newImageFile.type, upsert: false });
      setUploadingImage(false);

      if (imgError) {
        setError(`Image upload failed: ${imgError.message}`);
        setSaving(false);
        return;
      }
      const { data: imgUrl } = supabase.storage.from('case-study-images').getPublicUrl(imgData.path);
      coverImageUrl = imgUrl.publicUrl;
    }

    const cleanMetrics = metrics.filter((m) => m.value.trim() && m.label.trim());
    const nextSlug =
      studyKind === 'payor'
        ? rowSlug || slugify(title, { lower: true, strict: true })
        : slugify(title, { lower: true, strict: true });

    const baseUpdate = {
      kind: studyKind,
      title: title.trim(),
      slug: nextSlug,
      subtitle: subtitle.trim() || null,
      metrics: cleanMetrics.length > 0 ? cleanMetrics : [],
      cover_image_url: coverImageUrl,
      is_published: publish,
      published_at: publish ? new Date().toISOString() : null,
    };

    const providerUpdate =
      studyKind === 'provider'
        ? {
            ...baseUpdate,
            description: description.trim() || null,
            region: region || null,
            service_type: serviceType || null,
            challenge: challenge || null,
            solution: solution || null,
            results: results || null,
          }
        : {
            ...baseUpdate,
            payor_representation: payorRepresentation.trim() || null,
            payor_scope: payorScope || null,
            payor_case_ref: payorCaseRef.trim() || null,
            payor_counsel: payorCounsel.trim() || null,
            payor_dispute_type: payorDisputeType || null,
          };

    const { error: updateError } = await supabase
      .from('case_studies')
      .update(providerUpdate)
      .eq('id', studyId);

    if (updateError) {
      setError(updateError.message);
      setSaving(false);
      return;
    }

    router.push('/content/case-studies');
    router.refresh();
  }

  async function handleDelete() {
    if (!confirm('Are you sure you want to delete this case study?')) return;
    setDeleting(true);
    const supabase = createClient();
    const { error: deleteError } = await supabase
      .from('case_studies')
      .delete()
      .eq('id', studyId);

    if (deleteError) {
      setError(deleteError.message);
      setDeleting(false);
      return;
    }
    router.push('/content/case-studies');
    router.refresh();
  }

  if (loading) {
    return <div style={{ padding: '48px', textAlign: 'center', color: '#5A6E8A' }}>Loading case study...</div>;
  }

  const isBusy = saving || uploadingImage;
  const busyLabel = uploadingImage ? 'Uploading image…' : 'Saving…';
  const previewSrc = imagePreview ?? existingCoverUrl ?? null;

  return (
    <>
      <Link
        href="/content/case-studies"
        style={{ color: '#2A3F7A', fontSize: '.92rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}
      >
        ← Back to Case Studies
      </Link>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#2A3F7A' }}>
          Edit Case Study
        </h1>
        <button type="button" onClick={handleDelete} disabled={deleting}
          style={{ background: 'none', border: '1px solid rgba(200,16,46,.3)', color: '#C8102E', padding: '8px 18px', borderRadius: '8px', fontSize: '.88rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
          {deleting ? 'Deleting…' : 'Delete'}
        </button>
      </div>

      {/* Kind selector */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <button
          type="button"
          onClick={() => setStudyKind('provider')}
          style={{
            padding: '10px 24px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '.92rem',
            fontFamily: 'inherit',
            cursor: 'pointer',
            border: studyKind === 'provider' ? '2px solid #2A3F7A' : '1.5px solid #e2e8f0',
            background: studyKind === 'provider' ? 'rgba(42,63,122,.07)' : '#fff',
            color: studyKind === 'provider' ? '#2A3F7A' : '#5A6E8A',
          }}
        >
          Provider Case Study
        </button>
        <button
          type="button"
          onClick={() => setStudyKind('payor')}
          style={{
            padding: '10px 24px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '.92rem',
            fontFamily: 'inherit',
            cursor: 'pointer',
            border: studyKind === 'payor' ? '2px solid #0284c7' : '1.5px solid #e2e8f0',
            background: studyKind === 'payor' ? 'rgba(2,132,199,.07)' : '#fff',
            color: studyKind === 'payor' ? '#0284c7' : '#5A6E8A',
          }}
        >
          Payor Case Study
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
          <label htmlFor="cs-title">{studyKind === 'payor' ? 'Case title *' : 'Hospital / Organization Name *'}</label>
          <input id="cs-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <span className="fg-hint">
            {studyKind === 'payor'
              ? 'Shown as the headline on the payor card and detail page.'
              : 'The main heading shown on the card and detail page.'}
          </span>
        </div>

        {studyKind === 'payor' && (
          <div className="fg" style={{ marginBottom: '16px' }}>
            <label htmlFor="cs-slug">URL slug (leave unchanged to keep links working)</label>
            <input
              id="cs-slug"
              type="text"
              value={rowSlug}
              onChange={(e) => setRowSlug(e.target.value)}
              style={{ fontFamily: 'monospace', fontSize: '.9rem' }}
            />
          </div>
        )}

        {/* Subtitle */}
        <div className="fg" style={{ marginBottom: '16px' }}>
          <label htmlFor="cs-subtitle">{studyKind === 'payor' ? 'Tagline (optional)' : 'Engagement Tagline'}</label>
          <input id="cs-subtitle" type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
          <span className="fg-hint">
            {studyKind === 'payor' ? 'Optional subtitle below the title on the card.' : 'A short tagline describing the type of engagement.'}
          </span>
        </div>

        {studyKind === 'provider' && (
          <>
            <div className="fg" style={{ marginBottom: '16px' }}>
              <label htmlFor="cs-desc">Description (optional)</label>
              <input id="cs-desc" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
              <span className="fg-hint">Bed count, hospital type, or other brief descriptor.</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div className="fg">
                <label htmlFor="cs-region">Region</label>
                <select id="cs-region" value={region} onChange={(e) => setRegion(e.target.value)}>
                  <option value="">Select region…</option>
                  {REGION_OPTIONS.map((r) => (
                    <option key={r} value={r.toLowerCase().replace(/\s+/g, '-')}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="fg">
                <label htmlFor="cs-service">Service Type</label>
                <select id="cs-service" value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                  <option value="">Select type…</option>
                  {SERVICE_TYPE_OPTIONS.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="fg" style={{ marginBottom: '16px' }}>
              <label>The Challenge</label>
              <span className="fg-hint">Describe the hospital&apos;s key challenges. Use bold/italic for emphasis.</span>
              <RichTextEditor content={challenge} onChange={setChallenge} placeholder="Describe the challenge…" />
            </div>

            <div className="fg" style={{ marginBottom: '16px' }}>
              <label>The Solution</label>
              <span className="fg-hint">Explain MHMDAA&apos;s approach and solution.</span>
              <RichTextEditor content={solution} onChange={setSolution} placeholder="Describe the solution…" />
            </div>

            <div className="fg" style={{ marginBottom: '16px' }}>
              <label>The Results</label>
              <span className="fg-hint">Summarize measurable outcomes and impact.</span>
              <RichTextEditor content={results} onChange={setResults} placeholder="Describe the results…" />
            </div>
          </>
        )}

        {studyKind === 'payor' && (
          <>
            <div className="fg" style={{ marginBottom: '16px' }}>
              <label htmlFor="cs-pdtype">Dispute type</label>
              <select id="cs-pdtype" value={payorDisputeType} onChange={(e) => setPayorDisputeType(e.target.value)}>
                <option value="">Select type…</option>
                {PAYOR_DISPUTE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className="fg" style={{ marginBottom: '16px' }}>
              <label htmlFor="cs-prep">Representation</label>
              <input id="cs-prep" type="text" value={payorRepresentation} onChange={(e) => setPayorRepresentation(e.target.value)}
                placeholder="e.g. Payor — National Healthcare Law Group" />
            </div>
            <div className="fg" style={{ marginBottom: '16px' }}>
              <label>Scope of work</label>
              <span className="fg-hint">Narrative for the detail page. Use bold/italic as needed.</span>
              <RichTextEditor content={payorScope} onChange={setPayorScope} placeholder="Describe scope of expert engagement…" />
            </div>
            <div className="fg" style={{ marginBottom: '16px' }}>
              <label htmlFor="cs-pref">Case reference</label>
              <input id="cs-pref" type="text" value={payorCaseRef} onChange={(e) => setPayorCaseRef(e.target.value)} />
            </div>
            <div className="fg" style={{ marginBottom: '16px' }}>
              <label htmlFor="cs-pcounsel">Legal counsel</label>
              <input id="cs-pcounsel" type="text" value={payorCounsel} onChange={(e) => setPayorCounsel(e.target.value)} />
            </div>
          </>
        )}

        {/* Key Metrics */}
        <div className="fg" style={{ marginBottom: '16px' }}>
          <label>Key Metrics</label>
          <span className="fg-hint">Add measurable results (e.g. Value: &quot;20%&quot;, Label: &quot;LOS Reduction&quot;).</span>
          {metrics.map((m, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: idx === 0 ? '8px' : '6px' }}>
              <input
                type="text"
                value={m.value}
                onChange={(e) => updateMetric(idx, 'value', e.target.value)}
                placeholder="Value (e.g. 20%)"
                style={{ flex: '0 0 140px' }}
              />
              <input
                type="text"
                value={m.label}
                onChange={(e) => updateMetric(idx, 'label', e.target.value)}
                placeholder="Label (e.g. LOS Reduction)"
                style={{ flex: 1 }}
              />
              {metrics.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeMetric(idx)}
                  style={{ background: 'none', border: '1px solid rgba(200,16,46,.3)', color: '#C8102E', borderRadius: '6px', padding: '6px 10px', cursor: 'pointer', fontSize: '.82rem', fontWeight: 600, fontFamily: 'inherit' }}
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addMetric}
            style={{ marginTop: '10px', background: 'none', border: '1px dashed #cbd5e1', color: '#2A3F7A', borderRadius: '8px', padding: '8px 16px', cursor: 'pointer', fontSize: '.88rem', fontWeight: 600, fontFamily: 'inherit' }}
          >
            + Add Metric
          </button>
        </div>

        {/* Cover Image */}
        <div className="fg" style={{ marginBottom: '24px' }}>
          <label>Cover Image (optional)</label>
          <span className="fg-hint">
            {existingCoverUrl && !newImageFile
              ? 'Current cover image shown below. Click to replace.'
              : 'A header image for the case study card.'}
          </span>

          {previewSrc && (
            <div style={{ position: 'relative', marginTop: 8, marginBottom: 8, borderRadius: 10, overflow: 'hidden', border: '1px solid #e2e8f0', maxHeight: 180 }}>
              <Image src={previewSrc} alt="Cover preview" width={800} height={180}
                style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
              <button type="button" onClick={clearNewImage}
                style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,.55)', border: 'none', color: '#fff', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
