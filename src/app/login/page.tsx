import { Suspense } from 'react';
import LoginForm from '@/components/forms/LoginForm';

export const metadata = {
  title: 'Staff Login',
};

export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1B2A5B 0%, #2A3F7A 55%, #1B2A5B 100%)',
        paddingTop: '120px',
        paddingBottom: '48px',
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box',
      }}
    >
      <Suspense fallback={<div style={{ color: '#fff' }}>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
