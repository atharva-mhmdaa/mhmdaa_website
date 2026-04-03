'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';

export default function ConditionalSiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const staffArea =
    pathname?.startsWith('/jobs') || pathname?.startsWith('/content');

  return (
    <>
      {!staffArea && <Navbar />}
      <main className={staffArea ? 'main--staff' : undefined}>{children}</main>
      {!staffArea && <Footer />}
      {!staffArea && <BackToTop />}
    </>
  );
}
