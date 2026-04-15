import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";

interface CaseStudyRow {
  id: string;
  title: string;
  slug: string;
  kind: string | null;
  subtitle: string | null;
  description: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  metrics: { value: string; label: string }[];
  payor_representation: string | null;
  payor_scope: string | null;
  payor_case_ref: string | null;
  payor_counsel: string | null;
}

type Props = { params: Promise<{ slug: string }> };

async function getCaseStudy(slug: string): Promise<CaseStudyRow | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("case_studies")
    .select(
      "id, title, slug, kind, subtitle, description, challenge, solution, results, metrics, payor_representation, payor_scope, payor_case_ref, payor_counsel",
    )
    .eq("slug", slug)
    .eq("is_published", true)
    .single();
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) return { title: "Case Study Not Found" };
  const prefix = cs.kind === "payor" ? "Payor Case Study" : "Client Case Study";
  return {
    title: `${prefix}: ${cs.title} — MHMDAA`,
    description: cs.subtitle || `${prefix}: ${cs.title}`,
  };
}

export default async function DynamicCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) notFound();

  const isPayor = cs.kind === "payor";

  const sectionHeadingStyle: React.CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#2A3F7A",
    marginBottom: 14,
  };

  const resultsHeadingStyle: React.CSSProperties = {
    ...sectionHeadingStyle,
    color: "#C8102E",
  };

  if (isPayor) {
    return (
      <div className="cs-page">
        <h1 className="cs-title">{cs.title}</h1>
        {cs.subtitle && <h2 className="cs-subtitle">{cs.subtitle}</h2>}
        <div className="cs-divider" />

        {cs.payor_representation && (
          <div className="cs-block">
            <h3 style={sectionHeadingStyle}>Representation</h3>
            <div className="cs-body">
              <p style={{ fontWeight: 700, color: "#1B2A5B" }}>{cs.payor_representation}</p>
            </div>
          </div>
        )}

        {cs.payor_scope && (
          <div className="cs-block">
            <h3 style={sectionHeadingStyle}>Scope of Work</h3>
            <div className="cs-body" dangerouslySetInnerHTML={{ __html: cs.payor_scope }} />
          </div>
        )}

        {(cs.metrics?.length ?? 0) > 0 && (
          <div className="cs-block results">
            <h3 style={resultsHeadingStyle}>Key Outcomes</h3>
            <div className="results-grid">
              {cs.metrics.map((m) => (
                <div className="res-item" key={m.label}>
                  <div className="res-num">{m.value}</div>
                  <div className="res-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {cs.payor_case_ref && (
          <div className="cs-block">
            <h3 style={{ ...sectionHeadingStyle, color: "#C8102E" }}>Case Reference</h3>
            <div className="cs-body">
              <p style={{ fontSize: ".95rem", color: "#5A6E8A", fontStyle: "italic" }}>{cs.payor_case_ref}</p>
            </div>
          </div>
        )}

        {cs.payor_counsel && (
          <div className="cs-block">
            <h3 style={{ ...sectionHeadingStyle, color: "#C8102E" }}>Legal Counsel</h3>
            <div className="cs-body">
              <p style={{ fontWeight: 600, color: "#1B2A5B" }}>{cs.payor_counsel}</p>
            </div>
          </div>
        )}

        <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
          <Link href="/case-studies" className="cs-back">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cs-page">
        <h1 className="cs-title">{cs.title}</h1>
      {cs.subtitle && <h2 className="cs-subtitle">{cs.subtitle}</h2>}
      <div className="cs-divider" />

      {cs.challenge && (
        <div className="cs-block">
          <h3 style={sectionHeadingStyle}>The Challenge</h3>
          <div className="cs-body" dangerouslySetInnerHTML={{ __html: cs.challenge }} />
        </div>
      )}

      {cs.solution && (
        <div className="cs-block">
          <h3 style={sectionHeadingStyle}>The Solution</h3>
          <div className="cs-body" dangerouslySetInnerHTML={{ __html: cs.solution }} />
        </div>
      )}

      {(cs.results || (cs.metrics && cs.metrics.length > 0)) && (
        <div className="cs-block results">
          <h3 style={resultsHeadingStyle}>The Results</h3>
          {cs.results && (
            <div className="cs-body" dangerouslySetInnerHTML={{ __html: cs.results }} />
          )}
          {cs.metrics && cs.metrics.length > 0 && (
            <div className="results-grid">
              {cs.metrics.map((m) => (
                <div className="res-item" key={m.label}>
                  <div className="res-num">{m.value}</div>
                  <div className="res-label">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
        <Link href="/case-studies" className="cs-back">
          ← Back to Case Studies
        </Link>
      </div>
    </div>
  );
}
