import Link from "next/link";
import Image from "next/image";

const PhoneIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C8102E"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C8102E"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const providerLinks = [
  { href: "/provider-services/authorization", label: "Authorization" },
  {
    href: "/provider-services/payor-notification",
    label: "Payor Notification & Follow-up",
  },
  { href: "/provider-services/p2p", label: "Accelerated P2P" },
  { href: "/provider-services/concurrent-review", label: "Concurrent Review" },
  {
    href: "/provider-services/coding",
    label: "Coding & Clinical Documentation Improvement (CDI)",
  },
  { href: "/provider-services/claim-submission", label: "Claim Submission" },
  { href: "/provider-services/denial-management", label: "Denial Management" },
  { href: "/provider-services/appeals", label: "Appeal Letter Writing" },
  { href: "/provider-services/litigation", label: "Litigation & Expert Support" },
];

const payorLinks = [
  { href: "/payor-services", label: "Payor Services Overview" },
  {
    href: "/payor-services#concurrent",
    label: "Concurrent Review Support",
  },
  {
    href: "/payor-services#imc",
    label: "Independent Medical Consultation",
  },
  {
    href: "/payor-services#litigation",
    label: "Litigation & SIU Support",
  },
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/healthcare-fraud-analysis", label: "Healthcare Fraud Analysis" },
  { href: "/blogs", label: "Blogs & Reports" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
  { href: "/login", label: "Staff Login" },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="fb-brand">
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "5px 10px",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Michael Hill, MD & Associates"
                  width={160}
                  height={66}
                  style={{ height: "66px", width: "auto" }}
                />
              </span>
            </Link>
            <p className="fb-tagline">
              &ldquo;Restoring clinical authority to the revenue cycle,
              one defensible determination at a time.&rdquo;
            </p>
            <div className="fb-contact">
              <div className="fb-contact-item">
                <div className="fb-contact-icon">
                  <PhoneIcon />
                </div>
                <div className="fb-contact-text">
                  <a href="tel:8774644556">(877) 464-4556</a>
                </div>
              </div>
              <div className="fb-contact-item">
                <div className="fb-contact-icon">
                  <MapPinIcon />
                </div>
                <div className="fb-contact-text">
                  100 Pine Street, Suite 1250
                  <br />
                  San Francisco, CA 94111
                </div>
              </div>
            </div>
          </div>

          {/* Services for Providers */}
          <div className="fc">
            <h5>Services for Providers</h5>
            {providerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services for Payors */}
          <div className="fc">
            <h5>Services for Payors</h5>
            {payorLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="fc">
            <h5>Company</h5>
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>
          &copy; 2026 Michael Hill, MD &amp; Associates. All rights reserved.
        </p>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/michaelhillmdandassociates/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
