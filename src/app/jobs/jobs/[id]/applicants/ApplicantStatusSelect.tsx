'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const STATUSES = [
  { value: 'pending', label: 'Pending' },
  { value: 'reviewed', label: 'Reviewed' },
  { value: 'shortlisted', label: 'Shortlisted' },
  { value: 'rejected', label: 'Rejected' },
];

interface Props {
  applicationId: string;
  currentStatus: string;
}

export default function ApplicantStatusSelect({ applicationId, currentStatus }: Props) {
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  async function handleChange(newStatus: string) {
    setStatus(newStatus);
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch(`/api/jobs/apply/${applicationId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setSaved(true);
        router.refresh();
        setTimeout(() => setSaved(false), 2000);
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <select
        value={status}
        onChange={(e) => handleChange(e.target.value)}
        disabled={saving}
        className={`app-status-select app-status-select--${status}`}
      >
        {STATUSES.map((s) => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>
      {saving && <span style={{ fontSize: '.82rem', color: '#94a3b8' }}>Saving…</span>}
      {saved && <span style={{ fontSize: '.82rem', color: '#16a34a' }}>✓ Saved</span>}
    </div>
  );
}
