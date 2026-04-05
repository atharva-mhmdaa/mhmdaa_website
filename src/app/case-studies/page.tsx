import { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import CaseStudiesTabs from "@/components/ui/CaseStudiesTabs";
import type { CaseStudyListRow } from "@/components/ui/CaseStudiesTabs";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore real results from hospitals nationwide — ER redesigns, revenue cycle transformations, and enterprise-wide operations improvements.",
};

export default async function CaseStudiesPage() {
  let caseStudies: CaseStudyListRow[] = [];

  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("case_studies")
      .select(
        "kind, title, slug, subtitle, description, challenge, solution, results, metrics, card_challenge, card_solution, card_metrics, region, service_type, published_at, payor_dispute_type, payor_representation, payor_scope, payor_case_ref, payor_counsel",
      )
      .eq("is_published", true)
      .order("published_at", { ascending: false });
    if (data) {
      caseStudies = data.map((row) => ({
        ...row,
        kind: row.kind === "payor" ? "payor" : "provider",
      })) as CaseStudyListRow[];
    }
  } catch {
    // Table or columns missing — empty state until migrations are applied
  }

  return (
    <>
      <section className="cases-hero">
        <div
          style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(192,32,26,.18)",
              border: "1px solid rgba(192,32,26,.35)",
              color: "#f87171",
              fontSize: ".82rem",
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase" as const,
              padding: "6px 14px",
              borderRadius: 100,
              marginBottom: 20,
            }}
          >
            Client Case Studies
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.12,
              marginBottom: 18,
            }}
          >
            Measurable Results.<br />
            <em style={{ fontStyle: "italic", color: "#93c5fd" }}>Proven in the Field.</em>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,.82)",
              maxWidth: 620,
              lineHeight: 1.85,
              marginBottom: 32,
            }}
          >
            Physician-led operational engagements delivering measurable improvements in capacity, throughput, and revenue cycle performance at hospitals nationwide.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-p">
              Connect with our Experts &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CaseStudiesTabs caseStudies={caseStudies} />
    </>
  );
}
