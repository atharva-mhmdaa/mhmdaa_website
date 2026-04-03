import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABand from "@/components/ui/CTABand";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Michael Hill, MD & Associates - physician-led healthcare consulting careers transforming hospital operations nationwide.",
};

const VALUES = [
  {
    title: "Client Comes First",
    desc: "We measure our success by our clients\u2019 success. In all trade-offs, the client\u2019s interest always comes first. We make all our resources available to serve them.",
  },
  {
    title: "Integrity",
    desc: "We represent our capabilities honestly, observe appropriate confidentiality, and only make promises we can keep \u2014 no exceptions.",
  },
  {
    title: "Partnership",
    desc: "We take the long-term view in our relationships, built on respect, honesty, mutual support, and a team-oriented approach that delivers results.",
  },
  {
    title: "Impact",
    desc: "We are passionate about making a lasting difference in the hospitals and healthcare systems we serve \u2014 and we take initiative to make it happen.",
  },
  {
    title: "Humility",
    desc: "While confident in our abilities, we know our current knowledge is just the beginning. We yearn to learn, discover, and create continuously.",
  },
  {
    title: "Inclusion",
    desc: "We embrace different perspectives and draw strength from diversity \u2014 of thought, background, and experience.",
  },
  {
    title: "Value Delivered",
    desc: "We deliver tangible and positive change, ensuring clients receive multiples of their investment through competitive advantage and bottom-line impact.",
  },
  {
    title: "Intellectual Curiosity",
    desc: "As lifelong learners, we explore and encourage new ideas and challenge the status quo to improve healthcare delivery for all.",
  },
];

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();
}

function excerpt(html: string | null, maxLen = 160): string {
  if (!html) return '';
  const plain = stripHtml(html);
  if (plain.length <= maxLen) return plain;
  return plain.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}

export default async function CareersPage() {
  let dynamicJobs: { id: string; title: string; slug: string; department: string | null; location: string | null; employment_type: string | null; description: string | null }[] = [];
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('job_postings')
      .select('id, title, slug, department, location, employment_type, description')
      .eq('is_published', true)
      .order('published_at', { ascending: false });
    if (data) dynamicJobs = data;
  } catch {
    // Supabase not configured yet
  }

  return (
    <>
      {/* Hero */}
      <section className="careers-hero">
        <div className="ch-wrap">
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
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: 100,
              marginBottom: 20,
            }}
          >
            Careers
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
            Join Our Mission.
            <br />
            <em style={{ fontStyle: "italic", color: "#93c5fd" }}>Drive Real Change.</em>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,.82)",
              lineHeight: 1.85,
              maxWidth: 640,
            }}
          >
            We need problem-solvers, unconventional thinkers, and impassioned
            doers who can drive rapid change by creating solutions that outperform
            anything that has come before.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="sc">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="careers-why-grid">
            <div>
              <div className="sec-label">Why Work With Us</div>
              <h2 className="sec-title">
                Why Work at Michael Hill, MD<br /><em>and Associates?</em>
              </h2>
              <p style={{ fontSize: "1.04rem", color: "var(--mg)", lineHeight: 1.85, marginBottom: 20 }}>
                We partner with our clients to tackle their most difficult
                challenges and create lasting impact. We help them think, plan and
                act differently to accelerate growth and enable them to make the
                big change they need to own their own future, instead of being
                disrupted by it.
              </p>
              <p style={{ fontSize: "1.04rem", color: "var(--mg)", lineHeight: 1.85, marginBottom: 28 }}>
                Our people see opportunities others can&apos;t and pursue them
                relentlessly. Whether you have years of experience or are just
                entering the workforce, we invite you to explore our opportunities
                and hear about our unwavering commitment to make a difference in
                partnership with our clients, colleagues, and communities.
              </p>
              <Link href="/contact" className="btn-p">
                Get In Touch &rarr;
              </Link>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden" }}>
              <Image
                src="/images/careers-team.jpg"
                alt="MHMDAA consulting team"
                width={640}
                height={480}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section">
        <div className="sc">
          <div className="sec-header c">
            <div className="sec-label">Current Openings</div>
            <h2 className="sec-title">Open <em>Positions</em></h2>
            <p className="sec-sub" style={{ maxWidth: 640 }}>
              Join a physician-led team transforming how hospitals protect revenue
              and advocate for patients nationwide.
            </p>
          </div>

          <div className="jobs-grid">
            {dynamicJobs.map((job) => (
              <Link href={`/careers/${job.slug}`} key={job.id} className="jobs-grid__card">
                <div className="jobs-grid__badge">Now Hiring</div>
                <h3 className="jobs-grid__title">{job.title}</h3>
                {job.description && (
                  <p className="jobs-grid__excerpt">{excerpt(job.description)}</p>
                )}
                <div className="jobs-grid__meta">
                  {job.department && <span>{job.department}</span>}
                  {job.employment_type && <span>{job.employment_type}</span>}
                  {job.location && <span>{job.location}</span>}
                </div>
                <div className="jobs-grid__footer">
                  <span className="jobs-grid__cta">View Role &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="sc">
          <div className="sec-header c">
            <div className="sec-label">Our Values</div>
            <h2 className="sec-title">What We Stand <em>For</em></h2>
            <p className="sec-sub">
              The principles that guide everything we do {"\u2014"} for our clients, our
              colleagues, and our communities.
            </p>
          </div>

          <div className="values-careers">
            {VALUES.map((v) => (
              <div className="vc-card" key={v.title}>
                <div className="vc-card-title">{v.title}</div>
                <p className="vc-card-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Start The Conversation With Our Experts"
        description="Partner with MHMDAA&#x2019;s physician-led team and take the first decisive step toward building a denial-resilient, financially sustainable hospital operation."
        buttonText={"Start The Conversation \u2192"}
        buttonHref="/contact"
      />
    </>
  );
}
