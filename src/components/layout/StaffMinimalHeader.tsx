import Link from 'next/link';
import Image from 'next/image';

const LinkedInIcon = () => (
  <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function StaffMinimalHeader() {
  return (
    <header className="dash-staff-header">
      <Link href="/" className="dash-staff-header__logo">
        <Image
          src="/images/logo.png"
          alt="Michael Hill, MD & Associates"
          width={160}
          height={66}
          style={{ height: '38px', width: 'auto' }}
          priority
        />
      </Link>
      <a
        href="https://www.linkedin.com/company/michaelhillmdandassociates/"
        target="_blank"
        rel="noopener noreferrer"
        className="dash-staff-header__linkedin"
        title="LinkedIn"
        aria-label="Michael Hill MD & Associates on LinkedIn"
      >
        <LinkedInIcon />
      </a>
    </header>
  );
}
