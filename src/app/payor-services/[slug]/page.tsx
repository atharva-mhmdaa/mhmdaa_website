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

      {/* ── BREADCRUMB ────────────────────────────────────── */}
      <div
        style={{
          background: "var(--off)",
          borderBottom: "1px solid var(--border)",
          padding: "14px 32px",
        }}
      >
        <nav
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            fontSize: ".9rem",
            color: "var(--mg)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{ color: "var(--navy)", textDecoration: "none", fontWeight: 500 }}
          >
            Home
          </Link>
          <span style={{ opacity: 0.4 }}>›</span>
          <Link
            href="/payor-services"
            style={{ color: "var(--navy)", textDecoration: "none", fontWeight: 500 }}
          >
            Services for Payors
          </Link>
          <span style={{ opacity: 0.4 }}>›</span>
          <span style={{ fontWeight: 600 }}>{service.title}</span>
        </nav>
      </div>

      {/* ── FEATURE CARDS ─────────────────────────────────── */}
      <section className="section">
        <div className="sc">
          <div className="sec-header c">
            <div className="sec-label">Key Service Components</div>
            <h2 className="sec-title">{service.title}</h2>
          </div>
          <div className="card-grid-2">
            {service.features.map((f, i) => (
              <div className="feat" key={f.title}>
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
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
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
