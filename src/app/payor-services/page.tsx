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
    desc: "Analyzing medical records against evidence-based standards and providing defensible clinical rationale to prove that denied or down-coded claims failed to meet medical necessity, effectively validating the Payor\u2019s decision not to reimburse for inappropriate or over-utilized care.",
  },
  {
    num: "02",
    label: "Level-of-Care",
    title: "Site-of-Service Verification",
    desc: "Detailed clinical reviews for ICU, ICU - Intermediate Level and NICU and ambulatory/hospital surgery to verify that the intensity of services matches the severity of illness, providing the evidence-based justification needed to challenge inappropriately coded claims or unnecessary inpatient stays in high-value litigation.",
  },
  {
    num: "03",
    label: "Billing Integrity",
    title: "Contractual & Billing Integrity Analysis",
    desc: "Line Item analysis to identify clinical billing patterns or unbundled services that violate Payor-Provider agreements, providing objective evidence to defend the Payor\u2019s contractual right to withhold reimbursement for services exceeding fair market value or agreed-upon standards.",
  },
  {
    num: "04",
    label: "Regulatory Compliance",
    title: "Audit Defense & Star Rating Protection",
    desc: "Validating that appeals and grievances processes were clinically fair and compliant with payor contractual appeal standards as well as CMS and NCQA standards, thereby mitigating the risk of regulatory fines and protecting the plan\u2019s Star Ratings.",
  },
];

const services = [
  { num: "01", title: "Two Midnight Rule Compliance", slug: "two-midnight", image: "/images/index-28.jpg", teaser: "Integrate standardized review protocols into admission workflows to establish a defensible clinical narrative \u2014 preventing status-related denials before a claim is ever submitted." },
  { num: "02", title: "Inpatient vs. Observation Determination", slug: "inpatient-obs", image: "/images/index-29.jpg", teaser: "Apply rigorous threshold analysis and evidence-based benchmarking to ensure clinical evidence at the point of admission accurately supports an inpatient level of care." },
  { num: "03", title: "DRG Clinical Validation", slug: "drg-validation", image: "/images/index-30.jpg", teaser: "Proactively identifying unsupported comorbidities and sequencing discrepancies to ensure appropriate reimbursement reflect the actual acuity and resource utilization of the patient encounter." },
  { num: "04", title: "ED Facility Methodology Review", slug: "ed-facility", image: "/images/index-31.jpg", teaser: "Our ED facility\u2011level methodology aligns billing with national standards by comparing documented and billed care to ensure accurate level assignment and strengthen revenue integrity." },
  { num: "05", title: "Line-Item Coding Compliance", slug: "line-item", image: "/images/index-32.jpg", teaser: "Establish an error-resistant quality gate within the revenue cycle to align claim submissions with actual care delivered, preventing revenue leakage and ensuring billing transparency." },
  { num: "06", title: "Provider Dispute & Appeal Support", slug: "dispute-appeal", image: "/images/index-33.jpg", teaser: "Conduct independent, Physician-led, evidence-based clinical and administrative reviews to protect financial integrity against provider disputes through defensible, transparent claim determinations." },
  { num: "07", title: "Expert Medical Opinion Reports", slug: "expert-opinions", image: "/images/index-34.jpg", teaser: "Deliver authoritative, physician-led analysis for high-stakes dispute resolution, generating formal reports structured specifically for legal defensibility and regulatory scrutiny." },
  { num: "08", title: "Rebuttal Reports & Deposition Support", slug: "rebuttal", image: "/images/index-35.jpg", teaser: "Identify structural inaccuracies in opposing expert testimony through standardized, data-driven analysis \u2014 equipping legal counsel with precise, focus lines of questioning." },
  { num: "09", title: "Demonstratives & Litigation Support", slug: "demonstratives", image: "/images/index-36.jpg", teaser: "We transform complex clinical and financial information into clear, compliant visual exhibits that make technical data understandable and actionable for fact finders." },
];

const whyCards = [
  {
    accent: "linear-gradient(90deg,#1B2A5B,#2A3F7A)",
    iconBg: "rgba(27,42,91,.08)",
    iconStroke: "#2A3F7A",
    title: "Physician-Led,\nNot Algorithm-Driven",
    p1: "MHMDAA prioritizes medical judgment over automated criteria. Each case involves an independent, clinician-driven record review, team dialogue, and detailed analysis.",
    p2: "This collaborative model identifies the true clinical picture\u2014including severity, acuity, and provider intent\u2014often missed by algorithms. MHMDAA\u2019s evidence-based reasoning produces defensible analyses for arbitration, trial, and payor-level review.",
  },
  {
    accent: "linear-gradient(90deg,#C8102E,#e8334a)",
    iconBg: "rgba(200,16,46,.08)",
    iconStroke: "#C8102E",
    title: "Built for\nLegal Defensibility",
    p1: "MHMDAA work products are designed to withstand scrutiny in court, arbitration, and regulatory proceedings. Each report follows a structured narrative integrating clinical reasoning, coding integrity, and national guidelines to meet evidentiary standards for AAA, AHLA, and federal courts.",
    p2: "Every deliverable is audit- and litigation-ready, supporting adjudication and providing defensible, physician-authored analyses for payors in the event of disputes.",
  },
  {
    accent: "linear-gradient(90deg,#C8102E,#e8334a)",
    iconBg: "rgba(200,16,46,.08)",
    iconStroke: "#C8102E",
    title: "Strict\nPolicy Alignment",
    p1: "MHMDAA reviews are cross-referenced against payor-specific policies, contractual obligations, and CMS regulations. Our team maintains fluency in the criteria engines and coverage frameworks used by major payors\u2014including UnitedHealth, Cigna, BCBS, Molina, and AmeriHealth\u2014grounding every determination in precise case standards.",
    p2: "This policy-anchored approach eliminates ambiguity and fuels fewer appeals. By explicitly referencing governing criteria, denials become structurally harder to overturn. Payors benefit from airtight determinations that protect adjudication integrity and reduce downstream vulnerability.",
  },
  {
    accent: "linear-gradient(90deg,#1B2A5B,#2A3F7A)",
    iconBg: "rgba(27,42,91,.08)",
    iconStroke: "#2A3F7A",
    title: "Repeatable\nMethodology",
    p1: "MHMDAA applies a consistent, evidence-anchored framework to every case. By following standardized clinical abstraction protocols, we ensure uniform structure and quality across all reviews. This disciplined approach builds institutional trust, guaranteeing the same rigor for every case regardless of volume or complexity.",
    p2: "This consistency reduces QA overhead and enables scalable deployment during high-volume periods. Standardized protocols also generate a reliable audit trail, allowing payors to demonstrate process integrity to regulators and counsel with confidence.",
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
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(200,16,46,.18)",
              border: "1px solid rgba(200,16,46,.38)",
              color: "#f87171",
              fontSize: ".84rem",
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              padding: "6px 18px",
              borderRadius: 100,
              marginBottom: 24,
            }}
          >
            Payor Services
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem,4.5vw,3.6rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.12,
              marginBottom: 18,
              maxWidth: 720,
            }}
          >
            Defensible Medical-Legal
            <br />
            <em style={{ fontStyle: "italic", color: "#93c5fd" }}>Review for Payors</em>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,.82)",
              lineHeight: 1.85,
              marginBottom: 32,
              maxWidth: 680,
            }}
          >
            Physician-led, evidence-based analysis supporting accurate reimbursement, denial
            integrity, and successful outcomes across appeals, arbitration, and litigation. We align
            clinical evidence, coding accuracy, and regulatory standards to deliver objective,
            defensible claim determinations.
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

      {/* ── HOW WE HELP ──────────────────────────────────── */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="sc">
          <div className="sec-header c">
            <div className="sec-label">Our Value Proposition</div>
            <h2 className="sec-title">
              How We Help <em>Payor Organizations</em>
            </h2>
            <p className="sec-sub" style={{ maxWidth: 700 }}>
              Four pillars of physician-led, evidence-based analysis supporting accurate
              reimbursement, denial integrity, and successful outcomes across appeals, arbitration,
              and litigation.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: 28,
                  borderTop: `4px solid ${i % 2 === 0 ? "var(--navy)" : "var(--red)"}`,
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
                  {p.num} &mdash; {p.label}
                </div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: 10,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: "1.04rem", color: "var(--mg)", lineHeight: 1.8 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9 SERVICE TILES ──────────────────────────────── */}
      <section className="section" id="payor-services">
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
          <div className="svc-grid3">
            {services.map((s) => (
              <Link href={`/payor-services/${s.slug}`} className="svc-tile" key={s.slug}>
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <div className="svc-tile-overlay" />
                <span className="svc-tile-num">{s.num}</span>
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

      {/* ── WHY PAYORS CHOOSE US ──────────────────────────── */}
      <section className="section" style={{ background: "#2A3F7A", padding: "96px 32px" }}>
        <div className="sc">
          <div className="sec-header c" style={{ marginBottom: 56 }}>
            <div className="sec-label" style={{ color: "#f87171" }}>
              The MHMDAA Difference
            </div>
            <h2 className="sec-title" style={{ color: "#fff" }}>
              Why Payors <em style={{ color: "#93c5fd" }}>Choose Us</em>
            </h2>
            <p className="sec-sub" style={{ color: "rgba(255,255,255,.84)" }}>
              We operate at the intersection of clinical medicine, coding integrity, and legal
              strategy.
            </p>
          </div>
          <div
            className="why-payors-2col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
          >
            {whyCards.map((w) => (
              <div
                key={w.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 20,
                  padding: 40,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,.18)",
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
                    whiteSpace: "pre-line",
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
                  }}
                >
                  {w.p1}
                </p>
                <p style={{ fontSize: ".97rem", color: "#3A4D66", lineHeight: 1.82 }}>{w.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCELERATED P2P — PAYOR PERSPECTIVE ─────────── */}
      <section className="section" style={{ background: "#fff", padding: "96px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -120, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,16,46,.04) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div className="sc">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

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
                When providers initiate an Accelerated Peer-to-Peer (AP2P) review to challenge a denial, Payors need a physician reviewer who can articulate the clinical rationale with the same rigor that will hold up in arbitration or court. MHMDAA deploys board-certified specialists &mdash; matched rank-for-rank to the requesting provider &mdash; to defend clinically sound denial decisions, within 24 hours of specialist request, 7 days/week.
              </p>
              <p style={{ fontSize: "1.15rem", color: "var(--mg)", lineHeight: 1.85, marginBottom: 24 }}>
                Our physicians don&rsquo;t simply recite policy language. They engage in substantive clinical dialogue, referencing evidence-based criteria, admission standards, and nationally recognized clinical guidelines to uphold the original determination &mdash; while creating a fully documented record for downstream litigation readiness.
              </p>

              {/* Target KPIs */}
              <div style={{ fontSize: ".9rem", fontWeight: 700, letterSpacing: ".13em", textTransform: "uppercase", color: "var(--mg)", marginBottom: 10 }}>Target KPIs</div>
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

      {/* ── WHO WE SERVE / USE CASES ─────────────────────── */}
      <section className="section">
        <div className="sc">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

            {/* LEFT: Image */}
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(10,31,61,.12)" }}>
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare payor consulting team"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* RIGHT: Content */}
            <div>
              <div className="sec-label">Engagement &amp; Use Cases</div>
              <h2 className="sec-title">Who We <em>Serve</em></h2>
              <p style={{ fontSize: "1.15rem", color: "var(--mg)", lineHeight: 1.85, marginBottom: 24 }}>
                Commercial and government Payors, Medicare Advantage plans, Third-Party Administrators (TPAs), and legal counsel engaged in healthcare disputes.
              </p>
              <h4 style={{ fontSize: "1.08rem", fontWeight: 700, color: "var(--navy)", marginBottom: 14 }}>When to Engage MHMDAA:</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Denial defense requiring credible, evidence-based testimony on clinical decisions",
                  "Claims requiring Clinical Validation Audits, DRG Downgrades, Line Item Claim Analysis, and ED Facility Level Assignment Reviews",
                  "Level-of-care analysis and validation of clinical severity requirements",
                  "Claim disputes requiring clinical evidence for reimbursement",
                  "Alignment of clinical reality with administrative accuracy",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 14, background: "var(--off)", borderRadius: 10, border: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--red)", fontWeight: 800, fontSize: "1.22rem", lineHeight: 1 }}>&#10003;</span>
                    <p style={{ fontSize: "1.04rem", color: "var(--dg)", margin: 0, lineHeight: 1.65 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4-STEP REVIEW PROCESS ────────────────────────── */}
      <section className="section">
        <div className="sc">
          <div className="sec-header c">
            <div className="sec-label">Our Process</div>
            <h2 className="sec-title">
              Our 4-Step <em>Review Process</em>
            </h2>
          </div>
          <div
            className="process-grid"
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--rl)",
              overflow: "hidden",
            }}
          >
            {steps.map((s) => (
              <div className="process-step" key={s.num}>
                <div className="ps-num">{s.num}</div>
                <h4 className="ps-title">{s.title}</h4>
                <p className="ps-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────── */}
      <CTABand
        heading="Start The Conversation With Our Experts"
        description="Partner with MHMDAA's physician-led team and take the first decisive step toward building a denial-resilient, financially sustainable hospital operation."
        buttonText="Start The Conversation →"
        buttonHref="/contact"
      />
    </>
  );
}
