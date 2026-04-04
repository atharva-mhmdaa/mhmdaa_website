"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";

/* ─── CTA Bands ─── */
function ProviderCTA() {
  return (
    <div
      className="cta-band"
      style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#0a1628 0%,#1B2A5B 55%,#0a1628 100%)", borderTop: "none", borderBottom: "none" }}
    >
      <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle,rgba(200,16,46,.12) 0%,transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, background: "radial-gradient(circle,rgba(255,255,255,.04) 0%,transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div className="cta-inner">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(200,16,46,.15)",
            border: "1px solid rgba(200,16,46,.35)",
            borderRadius: 100,
            padding: "6px 18px",
            fontSize: ".78rem",
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase" as const,
            color: "#f87171",
            marginBottom: 22,
          }}
        >
          &#9679;&nbsp; Real Hospitals. Real Results.
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 18,
          }}
        >
          Hospitals Navigating Real Challenges.{" "}
          <em style={{ color: "#f87171", fontStyle: "italic" }}>Real Outcomes.</em>
        </h2>
        <p style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.78)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 32px" }}>
          Each case study below documents a real hospital navigating real pressures: denial backlogs, documentation gaps, and revenue loss. These are their stories, their decisions, and the outcomes that followed.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-p" style={{ fontSize: "1rem", padding: "16px 38px" }}>
            Connect with an Expert &rarr;
          </Link>
          <Link href="/services" className="btn-o" style={{ fontSize: "1rem", padding: "16px 38px", color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}

function PayorCTA() {
  return (
    <div
      className="cta-band"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg,#0c2340 0%,#1a4a7a 55%,#0c2340 100%)",
      }}
    >
      <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle,rgba(14,165,233,.12) 0%,transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, background: "radial-gradient(circle,rgba(255,255,255,.04) 0%,transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div className="cta-inner">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(14,165,233,.15)",
            border: "1px solid rgba(14,165,233,.35)",
            borderRadius: 100,
            padding: "6px 18px",
            fontSize: ".78rem",
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase" as const,
            color: "#7dd3fc",
            marginBottom: 22,
          }}
        >
          &#9679;&nbsp; Expert Witness &amp; Payor Defense
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 18,
          }}
        >
          Facing a Complex Dispute?{" "}
          <em style={{ color: "#7dd3fc", fontStyle: "italic" }}>We&rsquo;ve Been There</em>
        </h2>
        <p style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.78)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 32px" }}>
          From AAA and AHLA arbitrations to AHCA administrative proceedings, our physician experts have testified in the nation&rsquo;s most complex payor disputes. Let us bring that forensic rigor to your case.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-p" style={{ fontSize: "1rem", padding: "16px 38px", background: "linear-gradient(135deg,#0ea5e9,#0284c7)" }}>
            Engage Our Expert Team &rarr;
          </Link>
          <Link href="/payor-services" className="btn-o" style={{ fontSize: "1rem", padding: "16px 38px", color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
            Payor Services
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "32px",
            marginTop: 48,
            borderTop: "1px solid rgba(255,255,255,.1)",
            paddingTop: 32,
          }}
        >
          {[
            { val: "12,500+", lbl: "Claims Reviewed" },
            { val: "125+", lbl: "Expert Engagements" },
            { val: "190+", lbl: "National Clients" },
            { val: "250+", lbl: "Expert Depositions" },
          ].map((s, i) => (
            <div
              key={s.lbl}
              style={{
                textAlign: "center",
                paddingLeft: i > 0 ? 32 : 0,
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,.15)" : "none",
              }}
            >
              <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                {s.val}
              </div>
              <div style={{ fontSize: ".82rem", color: "rgba(255,255,255,.6)", fontWeight: 600, marginTop: 6 }}>
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Provider data ─── */
interface ProviderCard {
  hospital: string;
  desc?: string;
  tagline: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  href: string;
  dataRegion: string;
  dataService: string;
  dataTitle: string;
  dataDate: string;
}

const PROVIDER_CASES: ProviderCard[] = [
  {
    hospital: "Southern US Regional Integrated Health System",
    tagline: "Emergency Department Transformation & Capacity Optimization",
    challenge:
      "Lack of inpatient bed capacity, ED inefficiencies, and long wait times eroding patient volume and satisfaction.",
    solution:
      "MHMDAA redesigned patient care processes end-to-end, building a collaborative operational culture that aligned clinical and administrative leadership.",
    metrics: [
      { value: "20%", label: "LOS Reduction" },
      { value: "4.2d", label: "Inpatient LOS" },
      { value: "95th+", label: "Satisfaction %ile" },
    ],
    href: "/case-studies/thp",
    dataRegion: "texas",
    dataService: "ed-transformation",
    dataTitle: "Southern US Regional Integrated Health System",
    dataDate: "2023-06-01",
  },
  {
    hospital: "Pacific Northwest Magnet-Designated Medical Center",
    desc: "~300\u2013400 Bed \u00a0\u00b7\u00a0 Level II Trauma Center \u00a0\u00b7\u00a0 High-Volume Emergency Department",
    tagline: "Functional Capacity Expansion & Patient Flow Optimization",
    challenge:
      "Unprecedented service demands across three primary sectors with urgent need to reduce LOS and cut throughput times for admission and discharge.",
    solution:
      "Deployed MHMDAA\u2019s proprietary Accountable Hospital Operations prototype to re-engineer patient flow from front door through discharge.",
    metrics: [
      { value: "100+", label: "New Functional Beds" },
      { value: "64%", label: "Faster ED Access" },
      { value: "+16%", label: "Annual ED Volume" },
    ],
    href: "/case-studies/sjh",
    dataRegion: "pacific-northwest",
    dataService: "capacity-expansion",
    dataTitle: "Pacific Northwest Magnet-Designated Medical Center",
    dataDate: "2022-09-01",
  },
  {
    hospital: "Leading Pediatric & Adult Regional Medical Center",
    tagline: "Enterprise-Wide Hospital Operations Redesign",
    challenge:
      "Low patient satisfaction, ambulance diversion, low reimbursement, and uncompensated care \u2014 systemic dysfunction spanning ED, inpatient, and perioperative services.",
    solution:
      "Multi-year broad-scale redesign of ED, inpatient, and perioperative operations with front-line staff, supported by innovative technology systems for transparency and accountability.",
    metrics: [
      { value: "94%", label: "Fewer Left Untreated" },
      { value: "+33%", label: "Monthly ED Volume" },
      { value: "Top Quartile", label: "Patient Experience" },
    ],
    href: "/case-studies/shmc",
    dataRegion: "regional",
    dataService: "operations-redesign",
    dataTitle: "Leading Pediatric & Adult Regional Medical Center",
    dataDate: "2021-04-01",
  },
  {
    hospital: "West Coast Faith-Based Non-Profit",
    desc: "~278-Bed Integrated Community Hospital \u00a0\u00b7\u00a0 Regional Care Network Affiliate \u00a0\u00b7\u00a0 Transfer-Dependent Network Hospital",
    tagline: "LOS Reduction & Transfer Capacity Optimization",
    challenge:
      "High inpatient LOS, ED crowding, and an inability to accept external transfers due to persistent capacity constraints in this 278-bed faith-based institution.",
    solution:
      "Hospital Collaborative Care engagement \u2014 comprehensive integrated approach with hospitalists and specialists to drive AM discharge culture and restore transfer capacity.",
    metrics: [
      { value: "0.75d", label: "IP LOS Reduction" },
      { value: "54%+", label: "AM Discharge Orders" },
      { value: "+25%", label: "Transfers Accepted" },
    ],
    href: "/case-studies/srm",
    dataRegion: "california",
    dataService: "los-reduction",
    dataTitle: "West Coast Faith-Based Non-Profit",
    dataDate: "2022-02-01",
  },
];

/* ─── Payor data ─── */
interface PayorCard {
  title: string;
  tagline?: string;
  representation: string;
  scope: string;
  metrics: { value: string; label: string }[];
  caseRef: string;
  counsel: string;
  dataDtype: string;
  dataDate: string;
}

const PAYOR_CASES: PayorCard[] = [
  {
    title: "EMTALA Medical Necessity & Post-Stabilization Admissions",
    representation: "Payor - National Healthcare Law Group",
    scope: "Retained by a national healthcare law group to serve as the medical expert in a payor\u2019s defense during a coordinated arbitration proceeding before the American Arbitration Association (AAA). Reviewed approximately 950 hospital admissions and authored a comprehensive expert report addressing medical necessity, post-stabilization inpatient admissions, and EMTALA obligations. Prepared and delivered expert rebuttal to the opposing hospital\u2019s clinical arguments.",
    metrics: [
      { value: "950", label: "Admissions Reviewed" },
      { value: "3-Day", label: "Arbitration" },
      { value: "AAA", label: "Forum" },
    ],
    caseRef: "AAA Coordinated Arbitration Proceeding - California Medical Necessity Review",
    counsel: "National Healthcare Law Group",
    dataDtype: "medical-necessity",
    dataDate: "2022-01-01",
  },
  {
    title: "Claims Reimbursement Appropriateness Dispute",
    representation: "Payor - Regional Healthcare Law Firm",
    scope: "Engaged as the medical expert by a regional healthcare law firm representing a payor in an arbitration proceeding before the American Arbitration Association (AAA). Reviewed 138 disputed claims, produced a detailed expert report, appeared as a testifying expert at arbitration, and authored rebuttal of the opposing hospital\u2019s expert opinions.",
    metrics: [
      { value: "138", label: "Claims Reviewed" },
      { value: "AAA", label: "Forum" },
      { value: "Payor", label: "Represented" },
    ],
    caseRef: "AAA Arbitration Proceeding - Claims Reimbursement Review",
    counsel: "Regional Healthcare Law Firm",
    dataDtype: "payment-dispute",
    dataDate: "2021-01-01",
  },
  {
    title: "Medical Necessity, NICU Care Levels & Claims Reimbursement",
    representation: "Payor - Southwest Regional Law Firm",
    scope: "Retained as the medical expert by a southwest regional law firm representing a payor in an arbitration before the American Arbitration Association (AAA). Reviewed 230 patient cases, authored medical summaries for each, produced a comprehensive expert report, and appeared for expert deposition.",
    metrics: [
      { value: "230", label: "Patients Reviewed" },
      { value: "AAA", label: "Forum" },
      { value: "Payor", label: "Represented" },
    ],
    caseRef: "AAA Arbitration Proceeding - NICU Medical Necessity Review",
    counsel: "Southwest Regional Law Firm",
    dataDtype: "medical-necessity",
    dataDate: "2022-01-01",
  },
  {
    title: "ED Claim Authorizations, DRG Downgrades & Excessive Charge Denials",
    representation: "Payor - National Healthcare Law Group",
    scope: "Retained as the medical expert by a national healthcare law group representing a payor in an arbitration before the American Health Lawyers Association (AHLA). Reviewed 172 disputed claims spanning ED authorizations, down codes and DRG downgrades, pre-payment reviews, and excessive charge adjudications. Produced expert report and prepared for expert testimony.",
    metrics: [
      { value: "172", label: "Claims Reviewed" },
      { value: "AHLA", label: "Forum" },
      { value: "Payor", label: "Represented" },
    ],
    caseRef: "AHLA Arbitration Proceeding - ED Authorization & DRG Review",
    counsel: "National Healthcare Law Group",
    dataDtype: "payment-dispute",
    dataDate: "2023-01-01",
  },
  {
    title: "High-Dollar Outlier Claim Adjudication - Managed Medicaid",
    representation: "Payor - Florida Healthcare Law Firm",
    scope: "Retained as the medical expert by a Florida healthcare law firm representing a payor in an administrative proceeding before AHCA. Produced expert report covering clinical medical necessity, line-item bill analysis, clinical summary, and rebuttal addressing the payor\u2019s adjudication of a high-dollar outlier claim under a managed Medicaid contract.",
    metrics: [
      { value: "Outlier", label: "Claim Complexity" },
      { value: "AHCA", label: "Forum" },
      { value: "Payor", label: "Represented" },
    ],
    caseRef: "AHCA Administrative Proceeding - Outlier Claim Adjudication",
    counsel: "Florida Healthcare Law Firm",
    dataDtype: "medical-necessity",
    dataDate: "2026-01-01",
  },
  {
    title: "Corporate Integrity Agreement - IRO Review",
    tagline: "Independent Review Organization Physician UM Leadership",
    representation: "Payor (Corporate Integrity Agreement)",
    scope: "Appointed Physician UM Leader under a Corporate Integrity Agreement for Independent Review Organization (IRO). Responsibilities encompassed claims review, physician arrangement review, quality assurance, physician training and education, and investigative oversight across a nationwide portfolio.",
    metrics: [
      { value: "IRO", label: "Designation" },
      { value: "Nationwide", label: "Scope" },
      { value: "UM Lead", label: "Role" },
    ],
    caseRef: "Corporate Integrity Agreement - Independent Review Organization (IRO)",
    counsel: "Independent Review Organization",
    dataDtype: "utilization-mgmt",
    dataDate: "2020-01-01",
  },
  {
    title: "No-Fault Auto Insurance - Emergency Medical Condition Determination",
    representation: "Florida Auto Insurance Carrier",
    scope: "Retained by a Florida auto insurance carrier to serve as the medical expert in a \u201cNo Fault\u201d statute review. Produced an expert report and comprehensive claim summary addressing the determination of an Emergency Medical Condition (EMC) under Florida No-Fault Insurance law.",
    metrics: [
      { value: "No-Fault", label: "Statute" },
      { value: "EMC", label: "Determination" },
      { value: "Auto Carrier", label: "Represented" },
    ],
    caseRef: "Florida Auto Insurance - No Fault Statute Expert Review",
    counsel: "Florida Auto Insurance Carrier (In-House Counsel)",
    dataDtype: "auto-insurance",
    dataDate: "2023-06-01",
  },
];

/* ─── Filter chip definitions ─── */
const PROVIDER_SERVICE_CHIPS = [
  { filter: "all", label: "All Services" },
  { filter: "ed-transformation", label: "ED Transformation" },
  { filter: "capacity-expansion", label: "Capacity Expansion" },
  { filter: "operations-redesign", label: "Operations Redesign" },
  { filter: "los-reduction", label: "LOS Reduction" },
];

const PAYOR_DTYPE_CHIPS = [
  { filter: "all", label: "All Types" },
  { filter: "payment-dispute", label: "Payment Dispute" },
  { filter: "medical-necessity", label: "Medical Necessity" },
  { filter: "utilization-mgmt", label: "Utilization Management" },
  { filter: "auto-insurance", label: "Auto Insurance" },
];

/* ─── Search icon SVG ─── */
function SearchIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="#1B2A5B" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

/* ─── No-results block ─── */
function NoResults() {
  return (
    <div className="qnav-no-results" style={{ display: "block" }}>
      <svg width="40" height="40" fill="none" stroke="#64748b" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1B2A5B", marginBottom: 6 }}>
        No results found
      </div>
      <div>Try a different search term or clear your filters.</div>
    </div>
  );
}

/* ─── Main component ─── */
export default function CaseStudiesTabs() {
  const [activeTab, setActiveTab] = useState<"provider" | "payor">("provider");

  // Provider filters
  const [provSearch, setProvSearch] = useState("");
  const [provSort, setProvSort] = useState("default");
  const [provService, setProvService] = useState("all");

  // Payor filters
  const [paySearch, setPaySearch] = useState("");
  const [paySort, setPaySort] = useState("default");
  const [payDtype, setPayDtype] = useState("all");

  /* ── Provider filtered/sorted list ── */
  const filteredProviders = useMemo(() => {
    const q = provSearch.toLowerCase();
    let list = PROVIDER_CASES.filter((c) => {
      const svcOk = provService === "all" || c.dataService === provService;
      const searchOk =
        !q ||
        c.dataTitle.toLowerCase().includes(q) ||
        c.hospital.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.challenge.toLowerCase().includes(q) ||
        c.solution.toLowerCase().includes(q);
      return svcOk && searchOk;
    });
    if (provSort === "newest") {
      list = [...list].sort((a, b) => b.dataDate.localeCompare(a.dataDate));
    } else if (provSort === "az") {
      list = [...list].sort((a, b) => a.dataTitle.localeCompare(b.dataTitle));
    }
    return list;
  }, [provSearch, provSort, provService]);

  /* ── Payor filtered/sorted list ── */
  const filteredPayors = useMemo(() => {
    const q = paySearch.toLowerCase();
    let list = PAYOR_CASES.filter((c) => {
      const dtOk = payDtype === "all" || c.dataDtype === payDtype;
      const searchOk =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.scope.toLowerCase().includes(q) ||
        c.representation.toLowerCase().includes(q);
      return dtOk && searchOk;
    });
    if (paySort === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [paySearch, paySort, payDtype]);

  /* Observe .reveal elements inside this component */
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const els = root.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("v"); obs.unobserve(e.target); } }),
      { threshold: 0.08 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [activeTab, filteredProviders, filteredPayors]);

  return (
    <div ref={containerRef}>
      {/* ═══ TAB BAR ═══ */}
      <div className="cs-tab-bar">
        <div className="cs-tab-bar-inner">
          <button
            className={`cs-tab-btn${activeTab === "provider" ? " active" : ""}`}
            onClick={() => setActiveTab("provider")}
          >
            🏠 Provider Case Studies
          </button>
          <button
            className={`cs-tab-btn${activeTab === "payor" ? " active" : ""}`}
            onClick={() => setActiveTab("payor")}
          >
            ⚖️ Payor Case Studies
          </button>
        </div>
      </div>

      {/* ═══ PROVIDER TAB ═══ */}
      {activeTab === "provider" && (
        <div>
          {/* Quick-nav toolbar */}
          <div className="qnav-wrap" role="search" aria-label="Filter and sort case studies" style={{ position: "relative" }}>
            <div className="qnav-inner">
              <div className="qnav-row1">
                <div className="qnav-search-wrap">
                  <SearchIcon />
                  <input
                    className="qnav-search"
                    type="search"
                    placeholder="Search case studies..."
                    aria-label="Search case studies"
                    value={provSearch}
                    onChange={(e) => setProvSearch(e.target.value)}
                  />
                </div>
                <div className="qnav-sort-wrap">
                  <span className="qnav-sort-label">Sort by</span>
                  <select
                    className="qnav-sort"
                    aria-label="Sort case studies"
                    value={provSort}
                    onChange={(e) => setProvSort(e.target.value)}
                  >
                    <option value="default">Featured</option>
                    <option value="newest">Most Recent</option>
                    <option value="az">Name A–Z</option>
                  </select>
                </div>
                <span className="qnav-count">
                  {filteredProviders.length}{" "}
                  {filteredProviders.length === 1 ? "case study" : "case studies"}
                </span>
              </div>
              <div className="qnav-row2">
                <span className="qnav-filter-label">Service:</span>
                {PROVIDER_SERVICE_CHIPS.map((chip) => (
                  <button
                    key={chip.filter}
                    className={`qnav-chip${provService === chip.filter ? " active" : ""}`}
                    onClick={() => setProvService(chip.filter)}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredProviders.length === 0 && <NoResults />}

          <section className="section" style={{ background: "#f8fafc" }}>
            <div className="sc">
              <div className="sec-header c reveal" style={{ marginBottom: 48 }}>
                <div className="sec-label">Client Engagements</div>
                <h2 className="sec-title">
                  Hospital <em>Transformation</em> Stories
                </h2>
                <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
                  Each engagement is led by MHMDAA physicians embedded at the front line, delivering
                  outcomes measurable in days, beds, and dollars.
                </p>
              </div>

              <div className="cc-grid">
                {filteredProviders.map((card) => (
                  <div
                    key={card.href}
                    className="cc-card reveal"
                    data-region={card.dataRegion}
                    data-service={card.dataService}
                    data-title={card.dataTitle}
                    data-date={card.dataDate}
                  >
                    <div className="cc-header">
                      <div className="cc-hosp">{card.hospital}</div>
                      {card.desc && <div className="cc-desc">{card.desc}</div>}
                      <div className="cc-tagline">{card.tagline}</div>
                    </div>
                    <div className="cc-body">
                      <div className="cc-section">
                        <div className="cc-section-label">The Challenge</div>
                        <div className="cc-section-text">{card.challenge}</div>
                      </div>
                      <div className="cc-section">
                        <div className="cc-section-label">The Solution</div>
                        <div className="cc-section-text">{card.solution}</div>
                      </div>
                      <div className="cc-metrics">
                        {card.metrics.map((m) => (
                          <div className="cc-metric" key={m.label}>
                            <div className="cc-metric-val">{m.value}</div>
                            <div className="cc-metric-lbl">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="cc-footer">
                        <Link href={card.href} className="btn-p">
                          Read Full Case Study &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ProviderCTA />
        </div>
      )}

      {/* ═══ PAYOR TAB ═══ */}
      {activeTab === "payor" && (
        <div>
          {/* Payor quick-nav toolbar */}
          <div className="qnav-wrap" role="search" aria-label="Filter payor case studies" style={{ position: "relative" }}>
            <div className="qnav-inner">
              <div className="qnav-row1">
                <div className="qnav-search-wrap">
                  <SearchIcon />
                  <input
                    className="qnav-search"
                    type="search"
                    placeholder="Search payor cases..."
                    aria-label="Search payor cases"
                    value={paySearch}
                    onChange={(e) => setPaySearch(e.target.value)}
                  />
                </div>
                <div className="qnav-sort-wrap">
                  <span className="qnav-sort-label">Sort by</span>
                  <select
                    className="qnav-sort"
                    aria-label="Sort payor cases"
                    value={paySort}
                    onChange={(e) => setPaySort(e.target.value)}
                  >
                    <option value="default">Featured</option>
                    <option value="az">Name A–Z</option>
                  </select>
                </div>
                <span className="qnav-count">
                  {filteredPayors.length} {filteredPayors.length === 1 ? "case" : "cases"}
                </span>
              </div>
              <div className="qnav-row2">
                <span className="qnav-filter-label">Dispute Type:</span>
                {PAYOR_DTYPE_CHIPS.map((chip) => (
                  <button
                    key={chip.filter}
                    className={`qnav-chip${payDtype === chip.filter ? " active" : ""}`}
                    onClick={() => setPayDtype(chip.filter)}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredPayors.length === 0 && <NoResults />}

          <section className="section" style={{ background: "#f8fafc", padding: "72px 32px" }}>
            <div className="sc">
              <div className="sec-header c reveal" style={{ marginBottom: 48 }}>
                <div className="sec-label">Payor Case Studies</div>
                <h2 className="sec-title">
                  Expert Witness &amp; Payor <em>Representation</em>
                </h2>
                <p className="sec-sub" style={{ maxWidth: 640, margin: "0 auto" }}>
                  Physician-led expert witness engagements representing payors in complex payment
                  disputes, medical necessity arbitrations, and utilization management reviews.
                </p>
              </div>

              <div className="pay-grid cc-grid">
                {filteredPayors.map((card) => (
                  <div
                    key={card.title}
                    className="pay-card cc-card reveal"
                    data-dtype={card.dataDtype}
                    data-title={card.title}
                    data-date={card.dataDate}
                  >
                    <div
                      className="cc-header"
                      style={{
                        background: "linear-gradient(135deg,#0c2340 0%,#1a4a7a 100%)",
                      }}
                    >
                      <div className="cc-hosp" style={{ marginTop: 10 }}>
                        {card.title}
                      </div>
                      {card.tagline && <div className="cc-tagline">{card.tagline}</div>}
                    </div>
                    <div className="cc-body">
                      <div className="cc-section">
                        <div className="cc-section-label" style={{ color: "#C8102E" }}>Payor Type</div>
                        <div
                          className="cc-section-text"
                          style={{ fontWeight: 700, color: "#1B2A5B" }}
                        >
                          {card.representation}
                        </div>
                      </div>
                      <div className="cc-section">
                        <div className="cc-section-label" style={{ color: "#C8102E" }}>Scope of Work</div>
                        <div className="cc-section-text">{card.scope}</div>
                      </div>
                      <div className="cc-metrics">
                        {card.metrics.map((m) => (
                          <div className="cc-metric" key={m.label}>
                            <div className="cc-metric-val">{m.value}</div>
                            <div className="cc-metric-lbl">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="cc-section" style={{ marginTop: 12 }}>
                        <div className="cc-section-label" style={{ color: "#C8102E" }}>Case Reference</div>
                        <div
                          className="cc-section-text"
                          style={{ fontSize: ".88rem", color: "#5A6E8A", fontStyle: "italic" }}
                        >
                          {card.caseRef}
                        </div>
                      </div>
                      <div className="cc-section">
                        <div className="cc-section-label" style={{ color: "#C8102E" }}>Legal Counsel</div>
                        <div
                          className="cc-section-text"
                          style={{ fontWeight: 600, color: "#1B2A5B" }}
                        >
                          {card.counsel}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <PayorCTA />
        </div>
      )}
    </div>
  );
}
