'use client';

import { useState } from 'react';
import ChangePasswordModal from '@/components/forms/ChangePasswordModal';

export default function SidebarFooter() {
  const [pwOpen, setPwOpen] = useState(false);

  return (
    <div className="dash-sidebar__footer">
      <button
        type="button"
        className="dash-sidebar-action"
        onClick={() => setPwOpen(true)}
      >
        Change password
      </button>
      <form action="/api/auth/signout" method="post">
        <button type="submit" className="dash-signout">
          Sign out
        </button>
      </form>
      <ChangePasswordModal open={pwOpen} onClose={() => setPwOpen(false)} />
    </div>
  );
}
