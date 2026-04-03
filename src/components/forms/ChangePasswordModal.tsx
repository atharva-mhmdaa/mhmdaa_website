'use client';

import { useState, type FormEvent, useEffect, useRef } from 'react';

export default function ChangePasswordModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    else if (!open && el.open) el.close();
  }, [open]);

  useEffect(() => {
    if (open) {
      setCurrent('');
      setNext('');
      setConfirm('');
      setError('');
      setSuccess(false);
    }
  }, [open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!current || !next || !confirm) {
      setError('All fields are required.');
      return;
    }
    if (next.length < 8) {
      setError('New password must be at least 8 characters.');
      return;
    }
    if (next !== confirm) {
      setError('New passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword: current, newPassword: next }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to change password.');
      } else {
        setSuccess(true);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="cpw-dialog"
    >
      <div className="cpw-inner">
        <div className="cpw-header">
          <h3 className="cpw-heading">Change password</h3>
          <button type="button" onClick={onClose} className="cpw-close" aria-label="Close">
            &times;
          </button>
        </div>

        {success ? (
          <div className="cpw-success">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p>Password changed successfully.</p>
            <button type="button" className="btn-p cpw-done" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <div className="cpw-error">{error}</div>}

            <label className="cpw-label" htmlFor="cpw-cur">Current password</label>
            <input
              id="cpw-cur"
              type="password"
              autoComplete="current-password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="cpw-input"
              required
            />

            <label className="cpw-label" htmlFor="cpw-new">New password</label>
            <input
              id="cpw-new"
              type="password"
              autoComplete="new-password"
              value={next}
              onChange={(e) => setNext(e.target.value)}
              className="cpw-input"
              required
              minLength={8}
            />

            <label className="cpw-label" htmlFor="cpw-cfm">Confirm new password</label>
            <input
              id="cpw-cfm"
              type="password"
              autoComplete="new-password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="cpw-input"
              required
            />

            <div className="cpw-actions">
              <button type="button" className="btn-o cpw-cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-p cpw-submit" disabled={loading}>
                {loading ? 'Saving…' : 'Update password'}
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
