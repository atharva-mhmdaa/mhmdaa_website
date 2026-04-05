'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
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

export default function NewCaseStudy() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState('');

  const [kind, setKind] = useState<'provider' | 'payor'>('provider');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [challenge, setChallenge] = useState('');
  const [solution, setSolution] = useState('');
  const [results, setResults] = useState('');
  const [metrics, setMetrics] = useState<Metric[]>([{ value: '', label: '' }]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [payorRepresentation, setPayorRepresentation] = useState('');
  const [payorScope, setPayorScope] = useState('');
  const [payorCaseRef, setPayorCaseRef] = useState('');
  const [payorCounsel, setPayorCounsel] = useState('');
  const [payorDisputeType, setPayorDisputeType] = useState('');

  const imageRef = useRef<HTMLInputElement>(null);

  function handleImageSelect(file: File) {
    if (!file.type.startsWith('image/')) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
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

  async function handleSubmit(publish: boolean) {
    if (!title.trim()) { setError('Title is required.'); return; }
    if (kind === 'provider' && !challenge.trim() && !solution.trim()) {
      setError('Please fill in at least the Challenge or Solution section.'); return;
    }
    if (kind === 'payor' && !payorScope.trim()) {
      setError('Please fill in the Scope of Work.'); return;
    }

    setSaving(true);
    setError('');

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setError('Not authenticated. Please sign in again.');
      setSaving(false);
      return;
    }

    let coverImageUrl: string | null = null;
    if (imageFile) {
      setUploadingImage(true);
      const ext = imageFile.name.split('.').pop() || 'jpg';
      const safeName = `${Date.now()}-cover.${ext}`;
      const { data: imgData, error: imgError } = await supabase.storage
        .from('case-study-images')
        .upload(safeName, imageFile, { contentType: imageFile.type, upsert: false });
      setUploadingImage(false);

      if (imgError) {
        setError(`Image upload failed: ${imgError.message}`);
        setSaving(false);
        return;
      }
      const { data: imgUrl } = supabase.storage.from('case-study-images').getPublicUrl(imgData.path);
      coverImageUrl = imgUrl.publicUrl;
    }

    const slug = kind === 'payor'
      ? `payor-${slugify(title, { lower: true, strict: true })}`
      : slugify(title, { lower: true, strict: true });
    const cleanMetrics = metrics.filter((m) => m.value.trim() && m.label.trim());

    const row: Record<string, unknown> = {
      author_id: user.id,
      kind,
      title: title.trim(),
      slug,
      subtitle: subtitle.trim() || null,
      metrics: cleanMetrics.length > 0 ? cleanMetrics : [],
      cover_image_url: coverImageUrl,
      is_published: publish,
      published_at: publish ? new Date().toISOString() : null,
    };

    if (kind === 'provider') {
      row.description = description.trim() || null;
      row.region = region || null;
      row.service_type = serviceType || null;
      row.challenge = challenge || null;
      row.solution = solution || null;
      row.results = results || null;
    } else {
      row.payor_dispute_type = payorDisputeType || null;
      row.payor_representation = payorRepresentation.trim() || null;
      row.payor_scope = payorScope || null;
      row.payor_case_ref = payorCaseRef.trim() || null;
      row.payor_counsel = payorCounsel.trim() || null;
    }

    const { error: insertError } = await supabase.from('case_studies').insert(row);

    if (insertError) {
      setError(insertError.message);
      setSaving(false);
      return;
    }

    router.push('/content/case-studies');
    router.refresh();
  }

  const isBusy = saving || uploadingImage;
  const busyLabel = uploadingImage ? 'Uploading image…' : 'Saving…';

  return (
    <>
      <Link
        href="/content/case-studies"
        style={{ color: '#2A3F7A', fontSize: '.92rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}
      >
        ← Back to Case Studies
      </Link>

      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#2A3F7A', marginBottom: '20px' }}>
        New Case Study
      </h1>

      {/* Kind selector */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <button
          type="button"
          onClick={() => setKind('provider')}
          style={{
            padding: '10px 24px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '.92rem',
            fontFamily: 'inherit',
            cursor: 'pointer',
            border: kind === 'provider' ? '2px solid #2A3F7A' : '1.5px solid #e2e8f0',
            background: kind === 'provider' ? 'rgba(42,63,122,.07)' : '#fff',
            color: kind === 'provider' ? '#2A3F7A' : '#5A6E8A',
          }}
        >
          Provider Case Study
        </button>
        <button
          type="button"
          onClick={() => setKind('payor')}
          style={{
            padding: '10px 24px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '.92rem',
            fontFamily: 'inherit',
            cursor: 'pointer',
            border: kind === 'payor' ? '2px solid #0284c7' : '1.5px solid #e2e8f0',
            background: kind === 'payor' ? 'rgba(2,132,199,.07)' : '#fff',
            color: kind === 'payor' ? '#0284c7' : '#5A6E8A',
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
          <label htmlFor="cs-title">{kind === 'payor' ? 'Case Title *' : 'Hospital / Organization Name *'}</label>
          <input id="cs-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            placeholder={kind === 'payor' ? 'e.g. EMTALA Medical Necessity & Post-Stabilization Admissions' : 'e.g. Faith-Based Non-Profit Community Hospital'} />
          <span className="fg-hint">{kind === 'payor' ? 'Shown as the headline on the payor card and detail page.' : 'The main heading shown on the card and detail page.'}</span>
        </div>

        {/* Subtitle */}
        <div className="fg" style={{ marginBottom: '16px' }}>
          <label htmlFor="cs-subtitle">{kind === 'payor' ? 'Tagline (optional)' : 'Engagement Tagline'}</label>
          <input id="cs-subtitle" type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)}
            placeholder={kind === 'payor' ? 'e.g. Independent Review Organization Physician UM Leadership' : 'e.g. LOS Reduction & Transfer Capacity Optimization'} />
          <span className="fg-hint">{kind === 'payor' ? 'Optional subtitle below the title on the card.' : 'A short tagline describing the type of engagement.'}</span>
        </div>

        {/* ── Provider-specific fields ── */}
        {kind === 'provider' && (
          <>
            <div className="fg" style={{ marginBottom: '16px' }}>
              <label htmlFor="cs-desc">Description (optional)</label>
              <input id="cs-desc" type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. ~278-Bed Integrated Community Hospital · Regional Care Network" />
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
              <label>The Challenge *</label>
              <span className="fg-hint">Describe the hospital&apos;s key challenges. Use bold/italic for emphasis.</span>
              <RichTextEditor content={challenge} onChange={setChallenge} placeholder="Describe the challenge the hospital was facing…" />
            </div>

            <div className="fg" style={{ marginBottom: '16px' }}>
              <label>The Solution *</label>
              <span className="fg-hint">Explain MHMDAA&apos;s approach and solution.</span>
              <RichTextEditor content={solution} onChange={setSolution} placeholder="Describe the solution implemented…" />
            </div>

            <div className="fg" style={{ marginBottom: '16px' }}>
              <label>The Results</label>
              <span className="fg-hint">Summarize measurable outcomes and impact.</span>
              <RichTextEditor content={results} onChange={setResults} placeholder="Describe the results and outcomes…" />
            </div>
          </>
        )}

        {/* ── Payor-specific fields ── */}
        {kind === 'payor' && (
          <>
            <div className="fg" style={{ marginBottom: '16px' }}>
              <label htmlFor="cs-pdtype">Dispute Type</label>
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
              <label>Scope of Work *</label>
              <span className="fg-hint">Describe the expert engagement. Use bold/italic as needed.</span>
              <RichTextEditor content={payorScope} onChange={setPayorScope} placeholder="Describe scope of expert engagement…" />
            </div>
            <div className="fg" style={{ marginBottom: '16px' }}>
              <label htmlFor="cs-pref">Case Reference</label>
              <input id="cs-pref" type="text" value={payorCaseRef} onChange={(e) => setPayorCaseRef(e.target.value)}
                placeholder="e.g. AAA Coordinated Arbitration Proceeding — California Medical Necessity Review" />
            </div>
            <div className="fg" style={{ marginBottom: '16px' }}>
              <label htmlFor="cs-pcounsel">Legal Counsel</label>
              <input id="cs-pcounsel" type="text" value={payorCounsel} onChange={(e) => setPayorCounsel(e.target.value)}
                placeholder="e.g. National Healthcare Law Group" />
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
          <span className="fg-hint">A header image for the case study card.</span>

          {imagePreview && (
            <div style={{ position: 'relative', marginTop: 8, marginBottom: 8, borderRadius: 10, overflow: 'hidden', border: '1px solid #e2e8f0', maxHeight: 180 }}>
              <Image src={imagePreview} alt="Cover preview" width={800} height={180}
                style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
              <button type="button" onClick={() => { setImageFile(null); setImagePreview(null); if (imageRef.current) imageRef.current.value = ''; }}
                style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,.55)', border: 'none', color: '#fff', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                {imageFile ? imageFile.name : 'Click to upload or drag & drop'}
              </div>
              <div style={{ fontSize: '.82rem', color: '#94a3b8', marginTop: 2 }}>
                {imageFile ? `${(imageFile.size / 1024).toFixed(0)} KB — click to replace` : 'JPG, PNG, WebP'}
              </div>
            </div>
          </div>
          <input ref={imageRef} type="file" accept="image/*" style={{ display: 'none' }}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageSelect(f); }} />
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <button type="button" className="btn-o" onClick={() => handleSubmit(false)} disabled={isBusy}>Save as Draft</button>
          <button type="button" className="btn-p" onClick={() => handleSubmit(true)} disabled={isBusy}>
            {isBusy ? busyLabel : 'Publish Now'}
          </button>
        </div>
      </div>
    </>
  );
}
