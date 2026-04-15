import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Healthcare Fraud Analysis | Michael Hill, MD & Associates",
  description:
    "MHMDAA Healthcare Fraud Division: Physician-led, attorney-grade forensic intelligence to detect, document, and eliminate healthcare fraud targeting health plans.",
};

const fraudStats = [
  {
    num: "$46.6M",
    plus: true,
    label: "Documented fraud within a single high-value maritime health plan.",
  },
  {
    num: "$300B",
    plus: true,
    label:
      "Estimated annual U.S. healthcare fraud (3\u201310% of total healthcare expenditure)",
  },
  {
    num: "7",
    plus: false,
    label: "Distinct fraud patterns targeting health plans",
  },
];

const phases = [
  {
    num: "1",
    title: "Intelligence Gathering",
    desc: "We begin by ingesting your claims history, provider network, and plan design, mapping the landscape before a single algorithm is applied.",
  },
  {
    num: "2",
    title: "Digital Dragnet™ Deployment",
    desc: "Our AI-driven engine applies 17 concurrent detection modules spanning billing behavior, network relationships, spatial clustering, temporal validity, and NLP-based documentation analysis.",
  },
  {
    num: "3",
    title: "Clinical Forensic Review",
    desc: "Every algorithmic flag is reviewed by physician-led clinical teams, ensuring true anomalies are distinguished from false positives through real-world clinical judgment to isolate genuine fraud from statistical noise.",
  },
  {
    num: "4",
    title: "Audit-Proof Evidence Packaging",
    desc: "We document confirmed fraud to prosecution-ready standards, enabling seamless referral to DOL-OIG, DOJ Healthcare Fraud Strike Force, and DOL-EBSA.",
  },
  {
    num: "5",
    title: "Ongoing Subscription & Continuous Protection",
    desc: "A 3-year engagement beginning with a deep-dive audit to identify client-specific needs. From there, we determine plan design adjustments, deploy the Digital Dragnet™, and transition into continuous monitoring, overpayment recovery, and escalation coordination as a standing service.",
  },
];

const detectionModules = [
  {
    iconClass: "fi-navy",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Statistical Outlier Detection",
    desc: "Applies Z-score analysis and Benford's Law to surface fabricated billing amounts and extreme deviations from peer norms.",
  },
  {
    iconClass: "fi-red",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z" />
        <path d="M4 12h16M12 4v16" />
      </svg>
    ),
    title: "Batch Billing Detection",
    desc: "Leverages Shannon entropy analysis to identify fraud mills billing the same limited set of codes across nearly every patient.",
  },
  {
    iconClass: "fi-teal",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: "Cookie-Cutter Documentation",
    desc: "Uses clinical NLP models to identify semantically identical SOAP notes across patients, indicative of templated or fabricated records.",
  },
  {
    iconClass: "fi-purple",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <path d="M14.5 9.5 17 7M9.5 14.5 7 17" />
      </svg>
    ),
    title: "Network and Travel Pattern Analytics",
    desc: "Analyzes provider networks, service locations, and timing to identify suspicious patterns, including unrealistic travel, coordinated billing activity, and hidden relationships indicative of organized fraud.",
  },
  {
    iconClass: "fi-green",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Credential Laundering Detection",
    desc: "Continuously monitors identifiers to detect terminated or excluded providers billing under borrowed identities.",
  },
  {
    iconClass: "fi-navy",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "High-Dollar Claim Review",
    desc: "Physician-led line-item review of high-dollar claims prior to payment. Each claim is evaluated for medical necessity, coding accuracy, and consistency with the member's clinical record, flagging inflated or unsupported charges before a single dollar leaves the trust fund.",
  },
];

const whyCards = [
  {
    iconClass: "fi-navy",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Physician Leadership",
    desc: "Every audit is grounded in both clinical medicine and legal strategy, ensuring we understand clinical realities and package findings to federal evidentiary standards.",
  },
  {
    iconClass: "fi-teal",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </svg>
    ),
    title: "Specialized Health Plan Expertise",
    desc: "Focused on self-insured health plans, with expertise in their structure, regulatory frameworks, and patterns of potential misuse.",
  },
  {
    iconClass: "fi-red",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "AI-Powered, Clinician-Validated",
    desc: "Our machine learning models are validated by our physician-led team, ensuring only genuine fraud proceeds to investigation.",
  },
  {
    iconClass: "fi-green",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Talent, Local Accountability",
    desc: "Our U.S.-based leadership oversees a 24/7 globally distributed analytics team operating across every time zone, delivering round-the-clock monitoring, faster investigation turnaround, and significantly lower cost than traditional domestic-only engagements. Continuous operations mean no gaps, no delays, and no missed fraud signals.",
  },
];

const compareRows = [
  {
    feature: "Clinical Expertise",
    large: "Low",
    specialized: "Low",
    offshore: "None",
    mhmdaa: "Physician-Led",
  },
  {
    feature: "Legal Rigor",
    large: "High",
    specialized: "Medium",
    offshore: "None",
    mhmdaa: "Attorney-Grade",
  },
  {
    feature: "AI/ML Analytics",
    large: "Limited",
    specialized: "None",
    offshore: "Basic",
    mhmdaa: "Seventeen Modules",
  },
  {
    feature: "Plan Specialization",
    large: "None",
    specialized: "None",
    offshore: "None",
    mhmdaa: "100% Focus",
  },
  {
    feature: "Prosecution-Ready Output",
    large: "Sometimes",
    specialized: "Rarely",
    offshore: "Never",
    mhmdaa: "Always",
  },
];

export default function HealthcareFraudAnalysisPage() {
  return (
    <>
      {/* ══ SECTION 1: HERO ══════════════════════════════════ */}
      <section
        className="fraud-hero anim-grad"
        style={{
          background:
            "linear-gradient(135deg,#1B2A5B 0%,#2A3F7A 35%,#1e3266 70%,#162247 100%)",
        }}
      >
        <div className="fraud-hgrid">
          {/* Heading block — always first */}
          <div className="fhg-text fhg-heading">
          <RevealOnScroll direction="left">
            <div className="hero-badge">
              Healthcare Fraud Analysis
            </div>
            <h1 className="fraud-title">
              The Silent Drain on{" "}
              <em style={{ color: "#fff", fontStyle: "italic" }}>
                Health Plans
              </em>
            </h1>
          </RevealOnScroll>
          </div>

          {/* Image */}
          <div className="fhg-img">
          <RevealOnScroll direction="right">
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 40px rgba(0,0,0,.35)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/fraud-hero.jpg"
                alt="Healthcare professionals reviewing fraud analysis"
                className="fraud-hero-img"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                  minHeight: "300px",
                }}
              />
            </div>
          </RevealOnScroll>
          </div>

          {/* Subtitle + desktop button block */}
          <div className="fhg-text fhg-subtitle-block">
          <RevealOnScroll direction="left">
            <p className="fraud-subtitle">
              The erosion of healthcare funds through improper claims is a
              multi-billion-dollar challenge facing America&rsquo;s workforce.
              Self-insured healthcare plans, especially those within the port
              and maritime industries, face unique risks due to their
              comprehensive benefit structures. While these issues are often
              invisible to traditional monitoring, the cumulative data highlights
              a clear need for proactive measures to secure plan assets.
            </p>
            {/* Desktop-only button */}
            <div className="cta-btns fhg-btn-desk" style={{ justifyContent: "flex-start" }}>
              <Link href="/contact" className="btn-p">
                Connect with our Experts &rarr;
              </Link>
            </div>
          </RevealOnScroll>
          </div>

          {/* Mobile-only button — below subtitle */}
          <div className="fhg-btn-mob">
            <Link href="/contact" className="btn-p">
              Connect with our Experts &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ══ KEY NUMBERS ══════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c" style={{ marginBottom: "40px" }}>
              <div className="sec-label">BY THE NUMBERS</div>
              <h2 className="sec-title" style={{ marginBottom: "0" }}>
                The Scale of the <em>Problem</em>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="fraud-stats">
              {fraudStats.map((stat) => (
                <div className="fraud-stat" key={stat.num}>
                  <div className="fraud-stat-num">
                    {stat.num}
                    {stat.plus && <span className="stat-plus">+</span>}
                  </div>
                  <div className="fraud-stat-lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <blockquote className="fraud-quote">
              High-value benefit designs, characterized by zero-copay and
              zero-deductible structures, can present unique administrative
              challenges that are often identified by entities seeking to access
              plan resources. By navigating specific oversight gaps, these
              entities utilize patterns such as unsubstantiated billing and the
              unauthorized use of member credentials to divert funds intended for
              maritime families. These activities are not limited to local port
              networks but often extend across state lines and even across the
              world. As demonstrated by the Department of Justice&rsquo;s
              &ldquo;Operation Never Say Die&rdquo; in April 2026, the methods
              used to access these funds are continually evolving. This shift
              highlights that traditional, reactive oversight may no longer be
              sufficient to protect a plan&rsquo;s long-term sustainability.
            </blockquote>
          </RevealOnScroll>

          <RevealOnScroll>
            <p
              style={{
                fontSize: "clamp(1.35rem,2.2vw,1.65rem)",
                fontWeight: 600,
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                color: "var(--red)",
                lineHeight: 1.65,
                maxWidth: "860px",
                margin: "0 auto",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              The question isn&rsquo;t whether your plan is being targeted.
              It&rsquo;s how much you&rsquo;re losing, and whether you have
              the tools to see it.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══ SECTION 2: FORENSIC STRIKE METHODOLOGY ═══════════ */}
      <section className="section" id="methodology" style={{ paddingBottom: 32 }}>
        <div className="sc">
          <div className="fs-intro-grid">
            <RevealOnScroll direction="left">
              <div className="sec-header" style={{ marginBottom: 0 }}>
                <div className="sec-label">HOW WE SOLVE IT</div>
                <h2 className="sec-title">
                  The Forensic Strike&trade;{" "}
                  <em>Methodology</em>
                </h2>
                <p className="sec-sub fraud-para-left" style={{ maxWidth: "560px" }}>
                  MHMDAA was built to give health plans the forensic intelligence
                  needed to detect, document, and eliminate healthcare fraud
                  before it drains another dollar. We combine{" "}
                  <strong>
                    physician-level clinical expertise, attorney-grade legal
                    rigor, and AI-powered data analytics
                  </strong>
                  .
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="fraud-method-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/fraud-methodology.jpg"
                  alt="MHMDAA fraud audit team reviewing case workpapers"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    minHeight: "320px",
                  }}
                />
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div
              className="fraud-3yr-block"
              style={{
                borderLeft: "4px solid var(--red)",
                paddingLeft: "24px",
                marginBottom: "40px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.45rem,2.4vw,2rem)",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "12px",
                }}
              >
                A 3-Year Subscription to{" "}
                <em style={{ fontStyle: "italic" }}>Continuous Protection</em>
              </h3>
              <p className="sec-sub fraud-para-left" style={{ maxWidth: "900px", marginBottom: 0 }}>
                The Forensic Strike&#8482; engagement is not a one-time
                audit&mdash;it is a structured, three-year subscription
                commitment designed to deliver compounding protection. The first
                phase begins with a deep-dive forensic audit to establish your
                plan&rsquo;s baseline, identify existing vulnerabilities, and
                surface active fraud patterns. From there, MHMDAA transitions
                into an ongoing monitoring and enforcement posture, continuously
                adapting to new fraud schemes as they emerge. Each year builds
                on the last, deepening our forensic intelligence of your plan,
                your providers, and your claims environment&mdash;so that the
                longer we work together, the more fraud we catch, and the more
                your plan saves.
              </p>
            </div>
          </RevealOnScroll>

          <div className="phase-grid">
            {phases.map((phase) => (
              <RevealOnScroll key={phase.num}>
                <div className="phase-card">
                  <div className="phase-num">{phase.num}</div>
                  <h4>{phase.title}</h4>
                  <p>{phase.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIGITAL DRAGNET ANALYTICS ENGINE ════════════════ */}
      <section
        className="section"
        id="analytics"
        style={{ background: "var(--off)", paddingTop: 32 }}
      >
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c">
              <div className="sec-label">AI-POWERED DETECTION</div>
              <h2 className="sec-title">
                The Digital Dragnet&trade; <em>Analytics Engine</em>
              </h2>
              <p className="sec-sub fraud-para-left" style={{ maxWidth: "740px", margin: "0 auto" }}>
                At the core of every Forensic Strike engagement is The Digital
                Dragnet&trade;, our AI-driven analytics engine purpose-built to
                detect complex fraud schemes in health plans. Seventeen detection
                modules run in parallel, designed to identify coordinated fraud
                patterns.
              </p>
            </div>
          </RevealOnScroll>

          <div className="module-grid">
            {detectionModules.map((mod) => (
              <RevealOnScroll key={mod.title}>
                <div className="module-card">
                  <div className={`module-icon ${mod.iconClass}`}>
                    {mod.icon}
                  </div>
                  <h4>{mod.title}</h4>
                  <p>{mod.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <Link href="/contact" className="btn-p">
                Connect with an Expert &rarr;
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══ SECTION 3: WHY CHOOSE MHMDAA ════════════════════ */}
      <section className="section" id="why" style={{ paddingBottom: 32 }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c">
              <div className="sec-label">WHY CHOOSE MHMDAA</div>
              <h2 className="sec-title">
                What Sets Us <em>Apart</em>
              </h2>
              <p className="sec-sub fraud-para-left" style={{ maxWidth: "720px", margin: "0 auto" }}>
                The healthcare fraud consulting landscape is crowded. Our model
                combines investigative rigor, clinical insight, and sophisticated
                data analytics purpose-built for the unique challenges of health
                plan fraud.
              </p>
            </div>
          </RevealOnScroll>

          <div className="fraud-why-grid">
            {whyCards.map((card) => (
              <RevealOnScroll key={card.title}>
                <div className="card">
                  <div className={`feat-icon ${card.iconClass}`} style={{ marginBottom: "16px" }}>
                    {card.icon}
                  </div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--navy)", marginBottom: "10px" }}>
                    {card.title}
                  </h4>
                  <p style={{ fontSize: ".97rem", color: "var(--mg)", lineHeight: 1.75 }}>
                    {card.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: PROTECT YOUR PLAN ════════════════════ */}
      <section className="section" id="protect" style={{ paddingTop: 32 }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header">
              <div className="sec-label">PROTECT YOUR PLAN</div>
              <h2 className="sec-title">
                The Most Formidable Shield for Your Plan Is{" "}
                <em>Proactive Prevention</em>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="fraud-contact-grid">
            {/* para 1 — order 1 on mobile */}
            <div className="fcp-p1">
              <RevealOnScroll direction="left">
                <p className="sec-sub fraud-para-left" style={{ maxWidth: "100%", marginBottom: "22px" }}>
                  The enforcement environment has never been more active, with
                  federal prosecutors securing longer sentences and recovering
                  larger sums. However, enforcement is reactive; by the time a
                  case reaches prosecution, millions have already been lost.
                </p>
              </RevealOnScroll>
            </div>

            {/* image — order 2 on mobile, spans right col on desktop */}
            <div className="fcp-img">
              <RevealOnScroll direction="right">
                <div className="fraud-protect-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/fraud-protect.jpg"
                    alt="MHMDAA team reviewing AI fraud detection analytics dashboard"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      minHeight: "280px",
                    }}
                  />
                </div>
              </RevealOnScroll>
            </div>

            {/* paras 2 & 3 + desktop button — order 3 on mobile */}
            <div className="fcp-p2">
              <RevealOnScroll direction="left">
                <p className="sec-sub fraud-para-left" style={{ maxWidth: "100%", marginBottom: "22px" }}>
                  <strong style={{ color: "var(--navy)" }}>
                    Your plan&rsquo;s most valuable defense is prevention
                  </strong>
                  : identifying fraud at the point of claim submission, before a
                  single dollar leaves the trust fund.
                </p>
                <p className="sec-sub fraud-para-left" style={{ maxWidth: "100%", marginBottom: "36px" }}>
                  If your plan pays claims without forensic oversight, you are
                  losing money to fraud. The only question is how much.
                </p>
                {/* Desktop-only button */}
                <Link href="/contact" className="btn-p fraud-protect-btn-desk">
                  Connect with an Expert &rarr;
                </Link>
              </RevealOnScroll>
            </div>

            {/* Mobile-only button — order 4 */}
            <div className="fcp-btn">
              <Link href="/contact" className="btn-p">
                Connect with an Expert &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
