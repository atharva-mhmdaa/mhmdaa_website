'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import slugify from 'slugify';
import { createClient } from '@/lib/supabase/client';
import RichTextEditor from '@/components/editor/RichTextEditor';

export default function NewJobPosting() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [employmentType, setEmploymentType] = useState('Full-time');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');

  async function handleSubmit(publish: boolean) {
    if (!title.trim()) {
      setError('Title is required.');
      return;
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

    const slug = slugify(title, { lower: true, strict: true });

    const { error: insertError } = await supabase.from('job_postings').insert({
      author_id: user.id,
      title: title.trim(),
      slug,
      department: department.trim() || null,
      location: location.trim() || null,
      employment_type: employmentType,
      description,
      requirements,
      is_published: publish,
      published_at: publish ? new Date().toISOString() : null,
    });

    if (insertError) {
      setError(insertError.message);
      setSaving(false);
      return;
    }

    router.push('/jobs/dashboard');
    router.refresh();
  }

  return (
    <>
      <Link
        href="/jobs/dashboard"
        style={{
          color: '#2A3F7A',
          fontSize: '.92rem',
          fontWeight: 600,
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '20px',
        }}
      >
        ← Back to Dashboard
      </Link>

      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#2A3F7A',
          marginBottom: '28px',
        }}
      >
        New Job Posting
      </h1>

      {error && (
        <div
          style={{
            background: 'rgba(200,16,46,.08)',
            border: '1px solid rgba(200,16,46,.2)',
            color: '#C8102E',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '.9rem',
            marginBottom: '18px',
          }}
        >
          {error}
        </div>
      )}

      <div className="dash-card">
        <div className="form-row" style={{ marginBottom: '16px' }}>
          <div className="fg">
            <label htmlFor="title">Job Title *</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Clinical Advocacy Reviewing Physician"
            />
            <span className="fg-hint">This becomes the headline on the public careers page.</span>
          </div>
          <div className="fg">
            <label htmlFor="department">Department</label>
            <input
              id="department"
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="e.g. Clinical Operations"
            />
          </div>
        </div>

        <div className="form-row" style={{ marginBottom: '16px' }}>
          <div className="fg">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Remote / National"
            />
          </div>
          <div className="fg">
            <label htmlFor="type">Employment Type</label>
            <select
              id="type"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Flexible / Per-Case</option>
              <option>Per Diem</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        <div className="fg" style={{ marginBottom: '16px' }}>
          <label>Job Description</label>
          <span className="fg-hint">Describe the role, responsibilities, and what the candidate will do. Use bold, headings, and lists for clarity.</span>
          <RichTextEditor
            content={description}
            onChange={setDescription}
            placeholder="Describe the primary purpose, day-to-day responsibilities, and impact of this role..."
          />
        </div>

        <div className="fg" style={{ marginBottom: '24px' }}>
          <label>Requirements &amp; Qualifications</label>
          <span className="fg-hint">List certifications, experience, and skills needed. Bullet points work well here.</span>
          <RichTextEditor
            content={requirements}
            onChange={setRequirements}
            placeholder="e.g. Board certification in a medical specialty, 3+ years clinical experience..."
          />
        </div>

        <p style={{ fontSize: '.88rem', color: '#64748b', marginBottom: '20px', borderLeft: '3px solid #e2e8f0', paddingLeft: '14px' }}>
          Published postings include an application form where candidates can apply directly on the careers page.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <button
            type="button"
            className="btn-o"
            onClick={() => handleSubmit(false)}
            disabled={saving}
          >
            Save as Draft
          </button>
          <button
            type="button"
            className="btn-p"
            onClick={() => handleSubmit(true)}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Publish Now'}
          </button>
        </div>
      </div>
    </>
  );
}
