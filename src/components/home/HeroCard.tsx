"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const tabs = ["For Providers", "For Payors", "Our Impact"] as const;

const providerCards = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
      </svg>
    ),
    name: "Front-End Strategy",
    desc: "Authorization & status integrity aligned with Payor criteria at admission",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-4 0v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    ),
    name: "Revenue Protection",
    desc: "Clinical Documentation Improvement coaching to prevent inappropriate DRG assignment before submission",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    name: "Tactical Defense",
    desc: "Physician Peer to Peer advocacy & evidence-based appeals",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    name: "Risk Mitigation",
    desc: "Expert witness & litigation to ensure appropriate reimbursement",
  },
];

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

const tabColors = ["#C8102E", "#34d399", "#fbbf24"];

export default function HeroCard() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % tabs.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 10000);
    return () => clearInterval(id);
  }, [next]);

  useEffect(() => {
    const container = tabsRef.current;
    if (!container) return;
    const buttons = container.querySelectorAll<HTMLButtonElement>("button[data-idx]");
    let touchHandled = false;
    const cleanups: Array<() => void> = [];
    buttons.forEach((btn) => {
      const idx = parseInt(btn.getAttribute("data-idx") ?? "0", 10);
      const onTouch = (e: Event) => { e.preventDefault(); touchHandled = true; setActive(idx); };
      const onClick = () => { if (touchHandled) { touchHandled = false; return; } setActive(idx); };
      btn.addEventListener("touchstart", onTouch, { passive: false });
      btn.addEventListener("click", onClick);
      cleanups.push(() => { btn.removeEventListener("touchstart", onTouch); btn.removeEventListener("click", onClick); });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="hero-card" style={{ marginTop: 0 }}>
      <div className="hrc-tabs" ref={tabsRef}>
        {tabs.map((label, i) => (
          <button
            key={i}
            className={`hrc-tab${i === active ? " active" : ""}`}
            data-idx={i}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="hrc-body">
        {/* Pane 1: For Providers */}
        <div className={`hrc-pane${active === 0 ? " active" : ""}`}>
          <div>
            <div className="hrc-ph">
              <div className="hrc-ph-dot" style={{ background: "#C8102E" }} />
              <div className="hrc-ph-lbl" style={{ color: "#f87171" }}>
                For Providers
              </div>
            </div>
            <div className="hrc-ph-title">How We Help Hospital Providers</div>
          </div>
          <div className="hfc-grid">
            {providerCards.map((card, i) => (
              <div className="hfc-card" key={i}>
                <div
                  className="hfc-icon-wrap"
                  style={{ background: "rgba(200,16,46,.18)" }}
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
              9 Integrated Service Lines
            </span>
            <Link href="/services" style={{ color: "#93c5fd" }}>
              View Provider Services &rarr;
            </Link>
          </div>
        </div>

        {/* Pane 2: For Payors */}
        <div className={`hrc-pane${active === 1 ? " active" : ""}`}>
          <div>
            <div className="hrc-ph">
              <div className="hrc-ph-dot" style={{ background: "#34d399" }} />
              <div className="hrc-ph-lbl" style={{ color: "#34d399" }}>
                For Payors
              </div>
            </div>
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
              View Payor Services &rarr;
            </Link>
          </div>
        </div>

        {/* Pane 3: Our Impact */}
        <div className={`hrc-pane${active === 2 ? " active" : ""}`}>
          <div>
            <div className="hrc-ph">
              <div className="hrc-ph-dot" style={{ background: "#fbbf24" }} />
              <div className="hrc-ph-lbl" style={{ color: "#fbbf24" }}>
                Our Impact
              </div>
            </div>
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
