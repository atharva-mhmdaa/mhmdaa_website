'use client';

import { useRef, useState } from 'react';

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York','North Carolina',
  'North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island',
  'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
  'District of Columbia',
];

const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_MB = 5;

interface Props {
  jobId: string;
  jobTitle: string;
}

export default function JobApplicationForm({ jobId, jobTitle }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    workAuthorized: '',
    visaSponsorship: '',
    veteranStatus: 'prefer_not_to_say',
    linkedinUrl: '',
    earliestStartDate: '',
    coverLetter: '',
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState(false);

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
    };
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setCvError('');
    if (!file) { setCvFile(null); return; }
    if (!ALLOWED_TYPES.includes(file.type)) {
      setCvError('Only PDF or Word documents (.pdf, .doc, .docx) are accepted.');
      setCvFile(null);
      e.target.value = '';
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      setCvError(`File must be ${MAX_MB} MB or smaller.`);
      setCvFile(null);
      e.target.value = '';
      return;
    }
    setCvFile(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError('');

    if (!cvFile) { setCvError('Please upload your CV/Resume.'); return; }

    const form = new FormData();
    form.append('jobPostingId', jobId);
    form.append('firstName', fields.firstName);
    form.append('lastName', fields.lastName);
    form.append('email', fields.email);
    form.append('phone', fields.phone);
    form.append('address', fields.address);
    form.append('city', fields.city);
    form.append('state', fields.state);
    form.append('zipCode', fields.zipCode);
    form.append('workAuthorized', fields.workAuthorized);
    form.append('visaSponsorship', fields.visaSponsorship);
    form.append('veteranStatus', fields.veteranStatus);
    form.append('linkedinUrl', fields.linkedinUrl);
    form.append('earliestStartDate', fields.earliestStartDate);
    form.append('coverLetter', fields.coverLetter);
    form.append('cv', cvFile);

    setSubmitting(true);
    try {
      const res = await fetch('/api/jobs/apply', { method: 'POST', body: form });
      const data = await res.json();
      if (!res.ok) {
        setFormError(data.error ?? 'Something went wrong. Please try again.');
      } else {
        setSuccess(true);
        window.scrollTo({ top: document.getElementById('apply-form')?.offsetTop ?? 0, behavior: 'smooth' });
      }
    } catch {
      setFormError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="jd-apply-form" id="apply-form">
        <div className="jaf-success">
          <div className="jaf-success__icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="jaf-success__heading">Application Submitted!</h3>
          <p className="jaf-success__text">
            Thank you for applying for the <strong>{jobTitle}</strong> position. We&rsquo;ve received your application and will be in touch if your profile is a match.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="jd-apply-form" id="apply-form">
      <div className="jaf-header">
        <div className="jaf-label">Join Our Team</div>
        <h2 className="jaf-heading">Apply for {jobTitle}</h2>
        <p className="jaf-sub">Fill out the form below. Fields marked with * are required.</p>
      </div>

      {formError && (
        <div className="jaf-error-banner">{formError}</div>
      )}

      <form onSubmit={handleSubmit} noValidate>

        {/* ── Personal Information ── */}
        <div className="jaf-section-title">Personal Information</div>
        <div className="jaf-grid-2">
          <div className="jaf-field">
            <label htmlFor="jaf-firstName">First Name *</label>
            <input id="jaf-firstName" type="text" required value={fields.firstName} onChange={set('firstName')} autoComplete="given-name" />
          </div>
          <div className="jaf-field">
            <label htmlFor="jaf-lastName">Last Name *</label>
            <input id="jaf-lastName" type="text" required value={fields.lastName} onChange={set('lastName')} autoComplete="family-name" />
          </div>
          <div className="jaf-field">
            <label htmlFor="jaf-email">Email Address *</label>
            <input id="jaf-email" type="email" required value={fields.email} onChange={set('email')} autoComplete="email" />
          </div>
          <div className="jaf-field">
            <label htmlFor="jaf-phone">Phone Number *</label>
            <input id="jaf-phone" type="tel" required value={fields.phone} onChange={set('phone')} autoComplete="tel" placeholder="e.g. (555) 555-5555" />
          </div>
        </div>

        {/* ── Location ── */}
        <div className="jaf-section-title">Location</div>
        <div className="jaf-field">
          <label htmlFor="jaf-address">Street Address</label>
          <input id="jaf-address" type="text" value={fields.address} onChange={set('address')} autoComplete="street-address" />
        </div>
        <div className="jaf-grid-3">
          <div className="jaf-field">
            <label htmlFor="jaf-city">City *</label>
            <input id="jaf-city" type="text" required value={fields.city} onChange={set('city')} autoComplete="address-level2" />
          </div>
          <div className="jaf-field">
            <label htmlFor="jaf-state">State *</label>
            <select id="jaf-state" required value={fields.state} onChange={set('state')}>
              <option value="">Select state…</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="jaf-field">
            <label htmlFor="jaf-zip">ZIP Code *</label>
            <input id="jaf-zip" type="text" required value={fields.zipCode} onChange={set('zipCode')} autoComplete="postal-code" maxLength={10} placeholder="e.g. 90210" />
          </div>
        </div>

        {/* ── US Work Eligibility ── */}
        <div className="jaf-section-title">US Work Eligibility</div>
        <div className="jaf-field">
          <label>Are you legally authorized to work in the United States? *</label>
          <div className="jaf-radio-group">
            <label className="jaf-radio">
              <input type="radio" name="workAuthorized" value="yes" required checked={fields.workAuthorized === 'yes'} onChange={set('workAuthorized')} />
              Yes
            </label>
            <label className="jaf-radio">
              <input type="radio" name="workAuthorized" value="no" checked={fields.workAuthorized === 'no'} onChange={set('workAuthorized')} />
              No
            </label>
          </div>
        </div>
        <div className="jaf-field">
          <label>Will you now or in the future require employer sponsorship for a work visa? *</label>
          <div className="jaf-radio-group">
            <label className="jaf-radio">
              <input type="radio" name="visaSponsorship" value="yes" required checked={fields.visaSponsorship === 'yes'} onChange={set('visaSponsorship')} />
              Yes
            </label>
            <label className="jaf-radio">
              <input type="radio" name="visaSponsorship" value="no" checked={fields.visaSponsorship === 'no'} onChange={set('visaSponsorship')} />
              No
            </label>
          </div>
        </div>
        <div className="jaf-field">
          <label htmlFor="jaf-veteran">Veteran Status (voluntary)</label>
          <select id="jaf-veteran" value={fields.veteranStatus} onChange={set('veteranStatus')}>
            <option value="prefer_not_to_say">Prefer not to say</option>
            <option value="not_a_veteran">Not a veteran</option>
            <option value="veteran">Veteran</option>
            <option value="active_duty">Active duty</option>
          </select>
        </div>

        {/* ── Professional ── */}
        <div className="jaf-section-title">Professional</div>
        <div className="jaf-grid-2">
          <div className="jaf-field">
            <label htmlFor="jaf-linkedin">LinkedIn Profile URL</label>
            <input id="jaf-linkedin" type="url" value={fields.linkedinUrl} onChange={set('linkedinUrl')} placeholder="https://linkedin.com/in/yourname" />
          </div>
          <div className="jaf-field">
            <label htmlFor="jaf-startdate">Earliest Available Start Date</label>
            <input id="jaf-startdate" type="date" value={fields.earliestStartDate} onChange={set('earliestStartDate')} />
          </div>
        </div>

        {/* ── CV Upload ── */}
        <div className="jaf-section-title">CV / Resume *</div>
        <div className="jaf-field">
          <label htmlFor="jaf-cv" className="jaf-file-label">
            <div className="jaf-file-box" onClick={() => fileInputRef.current?.click()}>
              {cvFile ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                  <span className="jaf-file-name">{cvFile.name}</span>
                  <button type="button" className="jaf-file-clear" onClick={(e) => { e.stopPropagation(); setCvFile(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}>Remove</button>
                </>
              ) : (
                <>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  <span>Click to upload your CV / Resume</span>
                  <span className="jaf-file-hint">PDF, DOC, or DOCX · Max 5 MB</span>
                </>
              )}
            </div>
          </label>
          <input ref={fileInputRef} id="jaf-cv" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleFileChange} style={{ display: 'none' }} />
          {cvError && <span className="jaf-field-error">{cvError}</span>}
        </div>

        {/* ── Cover Letter ── */}
        <div className="jaf-section-title">Cover Letter <span className="jaf-optional">(optional)</span></div>
        <div className="jaf-field">
          <label htmlFor="jaf-cover">Tell us why you&rsquo;re a great fit for this role</label>
          <textarea id="jaf-cover" rows={7} value={fields.coverLetter} onChange={set('coverLetter')} placeholder="Share your motivation, relevant experience, and what you'd bring to the team…" />
        </div>

        <div className="jaf-submit-row">
          <button type="submit" className="btn-p jaf-submit-btn" disabled={submitting}>
            {submitting ? (
              <>
                <span className="jaf-spinner" />
                Submitting…
              </>
            ) : (
              'Submit Application →'
            )}
          </button>
          <p className="jaf-privacy-note">
            Your information is kept private and used only for this application.
          </p>
        </div>
      </form>
    </div>
  );
}
