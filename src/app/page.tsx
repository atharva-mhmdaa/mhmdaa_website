import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/ui/HeroCarousel";
import HeroCard from "@/components/home/HeroCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ServicesTabs from "@/components/home/ServicesTabs";
import ApproachTabs from "@/components/home/ApproachTabs";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Home | Michael Hill, MD & Associates",
  description:
    "Michael Hill, MD & Associates — Physician-led hospital operations consulting transforming healthcare revenue cycle performance nationwide.",
};

export default function Home() {
  return (
    <>
      {/* ══ SECTION 1: HERO ══════════════════════════════════ */}
      <section className="home-hero">
        <HeroCarousel />
        <div className="hero-inner" style={{ position: "relative", zIndex: 3 }}>
          <div className="hero-text">
            <div
              className="hero-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(200,16,46,.28)",
                border: "1px solid rgba(200,16,46,.7)",
                borderLeft: "none",
                borderRadius: 100,
                padding: "6px 18px",
                color: "#fca5a5",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C8102E", flexShrink: 0, display: "inline-block" }} />
              Physician-Led Billing Integrity & Claim Defense
            </div>
            <h1 className="hero-h1">
              Aligning clinical evidence to deliver{" "}
              <em>objective, defensible determinations.</em>
            </h1>
            <div style={{
              background: "rgba(200,16,46,.08)",
              border: "1px solid rgba(200,16,46,.25)",
              borderRadius: 14,
              padding: "20px 22px",
              marginBottom: 24,
            }}>
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" style={{ marginBottom: 10, opacity: .5 }}>
                <path d="M0 20V12C0 5.373 4.477 1.12 11 0l1.5 2.5C8.5 3.8 6.5 6.5 6 9h5v11H0zm16 0V12c0-6.627 4.477-10.88 11-12l1.5 2.5c-4 1.3-6 4-6.5 6.5H27v11H16z" fill="#fca5a5"/>
              </svg>
              <p style={{ margin: 0, fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,.9)", lineHeight: 1.8, fontWeight: 400 }}>
                In an era of friction between automated Payor denials and provider over-coding, MHMDAA serves as the essential clinical intermediary. Our physician-led framework delivers the defensible evidence required to secure compliance.
              </p>
              <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 2, background: "#C8102E", borderRadius: 2, flexShrink: 0 }} />
                <span style={{ fontSize: ".82rem", fontWeight: 700, color: "#fca5a5", letterSpacing: ".06em" }}>Dr. Michael Hill</span>
              </div>
            </div>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: 12, fontFamily: "'Playfair Display', serif" }}>
              Key Operational Commitments
            </div>
            <ul className="hero-bullets">
              <li>
                <span className="hb-label">Our Standard</span>
                <span className="hb-value">Evidence-based clinical justification</span>
              </li>
              <li>
                <span className="hb-label">Our Milestone</span>
                <span className="hb-value">
                  Independent clinical assessment delivered within 48 hours of case submission
                </span>
              </li>
            </ul>
            <div className="hero-btns">
              <Link href="/contact" className="btn-p">
                Connect with our Experts &rarr;
              </Link>
            </div>
          </div>

          <HeroCard />
        </div>
      </section>

      {/* ══ SECTION 2: STATS STRIP ═══════════════════════════ */}
      <div className="stats-strip">
        <div className="stats-hdr">
          <div className="stats-hdr-lbl">&#9679;&nbsp;&nbsp;Proven Impact</div>
        </div>
        <div className="stats-strip-inner">
          {[
            { target: 190, label: "National Clients\nServed" },
            { target: 30, label: "Years of Consulting\nExperience" },
            { target: 12500, label: "Claims\nReviewed" },
            { target: 125, label: "Lead Testifying Expert\nEngagements" },
            { target: 250, label: "Expert\nDepositions" },
          ].map((stat, i) => (
            <RevealOnScroll key={i}>
              <div className="ss-item" style={{ "--sc": "#C8102E" } as React.CSSProperties}>
                <div className="ss-num">
                  <AnimatedCounter target={stat.target} />
                  <span className="ss-plus">+</span>
                </div>
                <div className="ss-label">
                  {stat.label.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < stat.label.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* ══ SECTION 3: WHY CHOOSE US ═════════════════════════ */}
      <section className="section section-why-choose" style={{ background: "#fff", paddingTop: 96, paddingBottom: 40 }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c" style={{ marginBottom: 56 }}>
              <div className="sec-label">Why Choose Us</div>
              <h2 className="sec-title">
                The <em>Physician-Led</em> Advantage
              </h2>
              <p className="sec-sub" style={{ maxWidth: 680, margin: "0 auto" }}>
                Unlike traditional consulting firms, our organization is led by a
                physician who brings firsthand clinical and operational insight
                to ensure billing integrity and objective claim validation.
              </p>
            </div>
          </RevealOnScroll>

          <div className="why-adv-grid">
            <RevealOnScroll>
              <div className="adv-card">
                <div
                  className="adv-icon"
                  style={{
                    background: "rgba(200,16,46,.1)",
                    border: "1px solid rgba(200,16,46,.25)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h4 className="adv-title">Physician-Led Adjudication</h4>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#C8102E", fontWeight: 700, marginBottom: 10, marginTop: -4, letterSpacing: ".01em" }}>
                  We adjudicate clinical variances.
                </p>
                <p className="adv-desc">
                  Every disputed determination is reviewed by our Physician-led
                  Adjudication Team, who classify each denial as either{" "}
                  <strong style={{ color: "#2A3F7A" }}>Factually Supported</strong>{" "}
                  or{" "}
                  <strong style={{ color: "#2A3F7A" }}>Policy-Driven</strong>.
                  This systematic classification ensures clinical accuracy and
                  provides the foundation for defensible determinations.
                </p>
                <div className="adv-rule" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="adv-card">
                <div
                  className="adv-icon"
                  style={{
                    background: "rgba(200,16,46,.1)",
                    border: "1px solid rgba(200,16,46,.25)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <h4 className="adv-title">Bridging the Gap</h4>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#C8102E", fontWeight: 700, marginBottom: 10, marginTop: -4, letterSpacing: ".01em" }}>
                  Aligning Medical Judgment with Billing Integrity
                </p>
                <p className="adv-desc">
                  We sit at the intersection of clinical care and claims
                  adjudication, applying physician-led medical judgment where
                  traditional firms apply only financial modeling. By resolving
                  the friction between provider documentation and Payor policy,
                  we ensure regulatory compliance and objective outcomes.
                </p>
                <div className="adv-rule" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="adv-card">
                <div
                  className="adv-icon"
                  style={{
                    background: "rgba(200,16,46,.1)",
                    border: "1px solid rgba(200,16,46,.25)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h4 className="adv-title">Independent Clinical Arbitration</h4>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#C8102E", fontWeight: 700, marginBottom: 10, marginTop: -4, letterSpacing: ".01em" }}>
                  We identify variances in demonstrating medical necessity.
                </p>
                <p className="adv-desc">
                  Our firm serves as an Independent Clinical Arbitrator,
                  identifying variances in demonstrating medical necessity
                  (Sepsis 3, Two Midnight Benchmark, or proprietary
                  MCG/InterQual filters). Our assessments provide the legal and
                  clinical evidentiary basis required to validate determinations
                  and legally defend appropriate claim adjudications.
                </p>
                <div className="adv-rule" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="adv-card">
                <div
                  className="adv-icon"
                  style={{
                    background: "rgba(200,16,46,.1)",
                    border: "1px solid rgba(200,16,46,.25)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h4 className="adv-title">Forensic Medical Audits</h4>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#C8102E", fontWeight: 700, marginBottom: 10, marginTop: -4, letterSpacing: ".01em" }}>
                  We perform a Forensic Medical Audit.
                </p>
                <p className="adv-desc">
                  Our team conducts granular forensic reviews of clinical records,
                  prioritizing high-risk DRGs to identify recurring provider error
                  patterns and billing compliance gaps. The result is a fully
                  defensible, evidence-based audit that legally validates
                  appropriate reimbursement levels.
                </p>
                <div className="adv-rule" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="adv-card">
                <div
                  className="adv-icon"
                  style={{
                    background: "rgba(200,16,46,.1)",
                    border: "1px solid rgba(200,16,46,.25)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                    <line x1="12" y1="3" x2="12" y2="21" />
                    <path d="M3 9l4.5 9H3" />
                    <path d="M16.5 9l4.5 9h-4.5" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                  </svg>
                </div>
                <h4 className="adv-title">Litigation &amp; Defense</h4>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#C8102E", fontWeight: 700, marginBottom: 10, marginTop: -4, letterSpacing: ".01em" }}>
                  We deliver clinical authority and legal precision.
                </p>
                <p className="adv-desc">
                  Physician-authored clinical narratives, backed by expert
                  testimony and litigation support, defend your adjudications
                  through all stages of dispute. From Level I reconsiderations
                  to federal court, MHMDAA delivers the clinical authority and
                  legal precision required to prevail.
                </p>
                <div className="adv-rule" />
              </div>
            </RevealOnScroll>

            {/* CTA Card */}
            <RevealOnScroll>
              <div className="adv-cta-card">
                <div className="adv-cta-stat">
                  <span className="adv-cta-num" style={{ color: "#C8102E" }}>190+</span>
                  <span className="adv-cta-lbl">National Clients</span>
                </div>
                <div className="adv-cta-divider" />
                <div className="adv-cta-stat">
                  <span className="adv-cta-num" style={{ color: "#1B2A5B" }}>&lt;5%</span>
                  <span className="adv-cta-lbl">Denial Rate Target</span>
                </div>
                <div className="adv-cta-divider" />
                <Link href="/about" className="adv-cta-btn">
                  Meet Our Team &rarr;
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: OUR SERVICES (TABBED) ═════════════════ */}
      <section className="section" id="services-section" style={{ paddingTop: 40, paddingBottom: 48 }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c" style={{ marginBottom: 36 }}>
              <div className="sec-label">Our Services</div>
              <h2 className="sec-title">
                Explore Our <em>Service Lines</em>
              </h2>
              <p className="sec-sub" style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
                A comprehensive suite of services dedicated to ensuring billing
                integrity, regulatory compliance, and objective, defensible
                claim adjudications.
              </p>
            </div>
          </RevealOnScroll>
        </div>
        <div className="sc">
          <ServicesTabs />
        </div>
      </section>

      {/* ══ SECTION 5: HOW WE DELIVER ════════════════════════ */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c">
              <div className="sec-label">Our Approach</div>
              <h2 className="sec-title">
                How We <em>Deliver</em>
              </h2>
              <p className="sec-sub" style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
                We use technology to enhance capabilities, increase operational
                transparency, and improve healthcare delivery, driving greater
                efficiency, accuracy, and overall system performance.
              </p>
            </div>
          </RevealOnScroll>
          <ApproachTabs />
        </div>
      </section>

      {/* ══ SECTION 6: MEET THE FOUNDER ══════════════════════ */}
      <section
        className="cin-section cin-section-home"
        style={{ position: "relative", minHeight: 600, overflow: "hidden" }}
      >
        {/* Photo + overlays wrapped together */}
        <div className="cin-photo-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/dr-hill-new.jpg"
            alt="Dr. Michael Hill"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "20% top",
              display: "block",
            }}
          />
          <div
            className="cin-grad-r cin-grad-home"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right,rgba(10,20,55,0) 35%,rgba(10,20,55,.78) 55%,rgba(10,20,55,.97) 72%,rgba(10,20,55,1) 100%)",
            }}
          />
          <div
            className="cin-grad-bottom"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top,rgba(10,20,55,.5) 0%,transparent 30%)",
            }}
          />

          {/* Mobile-only: badge + name + quote overlaid on bottom of photo */}
          <div className="cin-mobile-overlay">
            <div className="cin-mobile-badge">Our Founder</div>
            <div className="cin-mobile-name">Michael Hill, <em>MD</em></div>
            <div className="cin-mobile-sub">Founder &amp; CEO &nbsp;&middot;&nbsp; UCLA-Trained Emergency Physician</div>
            <div className="cin-quote-mobile">
              <p>&ldquo;In an era of friction between automated Payor denials and provider over-coding, MHMDAA serves as the essential clinical intermediary. Our physician-led framework delivers the defensible evidence required to secure compliance and revenue in 2026.&rdquo;</p>
              <cite>— Michael Hill, MD &nbsp;&middot;&nbsp; Founder &amp; CEO</cite>
            </div>
          </div>
        </div>

        <div
          className="cin-inner cin-inner-home"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "90px 36px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className="cin-content cin-content-home" style={{ maxWidth: 540, width: "100%" }}>
            <RevealOnScroll direction="right">
              <div className="cin-desktop-header">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(200,16,46,.2)",
                    border: "1px solid rgba(200,16,46,.45)",
                    color: "#f87171",
                    fontSize: ".8rem",
                    fontWeight: 700,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: 100,
                    marginBottom: 20,
                  }}
                >
                  Our Founder
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem,3.2vw,3rem)",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.15,
                    marginBottom: 6,
                  }}
                >
                  Michael Hill,{" "}
                  <em style={{ fontStyle: "italic", color: "#93c5fd" }}>MD</em>
                </h2>
                <p
                  style={{
                    fontSize: "1.04rem",
                    color: "rgba(255,255,255,.78)",
                    marginBottom: 22,
                    letterSpacing: ".04em",
                  }}
                >
                  Founder &amp; CEO &nbsp;&middot;&nbsp; Residency UCLA-Trained
                  Emergency Physician &nbsp;&middot;&nbsp; UC Irvine School of
                  Medicine
                </p>
              </div>

              <blockquote
                style={{
                  background: "rgba(255,255,255,.06)",
                  borderLeft: "3px solid #C8102E",
                  padding: "18px 22px",
                  borderRadius: "0 10px 10px 0",
                  margin: "0 0 24px 0",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "1.08rem",
                    color: "rgba(255,255,255,.85)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  &ldquo;In an era of friction between automated Payor denials
                  and provider over-coding, MHMDAA serves as the essential
                  clinical intermediary. Our physician-led framework delivers
                  the defensible evidence required to secure compliance and
                  revenue in 2026.&rdquo;
                </p>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,.78)",
                    marginTop: 10,
                    fontStyle: "normal",
                    fontWeight: 600,
                  }}
                >
                  - Michael Hill, MD &nbsp;&middot;&nbsp; Founder &amp; CEO
                </p>
              </blockquote>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,.82)",
                  lineHeight: 1.82,
                  marginBottom: 16,
                }}
              >
                Dr. Hill is a residency-trained emergency physician with{" "}
                <strong style={{ color: "rgba(255,255,255,.85)" }}>
                  30+ years
                </strong>{" "}
                of healthcare consulting experience. A former{" "}
                <strong style={{ color: "rgba(255,255,255,.85)" }}>
                  Managing Director at Navigant Consulting
                </strong>{" "}
                and operator of a 52-hospital, 250-physician emergency medicine
                group, he has directed 100+ national hospital engagements with
                annual revenue outcomes of{" "}
                <strong style={{ color: "rgba(255,255,255,.85)" }}>
                  $5M&ndash;$28M per initiative
                </strong>
                . Dr. Hill has worked with more than{" "}
                <strong style={{ color: "rgba(255,255,255,.85)" }}>
                  80 Case Management Departments
                </strong>
                , including operational redesign and training of case managers
                and physicians on inpatient status determination, developed and
                deployed Clinical Documentation Improvement (CDI) training
                programs for physicians, coders, and utilization managers, and
                designed and deployed{" "}
                <strong style={{ color: "rgba(255,255,255,.85)" }}>
                  14 utilization management programs
                </strong>{" "}
                across North America.
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,.82)",
                  lineHeight: 1.82,
                  marginBottom: 24,
                }}
              >
                As a{" "}
                <strong style={{ color: "rgba(255,255,255,.85)" }}>
                  clinical expert witness in 125+ arbitrations and litigations
                </strong>
                , Dr. Hill has testified on over{" "}
                <strong style={{ color: "rgba(255,255,255,.85)" }}>
                  12,500 claims
                </strong>{" "}
                spanning medical necessity, ICD-10/DRG coding, EMTALA, and
                denial management, representing both Payors and health
                systems before AAA, AHLA, and federal courts nationwide.
              </p>

              {/* Credential pills */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 28,
                }}
              >
                {[
                  "ACEP National Steering Committee",
                  "Past President, CA-ACEP",
                  "IHI & Joint Commission Speaker",
                  "RWJ Patient Flow Advisor",
                  "UCSF Asst. Professor",
                ].map((cred) => (
                  <span
                    key={cred}
                    style={{
                      background: "rgba(255,255,255,.07)",
                      border: "1px solid rgba(255,255,255,.14)",
                      color: "rgba(255,255,255,.80)",
                      fontSize: ".8rem",
                      fontWeight: 600,
                      padding: "5px 11px",
                      borderRadius: 100,
                    }}
                  >
                    {cred}
                  </span>
                ))}
              </div>

              {/* Stat mini-cards */}
              <div
                className="cin-stats"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {[
                  { num: "12,500+", label: "Claims Reviewed" },
                  { num: "125+", label: "Lead Testifying Expert" },
                  { num: "250+", label: "Expert Depositions" },
                  { num: "30+", label: "Years Consulting" },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,.07)",
                      border: "1px solid rgba(255,255,255,.12)",
                      borderRadius: 12,
                      padding: "14px 8px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.55rem",
                        fontWeight: 800,
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontSize: ".72rem",
                        color: "rgba(255,255,255,.70)",
                        marginTop: 5,
                        lineHeight: 1.3,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div
                className="cin-btns"
                style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              >
                <Link href="/about#dr-hill" className="btn-p">
                  Full Biography &rarr;
                </Link>
                <Link href="/contact" className="btn-o wh">
                  Contact Our Team
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ══ MOBILE-ONLY: Founder bio below the cinematic section ══ */}
      <div className="cin-bio-mobile">
        <p>Dr. Hill is a residency-trained emergency physician with <strong>30+ years</strong> of healthcare consulting experience. A former <strong>Managing Director at Navigant Consulting</strong> and operator of a 52-hospital, 250-physician emergency medicine group, he has directed 100+ national hospital engagements with annual revenue outcomes of <strong>$5M&ndash;$28M per initiative</strong>. Dr. Hill has worked with more than <strong>80 Case Management Departments</strong>, including operational redesign and training of case managers and physicians on inpatient status determination, developed and deployed Clinical Documentation Improvement (CDI) training programs for physicians, coders, and utilization managers, and designed and deployed <strong>14 utilization management programs</strong> across North America.</p>
        <p>As a <strong>clinical expert witness in 125+ arbitrations and litigations</strong>, Dr. Hill has testified on over <strong>12,500 claims</strong> spanning medical necessity, ICD-10/DRG coding, EMTALA, and denial management, representing both Payors and health systems before AAA, AHLA, and federal courts nationwide.</p>
        <div className="cin-bio-pills">
          {["ACEP National Steering Committee","Past President, CA-ACEP","IHI & Joint Commission Speaker","RWJ Patient Flow Advisor","UCSF Asst. Professor"].map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <div className="cin-bio-stats">
          {[{n:"12,500+",l:"Claims Reviewed"},{n:"125+",l:"Lead Testifying Expert"},{n:"250+",l:"Expert Depositions"},{n:"30+",l:"Years Consulting"}].map((s) => (
            <div key={s.n} className="cin-bio-stat">
              <div className="cin-bio-stat-num">{s.n}</div>
              <div className="cin-bio-stat-lbl">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="cin-bio-btns">
          <Link href="/about#dr-hill" className="btn-p">Full Biography &rarr;</Link>
          <Link href="/contact" className="btn-o wh">Contact Our Team</Link>
        </div>
      </div>

      {/* ══ SECTION 7: PERFORMANCE ASSESSMENT ════════════════ */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c" style={{ marginBottom: 48 }}>
              <div className="sec-label">Performance Assessment</div>
              <h2 className="sec-title">
                Where Is Your Revenue <em>Falling Through?</em>
              </h2>
              <p className="sec-sub" style={{ maxWidth: 680, margin: "0 auto" }}>
                Identify the gaps that limit accurate reimbursement, especially the
                acute&#8209;care areas where revenue leakage occurs. Then pinpoint
                your top operational challenges and see how MHMDAA&apos;s
                physician&#8209;led approach directly addresses them with
                clinically grounded, defensible claim analysis.
              </p>
            </div>
          </RevealOnScroll>

          <div className="perf-grid-home">
            {[
              {
                bg: "rgba(200,16,46,.08)",
                stroke: "#C8102E",
                icon: (
                  /* Denied document: file with an X */
                  <svg width="28" height="28" fill="none" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9.5" y1="12.5" x2="14.5" y2="17.5" />
                    <line x1="14.5" y1="12.5" x2="9.5" y2="17.5" />
                  </svg>
                ),
                title: "High Denial Rates",
                desc: "Prior authorization denials, medical necessity disputes, and underpayments are impacting your appropriate reimbursement.",
              },
              {
                bg: "rgba(52,211,153,.12)",
                stroke: "#34d399",
                icon: (
                  /* Dollar sign leaking / draining out */
                  <svg width="28" height="28" fill="none" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="10" r="7" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="17" x2="12" y2="19" />
                    <path d="M9 7h4.5a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3H15" />
                    <path d="M10 19l2 4" />
                    <path d="M14 19l-2 4" />
                  </svg>
                ),
                title: "Revenue Leakage",
                desc: "Missed charges, coding downgrades, and unresolved claims are leaving recoverable revenue on the table.",
              },
              {
                bg: "rgba(251,191,36,.12)",
                stroke: "#fbbf24",
                icon: (
                  /* Shield with exclamation — compliance warning */
                  <svg width="28" height="28" fill="none" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M12 2l8 3v7c0 5-3.5 9-8 10C7.5 21 4 17 4 12V5l8-3z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <circle cx="12" cy="16" r=".6" fill="#fbbf24" />
                  </svg>
                ),
                title: "Compliance Gaps",
                desc: "Audit vulnerabilities, documentation deficiencies, and regulatory exposure are increasing institutional risk.",
              },
              {
                bg: "rgba(96,165,250,.12)",
                stroke: "#60a5fa",
                icon: (
                  /* Two speech bubbles facing each other — peer-to-peer */
                  <svg width="28" height="28" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <line x1="9" y1="10" x2="15" y2="10" />
                    <line x1="12" y1="7" x2="12" y2="13" />
                  </svg>
                ),
                title: "Peer-to-Peer Losses",
                desc: "Breakdowns in documentation, appeals, and arbitration are driving avoidable revenue loss.",
              },
              {
                bg: "rgba(168,85,247,.12)",
                stroke: "#a855f7",
                icon: (
                  /* Hourglass — bottleneck / delays */
                  <svg width="28" height="28" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 3h14" />
                    <path d="M5 21h14" />
                    <path d="M5 3l7 9-7 9" />
                    <path d="M19 3l-7 9 7 9" />
                  </svg>
                ),
                title: "Operational Bottlenecks",
                desc: "Utilization review backlogs, slow concurrent reviews, and throughput delays are crippling clinical operations.",
              },
              {
                bg: "rgba(244,114,182,.12)",
                stroke: "#f472b6",
                icon: (
                  /* Gavel — appeals & litigation */
                  <svg width="28" height="28" fill="none" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M14 10l-8 8a2 2 0 0 0 0 2.83l.17.17a2 2 0 0 0 2.83 0l8-8" />
                    <path d="M10 14L20 4" />
                    <path d="M18 2l4 4-2 2-4-4 2-2z" />
                    <line x1="3" y1="21" x2="9" y2="21" />
                  </svg>
                ),
                title: "Appeals & Litigation",
                desc: "Documentation, appeal, and arbitration failures are creating avoidable revenue loss.",
              },
            ].map((card, i) => (
              <RevealOnScroll key={i}>
                <div className="perf-card">
                  <div
                    className="perf-icon-wrap"
                    style={{ background: card.bg }}
                  >
                    {card.icon}
                  </div>
                  <div className="perf-card-title">{card.title}</div>
                  <div className="perf-card-desc">{card.desc}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 8: CTA BAND ══════════════════════════════ */}
      <CTABand
        heading="Start a Conversation With Our Experts"
        description="Partner with MHMDAA&rsquo;s physician-led team and take the first decisive step toward building a denial-resilient, financially sustainable hospital operation."
      />
    </>
  );
}
