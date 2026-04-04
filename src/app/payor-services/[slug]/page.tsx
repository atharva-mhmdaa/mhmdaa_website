import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { payorServices } from "@/data/payor-services";
import CTABand from "@/components/ui/CTABand";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return payorServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = payorServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

const featureColors = [
  { bg: "linear-gradient(135deg,#2A3F7A,#2A3F7A)", color: "#fff" },
  { bg: "linear-gradient(135deg,#C8102E,#a50d24)", color: "#fff" },
  { bg: "linear-gradient(135deg,#059669,#10b981)", color: "#fff" },
  { bg: "linear-gradient(135deg,#6d28d9,#7c3aed)", color: "#fff" },
];

export default async function PayorServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = payorServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const prev = service.prevSlug
    ? payorServices.find((s) => s.slug === service.prevSlug)
    : null;
  const next = service.nextSlug
    ? payorServices.find((s) => s.slug === service.nextSlug)
    : null;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="sd-hero"
        style={{
          background: "linear-gradient(135deg,#1B2A5B 0%,#2A3F7A 55%,#1B2A5B 100%)",
        }}
      >
        <div className="sd-hgrid">
          <div>
            <div className="sd-num">Payor Service {service.number} of 09</div>
            <h1 className="sd-title">{service.title}</h1>
            <p className="sd-desc">{service.heroDescription}</p>
            <Link href="/payor-services" className="sd-hero-cta">
              Explore All Payor Services →
            </Link>
          </div>
          <div
            style={{
              borderRadius: "var(--rl)",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "16/10",
              boxShadow: "0 20px 60px rgba(0,0,0,.4)",
            }}
          >
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── SERVICE CATEGORY NAV ──────────────────────────── */}
      <nav className="svc-breadcrumb-nav" aria-label="Payor service navigation">
        <div className="svc-breadcrumb-inner">
          {payorServices.map((s) => (
            <Link
              key={s.slug}
              href={`/payor-services/${s.slug}`}
              className={`svc-breadcrumb-item${s.slug === slug ? " active" : ""}`}
            >
              {s.shortTitle}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── INFO STRIP ────────────────────────────────────── */}
      {service.infoText && (
        <div style={{ background: "#1B2A5B", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "10px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span style={{ fontSize: ".92rem", color: "rgba(255,255,255,0.72)" }}>{service.infoText}</span>
          </div>
          <div style={{ background: "#e53e3e", color: "#fff", fontSize: ".68rem", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 5, whiteSpace: "nowrap", flexShrink: 0 }}>{service.infoBadge ?? "PROACTIVE, NOT REACTIVE"}</div>
        </div>
      )}

      {/* ── OUR PROCESS ───────────────────────────────────── */}
      {service.processSteps && service.processSteps.length > 0 && (
        <section className="section" style={{ background: "var(--off)", padding: "80px 32px" }}>
          <div className="sc">
            <div className="sec-header c">
              <div className="sec-label">Our Process</div>
              <h2 className="sec-title">How We Support <em>Our Clients</em></h2>
              <p className="sec-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
                Our approach relies on a comprehensive, multi-step process rooted in Reliable Care Organization (RCO) principles.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22 }}>
              {service.processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="card"
                  style={{ borderTop: `4px solid ${i % 2 === 0 ? "#2A3F7A" : "#C8102E"}`, padding: "28px 26px" }}
                >
                  <div style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: ".13em", textTransform: "uppercase" as const, color: i % 2 === 0 ? "#2A3F7A" : "#C8102E", marginBottom: 10 }}>
                    {step.title}
                  </div>
                  <p style={{ fontSize: "1.04rem", color: "#5A6E8A", lineHeight: 1.72 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FEATURE CARDS ─────────────────────────────────── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="sc">
          <div className="sec-header c">
            <div className="sec-label">Key Service Components</div>
            <h2 className="sec-title">{service.title}</h2>
            {service.featuresSub && (
              <p className="sec-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>{service.featuresSub}</p>
            )}
          </div>
          <div className="feats-grid">
            {service.features.map((f, i) => (
              <div className="feat-card" key={f.title}>
                {f.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={f.image} alt={f.title} className="fc-img" />
                )}
                {!f.image && (
                  <div
                    className="feat-icon"
                    style={{
                      background: featureColors[i % featureColors.length].bg,
                      color: featureColors[i % featureColors.length].color,
                      fontWeight: 800,
                      fontSize: "1.1rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                )}
                <div className="fc-body">
                  <div className="fc-title">{f.title}</div>
                  <p className="fc-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE NAVIGATION ────────────────────────────── */}
      <div
        style={{
          background: "var(--off)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "32px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          {prev ? (
            <Link
              href={`/payor-services/${prev.slug}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: ".78rem",
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--mg)",
                }}
              >
                ← Previous Service
              </span>
              <span style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--navy)" }}>
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/payor-services"
            style={{
              fontSize: ".88rem",
              fontWeight: 600,
              color: "var(--navy)",
              textDecoration: "none",
              padding: "8px 20px",
              border: "1px solid var(--border)",
              borderRadius: 8,
            }}
          >
            All Payor Services
          </Link>
          {next ? (
            <Link
              href={`/payor-services/${next.slug}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                textDecoration: "none",
                textAlign: "right",
              }}
            >
              <span
                style={{
                  fontSize: ".78rem",
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--mg)",
                }}
              >
                Next Service →
              </span>
              <span style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--navy)" }}>
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* ── CTA BAND ─────────────────────────────────────── */}
      <CTABand
        heading="Ready to Strengthen Your Position?"
        description="Partner with MHMDAA's physician-led team to build defensible, evidence-based processes that withstand scrutiny at every level."
        buttonText="Start The Conversation →"
        buttonHref="/contact"
      />
    </>
  );
}
