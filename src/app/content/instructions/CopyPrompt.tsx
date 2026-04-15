'use client';

import { useState } from 'react';

export default function CopyPrompt({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div style={{ position: 'relative', marginTop: 12, marginBottom: 28 }}>
      <div style={{
        background: '#f0f4ff',
        border: '1.5px solid #c7d2fe',
        borderRadius: 12,
        padding: '20px 24px 20px 20px',
        fontSize: '.92rem',
        color: '#1B2A5B',
        lineHeight: 1.8,
        whiteSpace: 'pre-wrap',
        fontFamily: 'inherit',
      }}>
        {text}
      </div>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          background: copied ? '#059669' : '#2A3F7A',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '6px 14px',
          fontSize: '.8rem',
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'background .2s',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
        }}
      >
        {copied ? '✓ Copied!' : 'Copy'}
      </button>
    </div>
  );
}
