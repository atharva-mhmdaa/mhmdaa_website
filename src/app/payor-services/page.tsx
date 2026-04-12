import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Services for Payors",
  description:
    "Physician-led medical-legal review services for payor organizations. Medical necessity validation, DRG clinical validation, billing integrity, and audit defense.",
};

const credentials = [
  "Physician-Led Reviews",
  "Payor-Focused Expertise",
  "CMS & Policy-Aligned Methodology",
  "Litigation & Arbitration Support",
];

const pillars = [
  {
    num: "01",
    label: "Medical Necessity",
    title: "Medical Necessity Validation",
    desc: "Turn medical records into evidence-backed, defensible rationales that validate payer denials, claim denials or downcoding, ensuring reimbursement aligns with medical necessity and appropriate utilization.",
  },
  {
    num: "02",
    label: "Acuity & Level of Care",
    title: "Acuity & Level of Care Verification",
    desc: "Verify ICU, intermediate ICU, and NICU service intensity against illness severity, providing evidence-based support to challenge inappropriate coding and unnecessary high-acuity stays.",
  },
  {
    num: "03",
    label: "Accelerated P2P",
    title: "Accelerated P2P for Payors",
    desc: "Defend denial integrity with specialty-matched, board-certified Specialists who provide 24/7, litigation-ready clinical rigor within 24 hours.",
  },
  {
    num: "04",
    label: "Billing Integrity",
    title: "Contractual & Billing Integrity Analysis",
    desc: "Analyze line items to detect unbundling and billing patterns that breach Payor-Provider agreements, providing objective evidence to support withholding reimbursement for services exceeding contractual or fair-market standards.",
  },
  {
    num: "05",
    label: "Regulatory Compliance",
    title: "Audit Defense & Star Rating Protection",
    desc: "Validate appeals and grievance processes for clinical fairness and compliance with CMS, State DOH, NCQA, and URAC, mitigating regulatory risk and protecting Star Ratings.",
  },
];

const services = [
  { num: "01", title: "Expert Medical Opinion Reports", slug: "expert-opinions", image: "/images/payor-tile-07-expert-opinions.png", teaser: "Deliver authoritative, physician-led analysis for high-stakes dispute resolution, generating formal reports structured specifically for legal defensibility and regulatory scrutiny." },
  { num: "02", title: "Rebuttal Reports & Deposition Support", slug: "rebuttal", image: "/images/payor-tile-08-rebuttal.png", teaser: "Identify structural inaccuracies in opposing expert testimony through standardized, data-driven analysis \u2014 equipping legal counsel with precise, focus lines of questioning." },
  { num: "03", title: "Demonstratives & Litigation Support", slug: "demonstratives", image: "/images/payor-tile-09-demonstratives.png", teaser: "We transform complex clinical and financial information into clear, compliant visual exhibits that make technical data understandable and actionable for fact finders." },
  { num: "04", title: "Provider Dispute & Appeal Support", slug: "dispute-appeal", image: "/images/payor-tile-06-dispute-appeal.png", teaser: "Conduct independent, Physician-led, evidence-based clinical and administrative reviews to protect financial integrity against provider disputes through defensible, transparent claim determinations." },
  { num: "05", title: "DRG Clinical Validation", slug: "drg-validation", image: "/images/payor-tile-03-drg-validation.png", teaser: "Proactively identifying unsupported comorbidities and sequencing discrepancies to ensure appropriate reimbursement reflect the actual acuity and resource utilization of the patient encounter." },
  { num: "06", title: "Line-Item Coding Compliance", slug: "line-item", image: "/images/payor-tile-05-line-item.png", teaser: "Establish an error-resistant quality gate within the revenue cycle to align claim submissions with actual care delivered, preventing revenue leakage and ensuring billing transparency." },
  { num: "07", title: "Two Midnight Rule Compliance", slug: "two-midnight", image: "/images/payor-tile-01-two-midnight.png", teaser: "Integrate standardized review protocols into admission workflows to establish a defensible clinical narrative \u2014 preventing status-related denials before a claim is ever submitted." },
  { num: "08", title: "Inpatient vs. Observation Determination", slug: "inpatient-obs", image: "/images/payor-tile-02-inpatient-obs.png", teaser: "Apply rigorous threshold analysis and evidence-based benchmarking to ensure clinical evidence at the point of admission accurately supports an inpatient level of care." },
  { num: "09", title: "ED Facility Level Methodology Review", slug: "ed-facility", image: "/images/payor-tile-04-ed-facility.png", teaser: "Our ED facility\u2011level methodology aligns billing with national standards by comparing documented and billed care to ensure accurate level assignment and strengthen revenue integrity." },
];

const whyCards = [
  {
    accent: "linear-gradient(90deg,#1B2A5B,#2A3F7A)",
    iconBg: "rgba(27,42,91,.08)",
    iconStroke: "#2A3F7A",
    title: "Clinical Authority — Not Algorithms",
    p1: "Independent, physician-led analysis that captures clinical nuance beyond automated determinations.",
    p2: "",
  },
  {
    accent: "linear-gradient(90deg,#C8102E,#e8334a)",
    iconBg: "rgba(200,16,46,.08)",
    iconStroke: "#C8102E",
    title: "Built for Defensibility",
    p1: "Litigation-ready work product designed to withstand rigorous judicial and regulatory scrutiny.",
    p2: "",
  },
  {
    accent: "linear-gradient(90deg,#1B2A5B,#2A3F7A)",
    iconBg: "rgba(27,42,91,.08)",
    iconStroke: "#2A3F7A",
    title: "Absolute Policy Precision",
    p1: "Definitive conclusions grounded in specific payer contracts, CMS regulations, and governing criteria.",
    p2: "",
  },
  {
    accent: "linear-gradient(90deg,#C8102E,#e8334a)",
    iconBg: "rgba(200,16,46,.08)",
    iconStroke: "#C8102E",
    title: "Scalable, Proven Methodology",
    p1: "A disciplined, repeatable framework delivering consistent quality and a fully defensible audit trail.",
    p2: "",
  },
];

const steps = [
  { num: "1", title: "Case Intake & Record Review", desc: "Systematic gathering and comprehensive assessment of all clinical data, records, and relevant documentation." },
  { num: "2", title: "Clinical & Coding Analysis", desc: "Clinical analysis of line-item claims to ensure that line items have not been unbundled." },
  { num: "3", title: "Policy & Regulatory Alignment", desc: "Cross-referencing findings against specific Payor guidelines, contract terms, evidence-based criteria, and CMS regulatory standards." },
  { num: "4", title: "Defensible Report Delivery", desc: "Delivery of a structured, authoritative work product and supporting documentation engineered to withstand legal and regulatory scrutiny." },
];

export default function PayorServicesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="payor-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="hero-badge">
            Services for Payors
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,3.8vw,3rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.12,
              marginBottom: 18,
            }}
          >
            Defensible Medical-Legal Review
          </h1>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.6rem",
              fontStyle: "italic",
              fontWeight: 600,
              color: "#93c5fd",
              marginBottom: 16,
              letterSpacing: ".01em",
            }}
          >
            Physician-led. Evidence-based. Outcome-driven.
          </p>
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,.82)",
              lineHeight: 1.85,
              marginBottom: 32,
              maxWidth: 680,
            }}
          >
            We provide physician expert-led, evidence-based backbone for denial integrity and accurate reimbursement. By synthesizing clinical expertise with regulatory rigor, we deliver ironclad, objective determinations that withstand the scrutiny of appeals, arbitration, and litigation. Our reviews minimize friction and maximize defensibility, ensuring every claim is both clinically sound and legally robust.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-p">
              Connect with our Experts →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CREDIBILITY BAR ───────────────────────────────── */}
      <div className="cred-bar">
        <div className="cred-bar-inner">
          {credentials.map((label) => (
            <div className="cb-item" key={label}>
              <span className="cb-dot" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ── FIVE PILLARS ──────────────────────────────────── */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="sc">
          <div className="sec-header c">
            <div className="sec-label">Our Value Proposition</div>
            <h2 className="sec-title">
              How We Strengthen <em>Payor Organizations</em>
            </h2>
            <p className="sec-sub" style={{ maxWidth: 700 }}>
              We provide physician-led, evidence-based analysis that drives accurate reimbursement and denial integrity through every stage of appeals, arbitration, and litigation.
            </p>
          </div>

          {/* Pillars grid: 5 in a single row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {pillars.map((p, i) => {
              const isNavy = i % 2 === 0;
              const accent = isNavy ? "var(--navy)" : "var(--red)";
              return (
                <div
                  key={p.title}
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(27,42,91,.06)",
                    borderTop: `4px solid ${accent}`,
                    borderRight: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    borderLeft: "1px solid var(--border)",
                    padding: "28px 32px",
                  }}
                >
                  <div style={{ marginBottom: 10 }}>
                    <div
                      style={{
                        fontSize: ".75rem",
                        fontWeight: 700,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: accent,
                      }}
                    >
                      {p.label}
                    </div>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.18rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "1.02rem", color: "var(--mg)", lineHeight: 1.8, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 9 SERVICE TILES ──────────────────────────────── */}
      <section className="section" id="payor-services" style={{ paddingBottom: 32 }}>
        <div className="sc">
          <div className="sec-header c">
            <div className="sec-label">Core Services</div>
            <h2 className="sec-title">
              Nine Specialized <em>Service Lines</em>
            </h2>
            <p className="sec-sub">
              Realigned to ensure accurate, timely, and sustainable reimbursement for Payors and
              managed care organizations.
            </p>
          </div>
          <div className="svc-grid3-centered">
            {services.map((s) => (
              <Link href={`/payor-services/${s.slug}`} className="svc-tile" key={s.slug}>
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <div className="svc-tile-overlay" />
                <div className="svc-tile-body">
                  <h3 className="svc-tile-title">{s.title}</h3>
                  <p className="svc-tile-desc">{s.teaser}</p>
                  <span className="svc-tile-cta">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEPARATOR ────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--navy)", opacity: 0.3, display: "inline-block" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)", opacity: 0.5, display: "inline-block" }} />
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--navy)", opacity: 0.3, display: "inline-block" }} />
        </div>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>

      {/* ── WHO WE SERVE / USE CASES ─────────────────────── */}
      <section className="section" style={{ paddingTop: 32 }}>
        <div className="sc">
          <div className="who-we-serve-inner">
            <div className="sec-header c" style={{ marginBottom: 32 }}>
              <div className="sec-label">Engagement &amp; Use Cases</div>
              <h2 className="sec-title">Who We <em>Serve</em></h2>
              <p style={{ fontSize: "1.15rem", color: "var(--mg)", lineHeight: 1.85, maxWidth: 680, margin: "0 auto" }}>
                Commercial and government Payors, Medicare Advantage plans, Third-Party Administrators (TPAs), and legal counsel engaged in healthcare disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PAYORS CHOOSE US ──────────────────────────── */}
      <section className="section why-payors-section" style={{ background: "#2A3F7A", padding: "96px 32px" }}>
        <div className="sc">
          <div className="sec-header c" style={{ marginBottom: 56 }}>
            <div className="sec-label" style={{ color: "#f87171" }}>
              THE MHMDAA DIFFERENCE — PRECISION AT THE POINT OF CHALLENGE.
            </div>
            <h2 className="sec-title" style={{ color: "#fff" }}>
              Why Choose <em style={{ color: "#93c5fd" }}>MHMDAA</em>
            </h2>
            <p
              className="sec-sub"
              style={{ color: "rgba(255,255,255,.84)", maxWidth: "100%" }}
            >
              We operate at the Nexus of Clinical Medicine, Coding Integrity, and Legal Strategy.
            </p>
          </div>
          <div
            className="why-payors-2col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
          >
            {whyCards.map((w) => (
              <div
                key={w.title}
                className="why-card"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 20,
                  padding: 40,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,.18)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: w.accent,
                    borderRadius: "20px 20px 0 0",
                  }}
                />
                <div
                  className="why-card-icon"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: w.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 22,
                  }}
                >
                  <svg
                    aria-hidden="true"
                    width={26}
                    height={26}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={w.iconStroke}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1B2A5B",
                    marginBottom: 14,
                    lineHeight: 1.3,
                    textAlign: "center",
                  }}
                >
                  {w.title}
                </h3>
                <p
                  style={{
                    fontSize: ".97rem",
                    color: "#3A4D66",
                    lineHeight: 1.82,
                    marginBottom: 14,
                    textAlign: "center",
                  }}
                >
                  {w.p1}
                </p>
                {w.p2 && <p style={{ fontSize: ".97rem", color: "#3A4D66", lineHeight: 1.82, textAlign: "center" }}>{w.p2}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHEN TO ENGAGE MHMDAA ────────────────────────── */}
      <section className="section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="sc">
          <div className="sec-header c" style={{ marginBottom: 48 }}>
            <div className="sec-label">Our Process</div>
            <h2 className="sec-title" style={{ textAlign: "center" }}>When to Engage MHMDAA</h2>
            <p className="sec-sub" style={{ textAlign: "center", margin: "16px auto 0", maxWidth: 760 }}>
              Partner with MHMDAA&apos;s physician-led team to leverage our precise four-step review process. Take the first decisive step toward building a denial-resilient, financially sustainable future for your organizational operations.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              {
                title: "Strategic Denial Defense",
                desc: "When you require credible, physician-led testimony to defend clinical decisions against payer scrutiny.",
                accent: "linear-gradient(90deg,#1B2A5B,#2A3F7A)",
                numColor: "#2A3F7A",
                numBg: "rgba(27,42,91,.08)",
                num: "1",
              },
              {
                title: "Acuity Validation",
                desc: "When level-of-care or clinical severity requirements are challenged and demand expert medical verification.",
                accent: "linear-gradient(90deg,#C8102E,#e8334a)",
                numColor: "#C8102E",
                numBg: "rgba(200,16,46,.08)",
                num: "2",
              },
              {
                title: "High-Stakes Claim Disputes",
                desc: "When reimbursement hinges on a definitive, evidence-based clinical argument.",
                accent: "linear-gradient(90deg,#1B2A5B,#2A3F7A)",
                numColor: "#2A3F7A",
                numBg: "rgba(27,42,91,.08)",
                num: "3",
              },
              {
                title: "Clinical-Administrative Alignment",
                desc: "When you need to bridge the gap between complex medical reality and administrative accuracy.",
                accent: "linear-gradient(90deg,#C8102E,#e8334a)",
                numColor: "#C8102E",
                numBg: "rgba(200,16,46,.08)",
                num: "4",
              },
            ].map((card) => (
              <div key={card.title} style={{
                background: "#fff",
                borderRadius: 20,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "0 4px 20px rgba(27,42,91,.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 4,
                  background: card.accent, borderRadius: "20px 20px 0 0",
                }} />
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: card.numBg, display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: 18,
                }}>
                  <span style={{
                    color: card.numColor, fontWeight: 800, fontSize: "1.3rem",
                    fontFamily: "'Playfair Display', serif", lineHeight: 1,
                  }}>{card.num}</span>
                </div>
                <h3 style={{
                  fontSize: "1.05rem", fontWeight: 700, color: "var(--navy)",
                  marginBottom: 12, lineHeight: 1.35,
                }}>{card.title}</h3>
                <p style={{
                  fontSize: ".93rem", color: "var(--mg)", lineHeight: 1.75, margin: 0,
                }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCELERATED P2P — PAYOR PERSPECTIVE ─────────── */}
      <section className="section p2p-section" style={{ background: "#fff", padding: "96px 32px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -120, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,16,46,.04) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div className="sc">
          <div className="p2p-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

            {/* LEFT: Content */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,.08)", border: "1px solid rgba(200,16,46,.2)", color: "#C8102E", fontSize: ".78rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, marginBottom: 20 }}>
                Accelerated P2P for Payors
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "var(--navy)", lineHeight: 1.2, marginBottom: 18 }}>
                Defending Denial Integrity in{" "}
                <em style={{ fontStyle: "italic", color: "#C8102E" }}>Timely Payor Specialty-Specific Accelerated Peer-to-Peer</em>{" "}
                Reviews
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--mg)", lineHeight: 1.85, marginBottom: 20 }}>
                When providers initiate an Accelerated Peer-to-Peer (AP2P) review to challenge a denial, Payors need a physician reviewer who can articulate the clinical rationale with the same rigor that will hold up in arbitration or court. MHMDAA deploys board-certified specialists matched rank-for-rank to the requesting provider to defend clinically sound denial decisions, within 24 hours of specialist request, 7 days/week.
              </p>
              <p style={{ fontSize: "1.15rem", color: "var(--mg)", lineHeight: 1.85, marginBottom: 24 }}>
                Our physicians don&rsquo;t simply recite policy language. They engage in substantive clinical dialogue, referencing evidence-based criteria, admission standards, and nationally recognized clinical guidelines to uphold the original determination, while creating a fully documented record for downstream litigation readiness.
              </p>

              {/* Target KPIs */}
              <div style={{ fontSize: ".9rem", fontWeight: 700, letterSpacing: ".1em", color: "var(--mg)", marginBottom: 10 }}>Target KPIs</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 28 }}>
                <div style={{ background: "var(--off)", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--navy)" }}>85%</div>
                  <div style={{ fontSize: ".92rem", color: "var(--mg)", marginTop: 2, lineHeight: 1.4 }}>Denial Upheld<br />Rate</div>
                </div>
                <div style={{ background: "var(--off)", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--red)" }}>&lt;6hrs</div>
                  <div style={{ fontSize: ".92rem", color: "var(--mg)", marginTop: 2, lineHeight: 1.4 }}>Payor Denial Decision<br />Completed</div>
                </div>
                <div style={{ background: "var(--off)", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--navy)" }}>100%</div>
                  <div style={{ fontSize: ".92rem", color: "var(--mg)", marginTop: 2, lineHeight: 1.4 }}>Rank-for-Rank<br />Match</div>
                </div>
              </div>

              <Link href="/contact" className="btn-p">Schedule a P2P Consultation &rarr;</Link>
            </div>

            {/* RIGHT: Process flow card */}
            <div>
              <div style={{ background: "linear-gradient(160deg,#06101f 0%,#0d1a35 55%,#06101f 100%)", borderRadius: 20, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#C8102E,#93c5fd,#C8102E)" }} />
                <div style={{ fontSize: ".88rem", fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", textAlign: "center", marginBottom: 24 }}>Payor P2P Defense Protocol</div>

                {/* Step 1 */}
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: "50%", background: "rgba(200,16,46,.2)", border: "1.5px solid rgba(200,16,46,.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "1.08rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>P2P Request Received</div>
                    <div style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.80)", lineHeight: 1.65 }}>Provider challenges denial. MHMDAA reviews original determination, medical records, and denial rationale within 2 hours.</div>
                  </div>
                </div>
                <div style={{ width: 1.5, height: 16, background: "rgba(200,16,46,.35)", marginLeft: 20, marginBottom: 4 }} />

                {/* Step 2 */}
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: "50%", background: "rgba(147,197,253,.15)", border: "1.5px solid rgba(147,197,253,.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "1.08rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>Specialist Match &amp; Briefing</div>
                    <div style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.80)", lineHeight: 1.65 }}>Board-certified physician matched to the requesting provider&rsquo;s specialty. Briefed on InterQual/MCG criteria and Payor-specific policy.</div>
                  </div>
                </div>
                <div style={{ width: 1.5, height: 16, background: "rgba(147,197,253,.3)", marginLeft: 20, marginBottom: 4 }} />

                {/* Step 3 */}
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: "50%", background: "rgba(251,191,36,.12)", border: "1.5px solid rgba(251,191,36,.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "1.08rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>Clinical Defense Call</div>
                    <div style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.80)", lineHeight: 1.65 }}>Physician-to-physician discussion grounded in evidence-based medicine. Every clinical argument documented verbatim for legal readiness.</div>
                  </div>
                </div>
                <div style={{ width: 1.5, height: 16, background: "rgba(251,191,36,.3)", marginLeft: 20, marginBottom: 4 }} />

                {/* Step 4 */}
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: "50%", background: "rgba(52,211,153,.12)", border: "1.5px solid rgba(52,211,153,.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "1.08rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>Determination &amp; Documentation</div>
                    <div style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.80)", lineHeight: 1.65 }}>Formal outcome report delivered: denial upheld, modified, or overturned. Full audit trail suitable for arbitration, IDR, or litigation.</div>
                  </div>
                </div>

                {/* Bottom highlight bar */}
                <div style={{ background: "rgba(200,16,46,.15)", border: "1px solid rgba(200,16,46,.3)", borderRadius: 10, padding: "14px 16px", marginTop: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                    <div>
                      <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", marginBottom: 2 }}>Denial Defense Rate</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#f87171" }}>85% Upheld vs. 15&ndash;20% Industry Standard</div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ fontSize: ".78rem", color: "rgba(255,255,255,.5)", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", padding: "3px 10px", borderRadius: 100 }}>Rank-for-Rank</span>
                      <span style={{ fontSize: ".78rem", color: "rgba(255,255,255,.5)", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", padding: "3px 10px", borderRadius: 100 }}>Litigation-Ready</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── TRANSFORM CTA ────────────────────────────────── */}
      <CTABand
        heading="Let's Transform Your Denial & Dispute Resolution"
        description="Ready to reduce denials, strengthen reimbursement, and operationalize defensible decisions? Connect with our physician‑led team to get started."
        showButton={false}
        noBorder
      />

      {/* ── CTA BAND ─────────────────────────────────────── */}
      <CTABand
        heading="Start a Conversation With Our Experts"
        description="Partner with MHMDAA's physician-led team and take the first decisive step toward building a denial-resilient, financially sustainable hospital operation."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
