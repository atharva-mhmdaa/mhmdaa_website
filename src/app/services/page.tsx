import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABand from "@/components/ui/CTABand";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { providerServices } from "@/data/provider-services";

export const metadata: Metadata = {
  title: "Services for Providers",
  description:
    "Nine integrated physician-led service lines covering the full revenue cycle — from authorization through litigation. MHMDAA restores clinical authority to every determination.",
};

const stats = [
  { num: "190", suffix: "+", label: "National Clients\nServed", color: "#C8102E" },
  { num: "100", suffix: "+", label: "Hospital Projects\nCompleted", color: "#C8102E" },
  { num: "30", suffix: "+", label: "Years of Consulting\nExperience", color: "#C8102E" },
  { num: "50", suffix: "+", label: "Clinical Documentation Improvement (CDI) Programs\nDeployed", color: "#C8102E" },
  { num: "24", suffix: "+", label: "UM Programs\nDeployed", color: "#C8102E" },
];

const pillars = [
  {
    step: "01 — Front-End Strategy",
    title: "Admission Status Integrity",
    description:
      "Eliminating preventable denials by aligning clinical documentation with Payor criteria and regulatory standards at admission to ensure accurate status determinations and timely notification.",
    borderColor: "var(--navy)",
  },
  {
    step: "02 — Revenue Protection",
    title: "Concurrent Review & Clinical Documentation Improvement (CDI)",
    description:
      "Clinical oversight and physician coaching to ensure documentation specificity and coding accuracy, capturing true severity of illness and preventing adverse DRG reclassification before claims are submitted.",
    borderColor: "var(--red)",
  },
  {
    step: "03 — Tactical Defense",
    title: "Peer-to-Peer & Denial Management",
    description:
      "Leveraging timely physician-to-physician advocacy and evidence-based clinical appeals to challenge algorithmic denials, navigating complex comorbidities and medical necessity to secure revenue reversal.",
    borderColor: "var(--navy)",
  },
  {
    step: "04 — Long-Term Risk Mitigation",
    title: "Litigation & Regulatory Support",
    description:
      "Strategic defense by serving as clinical expert witness and analyzing denial patterns to combat unfair Payor practices, ensuring legal compliance and stronger leverage during contract negotiations.",
    borderColor: "var(--red)",
  },
  {
    step: "05 — Coverage & Eligibility Assurance",
    title: "Coverage & Eligibility Assurance",
    description:
      "Proactively identifying primary and secondary Payor responsibility through rigorous verification. Our physician-led team resolves inter-plan liability disputes and prevents claim rejections caused by coverage sequencing errors.",
    borderColor: "var(--navy)",
  },
  {
    step: "06 — High-Cost Device Recovery",
    title: "High-Cost Implant Recovery",
    description:
      "Securing appropriate reimbursement for high-cost surgical implants and devices through prospective authorization and contract analysis, verifying implant authorization is aligned with the planned surgical procedure. Our team defends against retrospective downgrades and recovers underpayments on device-intensive DRGs.",
    borderColor: "var(--red)",
  },
];

const engagementCriteria = [
  "Formal denial defense requiring credible, evidence-based testimony at the appeal or litigation level.",
  "Level-of-care analysis and validation of medical necessity requirements",
  "Complex claim resolution requiring physician intervention to capture true severity of illness and ensure accurate reimbursement.",
  "Alignment of clinical reality with administrative accuracy",
  "Identification of potential or actual risk to revenue integrity",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="svc-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <RevealOnScroll>
            <div
              className="hero-badge"
              style={{ marginBottom: 20 }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f87171" }} />
              Services for Providers
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.12,
                marginBottom: 18,
                maxWidth: 720,
              }}
            >
              Services for <em style={{ fontStyle: "italic", color: "#93c5fd" }}>Providers</em>
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "rgba(255,255,255,.82)",
                lineHeight: 1.85,
                maxWidth: 620,
                marginBottom: 32,
              }}
            >
              Nine integrated service lines engineered to strengthen and optimize your hospital&apos;s revenue lifecycle, spanning the first patient encounter through final adjudication and litigation.
            </p>
            <Link href="/contact" className="btn-p">
              Connect with our Experts →
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip">
        <div className="stats-strip-inner">
          {stats.map((s) => (
            <div key={s.label} className="ss-item" style={{ "--sc": s.color } as React.CSSProperties}>
              <div className="ss-num">
                {s.num}
                <span className="ss-plus">{s.suffix}</span>
              </div>
              <div className="ss-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Partner */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c">
              <div className="sec-label">Our Value Proposition</div>
              <h2 className="sec-title">
                How We Partner With <em>Hospital Providers</em>
              </h2>
              <p className="sec-sub" style={{ maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
                Six strategic pillars that protect your revenue cycle, from the first patient encounter through final adjudication and litigation.
              </p>
            </div>
          </RevealOnScroll>
          {/* Blue highlight box */}
          <RevealOnScroll>
            <div
              style={{
                background: "var(--navy)",
                borderRadius: 16,
                padding: "28px 32px",
                display: "flex",
                alignItems: "flex-start",
                gap: 24,
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  background: "rgba(255,255,255,.15)",
                  borderRadius: 12,
                  flexShrink: 0,
                }}
              >
                <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: 10 }}>
                  Advancing Patient Care Through Operational Excellence
                </div>
                <p style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.88)", lineHeight: 1.8, margin: 0 }}>
                  Our services enhance both clinical and operational performance — supporting appropriate level-of-care decisions, improving documentation integrity, and reducing unnecessary delays that impact patient care. This allows providers to focus on what matters most: delivering safe, efficient, and effective care.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          <div className="pillar-grid">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.title}>
                <div
                  className="card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderTop: `4px solid ${p.borderColor}`,
                    transitionDelay: `${i * 0.06}s`,
                  }}
                >
                  <div
                    style={{
                      fontSize: ".82rem",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--red)",
                      marginBottom: 8,
                    }}
                  >
                    {p.step}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 10,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--mg)",
                      lineHeight: 1.75,
                      flex: 1,
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link href="/contact" className="btn-p">Connect with our Experts →</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 9 Service Tiles */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c">
              <div className="sec-label">Our Services</div>
              <h2 className="sec-title">
                Our <em>Nine Service Lines</em>
              </h2>
              <p className="sec-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
                Each service line is physician-led and built to protect your revenue at every stage of the cycle.
              </p>
            </div>
          </RevealOnScroll>
          <div className="svc-grid3">
            {providerServices.map((svc) => (
              <RevealOnScroll key={svc.slug}>
                <Link href={`/services/${svc.slug}`} className="svc-tile">
                  <Image
                    src={svc.tileImage}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <div className="svc-tile-overlay" />
                  <span className="svc-tile-num">Service {svc.number}</span>
                  <div className="svc-tile-body">
                    <div className="svc-tile-title">{svc.title}</div>
                    <div className="svc-tile-desc">{svc.description}</div>
                    <span className="svc-tile-cta">Learn More →</span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* When to Engage */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="sc">
          <RevealOnScroll>
            <div
              style={{
                background: "linear-gradient(135deg,#2A3F7A,#2A3F7A)",
                borderRadius: 20,
                padding: "40px 44px",
              }}
            >
              <div className="engage-grid">
                <div>
                  <div
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                      color: "#f87171",
                      marginBottom: 12,
                    }}
                  >
                    ● Engagement Criteria
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(2.2rem,3.2vw,3.2rem)",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.2,
                      marginBottom: 18,
                    }}
                  >
                    When to Engage MHMDAA<br />
                    <em style={{ color: "#93c5fd" }}>from the Provider Side</em>
                  </h3>
                  <p style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.82)", lineHeight: 1.85 }}>
                    Our physician-led team is deployed when your revenue cycle faces credibility challenges that require clinical authority — not just administrative follow-up.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {engagementCriteria.map((c) => (
                    <div
                      key={c}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        background: "rgba(255,255,255,.07)",
                        borderRadius: 12,
                        padding: "14px 16px",
                      }}
                    >
                      <span
                        style={{
                          color: "#60a5fa",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        ✓
                      </span>
                      <p style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.82)", margin: 0, lineHeight: 1.65 }}>
                        {c}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        heading="Start The Conversation With Our Experts"
        description="Partner with MHMDAA's physician-led team and take the first decisive step toward building a denial-resilient, financially sustainable hospital operation."
      />
    </>
  );
}
