"use client";

interface Step {
  num: number;
  title: string;
  desc: string;
}

const payorSteps: Step[] = [
  {
    num: 1,
    title: "Abstract",
    desc: "Clinical, administrative, and utilization data are extracted and distilled into a focused summary highlighting the elements relevant to coverage, level of care, and benefit determination.",
  },
  {
    num: 2,
    title: "Analysis",
    desc: "The clinical presentation, interventions, and resource utilization are evaluated against internal policies, operational benchmarks, and expected care patterns to identify discrepancies or unsupported components.",
  },
  {
    num: 3,
    title: "Medical Necessity Validation",
    desc: "We validate medical necessity by applying evidence-based criteria, industry standards, National Coverage Determinations (NCDs), payor-provider contracts, and applicable law. Our approach ensures that disputed claims are adjudicated objectively and classified accurately as either Factually Supported or Policy-Driven.",
  },
  {
    num: 4,
    title: "Construct",
    desc: "Clinical evidence and policy criteria are synthesized into a structured, physician-authored narrative. This defensible analysis explicitly links medical necessity to governing regulations, providing the legal and clinical evidentiary basis required to withstand scrutiny during provider appeals, arbitration, or CMS/NCQA audits.",
  },
];

function StepGrid({ steps }: { steps: Step[] }) {
  return (
    <div className="approach-grid">
      {steps.map((step) => (
        <div className="ap-card" key={step.num}>
          <div className="ap-num">{step.num}</div>
          <div className="ap-title">{step.title}</div>
          <p className="ap-desc">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function ApproachTabs() {
  return (
    <div className="appr-panel active">
      <StepGrid steps={payorSteps} />
    </div>
  );
}
