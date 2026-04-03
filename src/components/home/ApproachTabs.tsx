"use client";

import { useState } from "react";
import TabSwitcher from "@/components/ui/TabSwitcher";

interface Step {
  num: number;
  title: string;
  desc: string;
}

const providerSteps: Step[] = [
  {
    num: 1,
    title: "Assess",
    desc: "We perform comprehensive review of hospital strategy, operations, and revenue cycle to identify gaps and revenue opportunities.",
  },
  {
    num: 2,
    title: "Strategize",
    desc: "Developing targeted action plans based on root cause analysis and clinical performance data unique to your facility.",
  },
  {
    num: 3,
    title: "Implement",
    desc: "Deploying our nine integrated service lines with dedicated physician-led teams and technology for maximum impact.",
  },
  {
    num: 4,
    title: "Sustain",
    desc: "Establishing feedback loops and performance metrics for lasting financial results and continuous revenue improvement.",
  },
];

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
    desc: "We validate medical necessity by applying evidence-based criteria, industry standards, National Coverage Determinations (NCDs), payer-provider contracts, and applicable law. Our approach ensures that disputed claims are adjudicated with clinical integrity and regulatory precision.",
  },
  {
    num: 4,
    title: "Construct",
    desc: "Clinical evidence and policy criteria are synthesized into a structured, physician-authored narrative. This defensible analysis explicitly links medical necessity to governing regulations, creating an airtight justification designed to withstand scrutiny during appeals, audits, or litigation.",
  },
];

const tabDefs = [
  { id: "provider", label: "For Providers" },
  { id: "payor", label: "For Payors" },
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
  const [activeTab, setActiveTab] = useState("provider");

  return (
    <>
      <TabSwitcher
        tabs={tabDefs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        variant="approach"
      />
      <div className={`appr-panel${activeTab === "provider" ? " active" : ""}`}>
        <StepGrid steps={providerSteps} />
      </div>
      <div className={`appr-panel${activeTab === "payor" ? " active" : ""}`}>
        <StepGrid steps={payorSteps} />
      </div>
    </>
  );
}
