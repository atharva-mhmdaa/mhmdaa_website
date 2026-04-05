import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABand from "@/components/ui/CTABand";
import BlogsContent from "@/components/blogs/BlogsContent";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Healthcare revenue cycle insights from MHMDAA on denial management, coding, payor services, and hospital operations.",
};

const BLOG_TOPICS = [
  {
    title: "Denial Management Strategies",
    desc: "Physician perspectives on reducing initial denial rates and building systematic appeal workflows that achieve <5% denial targets.",
    image: "/images/blog-topic-1.jpg",
  },
  {
    title: "P2P Review Best Practices",
    desc: "How physician-to-physician reviews differ from standard appeals and the clinical hooks that consistently reverse inappropriate denials.",
    image: "/images/blog-topic-2.jpg",
  },
  {
    title: "Two Midnight Rule Compliance",
    desc: "Navigating CMS evolving admission criteria and ensuring defensible inpatient status determinations every time.",
    image: "/images/blog-topic-3.jpg",
  },
  {
    title: "Clinical Documentation Improvement (CDI) & Coding Optimization",
    desc: "How clinical documentation improvement drives DRG accuracy, CC/MCC capture, and sustainable revenue cycle performance.",
    image: "/images/blog-topic-4.jpg",
  },
  {
    title: "Payor Litigation Trends",
    desc: "The evolving landscape of healthcare arbitration and what hospitals need to know about defensible medical-legal review standards.",
    image: "/images/blog-topic-5.jpg",
  },
  {
    title: "Revenue Cycle Technology",
    desc: "Integrating 835 remittance automation, claim scrubbers, and AI tools into a physician-led revenue cycle operation.",
    image: "/images/blog-topic-6.jpg",
  },
];

export default async function BlogsPage() {
  let dynamicPosts: { id: string; title: string; slug: string; excerpt: string | null; published_at: string | null; pdf_url: string | null; tags: string[] | null; cover_image_url: string | null; cover_image_position: number | null }[] = [];
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, published_at, pdf_url, tags, cover_image_url, cover_image_position')
      .eq('is_published', true)
      .order('published_at', { ascending: false });
    if (data) dynamicPosts = data;
  } catch {
    // Supabase not configured yet
  }

  return (
    <>
      {/* Hero */}
      <section className="blogs-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
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
            Insights &amp; Blogs
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
            Healthcare Revenue Cycle
            <br />
            <em style={{ fontStyle: "italic", color: "#93c5fd" }}>Insights &amp; Expertise</em>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,.82)",
              maxWidth: 600,
              lineHeight: 1.85,
              marginBottom: 32,
            }}
          >
            Expert perspectives on hospital operations, revenue cycle management,
            denial prevention, and healthcare policy from our physician-led team.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-p">
              Connect with our Experts →
            </Link>
          </div>
        </div>
      </section>

      {/* Toolbar + Featured + Dynamic Posts (client-side interactive) */}
      <BlogsContent dynamicPosts={dynamicPosts} />

      {/* Upcoming Topics */}
      <section className="section">
        <div className="sc">
          <div className="sec-header c" style={{ marginBottom: 40 }}>
            <div className="sec-label">Coming Soon</div>
            <h2 className="sec-title">
              Upcoming <em>Topics</em>
            </h2>
          </div>

          <div className="blog-topic-grid">
            {BLOG_TOPICS.map((topic) => (
              <div className="bt-card" key={topic.title}>
                <Image
                  className="bt-img"
                  src={topic.image}
                  alt={topic.title}
                  width={600}
                  height={340}
                />
                <div className="bt-body">
                  <div className="bt-title">{topic.title}</div>
                  <p className="bt-desc">{topic.desc}</p>
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
