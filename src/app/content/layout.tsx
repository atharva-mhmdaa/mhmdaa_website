import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import StaffMinimalHeader from '@/components/layout/StaffMinimalHeader';
import SidebarFooter from '@/components/layout/SidebarFooter';

export default async function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  let user = null;
  try {
    const { data } = await supabase.auth.getUser();
    user = data.user;
  } catch {
    // Stale/invalid session — treat as unauthenticated
  }

  if (!user) redirect('/login');

  const role = (user.user_metadata?.role as string) || 'nurse';
  if (!['blogger', 'content_admin', 'admin'].includes(role)) {
    redirect('/login');
  }

  return (
    <div className="dash-app">
      <StaffMinimalHeader />
      <div className="dash-layout dash-layout--app">
        <aside className="dash-sidebar">
          <div className="dash-sidebar__head">
            <p className="dash-sidebar__title">Staff</p>
            <h2 className="dash-sidebar__heading">Content</h2>
          </div>

          <nav>
            <Link href="/content/dashboard" className="dash-nav-link">
              Blog Posts
            </Link>
            <Link href="/content/case-studies" className="dash-nav-link">
              Case Studies
            </Link>
            <Link href="/content/instructions" className="dash-nav-link">
              Instructions
            </Link>
          </nav>

          <SidebarFooter />
        </aside>

        <div className="dash-main">{children}</div>
      </div>
    </div>
  );
}
