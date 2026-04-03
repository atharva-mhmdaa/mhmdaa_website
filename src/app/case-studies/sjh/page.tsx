import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Client Case Study: Pacific Northwest Magnet-Designated Medical Center — MHMDAA",
  description:
    "Functional capacity expansion and patient flow optimization at Pacific Northwest Magnet-Designated Medical Center.",
};

export default function SJHCaseStudy() {
  return (
    <div className="cs-page" style={{ paddingTop: 220 }}>
      <Link href="/case-studies" className="cs-back">
        ← Back to Case Studies
      </Link>

      <div className="cs-eyebrow">Client Case Study</div>

      <h1 className="cs-title">
        Pacific Northwest Magnet-Designated Medical Center
      </h1>
      <h2 className="cs-subtitle">
        Functional Capacity Expansion &amp; Patient Flow Optimization
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
            Pacific Northwest Regional Hospital (the Hospital) faced
            unprecedented service demands across its three primary service
            sectors and needed to dramatically optimize functional capacity,
            reduce length-of-stay, and cut throughput times for both admission
            and discharge.
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
            <strong>Improve Patient Flow &amp; Functional Capacity.</strong>{" "}
            Michael Hill, MD and Associates deployed its proprietary{" "}
            <strong>Accountable Hospital Operations</strong> prototype, a
            physician-led framework that re-engineers patient flow from the front
            door through discharge, eliminating bottlenecks and dramatically
            opening the hospital to treating more patients more effectively.
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
            Inpatient units increased functional bed capacity by{" "}
            <strong>50–100 beds</strong>, with inpatient Medicare
            length-of-stay decreasing by <strong>0.6 days</strong> just nine
            months after project completion.
          </p>
          <p style={{ marginTop: 12 }}>
            ED boarding and ambulance diversion were virtually eliminated. Time
            from patient arrival to physician evaluation decreased from 110
            minutes to just over 40 minutes, a 64% improvement. Patients leaving
            the ED without treatment decreased by nearly 26%. These improvements
            occurred despite a 30,000 visit (16%) annual increase in ED volume,
            with minimal or no additional staff and no expansion of space in a
            facility originally built for half the current volume.
          </p>
        </div>
        <div className="results-grid">
          <div className="res-item">
            <div className="res-num">50–100</div>
            <div className="res-label">New Functional Beds Added</div>
          </div>
          <div className="res-item">
            <div className="res-num">0.6 days</div>
            <div className="res-label">Medicare LOS Reduction</div>
          </div>
          <div className="res-item">
            <div className="res-num">64%</div>
            <div className="res-label">Faster ED Physician Access</div>
          </div>
          <div className="res-item">
            <div className="res-num">26%</div>
            <div className="res-label">Fewer Patients Left Untreated</div>
          </div>
        </div>
      </div>
    </div>
  );
}
