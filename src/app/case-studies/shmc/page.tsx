import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Case Study: Regional Medical & Children's Hospital — MHMDAA",
  description:
    "Enterprise-wide hospital operations redesign at a leading pediatric & adult regional medical center.",
};

export default function SHMCCaseStudy() {
  return (
    <div className="cs-page" style={{ paddingTop: 220 }}>
      <Link href="/case-studies" className="cs-back">
        ← Back to Case Studies
      </Link>

      <div className="cs-eyebrow">Client Case Study</div>

      <h1 className="cs-title">
        Leading Pediatric &amp; Adult Regional Medical Center
      </h1>
      <h2 className="cs-subtitle">
        Enterprise-Wide Hospital Operations Redesign
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
            Regional Medical &amp; Children&apos;s Hospital (the Hospital)
            experienced what they believed were challenges limited to the ED: low
            patient satisfaction, ambulance diversion, a lack of inpatient
            functional capacity, low reimbursement rates, and a large volume of
            patients with uncompensated care. The scope of systemic dysfunction,
            however, extended across the enterprise.
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
            <strong>
              Enhance Hospital-Wide Operations &amp; Performance.
            </strong>{" "}
            Michael Hill, MD and Associates&apos; team were engaged to perform a
            broad-scale, multi-year ED, inpatient, and perioperative hospital
            redesign with front-line staff. The engagement introduced innovative
            technology systems to increase hospital operations transparency and
            accountability across all service lines.
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
            With the MHMDAA operational framework in place, hospital performance
            improved across the enterprise. Time from ED patient arrival to
            exam-by-physician was <strong>cut in half</strong>. Ambulance
            diversion was virtually eliminated and ED patients that left before
            treatment decreased by <strong>94%</strong>, all while ED visits per
            month <strong>increased by 33%</strong>.
          </p>
          <p style={{ marginTop: 12 }}>
            Hospital length-of-stay decreased by{" "}
            <strong>nearly a full day</strong>, increasing functional bed
            capacity by <strong>40 beds</strong>. Perioperative room utilization
            increased by <strong>28%</strong>. Patient experience scores rose
            from the <strong>19th percentile to top quartile</strong> nationally.
          </p>
        </div>
        <div className="results-grid">
          <div className="res-item">
            <div className="res-num">94%</div>
            <div className="res-label">Reduction in Left-Before-Treatment</div>
          </div>
          <div className="res-item">
            <div className="res-num">+33%</div>
            <div className="res-label">Monthly ED Volume Growth</div>
          </div>
          <div className="res-item">
            <div className="res-num">40 beds</div>
            <div className="res-label">Functional Capacity Gained</div>
          </div>
          <div className="res-item">
            <div className="res-num">Top Quartile</div>
            <div className="res-label">Patient Experience Scores</div>
          </div>
        </div>
      </div>
    </div>
  );
}
