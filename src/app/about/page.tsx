"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CTABand from "@/components/ui/CTABand";


const DR_HILL_CREDENTIALS = [
  "ACEP National Steering Committee",
  "Past President, CA-ACEP",
  "President/CEO \u2013 EMPATH",
  "IHI & Joint Commission Speaker",
  "RWJ Patient Flow Advisor",
  "UCSF Asst. Professor (1988–1998)",
  "Navigant Managing Director",
];

const DR_HILL_STATS = [
  { num: "12,500+", label: "Claims Reviewed" },
  { num: "125+", label: "Lead Testifying Expert" },
  { num: "250+", label: "Expert Depositions" },
  { num: "30+", label: "Years Consulting" },
];

const MARY_CREDENTIALS = [
  "Utilization Review",
  "Case Management",
  "Capacity Management",
  "Denial Management",
  "Interim Leadership",
  "Physician Advisory",
];

const MARY_ACHIEVEMENTS = [
  {
    title: "Operational Performance Improvements",
    desc: "Delivered quantifiable gains in UM/CM efficiency, including faster case progression, improved review accuracy, and reduced administrative rework, resulting in up to 35% overall efficiency improvement across client teams.",
  },
  {
    title: "Length\u2011of\u2011Stay Optimization",
    desc: "Directed operational redesigns that produced measurable LOS reductions, improving patient throughput, capacity management, and overall financial performance.",
  },
  {
    title: "Denial & Appeals Outcomes",
    desc: "Supported clients in achieving notable reductions in preventable denials and strengthened appeal success rates through targeted workflow redesign and clinical documentation alignment.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Jenna Brown",
    role: "Senior Director of Clinical Review",
    cred: "RN, BSN",
    photo: "/images/about-3.jpg",
    desc: "Jenna is a seasoned clinical review leader with over 15 years of nursing experience and a specialized focus on revenue cycle operations and hospital claim denials. Her background spans medical-surgical and cardiac care, informing her deep understanding of complex hospital operations and Payor policies. She excels in evaluating medical necessity determinations, inpatient admissions, and DRG disputes, applying evidence-based criteria to develop defensible findings. Her collaborative approach with utilization management and revenue cycle teams ensures rigorous adherence to regulatory and contractual reimbursement requirements.",
  },
  {
    name: "Lynnette Carlisle",
    role: "Team Captain",
    cred: "RN, BSN",
    photo: "/images/about-4.jpg",
    desc: "Lynnette brings extensive frontline clinical expertise from Level I and II trauma centers, critical care, and post-acute settings to MHMDAA\u2019s client operations. Specializing in high-acuity ICU, cardiology, and neurology, she translates direct patient care experience into precise medical necessity reviews and payment integrity investigations. Lynnette has completed hundreds of clinical audits, supporting both provider and Payor positions in denial management and appeals strategy. Her deep knowledge of MDS assessments and documentation standards ensures accurate level-of-care determinations and regulatory compliance throughout the patient stay.",
  },
  {
    name: "Dee Abbaiahvari",
    role: "Team Captain",
    cred: "RN, BSN, MS",
    photo: "/images/about-5.jpg",
    desc: "With over 15 years of healthcare leadership experience, Dee specializes in clinical transformation and Payor-provider dispute resolution. They possess a unique expertise in clinical-technical architecture and documentation integrity, consistently achieving 100% regulatory compliance in complex clinical models. Dee applies advanced clinical analysis to high-cost denial disputes using InterQual, MCG, and CMS guidelines to optimize reimbursement outcomes. Their background in leading large multidisciplinary teams and authoring automated compliance dashboards drives data-driven, defensible results for executive stakeholders.",
  },
  {
    name: "Mindy Geesaman",
    role: "Team Captain",
    cred: "MSN, RN, CCM",
    photo: "/images/about-6.jpg",
    desc: "Mindy is a Certified Case Manager with two decades of clinical experience across acute medical-surgical, pediatric, and neonatal intensive care units. She specializes in complex case management and interdisciplinary coordination, conducting over 500 clinical reviews annually to support medical necessity appeals and utilization disputes. Mindy\u2019s expertise includes DRG validation and the preparation of written determinations for legal proceedings and audits. By bridging clinical documentation with CMS Conditions of Participation and Payor policies, she promotes consistent guideline application and superior reimbursement outcomes.",
  },
];

const PROVIDER_STEPS = [
  { num: 1, title: "Assess", desc: "We perform comprehensive review of hospital strategy, operations, and revenue cycle to identify gaps and revenue opportunities." },
  { num: 2, title: "Strategize", desc: "Developing targeted action plans based on root cause analysis and clinical performance data unique to your facility." },
  { num: 3, title: "Implement", desc: "Deploying our nine integrated service lines with dedicated physician-led teams and technology for maximum impact." },
  { num: 4, title: "Sustain", desc: "Establishing feedback loops and performance metrics for lasting financial results and continuous revenue improvement." },
];

const PAYOR_STEPS = [
  { num: 1, title: "Abstract", desc: "Clinical, administrative, and utilization data are extracted and distilled into a focused summary highlighting the elements relevant to coverage, level of care, and benefit determination." },
  { num: 2, title: "Analysis", desc: "The clinical presentation, interventions, and resource utilization are evaluated against internal policies, operational benchmarks, and expected care patterns to identify discrepancies or unsupported components." },
  { num: 3, title: "Medical Necessity Validation", desc: "We validate medical necessity by applying evidence-based criteria, industry standards, National Coverage Determinations (NCDs), payor-provider contracts, and applicable law. Our approach ensures that disputed claims are adjudicated objectively and classified accurately as either Factually Supported or Policy-Driven." },
  { num: 4, title: "Construct", desc: "Clinical evidence and policy criteria are synthesized into a structured, physician-authored narrative. This defensible analysis explicitly links medical necessity to governing regulations, providing the legal and clinical evidentiary basis required to withstand scrutiny during provider appeals, arbitration, or CMS/NCQA audits." },
];

const VALUES = [
  {
    title: "Clinical Integrity is Our North Star",
    desc: "We provide Payors with unyielding clinical objectivity, ensuring every determination is rooted in medical fact rather than administrative convenience. We deliver the forensic clinical accuracy and defensible decision-making that health plans rely on to navigate a complex regulatory landscape.",
    color: "rgba(200,16,46,.1)",
    stroke: "#C8102E",
    icon: (
      <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "The Clinical Record is the Source of Truth",
    desc: "Payment integrity and medical necessity begin and end with the patient\u2019s clinical journey. We focus on the documented care as the ultimate foundation for every determination, ensuring that the Payor\u2019s logic is always anchored in the \u201cTruth of the Patient\u201d to maintain clinical and regulatory defensibility.",
    color: "rgba(27,42,91,.08)",
    stroke: "#2A3F7A",
    icon: (
      <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Data-Informed Precision",
    desc: "We leverage reliable quantitative evidence and qualitative clinical insight to guide Payor strategy. By analyzing outcomes, benchmarks, and utilization trends, we empower health plans to identify systemic over-coding and inequities, providing the transparency needed to defend decisions and focus improvement efforts where they matter most.",
    color: "rgba(42,63,122,.08)",
    stroke: "#2A3F7A",
    icon: (
      <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2A3F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    title: "Agile Change Management",
    desc: "In a rapidly shifting regulatory and market landscape, we help Payors pivot with speed and precision. We treat healthcare evolution as a continuous process by testing, refining, and scaling innovative strategies that allow our partners to lead the industry rather than simply react to it.",
    color: "rgba(5,150,105,.1)",
    stroke: "#059669",
    icon: (
      <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. ABOUT HERO */}
      <div className="about-hero">
        <div className="about-hero-inner">
          <div className="hero-badge">
            About Us
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.12,
              marginBottom: "18px",
            }}
          >
            Physician-Led. Results-Driven.
            <br />
            <em style={{ fontStyle: "italic", color: "#93c5fd" }}>
              Trusted Nationally.
            </em>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,.82)",
              maxWidth: "600px",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            MHMDAA is a high-reliability consulting firm dedicated to Payor-side clinical integrity. Through physician-led expertise and augmented intelligence, we resolve complex clinical disputes and protect health plans from systemic over-coding, ensuring that reimbursement is precisely aligned with the actual acuity of care.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-p">
              Connect with our Experts &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* 2. STATS BAR */}
      <div className="stats-strip">
        <div className="stats-hdr">
          <div className="sec-label" style={{ color: "#fff" }}>Proven Impact</div>
        </div>
        <div className="stats-strip-inner">
          {[
            { target: 190, label: "National Clients\nServed" },
            { target: 30, label: "Years of Consulting\nExperience" },
            { target: 12500, label: "Claims\nReviewed" },
            { target: 125, label: "Lead Testifying Expert\nEngagements" },
            { target: 250, label: "Expert\nDepositions" },
          ].map((stat, i) => (
            <RevealOnScroll key={i}>
              <div className="ss-item" style={{ "--sc": "#C8102E" } as React.CSSProperties}>
                <div className="ss-num">
                  <AnimatedCounter target={stat.target} />
                  <span className="ss-plus">+</span>
                </div>
                <div className="ss-label">
                  {stat.label.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < stat.label.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* 3. MISSION SECTION */}
      <div id="main-content">
        <section className="section mission-section" style={{ background: "#fff" }}>
          <div className="sc">
            <RevealOnScroll>
              <div className="sec-header c mission-sec-header">
                <div className="sec-label">Our Vision, Mission, Values</div>
                <h2 className="sec-title">
                  Restoring <em>Clinical Authority</em>
                  <br />
                  to the Revenue Cycle
                </h2>
              </div>
            </RevealOnScroll>

            {/* Vision */}
            <RevealOnScroll>
              <div
                className="mission-card"
                style={{
                  background: "linear-gradient(135deg,#f8fafc 0%,#f0f4ff 100%)",
                  border: "1px solid rgba(27,42,91,.1)",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "4px",
                    background: "linear-gradient(to bottom,#C8102E,#a50d24)",
                    borderRadius: "4px 0 0 4px",
                  }}
                />
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: 700,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "#C8102E",
                    marginBottom: "16px",
                  }}
                >
                  Vision
                </div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#2A3F7A",
                    lineHeight: 1.85,
                    fontWeight: 500,
                  }}
                >
                  To lead a systemic shift from reactive claims processing to
                  proactive payment integrity, ensuring that administrative
                  complexity and regulatory nuances never compromise the
                  clinical accuracy of the Payor ecosystem. We replace friction
                  with clinical precision and data-backed transparency.
                </p>
              </div>
            </RevealOnScroll>

            {/* Mission Quote */}
            <RevealOnScroll>
              <div
                className="mission-card"
                style={{
                  background: "linear-gradient(135deg,#0d1a35 0%,#2A3F7A 100%)",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "4px",
                    background: "linear-gradient(to bottom,#C8102E,#a50d24)",
                    borderRadius: "4px 0 0 4px",
                  }}
                />
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: 700,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "#f87171",
                    marginBottom: "20px",
                  }}
                >
                  Mission
                </div>
                <blockquote style={{ margin: 0, padding: 0, border: "none" }}>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontStyle: "italic",
                      color: "rgba(255,255,255,.92)",
                      lineHeight: 1.85,
                      marginBottom: 0,
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 500,
                    }}
                  >
                    &ldquo;Our mission is to restore clinical authority to
                    Payor operations. By providing the sub-specialty expertise
                    and forensic rigor necessary to validate complex claims at
                    the source, we ensure that payment integrity is governed by
                    the{" "}
                    <strong style={{ color: "#93c5fd", fontStyle: "normal" }}>
                      &lsquo;Truth of the Patient&rsquo;
                    </strong>{" "}
                    rather than the limitations of an algorithm.&rdquo;
                  </p>
                </blockquote>
              </div>
            </RevealOnScroll>

            {/* Firm Statement */}
            <RevealOnScroll>
              <div
                className="mission-card"
                style={{
                  background: "linear-gradient(135deg,#f8fafc 0%,#f0f4ff 100%)",
                  border: "1px solid rgba(27,42,91,.1)",
                  borderRadius: "20px",
                  marginBottom: "28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "4px",
                    background: "linear-gradient(to bottom,#C8102E,#a50d24)",
                    borderRadius: "4px 0 0 4px",
                  }}
                />
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: 700,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "#C8102E",
                    marginBottom: "16px",
                  }}
                >
                  Firm Statement
                </div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#2A3F7A",
                    lineHeight: 1.85,
                    fontWeight: 500,
                  }}
                >
                  MHMDAA is a{" "}
                  <strong>high-reliability consulting firm</strong> dedicated to
                  restoring integrity to the healthcare reimbursement cycle.
                  Through physician-led advocacy and augmented intelligence,
                  MHMDAA resolves complex clinical disputes, ensuring
                  that providers are paid for the acuity of care delivered and
                  Payors are protected from systemic over-coding.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>

      {/* 4. DR. HILL CINEMATIC SECTION */}
      <section id="dr-hill" className="cin-section-about">
        {/* Photo + gradients wrapped so mobile overlay can sit on top */}
        <div className="cin-about-photo-wrap">
          <Image
            src="/images/dr-hill-new.jpg"
            alt="Dr. Michael Hill"
            fill
            style={{ objectFit: "cover", objectPosition: "20% top" }}
          />
          <div className="cin-grad-about" />
          <div className="cin-grad-bottom-about" />

          {/* Mobile-only: badge + name + quote overlaid on photo */}
          <div className="cin-mobile-overlay-about">
            <div className="cin-mob-badge">Founder &amp; CEO</div>
            <div className="cin-mob-name">Michael Hill, <em>MD</em></div>
            <div className="cin-mob-sub">Residency UCLA-Trained Emergency Physician &nbsp;&middot;&nbsp; UC Irvine School of Medicine</div>
            <div className="cin-mob-quote">
              <p>&ldquo;In an era of friction between automated Payor denials and provider over-coding, MHMDAA serves as the essential clinical intermediary. Our physician-led framework delivers the defensible evidence required to secure compliance and revenue in 2026.&rdquo;</p>
              <cite>— Michael Hill, MD &nbsp;&middot;&nbsp; Founder &amp; CEO, MHMDAA</cite>
            </div>
          </div>
        </div>

        {/* Desktop content panel */}
        <div className="cin-inner-about cin-inner-about-desktop">
          <RevealOnScroll direction="right" className="cin-content-about">
            <div
              className="hero-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(200,16,46,.28)",
                border: "1px solid rgba(200,16,46,.7)",
                borderLeft: "none",
                borderRadius: 100,
                padding: "6px 18px",
                color: "#fca5a5",
                marginBottom: "20px",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C8102E", flexShrink: 0, display: "inline-block" }} />
              Founder &amp; CEO
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.2vw, 3rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "6px",
              }}
            >
              Michael Hill,{" "}
              <em style={{ fontStyle: "italic", color: "#93c5fd" }}>MD</em>
            </h2>
            <p
              style={{
                fontSize: "1.04rem",
                color: "rgba(255,255,255,.75)",
                marginBottom: "24px",
                letterSpacing: ".04em",
              }}
            >
              Residency UCLA-Trained Emergency Physician &nbsp;&middot;&nbsp; UC
              Irvine School of Medicine
            </p>

            <div
              style={{
                borderLeft: "3px solid #C8102E",
                padding: "18px 22px",
                background: "rgba(255,255,255,.06)",
                backdropFilter: "blur(8px)",
                borderRadius: "0 14px 14px 0",
                marginBottom: "26px",
              }}
            >
              <p
                style={{
                  fontSize: "1.04rem",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,.9)",
                  lineHeight: 1.82,
                }}
              >
                &ldquo;In an era of friction between automated Payor denials
                and provider over-coding, MHMDAA serves as the essential
                clinical intermediary. Our physician-led framework delivers the
                defensible evidence required to secure compliance and revenue in
                2026.&rdquo;
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,.75)",
                  marginTop: "10px",
                  fontWeight: 600,
                }}
              >
                - Michael Hill, MD &nbsp;&middot;&nbsp; Founder &amp; CEO, MHMDAA
              </p>
            </div>

            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,.82)", lineHeight: 1.85, marginBottom: "14px" }}>
              Dr. Hill is an accomplished healthcare executive with{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>30+ years</strong>{" "}
              of consulting experience, combining clinical care redesign, technology development, and leadership acumen. He spent 15+ years as a practicing emergency physician, directing operations and quality for a{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>52-hospital, 250 emergency physician group</strong>{" "}
              across five western states. As a Managing Director at{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>Navigant Consulting</strong>{" "}
              and founder of EMPATH Consulting, he led 40+ major national hospital change management projects with revenue outcomes of{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>$5M&ndash;$28M per engagement</strong>. Dr. Hill has worked with more than{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>80 Case Management Departments</strong>,
              including operational redesign and training of case managers and physicians on inpatient status determination, developed and deployed Clinical Documentation Improvement (CDI) training programs for physicians, coders, and utilization managers, and designed and deployed{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>14 utilization management programs</strong>{" "}
              across North America.
            </p>

            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,.82)", lineHeight: 1.85, marginBottom: "14px" }}>
              Dr. Hill has served as a{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>clinical expert witness in more than 125 arbitrations, depositions, and trials</strong>,
              testifying on over{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>12,500 claims</strong>{" "}
              spanning medical necessity, ICD-10/DRG coding, EMTALA, pre-payment reviews, and denial management for national Payors, health systems, and provider groups before AAA, AHLA, and federal courts. His testimony has included opinions involving the 8 largest healthcare insurers in the USA.
            </p>

            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,.82)", lineHeight: 1.85, marginBottom: "22px" }}>
              He served as{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>President of the California Chapter of the American College of Emergency Physicians</strong>{" "}
              when the landmark{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>Bergeson Bill (AB 1862)</strong>{" "}
              (California&rsquo;s prudent layperson, EMTALA standards, and post-stabilization legislation) was passed. He has trained{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>8,000+ emergency physicians and nurses</strong>{" "}
              through his nationally presented &ldquo;High Risk Emergency Medicine&rdquo; program and served as a{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>Patient Flow Expert Advisor</strong>{" "}
              to the Robert Wood Johnson Foundation, The Joint Commission and the Institute for Healthcare Improvement.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "24px" }}>
              {DR_HILL_CREDENTIALS.map((c) => (
                <span key={c} style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.13)", color: "rgba(255,255,255,.82)", fontSize: ".78rem", fontWeight: 600, padding: "4px 11px", borderRadius: "100px" }}>
                  {c}
                </span>
              ))}
            </div>

            <div className="cin-stats-about">
              {DR_HILL_STATS.map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "12px", padding: "13px 6px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.55rem", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: ".7rem", color: "rgba(255,255,255,.82)", marginTop: "4px", lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="cin-btns-about">
              <Link href="/contact" className="btn-p">Partner With Our Team &rarr;</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* DR. HILL — Mobile bio block (shown only on mobile) */}
      <div className="cin-bio-mobile-about">
        <p>Dr. Hill is an accomplished healthcare executive with <strong>30+ years</strong> of consulting experience, combining clinical care redesign, technology development, and leadership acumen. He spent 15+ years as a practicing emergency physician, directing operations and quality for a <strong>52-hospital, 250 emergency physician group</strong> across five western states. As a Managing Director at <strong>Navigant Consulting</strong> and founder of EMPATH Consulting, he led 40+ major national hospital change management projects with revenue outcomes of <strong>$5M&ndash;$28M per engagement</strong>. Dr. Hill has worked with more than <strong>80 Case Management Departments</strong>, including operational redesign and training of case managers and physicians on inpatient status determination, and designed and deployed <strong>14 utilization management programs</strong> across North America.</p>
        <p>Dr. Hill has served as a <strong>clinical expert witness in more than 125 arbitrations, depositions, and trials</strong>, testifying on over <strong>12,500 claims</strong> spanning medical necessity, ICD-10/DRG coding, EMTALA, pre-payment reviews, and denial management for national Payors, health systems, and provider groups before AAA, AHLA, and federal courts. His testimony has included opinions involving the 8 largest healthcare insurers in the USA.</p>
        <p>He served as <strong>President of the California Chapter of the American College of Emergency Physicians</strong> when the landmark <strong>Bergeson Bill (AB 1862)</strong> was passed. He has trained <strong>8,000+ emergency physicians and nurses</strong> through his nationally presented &ldquo;High Risk Emergency Medicine&rdquo; program.</p>
        <div className="cin-bio-pills">
          {DR_HILL_CREDENTIALS.map((c) => <span key={c}>{c}</span>)}
        </div>
        <div className="cin-bio-stats">
          {DR_HILL_STATS.map((s) => (
            <div key={s.label} className="cin-bio-stat">
              <div className="cin-bio-stat-num">{s.num}</div>
              <div className="cin-bio-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="cin-bio-btns">
          <Link href="/contact" className="btn-p">Partner With Our Team &rarr;</Link>
        </div>
      </div>

      {/* 5. MARY GOODWIN CINEMATIC SECTION */}
      <section className="cin-section-about" style={{ minHeight: "620px" }}>
        <div className="cin-about-photo-wrap">
          <Image
            src="/images/about-2.jpg"
            alt="Mary Goodwin"
            fill
            style={{ objectFit: "cover", objectPosition: "left top" }}
          />
          <div className="cin-grad-about" />
          <div className="cin-grad-bottom-about" />

          {/* Mobile-only overlay */}
          <div className="cin-mobile-overlay-about">
            <div className="cin-mob-badge">Chief of Operations</div>
            <div className="cin-mob-name">Mary Goodwin, <em>BSN, MHSA</em></div>
            <div className="cin-mob-sub">25+ Years Healthcare Leadership &nbsp;&middot;&nbsp; Utilization Review &amp; Case Management</div>
            <div className="cin-mob-quote">
              <p>&ldquo;Operational excellence in healthcare is built through disciplined systems, clinical alignment, and unwavering accountability, and that is the standard we deliver for every client we serve.&rdquo;</p>
              <cite>— Mary Goodwin, BSN, MHSA &nbsp;&middot;&nbsp; Chief of Operations, MHMDAA</cite>
            </div>
          </div>
        </div>

        {/* Desktop content panel */}
        <div className="cin-inner-about cin-inner-about-desktop">
          <RevealOnScroll direction="right" className="cin-content-about">
            <div
              className="hero-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(200,16,46,.28)",
                border: "1px solid rgba(200,16,46,.7)",
                borderLeft: "none",
                borderRadius: 100,
                padding: "6px 18px",
                color: "#fca5a5",
                marginBottom: "20px",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C8102E", flexShrink: 0, display: "inline-block" }} />
              Chief of Operations
            </div>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.2vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "6px" }}>
              Mary Goodwin,{" "}
              <em style={{ fontStyle: "italic", color: "#93c5fd" }}>BSN, MHSA</em>
            </h2>
            <p style={{ fontSize: "1.04rem", color: "rgba(255,255,255,.75)", marginBottom: "24px", letterSpacing: ".04em" }}>
              25+ Years Healthcare Leadership &nbsp;&middot;&nbsp; Utilization Review &amp; Case Management
            </p>

            <div style={{ borderLeft: "3px solid #C8102E", padding: "18px 22px", background: "rgba(255,255,255,.06)", backdropFilter: "blur(8px)", borderRadius: "0 14px 14px 0", marginBottom: "26px" }}>
              <p style={{ fontSize: "1.04rem", fontStyle: "italic", color: "rgba(255,255,255,.9)", lineHeight: 1.82 }}>
                &ldquo;Operational excellence in healthcare is built through disciplined systems, clinical alignment, and unwavering accountability, and that is the standard we deliver for every client we serve.&rdquo;
              </p>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,.75)", marginTop: "10px", fontWeight: 600 }}>
                - Mary Goodwin, BSN, MHSA &nbsp;&middot;&nbsp; Chief of Operations, MHMDAA
              </p>
            </div>

            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,.82)", lineHeight: 1.85, marginBottom: "14px" }}>
              Mary Goodwin, BSN, MHSA, is an accomplished healthcare leader and nationally recognized subject matter expert in{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>utilization review, case management, and hospital capacity management</strong>.
              Her career is defined by operational excellence and data-driven redesign, with a strong record of improving utilization management performance, optimizing patient flow, and achieving measurable gains in denial management and length-of-stay reduction.
            </p>

            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,.82)", lineHeight: 1.85, marginBottom: "14px" }}>
              Mary&rsquo;s expertise spans both local hospital operations and{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>large, multi-facility health systems</strong>.
              She has developed and evaluated best practices for Utilization Management and Case Management, designed strategic models that elevate the Physician Advisor role, and led remote and onsite teams responsible for high-reliability clinical utilization review.
            </p>

            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,.82)", lineHeight: 1.85, marginBottom: "14px" }}>
              Her leadership includes{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>interim and turnaround roles</strong>,
              where she provides direct operational oversight, leadership development, and staffing stabilization for hospital care management departments. She has also led system-level redesign efforts, including enterprise-wide care coordination models and physician advisory partnerships across expansive hospital networks.
            </p>

            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,.82)", lineHeight: 1.85, marginBottom: "22px" }}>
              Today, Mary serves as{" "}
              <strong style={{ color: "rgba(255,255,255,.85)" }}>Chief of Operations for MHMDAA</strong>,
              where she orchestrates the firm&rsquo;s operational, clinical, and administrative functions, ensuring seamless coordination across workflows, contracts, and client communications, supporting a high-performance infrastructure for the delivery of expert clinical reviews, medico-legal consulting, and payor-provider dispute resolution.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {MARY_ACHIEVEMENTS.map((a) => (
                <div key={a.title} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.11)", borderLeft: "3px solid #C8102E", borderRadius: "0 10px 10px 0", padding: "12px 16px" }}>
                  <div style={{ fontSize: ".78rem", fontWeight: 700, color: "#f87171", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "4px" }}>{a.title}</div>
                  <div style={{ fontSize: ".88rem", color: "rgba(255,255,255,.78)", lineHeight: 1.55 }}>{a.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "24px" }}>
              {MARY_CREDENTIALS.map((c) => (
                <span key={c} style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.13)", color: "rgba(255,255,255,.82)", fontSize: ".78rem", fontWeight: 600, padding: "4px 11px", borderRadius: "100px" }}>{c}</span>
              ))}
            </div>

            <div className="cin-btns-about">
              <Link href="/contact" className="btn-p">Connect With Our Team &rarr;</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* MARY GOODWIN — Mobile bio block */}
      <div className="cin-bio-mobile-about">
        <p>Mary Goodwin, BSN, MHSA, is an accomplished healthcare leader and nationally recognized subject matter expert in <strong>utilization review, case management, and hospital capacity management</strong>. Her career is defined by operational excellence and data-driven redesign, with a strong record of improving utilization management performance, optimizing patient flow, and achieving measurable gains in denial management and length-of-stay reduction.</p>
        <p>Mary&rsquo;s expertise spans both local hospital operations and <strong>large, multi-facility health systems</strong>. She has developed and evaluated best practices for Utilization Management and Case Management, designed strategic models that elevate the Physician Advisor role, and led remote and onsite teams responsible for high-reliability clinical utilization review.</p>
        <p>Today, Mary serves as <strong>Chief of Operations for MHMDAA</strong>, where she orchestrates the firm&rsquo;s operational, clinical, and administrative functions, supporting a high-performance infrastructure for expert clinical reviews, medico-legal consulting, and Payor-provider dispute resolution.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
          {MARY_ACHIEVEMENTS.map((a) => (
            <div key={a.title} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.11)", borderLeft: "3px solid #C8102E", borderRadius: "0 10px 10px 0", padding: "12px 16px" }}>
              <div style={{ fontSize: ".78rem", fontWeight: 700, color: "#f87171", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "4px" }}>{a.title}</div>
              <div style={{ fontSize: ".88rem", color: "rgba(255,255,255,.78)", lineHeight: 1.55 }}>{a.desc}</div>
            </div>
          ))}
        </div>
        <div className="cin-bio-pills">
          {MARY_CREDENTIALS.map((c) => <span key={c}>{c}</span>)}
        </div>
        <div className="cin-bio-btns">
          <Link href="/contact" className="btn-p">Connect With Our Team &rarr;</Link>
        </div>
      </div>

      {/* 6. TEAM CAPTAINS */}
      <section className="section" style={{ background: "#f8fafc", paddingBottom: 32 }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c">
              <div className="sec-label">Our Leadership Team</div>
              <h2 className="sec-title">
                Meet Our <em>Team Captains</em>
              </h2>
              <p className="sec-sub">
                Experienced clinical leaders driving excellence across every
                service line. Our team captains bring decades of hands-on
                hospital operations experience to every client engagement.
              </p>
            </div>
          </RevealOnScroll>
          <div className="team-grid">
            {TEAM_MEMBERS.map((m) => (
              <RevealOnScroll key={m.name}>
                <div className="team-card">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={427}
                    height={424}
                    className="team-photo"
                  />
                  <div className="team-info">
                    <div className="team-name">{m.name}</div>
                    <div className="team-role">{m.role}</div>
                    <div className="team-cred">{m.cred}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VALUES */}
      <section className="section" style={{ background: "#f8fafc", paddingTop: 32, paddingBottom: 48 }}>
        <div className="sc">
          <RevealOnScroll>
            <div className="sec-header c">
              <div className="sec-label">Our Values</div>
              <h2 className="sec-title">
                What <em>Guides</em> Us
              </h2>
            </div>
          </RevealOnScroll>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="value-card-wrap">
                <RevealOnScroll>
                  <div className="value-card">
                    <div className="vc-icon" style={{ background: v.color }}>
                      {v.icon}
                    </div>
                    <h4 className="vc-title">{v.title}</h4>
                    <p className="vc-desc">{v.desc}</p>
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA BAND */}
      <CTABand
        heading="Start a Conversation with Our Experts"
        description="Partner with MHMDAA&apos;s physician-led team and take the first step towards building denial-resilient, sustainable financial payor operations."
      />
    </>
  );
}
