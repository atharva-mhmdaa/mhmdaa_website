export interface PayorService {
  slug: string;
  number: string;
  title: string;
  description: string;
  heroDescription: string;
  heroImage: string;
  features: { title: string; desc: string }[];
  prevSlug: string | null;
  nextSlug: string | null;
}

export const payorServices: PayorService[] = [
  {
    slug: "two-midnight",
    number: "01",
    title: "Two Midnight Rule Compliance",
    description:
      "Michael Hill MD and Associates — Two Midnight Rule Compliance: Integrate standardized review protocols into status determination workflows to establish a defensible clinical narrative at the point of admission. This proactive approach ensures inpatient classifications align with CMS guidelines and payor-specific mandates to seamlessly prevent status-related denials.",
    heroDescription:
      "Integrate standardized review protocols into status determination workflows to establish a defensible clinical narrative at the point of admission. This proactive approach ensures inpatient classifications align with CMS guidelines and payor-specific mandates to seamlessly prevent status-related denials.",
    heroImage: "/images/index-28.jpg",
    features: [
      {
        title: "Documentation Validation",
        desc: "Validate the admitting physician\u2019s contemporaneous documentation to ensure a reasonable expectation of a two-midnight stay is established based on the patient\u2019s presenting symptoms and clinical acuity.",
      },
      {
        title: "Evidence-Based Benchmarking",
        desc: "Benchmark patient clinical data against nationally recognized evidence-based criteria, such as InterQual and MCG, to verify that intensity of service and severity of illness meet specific inpatient thresholds.",
      },
      {
        title: "Policy & LOS Reconciliation",
        desc: "Evaluate cases against specific payor policies and reconcile actual length of stay against admission expectations to confirm all contractual and regulatory requirements are met before a claim is submitted.",
      },
    ],
    prevSlug: null,
    nextSlug: "inpatient-obs",
  },
  {
    slug: "inpatient-obs",
    number: "02",
    title: "Inpatient vs. Observation Determination",
    description:
      "Michael Hill MD and Associates — Inpatient vs. Observation Determination: Integrate standardized protocols into decision-making workflows to ensure clinical evidence at the point of admission accurately supports an inpatient level of care, proactively preventing status-related denials and ensuring reimbursement integrity.",
    heroDescription:
      "Integrate standardized protocols into decision-making workflows to ensure clinical evidence at the point of admission accurately supports an inpatient level of care, proactively preventing status-related denials and ensuring reimbursement integrity.",
    heroImage: "/images/index-29.jpg",
    features: [
      {
        title: "Clinical Marker Evaluation",
        desc: "Evaluate clinical markers, including acuity severity and treatment intensity, to determine if a patient\u2019s condition warrants inpatient admission or observation management.",
      },
      {
        title: "Admission Benchmarking",
        desc: "Benchmark patient clinical data against nationally recognized evidence-based criteria like InterQual and Milliman at the time of admission to ensure consistent status determinations.",
      },
      {
        title: "Medical Decision Validation",
        desc: "Validate the admitting physician\u2019s documented medical decision-making to ensure clinical reasoning is substantiated by objective clinical evidence and the documented treatment plan.",
      },
    ],
    prevSlug: "two-midnight",
    nextSlug: "drg-validation",
  },
  {
    slug: "drg-validation",
    number: "03",
    title: "DRG Clinical Validation",
    description:
      "Michael Hill MD and Associates — DRG Clinical Validation: Apply physician-led review protocols to reconcile diagnostic and procedural codes with the clinical narrative, proactively identifying unsupported comorbidities to align reimbursement with actual patient acuity.",
    heroDescription:
      "Apply physician-led review protocols to reconcile diagnostic and procedural codes with the clinical narrative, proactively identifying unsupported comorbidities to align reimbursement with actual patient acuity.",
    heroImage: "/images/index-30.jpg",
    features: [
      {
        title: "High-Risk DRG Review",
        desc: "Prioritize high-risk DRG categories to systematically compare coded ICD-10 diagnoses and procedures against the objective medical record.",
      },
      {
        title: "CC/MCC Substantiation",
        desc: "Evaluate documented CC/MCC indicators through standardized workflows to ensure severity markers are backed by objective clinical evidence.",
      },
      {
        title: "Independent Physician Review",
        desc: "Deploy independent physician reviewers to verify that a patient\u2019s documented clinical acuity objectively aligns with the assigned DRG severity level.",
      },
    ],
    prevSlug: "inpatient-obs",
    nextSlug: "ed-facility",
  },
  {
    slug: "ed-facility",
    number: "04",
    title: "ED Facility Methodology Review",
    description:
      "Michael Hill MD and Associates — ED Facility Methodology Review: Evaluate internal policies and clinical documentation to align hospital billing with national standards, ensuring that every facility level assignment is proportionate to the patient\u2019s clinical presentation.",
    heroDescription:
      "Evaluate internal policies and clinical documentation to align hospital billing with national standards, ensuring that every facility level assignment is proportionate to the patient\u2019s clinical presentation.",
    heroImage: "/images/index-31.jpg",
    features: [
      {
        title: "Level Assignment Validation",
        desc: "Validate ED level assignments against internal systems and national industry benchmarks to confirm accurate execution of facility methodologies.",
      },
      {
        title: "E/M Level Assessment",
        desc: "Assess billed E/M levels independently against the documented complexity of medical decision-making to ensure the claim accurately reflects the intensity of service rendered.",
      },
      {
        title: "Disposition Analysis",
        desc: "Analyze the patient\u2019s final disposition using data-driven methods to ensure objective consistency between clinical outcomes and the billed facility level.",
      },
    ],
    prevSlug: "drg-validation",
    nextSlug: "line-item",
  },
  {
    slug: "line-item",
    number: "05",
    title: "Line-Item Coding Compliance",
    description:
      "Michael Hill MD and Associates — Line-Item Coding Compliance: Establish an error-resistant quality gate within the revenue cycle to align claim submissions with actual care delivered, ensuring clinical-to-financial precision and preventing revenue leakage.",
    heroDescription:
      "Establish an error-resistant quality gate within the revenue cycle to align claim submissions with actual care delivered, ensuring clinical-to-financial precision and preventing revenue leakage.",
    heroImage: "/images/index-32.jpg",
    features: [
      {
        title: "CCI Compliance Analysis",
        desc: "Analyze procedure codes systematically to identify unbundled charges under Correct Coding Initiative (CCI) guidelines to withstand payor scrutiny.",
      },
      {
        title: "MUE Threshold Validation",
        desc: "Validate billed units against CMS-established Medically Unlikely Edit (MUE) thresholds to catch clinically implausible charges before they trigger denials.",
      },
      {
        title: "Line-Item Verification",
        desc: "Match every billed line item against physician documentation and the plan of care to ensure each charge accurately reflects a documented clinical event.",
      },
    ],
    prevSlug: "ed-facility",
    nextSlug: "dispute-appeal",
  },
  {
    slug: "dispute-appeal",
    number: "06",
    title: "Provider Dispute & Appeal Support",
    description:
      "Michael Hill MD and Associates — Provider Dispute & Appeal Support: Conduct independent, evidence-based clinical and administrative reviews to protect financial integrity against provider disputes and ensure that every resolution is grounded in defensible, transparent claim determinations.",
    heroDescription:
      "Conduct independent, evidence-based clinical and administrative reviews to protect financial integrity against provider disputes and ensure that every resolution is grounded in defensible, transparent claim determinations.",
    heroImage: "/images/index-33.jpg",
    features: [
      {
        title: "Appeal Narrative Deconstruction",
        desc: "Deconstruct provider appeal narratives systematically to identify logical gaps, unsupported clinical assertions, and selective use of medical record data.",
      },
      {
        title: "Policy Alignment",
        desc: "Align disputed claims with specific payor policies, contractual terms, and CMS guidelines to reinforce the original denial rationale.",
      },
      {
        title: "Independent Clinical Review",
        desc: "Utilize independent physician reviewers to conduct secondary clinical assessments, adding a layer of objective expertise to the dispute resolution process.",
      },
    ],
    prevSlug: "line-item",
    nextSlug: "expert-opinions",
  },
  {
    slug: "expert-opinions",
    number: "07",
    title: "Expert Medical Opinion Reports",
    description:
      "Michael Hill MD and Associates — Expert Medical Opinion Reports: Deliver authoritative, physician-led analysis for high-stakes dispute resolution by integrating objective clinical evidence and industry benchmarks, generating formal reports structured for legal defensibility.",
    heroDescription:
      "Deliver authoritative, physician-led analysis for high-stakes dispute resolution by integrating objective clinical evidence and industry benchmarks, generating formal reports structured for legal defensibility.",
    heroImage: "/images/index-34.jpg",
    features: [
      {
        title: "Medical Necessity Assessment",
        desc: "Assess medical necessity by anchoring written conclusions to the patient\u2019s documented clinical condition, presenting symptoms, and evidence-based treatment guidelines.",
      },
      {
        title: "Coding & Billing Evaluation",
        desc: "Evaluate diagnostic and procedure codes against the clinical record and CMS regulations to proactively identify miscoding, unbundling, or billing irregularities.",
      },
      {
        title: "Authoritative Report Preparation",
        desc: "Prepare detailed, authoritative reports formatted for arbitration and litigation by cross-referencing clinical decisions against nationally recognized standards of care.",
      },
    ],
    prevSlug: "dispute-appeal",
    nextSlug: "rebuttal",
  },
  {
    slug: "rebuttal",
    number: "08",
    title: "Rebuttal Reports & Deposition Support",
    description:
      "Michael Hill MD and Associates \u2014 Rebuttal Reports & Deposition Support: Identify structural weaknesses in opposing expert testimony through standardized, data-driven analysis and rigorous evidence mapping \u2014 equipping legal counsel with precise, targeted lines of questioning.",
    heroDescription:
      "Identify structural weaknesses in opposing expert testimony through standardized, data-driven analysis and rigorous evidence mapping \u2014 equipping legal counsel with precise, targeted lines of questioning.",
    heroImage: "/images/index-35.jpg",
    features: [
      {
        title: "Methodology Challenge",
        desc: "Analyze the opposing expert\u2019s stated methodology to identify unsupported analytical approaches or reliance on subjective clinical judgment that deviates from industry-standard benchmarks.",
      },
      {
        title: "Medical Record Audit",
        desc: "Conduct a medical record completeness review to detect instances of omitted or selectively cited documentation, ensuring no relevant clinical evidence was overlooked or excluded to skew the findings.",
      },
      {
        title: "Evidence Mapping",
        desc: "Map every conclusion back to the supporting data using gap-detection protocols to generate precise, targeted lines of questioning that equip legal counsel for effective depositions and rebuttals.",
      },
    ],
    prevSlug: "expert-opinions",
    nextSlug: "demonstratives",
  },
  {
    slug: "demonstratives",
    number: "09",
    title: "Demonstratives & Litigation Support",
    description:
      "Michael Hill MD and Associates — Demonstratives & Litigation Support: Distill complex clinical and financial datasets into clear, high-impact visual exhibits designed to educate factfinders in legal and administrative proceedings.",
    heroDescription:
      "Distill complex clinical and financial datasets into clear, high-impact visual exhibits designed to educate factfinders in legal and administrative proceedings.",
    heroImage: "/images/index-36.jpg",
    features: [
      {
        title: "Clinical Timeline Mapping",
        desc: "Map chronological visual timelines that track a patient\u2019s clinical course against regulatory and contractual milestones to make complex care sequences immediately understandable.",
      },
      {
        title: "Process Map Design",
        desc: "Design detailed process maps that illustrate claim movement through the revenue cycle to pinpoint operational breakdowns and deviations from standardized workflows.",
      },
      {
        title: "Comparative Exhibit Development",
        desc: "Develop side-by-side comparative exhibits and financial impact summaries to structure a point-by-point analysis of provider actions versus payor positions.",
      },
    ],
    prevSlug: "rebuttal",
    nextSlug: null,
  },
];
