"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// HIDDEN — "For Providers" tab removed; re-enable when provider-services page is reactivated
// const tabs = ["For Providers", "For Payors", "Our Impact"] as const;
const tabs = ["How We Help", "Our Impact"] as const;

// HIDDEN — re-enable when provider-services page is reactivated
// const providerCards = [
//   { name: "Front-End Strategy", desc: "Authorization & status integrity aligned with Payor criteria at admission" },
//   { name: "Revenue Protection", desc: "Clinical Documentation Improvement coaching to prevent inappropriate DRG assignment before submission" },
//   { name: "Tactical Defense", desc: "Physician Peer to Peer advocacy & evidence-based appeals" },
//   { name: "Risk Mitigation", desc: "Expert witness & litigation to ensure appropriate reimbursement" },
// ];

const payorCards = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
    name: "Medical Necessity Validation",
    desc: "Use of evidence-based clinical decision making criteria in defense of denied claims",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    name: "Level-of-Care Verification",
    desc: "Ensuring the intensity of services provided matches the patient\u2019s severity of illness and the designated care setting.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    name: "Billing Integrity",
    desc: "Identifying recurring error patterns that lead to provider violations of payor agreements.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
    name: "Regulatory Defense",
    desc: "CMS/NCQA audit validation protecting Star Ratings",
  },
];

const impactStats = [
  { num: "12,500", color: "#fbbf24", label: "Claims\nReviewed" },
  { num: "125", color: "#34d399", label: "Lead Testifying\nExpert" },
  { num: "250", color: "#93c5fd", label: "Expert\nDepositions" },
  { num: "190", color: "#f87171", label: "National\nClients" },
];

// HIDDEN — "#C8102E" was for the For Providers tab; re-add when reactivated
const tabColors = ["#34d399", "#fbbf24"];

export default function HeroCard() {
  const [active, setActive] = useState(0);

  const durations = [10000, 5000]; // "How We Help" = 10s, "Our Impact" = 5s

  useEffect(() => {
    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, durations[active]);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <div className="hero-card" style={{ marginTop: 0 }}>
      <div className="hrc-tabs">
        {tabs.map((label, i) => (
          <button
            key={i}
            className={`hrc-tab${i === active ? " active" : ""}`}
            data-idx={i}
            onClick={() => setActive(i)}
            style={{ touchAction: "manipulation" }}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="hrc-body">
        {/* Pane: For Providers — HIDDEN; re-enable when provider-services page is reactivated */}
        {/* <div className={`hrc-pane${active === 0 ? " active" : ""}`}>
          ...For Providers content...
        </div> */}

        {/* Pane 1: For Payors */}
        <div className={`hrc-pane${active === 0 ? " active" : ""}`}>
          <div>
            <div className="hrc-ph-title">
              How We Help Payor Organizations
            </div>
          </div>
          <div className="hfc-grid">
            {payorCards.map((card, i) => (
              <div className="hfc-card" key={i}>
                <div
                  className="hfc-icon-wrap"
                  style={{ background: "rgba(52,211,153,.15)" }}
                >
                  {card.icon}
                </div>
                <div className="hfc-name">{card.name}</div>
                <div className="hfc-desc">{card.desc}</div>
              </div>
            ))}
          </div>
          <div className="hrc-cta-row">
            <span
              style={{
                fontSize: ".85rem",
                color: "rgba(255,255,255,.5)",
                fontWeight: 500,
              }}
            >
              Objective. Independent. Clinical.
            </span>
            <Link href="/payor-services" style={{ color: "#34d399" }}>
              View Our Services &rarr;
            </Link>
          </div>
        </div>

        {/* Pane 2: Our Impact */}
        <div className={`hrc-pane${active === 1 ? " active" : ""}`}>
          <div>
            <div className="hrc-ph-title">Our Track Record in Numbers</div>
          </div>
          <div className="hrc-stat-grid">
            {impactStats.map((stat, i) => (
              <div className="hrc-stat-card" key={i}>
                <div
                  className="hrc-stat-num"
                  style={{ color: stat.color }}
                >
                  {stat.num}
                  <span style={{ fontSize: "1.32rem" }}>+</span>
                </div>
                <div className="hrc-stat-label">
                  {stat.label.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < stat.label.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            className="hrc-cta-row"
            style={{ justifyContent: "center", gap: 18 }}
          >
            <span
              style={{
                fontSize: ".86rem",
                color: "rgba(255,255,255,.75)",
                fontWeight: 600,
              }}
            >
              Nationwide
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
