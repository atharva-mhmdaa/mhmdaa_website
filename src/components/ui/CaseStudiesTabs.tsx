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
          {/* HIDDEN — was href="/provider-services"; re-enable when provider-services page is reactivated */}
          {/* <Link href="/provider-services" className="btn-o" style={{ fontSize: "1rem", padding: "16px 38px", color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
            Explore Our Services
          </Link> */}
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
        background: "linear-gradient(135deg,#0d1a35 0%,#1B2A5B 50%,#0d1a35 100%)",
        borderTop: "none",
        borderBottom: "none",
      }}
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
        <p className="cases-tab-desc" style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.78)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 32px" }}>
          Each case study documents a real hospital navigating real pressures: denial backlogs, documentation gaps, and revenue loss. These are their stories, their decisions, and the outcomes that followed.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-p" style={{ fontSize: "1rem", padding: "16px 38px" }}>
            Connect with an Expert &rarr;
          </Link>
          <Link href="/services-for-providers" className="btn-o" style={{ fontSize: "1rem", padding: "16px 38px", color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Provider / Payor card shapes (built from Supabase rows) ─── */
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

interface PayorCard {
  slug: string;
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

/* ─── Case study row from Supabase (provider + payor) ─── */
export type CaseStudyKind = "provider" | "payor";

export interface CaseStudyListRow {
  kind: CaseStudyKind | null;
  title: string;
  slug: string;
  subtitle: string | null;
  description: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  metrics: { value: string; label: string }[];
  card_challenge: string | null;
  card_solution: string | null;
  card_metrics: { value: string; label: string }[] | null;
  region: string | null;
  service_type: string | null;
  published_at: string | null;
  payor_dispute_type: string | null;
  payor_representation: string | null;
  payor_scope: string | null;
  payor_case_ref: string | null;
  payor_counsel: string | null;
}

function plain(html: string | null) {
  return html ? html.replace(/<[^>]*>/g, "").slice(0, 200) : "";
}

function rowToProvider(row: CaseStudyListRow): ProviderCard {
  return {
    hospital: row.title,
    desc: row.description ?? undefined,
    tagline: row.subtitle ?? "",
    challenge: row.card_challenge ?? plain(row.challenge),
    solution: row.card_solution ?? plain(row.solution),
    metrics: row.card_metrics ?? row.metrics ?? [],
    href: `/case-studies/${row.slug}`,
    dataRegion: row.region ?? "other",
    dataService: row.service_type ?? "other",
    dataTitle: row.title,
    dataDate: row.published_at?.slice(0, 10) ?? new Date().toISOString().slice(0, 10),
  };
}

function rowToPayor(row: CaseStudyListRow): PayorCard {
  const scopeHtml = row.payor_scope ?? "";
  const scopeText = plain(scopeHtml);
  return {
    slug: row.slug,
    title: row.title,
    tagline: row.subtitle ?? undefined,
    representation: row.payor_representation ?? "",
    scope: scopeText,
    metrics: row.metrics ?? [],
    caseRef: row.payor_case_ref ?? "",
    counsel: row.payor_counsel ?? "",
    dataDtype: row.payor_dispute_type ?? "other",
    dataDate: row.published_at?.slice(0, 10) ?? new Date().toISOString().slice(0, 10),
  };
}

/* ─── Main component ─── */
export default function CaseStudiesTabs({
  caseStudies = [],
}: {
  caseStudies?: CaseStudyListRow[];
}) {
  // DEFAULT changed to "payor" — Provider tab hidden from UI (code kept for future use)
  const [activeTab, setActiveTab] = useState<"provider" | "payor">("payor");

  // Provider filters
  const [provSearch, setProvSearch] = useState("");
  const [provSort, setProvSort] = useState("default");
  const [provService, setProvService] = useState("all");

  // Payor filters
  const [paySearch, setPaySearch] = useState("");
  const [paySort, setPaySort] = useState("default");
  const [payDtype, setPayDtype] = useState("all");

  const providerRows = useMemo(
    () => caseStudies.filter((r) => r.kind !== "payor"),
    [caseStudies],
  );

  const payorRows = useMemo(
    () => caseStudies.filter((r) => r.kind === "payor"),
    [caseStudies],
  );

  /* ── Provider filtered/sorted list ── */
  const allProviders = useMemo(
    () => providerRows.map(rowToProvider),
    [providerRows],
  );

  const filteredProviders = useMemo(() => {
    const q = provSearch.toLowerCase();
    let list = allProviders.filter((c) => {
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
  }, [provSearch, provSort, provService, allProviders]);

  /* ── Payor filtered/sorted list ── */
  const filteredPayors = useMemo(() => {
    const q = paySearch.toLowerCase();
    const payorCards = payorRows.map(rowToPayor);
    let list = payorCards.filter((c) => {
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
  }, [paySearch, paySort, payDtype, payorRows]);

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
      {/* Tab bar hidden — only Payor tab remains; restore both buttons when Provider is re-activated
      <div className="cs-tab-bar">
        <div className="cs-tab-bar-inner">
          <button
            className={`cs-tab-btn${activeTab === "provider" ? " active" : ""}`}
            onClick={() => setActiveTab("provider")}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "currentColor", flexShrink: 0, display: "inline-block" }} />
            Provider Case Studies
          </button>
          <button
            className={`cs-tab-btn${activeTab === "payor" ? " active" : ""}`}
            onClick={() => setActiveTab("payor")}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "currentColor", flexShrink: 0, display: "inline-block" }} />
            Payor Case Studies
          </button>
        </div>
      </div>
      */}

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
                <span className="qnav-filter-label">Service</span>
                <div className="qnav-row2-chips">
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
                    placeholder=""
                    aria-label="Search case studies"
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
                <span className="qnav-filter-label">Dispute Type</span>
                <div className="qnav-row2-chips">
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
          </div>

          {filteredPayors.length === 0 && <NoResults />}

          <section className="section" style={{ background: "#f8fafc", padding: "72px 32px" }}>
            <div className="sc">
              <div className="sec-header c reveal" style={{ marginBottom: 48 }}>
                <div className="sec-label">Payor Case Studies</div>
                <h2 className="sec-title">
                  Expert Witness &amp; Payor <em>Representation</em>
                </h2>
                <p className="sec-sub cases-tab-desc" style={{ maxWidth: 640, margin: "0 auto" }}>
                  Physician-led expert witness engagements representing payors in complex payment
                  disputes, medical necessity arbitrations, and utilization management reviews.
                </p>
              </div>

              <div className="pay-grid cc-grid">
                {filteredPayors.map((card) => (
                  <div
                    key={card.slug}
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
                        <div className="cc-section-label" style={{ color: "#C8102E" }}>Representation</div>
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
                      <div className="cc-footer" style={{ marginTop: 8 }}>
                        <Link href={`/case-studies/${card.slug}`} className="btn-p" style={{ background: "linear-gradient(135deg,#0ea5e9,#0284c7)" }}>
                          Read Full Case Study &rarr;
                        </Link>
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
