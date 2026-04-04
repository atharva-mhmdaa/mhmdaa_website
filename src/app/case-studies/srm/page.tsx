import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Client Case Study: West Coast Faith-Based Non-Profit — MHMDAA",
  description:
    "LOS reduction and transfer capacity optimization at a West Coast faith-based non-profit.",
};

export default function SRMCaseStudy() {
  return (
    <div className="cs-page" style={{ paddingTop: 220 }}>
      <Link href="/case-studies" className="cs-back">
        ← Back to Case Studies
      </Link>

      <div className="cs-eyebrow">Client Case Study</div>

      <h1 className="cs-title">
        West Coast Faith-Based Non-Profit
      </h1>
      <h2 className="cs-subtitle">
        LOS Reduction &amp; Transfer Capacity Optimization
      </h2>
      <div className="cs-divider" />

      <div className="cs-block">
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#2A3F7A",
            marginBottom: 14,
          }}
        >
          The Challenge
        </h3>
        <div className="cs-body">
          <p>
            California Faith-Based Community Hospital (the Hospital), a 278-bed
            non-profit, faith-based institution, faced persistently high
            inpatient length-of-stay, ED crowding, and was routinely forced to
            deny external transfer requests due to an ongoing lack of functional
            bed capacity, directly impacting revenue and community access to
            care.
          </p>
        </div>
      </div>

      <div className="cs-block">
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#2A3F7A",
            marginBottom: 14,
          }}
        >
          The Solution
        </h3>
        <div className="cs-body">
          <p>
            <strong>Hospital Collaborative Care.</strong> MHMDAA worked directly
            with leadership to introduce a comprehensive, integrated approach to
            reduce inpatient LOS. This included working closely with
            hospitalists and specialists to create standardized communication
            strategies between all staff, physicians, and their patients,
            aligning discharge planning with clinical decision-making from day
            one of each admission.
          </p>
        </div>
      </div>

      <div className="cs-block results">
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#C8102E",
            marginBottom: 14,
          }}
        >
          The Results
        </h3>
        <div className="cs-body">
          <p>
            The Hospital was able to reduce inpatient length-of-stay by{" "}
            <strong>0.75 days</strong>. The number of hospitalist discharge
            orders placed by <strong>9 AM</strong> increased dramatically from{" "}
            <strong>11% to 54%+</strong>, a transformative shift in morning
            throughput culture. The number of accepted external incoming
            transfers increased by <strong>25%</strong>, directly recovering
            previously lost revenue and expanding community access to the
            facility.
          </p>
        </div>
        <div className="results-grid">
          <div className="res-item">
            <div className="res-num">0.75 days</div>
            <div className="res-label">IP LOS Reduction</div>
          </div>
          <div className="res-item">
            <div className="res-num">11% → 54%+</div>
            <div className="res-label">AM Discharge Orders by 9 AM</div>
          </div>
          <div className="res-item">
            <div className="res-num">+25%</div>
            <div className="res-label">External Transfers Accepted</div>
          </div>
        </div>
      </div>
    </div>
  );
}
