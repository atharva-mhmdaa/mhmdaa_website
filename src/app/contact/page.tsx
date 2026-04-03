import type { Metadata } from "next";
import Image from "next/image";
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
            Let&rsquo;s <em style={{ fontStyle: "italic", color: "#93c5fd" }}>Transform</em> Your Revenue Cycle
          </h1>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,.82)", maxWidth: 580, lineHeight: 1.8 }}>
            Ready to reduce denials, improve reimbursement, and build sustainable operations? Reach out to discuss how our physician-led team can help.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="cg">
          {/* Left column */}
          <div>
            <div className="sec-header">
              <div className="sec-label">Get In Touch</div>
              <h2 className="sec-title" style={{ fontSize: "2.3rem" }}>We&rsquo;re Ready to <em>Help</em></h2>
              <p style={{ fontSize: "1.04rem", color: "#3A4D66", lineHeight: 1.8, marginBottom: 30 }}>
                After you reach out, a member of our team will respond within 24 hours to schedule an initial discovery call. We&rsquo;ll discuss your organization&rsquo;s specific challenges and outline how our physician-led framework can address them.
              </p>
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

            {/* Trust block */}
            <div
              style={{
                background: "linear-gradient(135deg,#f8fafc,#eef2ff)",
                borderRadius: 14,
                padding: 24,
                marginTop: 8,
                border: "1px solid #e2e8f0",
                borderLeft: "4px solid #C8102E",
                marginBottom: 32,
              }}
            >
              <p style={{ fontSize: "1.04rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 8 }}>
                &#10003; 190+ Hospitals Trust Our Expertise
              </p>
              <p style={{ fontSize: "1.04rem", color: "#3A4D66", lineHeight: 1.7 }}>
                Join the growing number of healthcare organizations partnering with MHMDAA to restore clinical authority to their revenue cycle and eliminate denials.
              </p>
            </div>

            {/* Image */}
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(10,31,61,.10)" }}>
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Hospital consulting team discussion"
                width={800}
                height={500}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          {/* Right column */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
