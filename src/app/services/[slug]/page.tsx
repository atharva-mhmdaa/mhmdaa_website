import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CTABand from "@/components/ui/CTABand";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import BreadcrumbNavScroller from "@/components/ui/BreadcrumbNavScroller";
import {
  providerServices,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/provider-services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return { title: "Service Not Found" };
  return {
    title: svc.title,
    description: svc.description,
  };
}

const featureIconClass: Record<string, string> = {
  navy: "fi-navy",
  red: "fi-red",
  teal: "fi-teal",
  green: "fi-green",
  purple: "fi-purple",
};

const featureEmoji: Record<string, string> = {
  navy: "📋",
  red: "🎯",
  teal: "🔗",
  green: "✅",
  purple: "💎",
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const prevSvc = svc.prevSlug ? getServiceBySlug(svc.prevSlug) : null;
  const nextSvc = svc.nextSlug ? getServiceBySlug(svc.nextSlug) : null;

  return (
    <>
      {/* Hero */}
      <section
        className="sd-hero"
        style={{
          background:
            "linear-gradient(135deg, #1B2A5B 0%, #2A3F7A 55%, #1B2A5B 100%)",
        }}
      >
        <div className="sd-hgrid">
          <div>
            <h1 className="sd-title">{svc.title}</h1>
            <p className="sd-desc">{svc.heroDescription}</p>
            <Link href="/services" className="sd-hero-cta">
              Explore All Services →
            </Link>
          </div>
          <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", aspectRatio: "4/3" }}>
            <Image
              src={svc.heroImage}
              alt={svc.title}
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Service Breadcrumb Nav */}
      <nav className="svc-breadcrumb-nav" aria-label="Service navigation">
        <div className="svc-breadcrumb-inner">
          {providerServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`svc-breadcrumb-item${s.slug === slug ? " active" : ""}`}
            >
              {s.shortTitle}
            </Link>
          ))}
        </div>
      </nav>
      <BreadcrumbNavScroller />

      {/* Claim Submission – At a Glance Diagram */}
      {slug === "claim-submission" && (
        <div className="ig-wrap">
          <div className="ig-header" role="button" aria-label="Claim Submission service overview">
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <span className="ig-title">Claim Submission</span>
            </div>
          </div>
          <div className="ig-body" style={{ maxWidth: "none", padding: 0 }}>
            <div className="ig-card" style={{ background: "#ffffff", borderRadius: "0 0 12px 12px", overflow: "hidden", fontFamily: "'Inter',sans-serif" }}>
              {/* Header */}
              <div className="ig-card-header" style={{ background: "#f0f4ff", padding: "28px 40px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #C8102E" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div style={{ width: 48, height: 48, background: "#eef2fb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                  </div>
                  <div>
                    <div className="ig-card-title" style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2A3F7A", lineHeight: 1.1 }}>Claim Submission</div>
                    <div style={{ fontSize: ".96rem", color: "#344e7a", marginTop: 3 }}>Pre-Submission Model</div>
                  </div>
                </div>
              </div>
              {/* Pre-Submission Workflow */}
              <div className="ig-card-section" style={{ padding: "28px 40px 0" }}>
                <div className="ig-section-label" style={{ fontSize: ".98rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#2A3F7A", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 3, height: 14, background: "#C8102E", display: "inline-block", borderRadius: 2 }} />
                  Pre-Submission Workflow
                </div>
                <div className="ig-steps-row" style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
                  {[
                    ["1","Policy Mapping","Every procedure mapped to exact payor documentation requirements.",false],
                    ["2","Clinical Validation","Clinical documentation is validated before the record is closed.",false],
                    ["3","Hard-Stop Edits","Logical triggers block submission if payor criteria are not 100% met.",false],
                  ].map(([num, title, desc], i) => (
                    <React.Fragment key={num as string}>
                      <div className="ig-step-card" style={{ flex: 1, background: "#eef2fb", border: "1px solid rgba(42,63,122,0.12)", borderRadius: 10, padding: 16 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2A3F7A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".98rem", fontWeight: 800, color: "#fff", flexShrink: 0 }}>{num}</div>
                          <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#2A3F7A" }}>{title}</div>
                        </div>
                        <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.5 }}>{desc}</div>
                      </div>
                      <div className="ig-arrow" style={{ color: "#C8102E", fontSize: "1.2rem", alignSelf: "center" }}>›</div>
                    </React.Fragment>
                  ))}
                  {/* Clean Claim – highlighted */}
                  <div className="ig-step-card" style={{ flex: 1, background: "rgba(200,16,46,0.06)", border: "2px solid #C8102E", borderRadius: 10, padding: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#C8102E" }}>Clean Claim</div>
                    </div>
                    <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.5 }}>Compliant, complete, and optimized for first-pass acceptance.</div>
                  </div>
                </div>
              </div>
              {/* Before / After */}
              <div className="ig-card-section" style={{ padding: "20px 40px" }}>
                <div className="ig-cards-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ background: "#eef2fb", borderRadius: 12, padding: "24px 28px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#C8102E", border: "3px solid #C8102E", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px rgba(200,16,46,0.35)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                      </div>
                      <div style={{ fontSize: ".98rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "#344e7a" }}>BEFORE</div>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                      {["Retrospective — errors caught post-submission","Manual review, appeal-focused recovery","High denial rate, high rework cost"].map(t => (
                        <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: ".98rem", color: "#344e7a" }}>
                          <span style={{ color: "#C8102E", fontWeight: 700, flexShrink: 0 }}>•</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: "rgba(22,163,74,0.06)", border: "2px solid #16a34a", borderRadius: 12, padding: "24px 28px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#16a34a", border: "3px solid #16a34a", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px rgba(22,163,74,0.35)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div style={{ fontSize: ".98rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "#16a34a" }}>AFTER</div>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                      {["Prospective — errors blocked before submission","AI-driven scrubbing, compliance-focused","Workflow integrity, faster revenue cycle"].map(t => (
                        <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: ".98rem", color: "#344e7a" }}>
                          <span style={{ color: "#C8102E", fontWeight: 700, flexShrink: 0 }}>•</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="ig-card-footer" style={{ background: "#f0f4ff", padding: "18px 40px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid rgba(42,63,122,0.1)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                <span style={{ fontSize: "1.04rem", color: "#2A3F7A" }}><strong>Fix the claim before it ever leaves the building.</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Coding – At a Glance Diagram */}
      {slug === "coding" && (
        <div className="ig-wrap">
          <div className="ig-header" role="button" aria-label="Coding service overview">
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <span className="ig-title">Coding &amp; Clinical Documentation Improvement (CDI)</span>
            </div>
          </div>
          <div className="ig-body" style={{ maxWidth: "none", padding: 0 }}>
            <div className="ig-card" style={{ background: "#ffffff", borderRadius: "0 0 12px 12px", overflow: "hidden", fontFamily: "'Inter',sans-serif" }}>
              {/* Header */}
              <div className="ig-card-header" style={{ background: "#f0f4ff", padding: "28px 40px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #C8102E" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div style={{ width: 48, height: 48, background: "#eef2fb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                  <div>
                    <div className="ig-card-title" style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2A3F7A", lineHeight: 1.1 }}>Coding</div>
                    <div style={{ fontSize: ".96rem", color: "#344e7a", marginTop: 3 }}>S.O.R.T. Framework — Repeatable Methodology</div>
                  </div>
                </div>
              </div>
              {/* 5-Step Lifecycle */}
              <div className="ig-card-section" style={{ padding: "28px 40px 0" }}>
                <div className="ig-section-label" style={{ fontSize: ".98rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#2A3F7A", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 3, height: 14, background: "#C8102E", display: "inline-block", borderRadius: 2 }} />
                  5-Step Methodology Lifecycle
                </div>
                <div className="ig-steps-row ig-timeline-steps" style={{ display: "flex", alignItems: "flex-start", gap: 4 }}>
                  {[["1","Intake"],["2","Identify Criteria"],["3","Gap Analysis"],["4","Expert Clinical Review"],["5","QA"]].map(([num, label], i, arr) => (
                    <React.Fragment key={num}>
                      <div className="ig-step-item" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#2A3F7A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.02rem", fontWeight: 800, color: "#fff" }}>{num}</div>
                        <div style={{ fontSize: ".96rem", fontWeight: 700, color: "#2A3F7A", textAlign: "center" }}>{label}</div>
                      </div>
                      {i < arr.length - 1 && <div className="ig-arrow" style={{ color: "#C8102E", fontSize: "1.2rem", alignSelf: "flex-start", marginTop: 12, flexShrink: 0 }}>›</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {/* S.O.R.T. Cards */}
              <div className="ig-card-section" style={{ padding: "20px 40px" }}>
                <div className="ig-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
                  {[
                    ["S","Summary","Executive overview of patient condition and requested service."],
                    ["O","Objective Facts","Data only — vitals, lab values, imaging findings. No opinion."],
                    ["R","Reference","Cite the specific policy, LCD, MCG, or national guideline."],
                    ["T","Transparent Logic","Show exactly how facts lead to the Approved or Denied conclusion."],
                  ].map(([letter, title, desc]) => (
                    <div key={letter} style={{ background: "#eef2fb", borderRadius: 12, padding: 20, position: "relative", overflow: "hidden" }}>
                      <div style={{ fontSize: "2.8rem", fontWeight: 900, color: "#C8102E", lineHeight: 1, marginBottom: 12, fontFamily: "serif" }}>{letter}</div>
                      <div style={{ fontSize: "1.06rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 8 }}>{title}</div>
                      <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Footer */}
              <div className="ig-card-footer" style={{ background: "#f0f4ff", padding: "18px 40px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid rgba(42,63,122,0.1)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                <span style={{ fontSize: "1.04rem", color: "#2A3F7A" }}>Transform subjective opinion into a defensible, auditable record.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Litigation – At a Glance Diagram */}
      {slug === "litigation" && (
        <div className="ig-wrap">
          <div className="ig-header" role="button" aria-label="Litigation & Expert Support service overview">
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <span className="ig-title">Litigation &amp; Expert Support</span>
            </div>
          </div>
          <div className="ig-body" style={{ maxWidth: "none", padding: 0 }}>
            <div className="ig-card" style={{ background: "#ffffff", borderRadius: "0 0 12px 12px", overflow: "hidden", fontFamily: "'Inter',sans-serif" }}>
              {/* Header */}
              <div className="ig-card-header" style={{ background: "#f0f4ff", padding: "28px 40px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #C8102E" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div style={{ width: 48, height: 48, background: "#eef2fb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <div className="ig-card-title" style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2A3F7A", lineHeight: 1.1 }}>Litigation &amp; Expert Support</div>
                    <div style={{ fontSize: ".96rem", color: "#344e7a", marginTop: 3 }}>Forensic Analysis &amp; Regulatory Defense</div>
                  </div>
                </div>
              </div>
              {/* Core Capabilities */}
              <div className="ig-card-section" style={{ padding: "28px 40px 0" }}>
                <div className="ig-section-label" style={{ fontSize: ".98rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#2A3F7A", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 3, height: 14, background: "#C8102E", display: "inline-block", borderRadius: 2 }} />
                  Core Capabilities
                </div>
                <div className="ig-steps-row" style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
                  {[
                    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/><line x1="4" y1="21" x2="20" y2="21"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="7" y1="15" x2="4" y2="21"/><line x1="17" y1="15" x2="20" y2="21"/></svg>, iconBg: "#dce6f5", title: "Forensic Contract", desc: <>Evaluate network agreements for prompt-pay and <strong>No Surprises Act</strong> compliance.</>, highlight: false },
                    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/><line x1="12" y1="8" x2="12" y2="8"/></svg>, iconBg: "#dce6f5", title: "Special Investigations Unit & Audit Defense", desc: "Challenge statistical validity of SIU audits and overpayment demands.", highlight: false },
                    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4"/><rect x="10" y="10" width="4" height="3" rx="1"/></svg>, iconBg: "#C8102E", title: "Expert Witness", desc: "Physician-led testimony on systemic payor processing gaps.", highlight: false },
                    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>, iconBg: "#dce6f5", title: "Regulatory Response", desc: "State insurance commission filings and prompt-pay violation documentation.", highlight: false },
                  ].map((cap) => (
                    <div className="ig-step-card" key={cap.title} style={{ flex: 1, background: "#eef2fb", border: "1px solid rgba(42,63,122,0.12)", borderRadius: 10, padding: 16 }}>
                      <div style={{ width: 44, height: 44, background: cap.iconBg, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>{cap.icon}</div>
                      <div style={{ fontSize: "1.04rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 6 }}>{cap.title}</div>
                      <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.5 }}>{cap.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* 5-Step Defense Framework */}
              <div className="ig-card-section" style={{ padding: "20px 40px" }}>
                <div style={{ background: "#eef2fb", borderRadius: 12, padding: "24px 28px" }}>
                  <div className="ig-section-label" style={{ fontSize: ".98rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#2A3F7A", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 3, height: 14, background: "#C8102E", display: "inline-block", borderRadius: 2 }} />
                    5-Step Defense Framework
                  </div>
                  <div className="ig-steps-row ig-timeline-steps" style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
                    {[
                      { num: "1", label: "Document", sub: "Capture all evidence", dim: false, red: false },
                      { num: "2", label: "Analyze", sub: "Forensic contract review", dim: false, red: false },
                      { num: "3", label: "Expert Opinion", sub: "Physician testimony prepared", dim: false, red: false },
                      { num: "4", label: "File", sub: "Regulatory complaint submitted", dim: false, red: false },
                      { num: "5", label: "Resolve", sub: "Settlement or adjudication", dim: false, red: true },
                    ].map((step, i, arr) => (
                      <React.Fragment key={step.num}>
                        <div className="ig-step-item" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 44, height: 44, borderRadius: "50%", background: step.dim ? "#dce6f5" : "#2A3F7A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.02rem", fontWeight: 800, color: "#fff" }}>{step.num}</div>
                          <div style={{ fontSize: ".96rem", fontWeight: 700, color: step.red ? "#C8102E" : "#2A3F7A", textAlign: "center" }}>{step.label}</div>
                          <div style={{ fontSize: ".84rem", color: "#344e7a", textAlign: "center" }}>{step.sub}</div>
                        </div>
                        {i < arr.length - 1 && <div className="ig-arrow" style={{ color: "#C8102E", fontSize: "1.2rem", alignSelf: "flex-start", marginTop: 12, flexShrink: 0 }}>›</div>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="ig-card-footer" style={{ background: "#f0f4ff", padding: "18px 40px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid rgba(42,63,122,0.1)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                <span style={{ fontSize: "1.04rem", color: "#2A3F7A" }}>Every engagement builds documented leverage for current and future disputes.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appeals – At a Glance Diagram */}
      {slug === "appeals" && (
        <div className="ig-wrap">
          <div className="ig-header" role="button" aria-label="Appeal Letter Writing service overview">
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <span className="ig-title">Appeal Letter Writing</span>
            </div>
          </div>
          <div className="ig-body" style={{ maxWidth: "none", padding: 0 }}>
            <div className="ig-card" style={{ background: "#ffffff", borderRadius: "0 0 12px 12px", overflow: "hidden", fontFamily: "'Inter',sans-serif" }}>
              {/* Header */}
              <div className="ig-card-header" style={{ background: "#f0f4ff", padding: "28px 40px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #C8102E" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div style={{ width: 48, height: 48, background: "#eef2fb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                  </div>
                  <div>
                    <div className="ig-card-title" style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2A3F7A", lineHeight: 1.1 }}>Appeal Letter Writing</div>
                    <div style={{ fontSize: ".96rem", color: "#344e7a", marginTop: 3 }}>The Triple-A Strategy</div>
                  </div>
                </div>
              </div>
              {/* Anatomy of a Professional Appeal */}
              <div className="ig-card-section" style={{ padding: "28px 40px 0" }}>
                <div className="ig-section-label" style={{ fontSize: ".98rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#2A3F7A", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 3, height: 14, background: "#C8102E", display: "inline-block", borderRadius: 2 }} />
                  Anatomy of a Professional Appeal
                </div>
                <div className="ig-steps-row" style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
                  {[
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="13" y2="13"/></svg>, title: "Header / Identifiers", desc: "Patient, claim, and provider info — NPI, Tax ID, Member ID, Date of Service, Claim Number.", highlight: false },
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, title: "Opening Statement", desc: "Formally appeal; reference denial reason code from EOB. State Type of Appeal (Level 1, Expedited).", highlight: false },
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, title: "Clinical Argument", desc: "Medical necessity + payor policy citations + standard of care.", highlight: true },
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>, title: "Conclusion & CTA", desc: "Request overturn and payment; include direct contact for the clinical representative.", highlight: false },
                  ].map((step, i, arr) => (
                    <React.Fragment key={step.title}>
                      <div className="ig-step-card" style={step.highlight ? { flex: 1, background: "rgba(200,16,46,0.06)", border: "2px solid #C8102E", borderRadius: 10, padding: 16 } : { flex: 1, background: "#eef2fb", border: "1px solid rgba(42,63,122,0.12)", borderRadius: 10, padding: 16 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                          <div style={{ width: 36, height: 36, borderRadius: 8, background: step.highlight ? "#C8102E" : "#2A3F7A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff" }}>{step.icon}</div>
                          <div style={{ fontSize: "1.02rem", fontWeight: 700, color: step.highlight ? "#C8102E" : "#2A3F7A" }}>{step.title}</div>
                        </div>
                        <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.5 }}>{step.desc}</div>
                      </div>
                      {i < arr.length - 1 && <div className="ig-arrow" style={{ color: "#C8102E", fontSize: "1.2rem", alignSelf: "center" }}>›</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {/* Triple-A Cards */}
              <div className="ig-card-section" style={{ padding: "20px 40px" }}>
                <div className="ig-cards-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                  {[
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>, title: "Accuracy", desc: "Ensuring coding alignment with clinical documentation to prevent technical denials.", highlight: false },
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: "Authority", desc: "The Qualified clinical signature — ensuring peer-to-peer credibility.", highlight: true },
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>, title: "Attachments", desc: "Curated clinical evidence with 'Point-of-Interest' highlighting for rapid reviewer navigation.", highlight: false },
                  ].map((card) => (
                    <div key={card.title} style={{ background: "#eef2fb", borderRadius: 12, padding: "24px 28px", border: card.highlight ? "2px solid #C8102E" : "none", position: "relative", overflow: "hidden" }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: card.highlight ? "#C8102E" : "#2A3F7A", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, color: "#fff" }}>{card.icon}</div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 700, color: card.highlight ? "#C8102E" : "#2A3F7A", marginBottom: 8, position: "relative" }}>{card.title}</div>
                      <div style={{ fontSize: ".96rem", color: "#344e7a", lineHeight: 1.65, position: "relative" }}>{card.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Footer */}
              <div className="ig-card-footer" style={{ background: "#f0f4ff", padding: "18px 40px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid rgba(42,63,122,0.1)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                <span style={{ fontSize: "1.04rem", color: "#2A3F7A" }}>Appeal deadlines are strictly enforced — ranging from 30 to 180+ days depending on the payer and plan type.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Denial Management – At a Glance Diagram */}
      {slug === "denial-management" && (
        <div className="ig-wrap">
          <div className="ig-header" role="button" aria-label="Denial Management service overview">
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <span className="ig-title">Revenue Denial Management</span>
            </div>
          </div>
          <div className="ig-body" style={{ maxWidth: "none", padding: 0 }}>
            <div className="ig-card" style={{ background: "#ffffff", borderRadius: "0 0 12px 12px", overflow: "hidden", fontFamily: "'Inter',sans-serif" }}>
              {/* Header */}
              <div className="ig-card-header" style={{ background: "#f0f4ff", padding: "28px 40px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #C8102E" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div style={{ width: 48, height: 48, background: "#eef2fb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                  </div>
                  <div>
                    <div className="ig-card-title" style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2A3F7A", lineHeight: 1.1 }}>Revenue Denial Management</div>
                    <div style={{ fontSize: ".96rem", color: "#344e7a", marginTop: 3 }}>End-to-End Denial Prevention &amp; Recovery Protocol</div>
                  </div>
                </div>
              </div>
              {/* The Cost of Denials */}
              <div className="ig-card-section" style={{ padding: "28px 40px 0" }}>
                <div className="ig-section-label" style={{ fontSize: ".98rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#2A3F7A", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 3, height: 14, background: "#C8102E", display: "inline-block", borderRadius: 2 }} />
                  The Cost of Denials
                </div>
                <div className="ig-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                  <div style={{ background: "#eef2fb", border: "1px solid rgba(42,63,122,0.12)", borderRadius: 10, padding: 18 }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#2A3F7A", lineHeight: 1, marginBottom: 6 }}>9%</div>
                    <div style={{ fontSize: ".98rem", fontWeight: 600, color: "#344e7a", marginBottom: 4 }}>Initial Denial Rate</div>
                    <div style={{ fontSize: "1.04rem", color: "#4a5e8a" }}>Industry average for hospitals</div>
                  </div>
                  <div style={{ background: "#eef2fb", border: "1px solid rgba(42,63,122,0.12)", borderRadius: 10, padding: 18 }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#C8102E", lineHeight: 1, marginBottom: 6 }}>65%</div>
                    <div style={{ fontSize: ".98rem", fontWeight: 600, color: "#344e7a", marginBottom: 4 }}>Never Reworked</div>
                    <div style={{ fontSize: "1.04rem", color: "#4a5e8a" }}>3% loss in net patient revenue (industry average)</div>
                  </div>
                  <div style={{ background: "#eef2fb", border: "1px solid rgba(42,63,122,0.12)", borderRadius: 10, padding: 18 }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#2A3F7A", lineHeight: 1, marginBottom: 6 }}>$118</div>
                    <div style={{ fontSize: ".98rem", fontWeight: 600, color: "#344e7a", marginBottom: 4 }}>Avg. Cost Per Appeal</div>
                    <div style={{ fontSize: "1.04rem", color: "#4a5e8a" }}>$25–$118 in administrative labor</div>
                  </div>
                  <div style={{ background: "rgba(200,16,46,0.06)", border: "3px solid #C8102E", borderRadius: 10, padding: 18, boxShadow: "0 0 0 3px rgba(200,16,46,0.12)" }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#C8102E", lineHeight: 1, marginBottom: 6 }}>66%</div>
                    <div style={{ fontSize: ".98rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 4 }}>Recoverable</div>
                    <div style={{ fontSize: "1.04rem", color: "#4a5e8a" }}>With the right process in place</div>
                  </div>
                </div>
              </div>
              {/* Denial Management Lifecycle */}
              <div className="ig-card-section" style={{ padding: "20px 40px" }}>
                <div style={{ background: "#eef2fb", borderRadius: 12, padding: "24px 28px" }}>
                  <div className="ig-section-label" style={{ fontSize: ".98rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#2A3F7A", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 3, height: 14, background: "#C8102E", display: "inline-block", borderRadius: 2 }} />
                    Denial Management Lifecycle
                  </div>
                  <div className="ig-steps-row ig-timeline-steps" style={{ display: "flex", alignItems: "flex-start", gap: 4 }}>
                    {[
                      { num: "1", label: "Identify", sub: "Flag via 835 remittance codes", red: false },
                      { num: "2", label: "Categorize", sub: "Clinical vs. administrative bucket", red: false },
                      { num: "3", label: "Root Cause", sub: "Pinpoint Source (Front/Back Office)", red: false },
                      { num: "4", label: "Resolve", sub: "Correct, resubmit, or appeal", red: false },
                      { num: "5", label: "Prevent", sub: "Update workflows, retrain staff", red: true },
                    ].map((step, i, arr) => (
                      <React.Fragment key={step.num}>
                        <div className="ig-step-item" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#2A3F7A", border: "2px solid #2A3F7A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".96rem", fontWeight: 800, color: "#fff" }}>{step.num}</div>
                          <div style={{ fontSize: "1.2rem", fontWeight: 800, color: step.red ? "#C8102E" : "#2A3F7A", textAlign: "center" }}>{step.label}</div>
                          <div style={{ fontSize: ".98rem", fontWeight: 700, color: "#3a5080", textAlign: "center" }}>{step.sub}</div>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="ig-arrow" style={{ color: "#C8102E", fontSize: "1.2rem", alignSelf: "flex-start", marginTop: 10, flexShrink: 0 }}>›</div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="ig-card-footer" style={{ background: "#f0f4ff", padding: "18px 40px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid rgba(42,63,122,0.1)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                <span style={{ fontSize: "1.04rem", color: "#2A3F7A" }}>66% of denials are recoverable with the right process.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Concurrent Review – At a Glance Diagram */}
      {slug === "concurrent-review" && (
        <div className="ig-wrap">
          <div className="ig-header" role="button" aria-label="Concurrent Review service overview">
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <span className="ig-title">Concurrent Review</span>
            </div>
          </div>
          <div className="ig-body" style={{ maxWidth: "none", padding: 0 }}>
            <div className="ig-card" style={{ background: "#ffffff", borderRadius: "0 0 12px 12px", overflow: "hidden", fontFamily: "'Inter',sans-serif" }}>
              {/* Header */}
              <div className="ig-card-header" style={{ background: "#f0f4ff", padding: "28px 40px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #C8102E" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div style={{ width: 48, height: 48, background: "#eef2fb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className="ig-card-title" style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2A3F7A", lineHeight: 1.1 }}>Concurrent Review</div>
                    <div style={{ fontSize: ".96rem", color: "#344e7a", marginTop: 3 }}>Real-Time Clinical &amp; Coding Validation</div>
                  </div>
                </div>
              </div>
              {/* Three Pillars */}
              <div className="ig-card-section" style={{ padding: "28px 40px 0" }}>
                <div className="ig-section-label" style={{ fontSize: ".98rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#2A3F7A", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 3, height: 14, background: "#C8102E", display: "inline-block", borderRadius: 2 }} />
                  Three Pillars of Alignment
                </div>
                <div className="ig-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                  <div style={{ background: "#eef2fb", border: "1px solid rgba(42,63,122,0.15)", borderRadius: 10, padding: 18 }}>
                    <div style={{ fontSize: "1.06rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 8 }}>Clinical Alignment</div>
                    <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.6 }}>Evaluate patient record against InterQual or MCG evidence-based criteria.</div>
                  </div>
                  <div style={{ background: "#eef2fb", border: "2px solid #C8102E", borderRadius: 10, padding: 18 }}>
                    <div style={{ fontSize: "1.06rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 8 }}>Coding Alignment</div>
                    <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.6 }}>Ensure ICD-10 specificity supports medical necessity and DRG accuracy.</div>
                  </div>
                  <div style={{ background: "#eef2fb", border: "1px solid rgba(27,42,91,0.6)", borderRadius: 10, padding: 18 }}>
                    <div style={{ fontSize: "1.06rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 8 }}>Administrative Alignment</div>
                    <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.6 }}>Verify prior authorizations, referrals, and eligibility before service delivery.</div>
                  </div>
                </div>
              </div>
              {/* Comparison + Outcomes */}
              <div className="ig-card-section" style={{ padding: "20px 40px" }}>
                <div className="ig-cards-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {/* Traditional vs Strict Alignment */}
                  <div style={{ background: "#eef2fb", borderRadius: 12, padding: "24px 28px" }}>
                    <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 16 }}>Traditional vs. Strict Alignment</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, border: "1px solid rgba(42,63,122,0.12)", borderRadius: 8, overflow: "hidden" }}>
                      <div style={{ padding: 10, borderRight: "1px solid rgba(42,63,122,0.12)" }} />
                      <div style={{ padding: 10, borderRight: "1px solid rgba(42,63,122,0.12)", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", color: "#4a5e8a", textAlign: "center" }}>TRADITIONAL</div>
                      <div style={{ padding: 10, fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", color: "#C8102E", textAlign: "center" }}>STRICT ALIGNMENT</div>
                      <div style={{ padding: 10, borderTop: "1px solid rgba(42,63,122,0.12)", borderRight: "1px solid rgba(42,63,122,0.12)", fontSize: ".98rem", color: "#344e7a" }}>Timing</div>
                      <div style={{ padding: 10, borderTop: "1px solid rgba(42,63,122,0.12)", borderRight: "1px solid rgba(42,63,122,0.12)", fontSize: ".98rem", color: "#344e7a", textAlign: "center" }}>Retrospective</div>
                      <div style={{ padding: 10, borderTop: "1px solid rgba(42,63,122,0.12)", background: "rgba(200,16,46,0.08)", fontSize: ".98rem", fontWeight: 700, color: "#C8102E", textAlign: "center" }}>Prospective</div>
                      <div style={{ padding: 10, borderTop: "1px solid rgba(42,63,122,0.12)", borderRight: "1px solid rgba(42,63,122,0.12)", fontSize: ".98rem", color: "#344e7a" }}>Method</div>
                      <div style={{ padding: 10, borderTop: "1px solid rgba(42,63,122,0.12)", borderRight: "1px solid rgba(42,63,122,0.12)", fontSize: ".98rem", color: "#344e7a", textAlign: "center" }}>Manual / Fragmented</div>
                      <div style={{ padding: 10, borderTop: "1px solid rgba(42,63,122,0.12)", background: "rgba(200,16,46,0.08)", fontSize: ".98rem", fontWeight: 700, color: "#C8102E", textAlign: "center" }}>Clinician-Led</div>
                      <div style={{ padding: 10, borderTop: "1px solid rgba(42,63,122,0.12)", borderRight: "1px solid rgba(42,63,122,0.12)", fontSize: ".98rem", color: "#344e7a" }}>Goal</div>
                      <div style={{ padding: 10, borderTop: "1px solid rgba(42,63,122,0.12)", borderRight: "1px solid rgba(42,63,122,0.12)", fontSize: ".98rem", color: "#344e7a", textAlign: "center" }}>Appeal the No</div>
                      <div style={{ padding: 10, borderTop: "1px solid rgba(42,63,122,0.12)", background: "rgba(200,16,46,0.08)", fontSize: ".98rem", fontWeight: 700, color: "#C8102E", textAlign: "center" }}>Validate the Case</div>
                    </div>
                  </div>
                  {/* Outcomes Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div style={{ background: "#eef2fb", borderRadius: 10, padding: 18 }}>
                      <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>✅</div>
                      <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 4 }}>Reduces Abrasion</div>
                      <div style={{ fontSize: "1.04rem", color: "#344e7a" }}>Fewer provider friction points</div>
                    </div>
                    <div style={{ background: "#eef2fb", borderRadius: 10, padding: 18 }}>
                      <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>⏱️</div>
                      <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 4 }}>Optimize Revenue Cycle</div>
                      <div style={{ fontSize: "1.04rem", color: "#344e7a" }}>Faster cash collection</div>
                    </div>
                    <div style={{ background: "#eef2fb", borderRadius: 10, padding: 18 }}>
                      <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>🔒</div>
                      <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 4 }}>Audit Support</div>
                      <div style={{ fontSize: "1.04rem", color: "#344e7a" }}>Defensible documentation trail</div>
                    </div>
                    <div style={{ background: "#eef2fb", borderRadius: 10, padding: 18 }}>
                      <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>🩺</div>
                      <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 4 }}>Patient Advocacy</div>
                      <div style={{ fontSize: "1.04rem", color: "#344e7a" }}>Right care, right time</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="ig-card-footer" style={{ background: "#f0f4ff", padding: "18px 40px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid rgba(42,63,122,0.1)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                <span style={{ fontSize: "1.04rem", color: "#2A3F7A" }}>Engineer the &ldquo;Yes&rdquo; before submission.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Overview Infographic */}
      {svc.overview && (
        <div className="ig-wrap">
          <div className="ig-body">
              <div className="ig-card" style={{ background: "#fff", borderRadius: "0 0 12px 12px", overflow: "hidden", fontFamily: "'Inter', sans-serif" }}>
                {/* Header */}
                <div className="ig-card-header" style={{ background: "#f0f4ff", padding: "28px 40px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #C8102E" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <div style={{ width: 48, height: 48, background: "#eef2fb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {slug === "authorization" && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
                      {slug === "payor-notification" && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>}
                      {slug === "p2p" && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/></svg>}
                      {!["authorization","payor-notification","p2p"].includes(slug) && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>}
                    </div>
                    <div>
                      <div className="ig-card-title" style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2A3F7A", lineHeight: 1.1 }}>{svc.overview.title}</div>
                      <div style={{ fontSize: ".96rem", color: "#344e7a", marginTop: 3 }}>{svc.overview.subtitle}</div>
                    </div>
                  </div>
                </div>
                {/* Workflow / Timeline */}
                <div className="ig-card-section" style={{ padding: "28px 40px 0" }}>
                  <div className="ig-section-label" style={{ fontSize: ".98rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "#2A3F7A", marginBottom: svc.overview.variant === "timeline" ? 20 : 16, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 3, height: 14, background: "#C8102E", display: "inline-block", borderRadius: 2 }} />
                    {svc.overview.sectionLabel ?? "Optimized Workflow"}
                  </div>
                  {svc.overview.variant === "timeline" ? (
                    <div className="ig-steps-row ig-timeline-steps" style={{ display: "flex", alignItems: "flex-start", gap: 4, position: "relative" }}>
                      {svc.overview.workflowSteps.map((step, i) => {
                        const last = i === svc.overview!.workflowSteps.length - 1;
                        const bgColor = step.color ?? (step.highlight || last ? "#C8102E" : "#2A3F7A");
                        const titleColor = step.color ?? (step.highlight || last ? "#C8102E" : "#2A3F7A");
                        const label = svc.overview!.timelineLabels?.[i] ?? String(step.num);
                        const card = svc.overview!.cards[i];
                        return (
                          <React.Fragment key={step.num}>
                            <div className="ig-step-item" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                              <div style={{ width: 72, height: 72, borderRadius: "50%", background: bgColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".75rem", fontWeight: 800, color: "#fff", textAlign: "center" as const, lineHeight: 1.2 }}>{label}</div>
                              <div style={{ fontSize: "1.04rem", fontWeight: 700, color: titleColor, textAlign: "center" as const }}>{step.title}</div>
                              {card && (
                                <div className={`ig-step-inline-card${card.desc === "standard" || card.desc === "accelerated" ? " ig-step-inline-card--stat" : ""}`} style={{ background: "#eef2fb", borderRadius: 10, padding: "12px 14px", width: "100%", textAlign: "left" }}>
                                  {card.desc === "standard" || card.desc === "accelerated" ? (() => {
                                    const lines = card.title.split("\n");
                                    const isAccel = card.desc === "accelerated";
                                    return (
                                      <>
                                        <div style={{ fontSize: ".85rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" as const, color: isAccel ? "#344e7a" : "#4a5e8a", marginBottom: 4 }}>{lines[0]}</div>
                                        <div style={{ fontSize: "1.8rem", fontWeight: 900, color: isAccel ? "#C8102E" : "#6b7a9a", lineHeight: 1, marginBottom: 4 }}>{lines[1]}</div>
                                        <div style={{ fontSize: ".9rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 6 }}>{lines[2]}</div>
                                        <div style={{ fontSize: ".88rem", color: "#344e7a", lineHeight: 1.6 }}>{lines.slice(3).join("\n")}</div>
                                      </>
                                    );
                                  })() : (
                                    <>
                                      <div style={{ fontSize: ".95rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 4 }}>{card.title}</div>
                                      <div style={{ fontSize: ".9rem", color: "#344e7a", lineHeight: 1.55 }}>{card.desc}</div>
                                    </>
                                  )}
                                </div>
                              )}
                            </div>
                            {i < svc.overview!.workflowSteps.length - 1 && (
                              <div className="ig-arrow" style={{ color: "#C8102E", fontSize: "1.2rem", alignSelf: "flex-start", marginTop: 24, flexShrink: 0 }}>›</div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="ig-steps-row" style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
                      {svc.overview.workflowSteps.map((step, i) => (
                        <React.Fragment key={step.num}>
                          <div className="ig-step-card" style={step.highlight ? { flex: 1, background: "rgba(200,16,46,0.06)", border: "2px solid #C8102E", borderRadius: 10, padding: 16 } : { flex: 1, background: "#eef2fb", border: "1px solid rgba(42,63,122,0.12)", borderRadius: 10, padding: 16 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                              {step.highlight ? (
                                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                              ) : (
                                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2A3F7A", border: "2px solid #2A3F7A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".98rem", fontWeight: 800, color: "#fff" }}>{step.num}</div>
                              )}
                              <div style={{ fontSize: "1.02rem", fontWeight: 700, color: step.highlight ? "#C8102E" : "#2A3F7A" }}>{step.title}</div>
                            </div>
                            <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.5 }}>{step.desc}</div>
                          </div>
                          {i < svc.overview!.workflowSteps.length - 1 && (
                            <div className="ig-arrow" style={{ color: "#C8102E", fontSize: "1.2rem", alignSelf: "center" }}>›</div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
                {/* Cards */}
                <div className={`ig-card-section${svc.overview.variant === "timeline" ? " ig-timeline-cards-section" : ""}`} style={{ padding: "20px 40px" }}>
                  <div className="ig-cards-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${svc.overview.cards.length === 3 ? 3 : 2}, 1fr)`, gap: 16 }}>
                    {svc.overview.cards.map((card) => {
                      if (card.desc === "standard" || card.desc === "accelerated") {
                        const lines = card.title.split("\n");
                        const isAccel = card.desc === "accelerated";
                        return (
                          <div key={card.title} style={{ background: "#eef2fb", borderRadius: 12, padding: 28 }}>
                            <div style={{ fontSize: "1.04rem", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase" as const, color: isAccel ? "#344e7a" : "#4a5e8a", marginBottom: 10 }}>{lines[0]}</div>
                            <div style={{ fontSize: "2.8rem", fontWeight: 900, color: isAccel ? "#C8102E" : "#6b7a9a", lineHeight: 1, marginBottom: 8 }}>{lines[1]}</div>
                            <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 12 }}>{lines[2]}</div>
                            <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.7 }}>{lines.slice(3).join("\n")}</div>
                          </div>
                        );
                      }
                      return (
                        <div key={card.title} style={{ background: "#eef2fb", borderRadius: 12, padding: "22px" }}>
                          <div style={{ fontSize: "1.06rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 8 }}>{card.title}</div>
                          <div style={{ fontSize: "1.04rem", color: "#344e7a", lineHeight: 1.65 }}>{card.desc}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Footer */}
                <div className="ig-card-footer" style={{ background: "#f0f4ff", padding: "18px 40px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid rgba(42,63,122,0.1)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                  <span style={{ fontSize: "1.04rem", color: "#2A3F7A" }}>{svc.overview.footerText}</span>
                </div>
              </div>
          </div>
        </div>
      )}


      {/* Our Process */}
      {svc.processSteps && svc.processSteps.length > 0 && (
        <section className="section" style={{ background: "var(--off)" }}>
          <div className="sc">
            <RevealOnScroll>
              <div className="sec-header c">
                <div className="sec-label">Our Process</div>
                <h2 className="sec-title">
                  How We Support <em>Our Clients</em>
                </h2>
                <p className="sec-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
                  Our approach relies on a comprehensive, multi-step process integrated directly into hospital workflows.
                </p>
              </div>
            </RevealOnScroll>
            <div className="svc-process-grid">
              {svc.processSteps.map((step, i) => (
                <RevealOnScroll key={step.title}>
                  <div
                    className="card"
                    style={{
                      borderTop: `4px solid ${i % 2 === 0 ? "#2A3F7A" : "#C8102E"}`,
                      padding: "28px 26px",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontSize: ".75rem",
                        fontWeight: 700,
                        letterSpacing: ".13em",
                        textTransform: "uppercase" as const,
                        color: i % 2 === 0 ? "#2A3F7A" : "#C8102E",
                        marginBottom: 10,
                      }}
                    >
                      {step.title}
                    </div>
                    <p style={{ fontSize: "1.04rem", color: "#5A6E8A", lineHeight: 1.72 }}>
                      {step.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Service Components */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c">
              <div className="sec-label">Key Service Components</div>
              <h2 className="sec-title">
                {svc.featuresSectionTitle || svc.title}
              </h2>
              <p className="sec-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
                {svc.featuresSectionSub ||
                  `Key pillars of our ${svc.shortTitle.toLowerCase()} service that drive measurable outcomes for hospital partners.`}
              </p>
            </div>
          </RevealOnScroll>
          <div className="feats-grid">
            {svc.features.map((feat) => (
              <RevealOnScroll key={feat.title}>
                <div className="feat-card">
                  {feat.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={feat.image} alt={feat.title} className="fc-img" />
                  )}
                  <div className="fc-body">
                    <div className="fc-title">{feat.title}</div>
                    <p className="fc-desc">{feat.description}</p>
                    {feat.bullets && (
                      <ul className="fc-list">
                        {feat.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        heading="Start a Conversation With Our Experts"
        description="Partner with MHMDAA's physician-led team and take the first decisive step toward building a denial-resilient, financially sustainable hospital operation."
      />

      {/* Prev / Next Navigation */}
      <div className="sd-svcnav-wrap">
        <div className="sd-svcnav-inner">
          <div className="sd-svcnav-prev">
            {prevSvc ? (
              <Link href={`/services/${prevSvc.slug}`} className="sd-svcnav-link">
                <span className="sd-svcnav-label"><span className="sd-svcnav-arrow">←</span> Previous</span>
                <span className="sd-svcnav-title">{prevSvc.shortTitle}</span>
              </Link>
            ) : null}
          </div>
          <div className="sd-svcnav-center">
            <Link href="/services" className="sd-svcnav-all">
              All Provider Services
            </Link>
          </div>
          <div className="sd-svcnav-next">
            {nextSvc ? (
              <Link href={`/services/${nextSvc.slug}`} className="sd-svcnav-link sd-svcnav-link--right">
                <span className="sd-svcnav-label">Next <span className="sd-svcnav-arrow">→</span></span>
                <span className="sd-svcnav-title">{nextSvc.shortTitle}</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
