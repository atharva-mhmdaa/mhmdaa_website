import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CTABand from "@/components/ui/CTABand";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
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
            <div className="sd-num">Service {svc.number} of 09</div>
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

      {/* Service Overview Infographic */}
      {svc.overview && (
        <div className="ig-wrap">
          <div className="ig-body">
              <div style={{ background: "#fff", borderRadius: "0 0 12px 12px", overflow: "hidden", fontFamily: "'Inter', sans-serif" }}>
                {/* Header */}
                <div style={{ background: "#f0f4ff", padding: "28px 40px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #C8102E" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <div style={{ width: 48, height: 48, background: "#eef2fb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2A3F7A", lineHeight: 1.1 }}>{svc.overview.title}</div>
                      <div style={{ fontSize: ".96rem", color: "#344e7a", marginTop: 3 }}>{svc.overview.subtitle}</div>
                    </div>
                  </div>
                </div>
                {/* Workflow / Timeline */}
                <div style={{ padding: "28px 40px 0" }}>
                  <div style={{ fontSize: ".98rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "#2A3F7A", marginBottom: svc.overview.variant === "timeline" ? 20 : 16, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 3, height: 14, background: "#C8102E", display: "inline-block", borderRadius: 2 }} />
                    {svc.overview.sectionLabel ?? "Optimized Workflow"}
                  </div>
                  {svc.overview.variant === "timeline" ? (
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 4, position: "relative" }}>
                      {svc.overview.workflowSteps.map((step, i) => {
                        const last = i === svc.overview!.workflowSteps.length - 1;
                        const bgColor = step.color ?? (step.highlight || last ? "#C8102E" : "#2A3F7A");
                        const titleColor = step.color ?? (step.highlight || last ? "#C8102E" : "#fff");
                        const label = svc.overview!.timelineLabels?.[i] ?? String(step.num);
                        return (
                          <React.Fragment key={step.num}>
                            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                              <div style={{ width: 72, height: 72, borderRadius: "50%", background: bgColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".75rem", fontWeight: 800, color: "#fff", textAlign: "center" as const, lineHeight: 1.2 }}>{label}</div>
                              <div style={{ fontSize: "1.04rem", fontWeight: 700, color: titleColor, textAlign: "center" as const }}>{step.title}</div>
                            </div>
                            {i < svc.overview!.workflowSteps.length - 1 && (
                              <div style={{ color: "#C8102E", fontSize: "1.2rem", alignSelf: "flex-start", marginTop: 24, flexShrink: 0 }}>›</div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  ) : (
                    <div style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
                      {svc.overview.workflowSteps.map((step, i) => (
                        <React.Fragment key={step.num}>
                          <div style={step.highlight ? { flex: 1, background: "rgba(200,16,46,0.06)", border: "2px solid #C8102E", borderRadius: 10, padding: 16 } : { flex: 1, background: "#eef2fb", border: "1px solid rgba(42,63,122,0.12)", borderRadius: 10, padding: 16 }}>
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
                            <div style={{ color: "#C8102E", fontSize: "1.2rem", alignSelf: "center" }}>›</div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
                {/* Cards */}
                <div style={{ padding: "20px 40px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: `repeat(${svc.overview.cards.length === 3 ? 3 : 2}, 1fr)`, gap: 16 }}>
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
                <div style={{ background: "#f0f4ff", padding: "18px 40px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid rgba(42,63,122,0.1)" }}>
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}>
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
        heading="Start The Conversation With Our Experts"
        description="Partner with MHMDAA's physician-led team and take the first decisive step toward building a denial-resilient, financially sustainable hospital operation."
      />

      {/* Prev / Next Navigation */}
      <section
        style={{
          padding: "48px 32px",
          background: "var(--off)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          className="sc"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: 20,
          }}
        >
          {prevSvc ? (
            <Link
              href={`/services/${prevSvc.slug}`}
              className="svc-nav-link"
            >
              <span className="svc-nav-dir">← Previous Service</span>
              <span className="svc-nav-title">
                <span className="svc-nav-num">{prevSvc.number}</span>
                {prevSvc.shortTitle}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextSvc ? (
            <Link
              href={`/services/${nextSvc.slug}`}
              className="svc-nav-link"
              style={{ textAlign: "right" }}
            >
              <span className="svc-nav-dir">Next Service →</span>
              <span className="svc-nav-title">
                <span className="svc-nav-num">{nextSvc.number}</span>
                {nextSvc.shortTitle}
              </span>
            </Link>
          ) : (
            <Link
              href="/services"
              className="svc-nav-link"
              style={{ textAlign: "right" }}
            >
              <span className="svc-nav-dir">Back to →</span>
              <span className="svc-nav-title">All Services</span>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
