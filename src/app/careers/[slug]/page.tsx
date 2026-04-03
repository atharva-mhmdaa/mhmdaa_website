import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';

export const revalidate = 0;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: job } = await supabase
    .from('job_postings')
    .select('title, department')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!job) return { title: 'Job Not Found' };

  return {
    title: `${job.title} | Careers — MHMDAA`,
    description: `${job.title} – ${job.department || 'Open Position'} at Michael Hill, MD & Associates`,
  };
}

const LocationIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default async function JobPostingPage({ params }: Props) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: job } = await supabase
    .from('job_postings')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!job) notFound();

  return (
    <>
      {/* Hero */}
      <section className="jd-hero">
        <div className="jd-hero__grid" />
        <div className="jd-hero__inner">
          <Link href="/careers" className="jd-hero__back">
            {'\u2190'}&nbsp;Back to Careers
          </Link>

          <div className="jd-hero__badges">
            <span className="jd-badge--hiring">
              <span className="jd-badge__dot" /> Now Hiring
            </span>
            {job.department && (
              <span className="jd-badge--dept">{job.department}</span>
            )}
            {job.employment_type && (
              <span className="jd-badge--type">{job.employment_type}</span>
            )}
          </div>

          <h1 className="jd-hero__title">{job.title}</h1>

          <div className="jd-hero__meta">
            {job.department && (
              <span className="jd-hero__meta-item">
                <BriefcaseIcon />
                {job.department}
              </span>
            )}
            {job.employment_type && (
              <span className="jd-hero__meta-item">
                <ClockIcon />
                {job.employment_type}
              </span>
            )}
            {job.location && (
              <span className="jd-hero__meta-item">
                <LocationIcon />
                {job.location}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="jd-content">
        <div className="jd-content__inner">
          {/* Apply CTA */}
          <div className="jd-apply-band">
            <div>
              <div className="jd-apply-band__heading">
                Interested in This Role?
              </div>
              <p className="jd-apply-band__sub">
                Send your details to get started. No portal, just email.
              </p>
            </div>
            <a
              href={`mailto:info@mhmdaa.com?subject=Application – ${encodeURIComponent(job.title)}`}
              className="btn-p"
              style={{ background: '#C8102E', borderColor: '#C8102E', whiteSpace: 'nowrap' }}
            >
              Apply via Email &rarr;
            </a>
          </div>

          {/* Description */}
          {job.description && (
            <div className="jd-section">
              <div className="jd-label">About This Role</div>
              <h2 className="jd-heading">Job Description</h2>
              <div
                className="jd-body"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </div>
          )}

          {/* Requirements */}
          {job.requirements && (
            <div className="jd-section">
              <div className="jd-label">What You Need</div>
              <h2 className="jd-heading">Requirements &amp; Qualifications</h2>
              <div
                className="jd-body"
                dangerouslySetInnerHTML={{ __html: job.requirements }}
              />
            </div>
          )}

          {/* Bottom CTA */}
          <div className="jd-bottom-cta">
            <h3 className="jd-bottom-cta__heading">
              Ready to Make an Impact?
            </h3>
            <p className="jd-bottom-cta__text">
              To apply, email{' '}
              <a
                href={`mailto:info@mhmdaa.com?subject=Application – ${job.title}`}
                style={{ color: '#2A3F7A', fontWeight: 700 }}
              >
                info@mhmdaa.com
              </a>
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`mailto:info@mhmdaa.com?subject=Application – ${job.title}`}
                className="btn-p"
              >
                Apply via Email &rarr;
              </a>
              <Link href="/careers" className="btn-o">
                View All Openings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
