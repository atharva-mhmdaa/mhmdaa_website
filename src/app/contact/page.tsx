import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Michael Hill, MD & Associates for physician-led hospital operations consulting. Transform your revenue cycle with expert guidance.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="contact-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span className="hero-badge">Contact Us</span>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 14,
            }}
          >
            We&rsquo;re Ready to <em style={{ fontStyle: "italic", color: "#93c5fd" }}>Partner</em> with Your Health Plan
          </h1>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,.82)", maxWidth: 580, lineHeight: 1.8 }}>
            Expect a response within 24 hours to secure your strategic discovery consultation. We&rsquo;ll use this time to assess your specific claims validation vulnerabilities and map out a definitive path forward using our specialized, physician-led review framework.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="cg">
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="sec-header" style={{ marginBottom: 0 }}>
              <div className="sec-label">Get In Touch</div>
              <h2 className="sec-title" style={{ fontSize: "2.3rem" }}>We&rsquo;re Ready to <em>Help</em></h2>
              <p style={{ fontSize: "1.04rem", color: "#3A4D66", lineHeight: 1.8, marginBottom: 0 }}>
                Expect a response within 24 hours to secure your discovery consultation. We&rsquo;ll use this time to assess your specific needs and map out a strategic path forward using our specialized physician-led framework.
              </p>
            </div>

            {/* Phone */}
            <div className="cd" style={{ marginTop: 24 }}>
              <div className="cd-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#C8102E" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h5>Phone</h5>
                <p>(877) 464-4556</p>
              </div>
            </div>

            {/* Email */}
            <div className="cd">
              <div className="cd-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#C8102E" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h5>Email</h5>
                <p><a href="mailto:info@mhmdaa.com" style={{ color: "#3A4D66", textDecoration: "none" }}>info@mhmdaa.com</a></p>
              </div>
            </div>

            {/* Office address */}
            <div className="cd">
              <div className="cd-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#C8102E" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h5>Office</h5>
                <p>100 Pine Street, Suite 1250<br />San Francisco, CA 94111</p>
              </div>
            </div>

            {/* Availability */}
            <div className="cd">
              <div className="cd-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#C8102E" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5>Availability</h5>
                <p>Monday – Friday, 8:00 AM – 6:00 PM PST</p>
              </div>
            </div>


          </div>

          {/* Right column */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
