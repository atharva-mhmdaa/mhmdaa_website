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
            <div className="hero-badge">
              &#9679; Physician-Led Hospital Operations Consulting
            </div>
            <h1 className="hero-h1">
              Transforming Hospital Revenue Integrity
              <br />
              Through <em>Clinical Excellence</em>
            </h1>
            <p className="hero-p">
              We help acute&#8209;care organizations build reliable,
              standardized, and denial&#8209;resistant revenue cycle systems,
              strengthening financial integrity, supporting caregivers, and
              ensuring every patient&apos;s care is backed by accurate, timely,
              and sustainable reimbursement.
            </p>
            <ul className="hero-bullets">
              <li>
                <span className="hb-label">Target:</span>
                <span className="hb-value">Denial Rate &lt; 5%</span>
              </li>
              <li>
                <span className="hb-label">Provider Milestone:</span>
                <span className="hb-value">
                  24/7 Peer to Peer Operations, Flagging &amp; Fixing Problems
                  in &lt;6hrs
                </span>
              </li>
              <li>
                <span className="hb-label">Payor Milestone:</span>
                <span className="hb-value">
                  Independent Clinical Assessment Delivered Within 48hrs of Case
                  Submission
                </span>
              </li>
              <li>
                <span className="hb-label">Standard:</span>
                <span className="hb-value">
                  Evidence-Based Clinical Justification
                </span>
              </li>
              <li>
                <span className="hb-label">Strategy:</span>
                <span className="hb-value">
                  Strategic Payor and Provider Collaboration
                </span>
              </li>
            </ul>
            <div className="hero-btns">
              <Link href="/contact" className="btn-p">
                Start The Conversation &rarr;
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
            { target: 100, label: "Hospital Projects\nCompleted" },
            { target: 30, label: "Years of Consulting\nExperience" },
            { target: 50, label: "Clinical Documentation Improvement\nPrograms Deployed" },
            { target: 24, label: "UM Programs\nDeployed" },
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
      <section className="section" style={{ background: "#fff", paddingTop: 96, paddingBottom: 40 }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c" style={{ marginBottom: 56 }}>
              <div className="sec-label">Why Choose Us</div>
              <h2 className="sec-title">
                The <em>Physician-Led</em> Advantage
              </h2>
              <p className="sec-sub" style={{ maxWidth: 680, margin: "0 auto" }}>
                Unlike traditional consulting firms, our organization is led by a
                physician who brings firsthand clinical &amp; operational insight
                into every revenue cycle decision.
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
                  This systematic classification drives precision appeals and
                  long-term denial pattern correction, increasing your
                  hospital&apos;s operating margins at scale.
                </p>
                <div className="adv-rule" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="adv-card">
                <div
                  className="adv-icon"
                  style={{
                    background: "rgba(27,42,91,.08)",
                    border: "1px solid rgba(27,42,91,.18)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <h4 className="adv-title">Bridging the Gap</h4>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#C8102E", fontWeight: 700, marginBottom: 10, marginTop: -4, letterSpacing: ".01em" }}>
                  Aligning Medical Judgement with Revenue Integrity
                </p>
                <p className="adv-desc">
                  We sit at the intersection of clinical care and financial
                  performance, applying physician-led medical judgment where
                  traditional firms apply only financial modeling. By resolving the
                  friction between what clinicians document and what Payors
                  reimburse, we protect your revenue at every stage of the cycle.
                </p>
                <div className="adv-rule" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="adv-card">
                <div
                  className="adv-icon"
                  style={{
                    background: "rgba(27,42,91,.08)",
                    border: "1px solid rgba(27,42,91,.18)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h4 className="adv-title">Independent Clinical Arbitration</h4>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#C8102E", fontWeight: 700, marginBottom: 10, marginTop: -4, letterSpacing: ".01em" }}>
                  We identify variances in demonstrating medical necessity.
                </p>
                <p className="adv-desc">
                  Our firm serves as an Independent Clinical Arbitrator, identifying
                  variances in demonstrating medical necessity (Sepsis 3, Two
                  Midnight Benchmark, or proprietary MCG/InterQual filters). Our
                  assessments provide the legal and clinical evidentiary basis
                  required to overturn unlawful recoupments.
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
                <h4 className="adv-title">Clinical Documentation</h4>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#C8102E", fontWeight: 700, marginBottom: 10, marginTop: -4, letterSpacing: ".01em" }}>
                  We perform a Forensic Medical Audit.
                </p>
                <p className="adv-desc">
                  Our team conducts granular forensic reviews of clinical records,
                  prioritizing high-risk DRGs and ensuring accurate CC/MCC capture
                  on every encounter. The result is maximum appropriate
                  reimbursement, fully defensible documentation, and a coding
                  posture that withstands the most rigorous Payor scrutiny.
                </p>
                <p className="adv-desc" style={{ marginTop: 10 }}>
                  Analyzing high-risk DRGs to ensure accurate coding and CC/MCC
                  capture for maximum appropriate reimbursement every time.
                </p>
                <div className="adv-rule" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="adv-card">
                <div
                  className="adv-icon"
                  style={{
                    background: "rgba(27,42,91,.08)",
                    border: "1px solid rgba(27,42,91,.18)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                    <line x1="12" y1="3" x2="12" y2="21" />
                    <path d="M3 9l4.5 9H3" />
                    <path d="M16.5 9l4.5 9h-4.5" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                  </svg>
                </div>
                <h4 className="adv-title">Recovery &amp; Appeals</h4>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#C8102E", fontWeight: 700, marginBottom: 10, marginTop: -4, letterSpacing: ".01em" }}>
                  We are dedicated to recovering every dollar you are owed.
                </p>
                <p className="adv-desc">
                  Physician-authored clinical narratives, backed by expert testimony
                  and litigation support, pursue every disputed determination
                  through all stages of appeal. From Level I reconsiderations to
                  federal court, MHMDAA delivers the clinical authority and legal
                  precision required to prevail.
                </p>
                <div className="adv-rule" />
              </div>
            </RevealOnScroll>

            {/* CTA Card */}
            <RevealOnScroll>
              <div
                className="adv-card adv-cta-card"
                style={{
                  background: "linear-gradient(135deg,#C8102E 0%,#a50d24 100%)",
                  borderColor: "#C8102E",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3.4rem", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 6 }}>
                  190+
                </div>
                <div style={{ fontSize: ".88rem", color: "rgba(255,255,255,.75)", marginBottom: 22, textTransform: "uppercase", letterSpacing: ".12em", fontWeight: 600 }}>
                  National Clients
                </div>
                <div style={{ height: 1, background: "rgba(255,255,255,.2)", width: "60%", margin: "0 auto 22px" }} />
                <div style={{ fontSize: "3.4rem", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 6 }}>
                  &lt;5%
                </div>
                <div style={{ fontSize: ".88rem", color: "rgba(255,255,255,.75)", marginBottom: 28, textTransform: "uppercase", letterSpacing: ".12em", fontWeight: 600 }}>
                  Denial Rate Target
                </div>
                <Link
                  href="/about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#fff",
                    color: "#C8102E",
                    fontSize: "1.04rem",
                    fontWeight: 700,
                    padding: "10px 20px",
                    borderRadius: 8,
                    textDecoration: "none",
                  }}
                >
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
                A comprehensive suite of services protecting revenue integrity
                across every stage of the patient journey, for both Providers and
                Payors.
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
        className="cin-section"
        style={{ position: "relative", minHeight: 600, overflow: "hidden" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/index-37.jpg"
          alt="Dr. Michael Hill"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left top",
            display: "block",
          }}
        />
        <div
          className="cin-grad-r"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right,rgba(10,20,55,0) 35%,rgba(10,20,55,.78) 55%,rgba(10,20,55,.97) 72%,rgba(10,20,55,1) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top,rgba(10,20,55,.5) 0%,transparent 30%)",
          }}
        />

        <div
          className="cin-inner"
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
          <div className="cin-content" style={{ maxWidth: 540, width: "100%" }}>
            <RevealOnScroll direction="right">
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 24,
              maxWidth: 1100,
              margin: "0 auto 16px",
            }}
          >
            {[
              {
                bg: "rgba(200,16,46,.08)",
                stroke: "#C8102E",
                icon: (
                  <svg width="28" height="28" fill="none" stroke="#C8102E" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                ),
                title: "High Denial Rates",
                desc: "Prior authorization denials, medical necessity disputes, and underpayments are impacting your appropriate reimbursement.",
              },
              {
                bg: "rgba(52,211,153,.12)",
                stroke: "#34d399",
                icon: (
                  <svg width="28" height="28" fill="none" stroke="#34d399" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M3 3v18h18" />
                    <path d="M7 16l4-8 4 4 5-9" />
                  </svg>
                ),
                title: "Revenue Leakage",
                desc: "Missed charges, coding downgrades, and unresolved claims are leaving recoverable revenue on the table.",
              },
              {
                bg: "rgba(251,191,36,.12)",
                stroke: "#fbbf24",
                icon: (
                  <svg width="28" height="28" fill="none" stroke="#fbbf24" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  </svg>
                ),
                title: "Compliance Gaps",
                desc: "Audit vulnerabilities, documentation deficiencies, and regulatory exposure are increasing institutional risk.",
              },
              {
                bg: "rgba(96,165,250,.12)",
                stroke: "#60a5fa",
                icon: (
                  <svg width="28" height="28" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Peer-to-Peer Losses",
                desc: "Breakdowns in documentation, appeals, and arbitration are driving avoidable revenue loss.",
              },
              {
                bg: "rgba(168,85,247,.12)",
                stroke: "#a855f7",
                icon: (
                  <svg width="28" height="28" fill="none" stroke="#a855f7" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                  </svg>
                ),
                title: "Operational Bottlenecks",
                desc: "Utilization review backlogs, slow concurrent reviews, and throughput delays are crippling clinical operations.",
              },
              {
                bg: "rgba(244,114,182,.12)",
                stroke: "#f472b6",
                icon: (
                  <svg width="28" height="28" fill="none" stroke="#f472b6" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="15" y2="17" />
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
        heading="Start The Conversation With Our Experts"
        description="Partner with MHMDAA&rsquo;s physician-led team and take the first decisive step toward building a denial-resilient, financially sustainable hospital operation."
      />
    </>
  );
}
