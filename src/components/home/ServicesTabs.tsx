"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceTile {
  num: string;
  title: string;
  desc: string;
  href: string;
  img: string;
}

const providerServices: ServiceTile[] = [
  {
    num: "01",
    title: "01 \u2014 Authorization",
    desc: "Front-end integrity and clinical justification to avoid \u2018No Authorization\u2019 denials.",
    href: "/services/authorization",
    img: "/images/tile-authorization.png",
  },
  {
    num: "02",
    title: "02 \u2014 Payor Notification & Follow-up",
    desc: "Timely 18-hour status reviews and continuous feedback loop.",
    href: "/services/payor-notification",
    img: "/images/tile-payor-notification.png",
  },
  {
    num: "03",
    title: "03 \u2014 Accelerated Peer-to-Peer (AP2P)",
    desc: "A specialized review team mobilized within 6 hours of a denial, ensuring timely, peer\u2011level adjudication before the case progresses further in the review cycle.",
    href: "/services/p2p",
    img: "/images/tile-p2p.png",
  },
  {
    num: "04",
    title: "04 \u2014 Concurrent Review",
    desc: "Training physicians on the recognition of clinical milestones, with emphasis on the 18-hour review window, to support appropriate status conversion.",
    href: "/services/concurrent-review",
    img: "/images/tile-concurrent-review.png",
  },
  {
    num: "05",
    title: "05 \u2014 Coding & Clinical Documentation Improvement (CDI)",
    desc: "Clinical Documentation Improvement focused on high-risk DRGs and claim scrubber integration for CCI/MUE compliance.",
    href: "/services/coding",
    img: "/images/tile-coding.png",
  },
  {
    num: "06",
    title: "06 \u2014 Claim Submission",
    desc: "Optimization for first-pass payment accuracy and 835 EDI remittance automation.",
    href: "/services/claim-submission",
    img: "/images/tile-claim-submission.png",
  },
  {
    num: "07",
    title: "07 \u2014 Denial Management",
    desc: "Root cause analysis and Interdisciplinary Task Force working towards maintaining targeted denial rates below 5%.",
    href: "/services/denial-management",
    img: "/images/tile-denial-management.png",
  },
  {
    num: "08",
    title: "08 \u2014 Appeal Letter Writing",
    desc: "Personalized clinical narratives that counter denial rationales with objective clinical and billing data.",
    href: "/services/appeals",
    img: "/images/tile-appeals.png",
  },
  {
    num: "09",
    title: "09 \u2014 Litigation & Expert Support",
    desc: "Forensic contract review, expert witness testimony, and regulatory guidance.",
    href: "/services/litigation",
    img: "/images/tile-litigation.png",
  },
];

const payorServices: ServiceTile[] = [
  {
    num: "01",
    title: "Two Midnight Rule Compliance",
    desc: "Review clinical documentation for admission status decisions that align with Two Midnight Rule compliance and coverage criteria.",
    href: "/payor-services/two-midnight",
    img: "/images/index-28.jpg",
  },
  {
    num: "02",
    title: "Inpatient vs. Observation Determination",
    desc: "Apply rigorous threshold analysis to ensure clinical evidence at admission accurately supports an inpatient level of care.",
    href: "/payor-services/inpatient-obs",
    img: "/images/index-29.jpg",
  },
  {
    num: "03",
    title: "DRG Clinical Validation",
    desc: "Identify unsupported comorbidities and sequencing discrepancies to ensure reimbursement reflects actual acuity and resource utilization.",
    href: "/payor-services/drg-validation",
    img: "/images/index-30.jpg",
  },
  {
    num: "04",
    title: "ED Facility Methodology Review",
    desc: "Evaluate ED facility billing to ensure E&M level assignments reflect clinical complexity and meet payor methodology standards.",
    href: "/payor-services/ed-facility",
    img: "/images/index-31.jpg",
  },
  {
    num: "05",
    title: "Line-Item Coding Compliance",
    desc: "Audit procedure and diagnosis codes at the claim level to detect unbundling, upcoding, and documentation mismatches.",
    href: "/payor-services/line-item",
    img: "/images/index-32.jpg",
  },
  {
    num: "06",
    title: "Provider Dispute & Appeal Support",
    desc: "Construct clinically and contractually grounded responses to provider disputes with documented review rationale.",
    href: "/payor-services/dispute-appeal",
    img: "/images/index-33.jpg",
  },
  {
    num: "07",
    title: "Expert Medical Opinion Reports",
    desc: "Deliver specialist-authored medical opinions to resolve complex coverage and necessity disputes with clinical authority.",
    href: "/payor-services/expert-opinions",
    img: "/images/index-34.jpg",
  },
  {
    num: "08",
    title: "Rebuttal Reports & Deposition Support",
    desc: "Counter adverse clinical determinations with evidence-based rebuttal reports prepared by board-certified physicians.",
    href: "/payor-services/rebuttal",
    img: "/images/index-35.jpg",
  },
  {
    num: "09",
    title: "Demonstratives & Litigation Support",
    desc: "Develop visual exhibits and expert narratives that translate complex clinical records into clear, compelling litigation support.",
    href: "/payor-services/demonstratives",
    img: "/images/index-36.jpg",
  },
];

function TileGrid({ services }: { services: ServiceTile[] }) {
  return (
    <div
      className="svc-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
      }}
    >
      {services.map((svc) => (
        <Link key={svc.num} href={svc.href} className="svc-tile">
          <Image
            src={svc.img}
            alt={svc.title}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
          <div className="svc-tile-overlay" />
          <div className="svc-tile-num">{svc.num}</div>
          <div className="svc-tile-body">
            <div className="svc-tile-title">{svc.title}</div>
            <p className="svc-tile-desc">{svc.desc}</p>
            <span className="svc-tile-cta">Learn More &rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<"prov" | "payor">("prov");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginBottom: 36,
        }}
      >
        <button
          onClick={() => setActiveTab("prov")}
          style={{
            padding: "10px 28px",
            borderRadius: 100,
            border: "2px solid var(--navy)",
            background:
              activeTab === "prov" ? "var(--navy)" : "transparent",
            color: activeTab === "prov" ? "#fff" : "var(--navy)",
            fontSize: ".9rem",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all .2s",
            letterSpacing: ".04em",
            fontFamily: "inherit",
          }}
        >
          For Providers
        </button>
        <button
          onClick={() => setActiveTab("payor")}
          style={{
            padding: "10px 28px",
            borderRadius: 100,
            border: "2px solid var(--navy)",
            background:
              activeTab === "payor" ? "var(--navy)" : "transparent",
            color: activeTab === "payor" ? "#fff" : "var(--navy)",
            fontSize: ".9rem",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all .2s",
            letterSpacing: ".04em",
            fontFamily: "inherit",
          }}
        >
          For Payors
        </button>
      </div>

      {activeTab === "prov" ? (
        <TileGrid services={providerServices} />
      ) : (
        <TileGrid services={payorServices} />
      )}
    </>
  );
}
