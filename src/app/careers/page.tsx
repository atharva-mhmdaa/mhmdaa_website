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

const PILLARS = [
  {
    num: "Pillar 1",
    title: "Integrity & Partnership",
    subtitle: "The Foundation",
    borderColor: "var(--navy)",
    desc: "We build our business on a foundation of trust and mutual respect. By putting the client's interests first and embracing inclusive perspectives, we form long-term partnerships rooted in integrity and the promise that we only commit to what we can deliver.",
    cards: [
      { title: "Integrity", desc: "We represent our capabilities honestly, observe appropriate confidentiality, and only make promises we can keep no exceptions." },
      { title: "Partnership", desc: "We take the long-term view in our relationships, built on respect, honesty, mutual support, and a team-oriented approach that delivers results." },
      { title: "Client Comes First", desc: "We measure our success by our clients\u2019 success. In all trade-offs, the client\u2019s interest always comes first. We make all our resources available to serve them." },
      { title: "Inclusion", desc: "We embrace different perspectives and draw strength from diversity of thought, background, and experience." },
    ],
  },
  {
    num: "Pillar 2",
    title: "Intellectual Agility",
    subtitle: "The Mindset",
    borderColor: "var(--red)",
    desc: "We are lifelong learners who approach every challenge with intellectual curiosity and the humility to know that current knowledge is only the starting point. We challenge the status quo to find better ways to navigate the complexities of healthcare delivery.",
    cards: [
      { title: "Intellectual Curiosity", desc: "As lifelong learners, we explore and encourage new ideas and challenge the status quo to improve healthcare delivery for all." },
      { title: "Humility", desc: "While confident in our abilities, we know our current knowledge is just the beginning. We yearn to learn, discover, and create continuously." },
      { title: "Inclusion", desc: "We embrace different perspectives and draw strength from diversity of thought, background, and experience." },
      { title: "", desc: "" },
    ],
  },
  {
    num: "Pillar 3",
    title: "Purposeful Impact",
    subtitle: "The Outcome",
    borderColor: "var(--navy)",
    desc: "Our success is defined by the tangible value we create. We are driven to make a lasting impact on the hospitals and healthcare systems we serve, ensuring every initiative results in a competitive advantage and a positive bottom-line change.",
    cards: [
      { title: "Value Delivered", desc: "We deliver tangible and positive change, ensuring clients receive multiples of their investment through competitive advantage and bottom-line impact." },
      { title: "Impact", desc: "We are passionate about making a lasting difference in the hospitals and healthcare systems we serve and we take initiative to make it happen." },
    ],
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
          <div className="hero-badge">
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
            We are seeking unconventional thinkers and decisive executors who thrive on solving complex challenges and developing high-performance solutions that set a new standard for our industry.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="sc">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="careers-why-grid">
            <div>
              <div className="sec-label">Why Work With Us</div>
              <h2 className="sec-title" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)", whiteSpace: "nowrap" }}>
                Why Work at Michael Hill, MD <em>&amp; Associates?</em>
              </h2>

              <p style={{ fontSize: "1.22rem", fontWeight: 700, color: "var(--navy)", fontFamily: "'Playfair Display', serif", fontStyle: "italic", marginBottom: 12, lineHeight: 1.4 }}>
                Drive Change. Define the Future.
              </p>
              <p style={{ fontSize: "1.04rem", color: "var(--mg)", lineHeight: 1.85, marginBottom: 28 }}>
                We don&apos;t just consult; we partner. We tackle our clients&apos; most difficult challenges to create a lasting, measurable impact. Our mission is to help organizations think, plan, and act differently, accelerating growth and enabling them to own their future rather than being disrupted by it.
              </p>

              <div style={{ borderLeft: "3px solid var(--red)", paddingLeft: 18, marginBottom: 28 }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 2vw, 1.9rem)", fontWeight: 700, color: "var(--navy)", marginBottom: 8, lineHeight: 1.2 }}>
                  The Michael Hill Mindset
                </p>
                <p style={{ fontSize: "1.02rem", color: "var(--mg)", lineHeight: 1.8, marginBottom: 16 }}>
                  We are a team of specialists who see opportunities where others see obstacles. We are looking for professionals who are:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--navy)" }}>Relentless: </span>
                    <span style={{ fontSize: "1.02rem", color: "var(--mg)", lineHeight: 1.8 }}>You don&apos;t just find a solution; you pursue it until the objective is met.</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--navy)" }}>Visionary: </span>
                    <span style={{ fontSize: "1.02rem", color: "var(--mg)", lineHeight: 1.8 }}>You possess the unique ability to spot opportunities and efficiencies that others miss.</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--navy)" }}>Partnership-Oriented: </span>
                    <span style={{ fontSize: "1.02rem", color: "var(--mg)", lineHeight: 1.8 }}>You believe that the best results come from a deep commitment to our clients, our colleagues, and our communities.</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn-p">
                Get In Touch &rarr;
              </Link>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden" }}>
              <Image
                src="/images/careers-team.jpg"
                alt="MHMDAA consulting team"
                width={560}
                height={380}
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
              The principles that guide everything we do — for our clients, our colleagues, and our communities.
            </p>
          </div>

          <div className="pillar-grid">
            {PILLARS.map((p) => (
              <div
                key={p.num}
                className="card"
                style={{ display: "flex", flexDirection: "column", borderTop: `4px solid ${p.borderColor}`, padding: "28px 26px 26px" }}
              >
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--navy)", marginBottom: 2, lineHeight: 1.25 }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: ".88rem", fontWeight: 600, color: "var(--mg)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14 }}>
                  {p.subtitle}
                </div>
                <p style={{ fontSize: "1rem", color: "var(--mg)", lineHeight: 1.8, marginBottom: 22, minHeight: "9rem" }}>
                  {p.desc}
                </p>
                <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: 18 }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignItems: "stretch" }}>
                  {p.cards.map((c, ci) => (
                    <div
                      key={c.title || `empty-${ci}`}
                      style={{
                        background: c.title ? "var(--off)" : "transparent",
                        border: c.title ? "1px solid var(--border)" : "none",
                        borderRadius: 10,
                        padding: c.title ? "14px 16px" : 0,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {c.title && <>
                        <div style={{ fontSize: ".95rem", fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>{c.title}</div>
                        <p style={{ fontSize: ".92rem", color: "var(--mg)", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
                      </>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Start a Conversation With Our Experts"
        description="Partner with MHMDAA&#x2019;s physician-led team and take the first decisive step toward building a denial-resilient, financially sustainable hospital operation."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
