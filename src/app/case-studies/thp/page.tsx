import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Client Case Study: Southern Region Integrated Health System — MHMDAA",
  description:
    "Emergency department transformation and capacity optimization at Southern Region Integrated Health System.",
};

export default function THPCaseStudy() {
  return (
    <div className="cs-page" style={{ paddingTop: 220 }}>
      <Link href="/case-studies" className="cs-back">
        ← Back to Case Studies
      </Link>

      <div className="cs-eyebrow">Client Case Study</div>

      <h1 className="cs-title">
        Southern Region Integrated Health System
      </h1>
      <h2 className="cs-subtitle">
        Emergency Department Transformation &amp; Capacity Optimization
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
            Texas Regional Medical Center (the Hospital) struggled with a
            critical lack of inpatient bed capacity, widespread emergency
            department (ED) inefficiencies, and chronically long wait times that
            were eroding patient satisfaction and volume.
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
            <strong>Redesign Patient Care Process.</strong> Teaming with hospital
            staff, Michael Hill, MD and Associates implemented comprehensively
            redesigned patient care processes that created a collaborative
            culture across the entire organization, aligning clinical and
            operational leadership around measurable throughput and capacity
            goals.
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
            The measurable increase in operational efficiency, throughput, and
            capacity enabled the Hospital to implement its{" "}
            <strong>&ldquo;30 Minute Promise&rdquo;</strong> in the ED, a
            commitment to see every patient within 30 minutes of arrival. This
            initiative directly recaptured revenue from nearly{" "}
            <strong>1,000 patients</strong> and raised patient satisfaction
            scores to <strong>over the 95th percentile</strong> nationally.
          </p>
          <p style={{ marginTop: 12 }}>
            Inpatient length-of-stay decreased by <strong>20%</strong>, dropping
            to <strong>4.2 days</strong>, freeing critical bed capacity and
            improving system-wide throughput.
          </p>
        </div>
        <div className="results-grid">
          <div className="res-item">
            <div className="res-num">20%</div>
            <div className="res-label">Reduction in Inpatient LOS</div>
          </div>
          <div className="res-item">
            <div className="res-num">4.2 days</div>
            <div className="res-label">Inpatient LOS Achieved</div>
          </div>
          <div className="res-item">
            <div className="res-num">95th+</div>
            <div className="res-label">Patient Satisfaction Percentile</div>
          </div>
          <div className="res-item">
            <div className="res-num">~1,000</div>
            <div className="res-label">Patients Recaptured</div>
          </div>
        </div>
      </div>
    </div>
  );
}
