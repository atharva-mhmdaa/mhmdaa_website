'use client';

import { useState, type FormEvent } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error || 'Login failed. Please try again.');
        setLoading(false);
        return;
      }

      window.location.href = data.redirect;
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="login-card" style={{ maxWidth: '440px', width: '100%' }}>
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#2A3F7A',
          textAlign: 'center',
          marginBottom: '28px',
        }}
      >
        Staff Portal
      </h1>

      {error && (
        <div
          style={{
            background: 'rgba(200,16,46,.08)',
            border: '1px solid rgba(200,16,46,.2)',
            color: '#C8102E',
            padding: '12px 16px',
            borderRadius: '10px',
            fontSize: '.9rem',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '18px' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              fontSize: '.88rem',
              fontWeight: 600,
              color: '#2A3F7A',
              marginBottom: '6px',
            }}
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '10px',
              border: '1.5px solid #e2e8f0',
              fontSize: '1rem',
              fontFamily: 'inherit',
              color: '#2D2D3A',
              background: '#f8fafc',
              outline: 'none',
              transition: 'border-color .2s, box-shadow .2s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#2A3F7A';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(42,63,122,.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label
            htmlFor="password"
            style={{
              display: 'block',
              fontSize: '.88rem',
              fontWeight: 600,
              color: '#2A3F7A',
              marginBottom: '6px',
            }}
          >
            Password
          </label>
          <div style={{ position: 'relative' }}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '14px 48px 14px 16px',
                borderRadius: '10px',
                border: '1.5px solid #e2e8f0',
                fontSize: '1rem',
                fontFamily: 'inherit',
                color: '#2D2D3A',
                background: '#f8fafc',
                outline: 'none',
                transition: 'border-color .2s, box-shadow .2s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#2A3F7A';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(42,63,122,.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: '#5A6E8A',
                fontSize: '1.1rem',
                lineHeight: 1,
              }}
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                  <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-p"
          style={{
            width: '100%',
            padding: '15px 24px',
            fontSize: '1.05rem',
            fontWeight: 700,
            fontFamily: 'inherit',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            transition: 'opacity .2s',
            textAlign: 'center',
            display: 'block',
          }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
