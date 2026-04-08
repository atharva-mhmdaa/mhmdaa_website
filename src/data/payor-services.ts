export interface PayorService {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  heroDescription: string;
  heroImage: string;
  heroImagePosition?: string;
  infoText?: string;
  infoBadge?: string;
  featuresSub?: string;
  processSteps?: { title: string; desc: string }[];
  features: { title: string; desc: string; image?: string; imgPosition?: string; imgPositionMobile?: string }[];
  prevSlug: string | null;
  nextSlug: string | null;
}

export const payorServices: PayorService[] = [
  {
    slug: "two-midnight",
    number: "01",
    shortTitle: "Two Midnight Rule",
    title: "Two Midnight Rule Compliance",
    infoText: "Establish a defensible clinical narrative before a denial can take hold.",
    description:
      "Michael Hill MD and Associates — Two Midnight Rule Compliance: Integrate standardized review protocols into status determination workflows to establish a defensible clinical narrative at the point of admission. This proactive approach ensures inpatient classifications align with CMS guidelines and payor-specific mandates to seamlessly prevent status-related denials.",
    heroDescription:
      "Integrate standardized review protocols into status determination workflows to establish a defensible clinical narrative at the point of admission. This proactive approach ensures inpatient classifications align with CMS guidelines and payor-specific mandates to seamlessly prevent status-related denials.",
    heroImage: "/images/payor-two-midnight-hero.png",
    processSteps: [
      {
        title: "Validate",
        desc: "We review the admitting physician\u2019s contemporaneous documentation to ensure a clear, reasonable expectation of a two-midnight stay is established based on the patient\u2019s presenting symptoms and clinical acuity.",
      },
      {
        title: "Benchmark",
        desc: "We cross-reference patient clinical data against nationally recognized evidence-based criteria to verify that the intensity of service and severity of illness meet specific inpatient thresholds.",
      },
      {
        title: "Reconcile",
        desc: "We perform a systematic comparison of the actual length of stay against the initial admission expectation to identify and resolve discrepancies or breakdowns in the status determination workflow.",
      },
      {
        title: "Align",
        desc: "We educate our clients on timely evaluation of cases against specific payor policies and updated CMS guidance to confirm that determinations meet all contractual and regulatory requirements before a claim is ever submitted.",
      },
    ],
    featuresSub: "Our Two-Midnight Rule compliance methodology centers on establishing a defensible clinical narrative at the point of admission through rigorous medical necessity evaluations and evidence-based benchmarking. By integrating standardized, data-driven review protocols, such as InterQual and MCG, directly into the status determination workflow, we ensure every inpatient classification is substantiated by contemporaneous clinical evidence. This proactive approach aligns physician decision-making with CMS and payor-specific mandates to seamlessly prevent status-related denials.",
    features: [
      {
        title: "Documentation Validation",
        desc: "Validate the admitting physician\u2019s contemporaneous documentation to ensure a reasonable expectation of a two-midnight stay is established based on the patient\u2019s presenting symptoms and clinical acuity.",
        image: "/images/payor-two-midnight-71.png",
      },
      {
        title: "Evidence-Based Benchmarking",
        desc: "Benchmark patient clinical data against nationally recognized evidence-based criteria, such as InterQual and MCG, to verify that intensity of service and severity of illness meet specific inpatient thresholds.",
        image: "/images/payor-two-midnight-72.png",
      },
      {
        title: "Policy & LOS Reconciliation",
        desc: "Evaluate cases against specific payor policies and reconcile actual length of stay against admission expectations to confirm all contractual and regulatory requirements are met before a claim is submitted.",
        image: "/images/payor-two-midnight-73.png",
      },
    ],
    prevSlug: null,
    nextSlug: "inpatient-obs",
  },
  {
    slug: "inpatient-obs",
    number: "02",
    shortTitle: "Inpatient vs. Observation",
    title: "Inpatient vs. Observation Determination",
    description:
      "Michael Hill MD and Associates — Inpatient vs. Observation Determination: Integrate standardized protocols into decision-making workflows to ensure clinical evidence at the point of admission accurately supports an inpatient level of care, proactively preventing status-related denials and ensuring reimbursement integrity.",
    heroDescription:
      "Integrate standardized protocols into decision-making workflows to ensure clinical evidence at the point of admission accurately supports an inpatient level of care, proactively preventing status-related denials and ensuring reimbursement integrity.",
    heroImage: "/images/payor-inpatient-obs-hero.png",
    infoText: "Ensure every status determination is substantiated before claims are submitted.",
    infoBadge: "EVIDENCE-BASED",
    processSteps: [
      {
        title: "Analyze",
        desc: "We train clients to evaluate clinical markers, including acuity severity and treatment intensity, to determine if the patient\u2019s condition warrants inpatient admission or is more appropriately managed under observation.",
      },
      {
        title: "Benchmark",
        desc: "We encourage clients to cross-reference patient clinical data against InterQual, Milliman, and other nationally recognized evidence-based criteria at the time of admission to ensure consistent, reliable status determinations.",
      },
      {
        title: "Validate",
        desc: "Through the assessment of the admitting physician\u2019s documented medical decision-making to ensure clinical reasoning is substantiated by the patient\u2019s objective clinical evidence and documented treatment plan.",
      },
      {
        title: "Inform",
        desc: "Utilizing retrospective assessments of the patient\u2019s clinical trajectory following admission to validate the initial status determination and identify patterns that inform organization-wide operational improvements.",
      },
    ],
    featuresSub: "Our status determination methodology centers on ensuring clinical evidence at the point of admission accurately supports an inpatient level of care through rigorous threshold analysis and evidence-based benchmarking. By integrating standardized protocols like InterQual and MCG into the decision-making workflow, we substantiate the admitting physician\u2019s rationale against objective medical data. This comprehensive approach aligns clinical presentation with nationally recognized criteria to proactively prevent status-related denials and ensure reimbursement integrity.",
    features: [
      {
        title: "Clinical Marker Evaluation",
        desc: "Evaluate clinical markers, including acuity severity and treatment intensity, to determine if a patient\u2019s condition warrants inpatient admission or observation management.",
        image: "/images/payor-inpatient-obs-58.png",
        imgPosition: "center 70%",
      },
      {
        title: "Admission Benchmarking",
        desc: "Benchmark patient clinical data against nationally recognized evidence-based criteria like InterQual and Milliman at the time of admission to ensure consistent status determinations.",
        image: "/images/payor-inpatient-obs-59.png",
      },
      {
        title: "Medical Decision Validation",
        desc: "Validate the admitting physician\u2019s documented medical decision-making to ensure clinical reasoning is substantiated by objective clinical evidence and the documented treatment plan.",
        image: "/images/payor-inpatient-obs-60.png",
      },
    ],
    prevSlug: "two-midnight",
    nextSlug: "drg-validation",
  },
  {
    slug: "drg-validation",
    number: "03",
    shortTitle: "DRG Clinical Validation",
    title: "DRG Clinical Validation",
    description:
      "Michael Hill MD and Associates — DRG Clinical Validation: Apply physician-led review protocols to reconcile diagnostic and procedural codes with the clinical narrative, proactively identifying unsupported comorbidities to align reimbursement with actual patient acuity.",
    heroDescription:
      "Apply physician-led review protocols to reconcile diagnostic and procedural codes with the clinical narrative, proactively identifying unsupported comorbidities to align reimbursement with actual patient acuity.",
    heroImage: "/images/payor-drg-validation-hero.png",
    infoText: "Every claim aligned with actual patient acuity — transparent, defensible, and accurate.",
    infoBadge: "CODING INTEGRITY",
    processSteps: [
      {
        title: "Target",
        desc: "We prioritize the review of high-risk DRG categories with the highest reimbursement differentials between severity tiers, directing audit resources toward cases with the greatest financial exposure.",
      },
      {
        title: "Reconcile",
        desc: "We systematically compare coded ICD-10-CM/PCS diagnoses and procedure codes against the clinical narrative to identify discrepancies that undermine the reliability of the claim.",
      },
      {
        title: "Substantiate",
        desc: "We evaluate whether documented CC/MCC indicators are clinically supported through standardized documentation workflows, ensuring that severity indicators are backed by objective medical evidence.",
      },
      {
        title: "Verify",
        desc: "We deploy independent physician reviewers to assess whether a patient\u2019s documented clinical acuity objectively aligns with the severity level implied by the assigned DRG, providing a defensible clinical-judgment layer to the coding process.",
      },
    ],
    featuresSub: "Our DRG clinical validation methodology ensures coding integrity by reconciling assigned diagnostic and procedural codes with the objective clinical narrative found in the medical record. By applying physician-led, error-resistant review protocols to high-impact severity tiers, we proactively identify unsupported comorbidities and complications (CC/MCC) that drive reimbursement variances. This comprehensive approach aligns reimbursement with actual patient acuity to ensure every claim is transparent, defensible, and accurate.",
    features: [
      {
        title: "High-Risk DRG Review",
        desc: "Prioritize high-risk DRG categories to systematically compare coded ICD-10 diagnoses and procedures against the objective medical record.",
        image: "/images/payor-drg-validation-46.png",
      },
      {
        title: "CC/MCC Substantiation",
        desc: "Evaluate documented CC/MCC indicators through standardized workflows to ensure severity markers are backed by objective clinical evidence.",
        image: "/images/payor-drg-validation-47.png",
      },
      {
        title: "Independent Physician Review",
        desc: "Deploy independent physician reviewers to verify that a patient\u2019s documented clinical acuity objectively aligns with the assigned DRG severity level.",
        image: "/images/payor-drg-validation-48.png",
      },
    ],
    prevSlug: "inpatient-obs",
    nextSlug: "ed-facility",
  },
  {
    slug: "ed-facility",
    number: "04",
    shortTitle: "ED Facility Review",
    title: "ED Facility Methodology Review",
    description:
      "Michael Hill MD and Associates — ED Facility Methodology Review: Evaluate internal policies and clinical documentation to align hospital billing with national standards, ensuring that every facility level assignment is proportionate to the patient\u2019s clinical presentation.",
    heroDescription:
      "Evaluate internal policies and clinical documentation to align hospital billing with national standards, ensuring that every facility level assignment is proportionate to the patient\u2019s clinical presentation.",
    heroImage: "/images/payor-ed-facility-hero.png",
    heroImagePosition: "center 15%",
    processSteps: [
      {
        title: "Analyze",
        desc: "We evaluate whether documented interventions — including diagnostics and treatments — are proportionate to the patient's presenting acuity and treatment workflows.",
      },
      {
        title: "Validate",
        desc: "We confirm that ED level assignments were executed correctly using the organization's own internal systems while ensuring those methodologies remain consistent with national industry benchmarks.",
      },
      {
        title: "Justify",
        desc: "We design processes to independently assess billed E/M levels against the documented complexity of medical decision-making to ensure the intensity of service rendered is accurately reflected in the final claim.",
      },
      {
        title: "Correlate",
        desc: "We utilize data-driven methods to analyze the patient's final disposition in relation to the billed facility level, ensuring objective consistency between clinical outcome and reimbursement.",
      },
    ],
    featuresSub:
      "Our ED facility level methodology focuses on aligning hospital billing with national industry standards through the rigorous evaluation of internal policies and clinical documentation. By identifying the gap between care actually delivered and care billed, we ensure that every facility level assignment is proportionate to the patient's clinical presentation and medical decision-making complexity. This standardized approach creates a transparent, defensible revenue cycle that withstands payor scrutiny and reinforces audit readiness across the emergency department.",
    features: [
      {
        title: "Level Assignment Validation",
        desc: "Validate ED level assignments against internal systems and national industry benchmarks to confirm accurate execution of facility methodologies.",
        image: "/images/payor-ed-facility-feat-1.png",
      },
      {
        title: "E/M Level Assessment",
        desc: "Assess billed E/M levels independently against the documented complexity of medical decision-making to ensure the claim accurately reflects the intensity of service rendered.",
        image: "/images/payor-ed-facility-feat-2.png",
      },
      {
        title: "Disposition Analysis",
        desc: "Analyze the patient\u2019s final disposition using data-driven methods to ensure objective consistency between clinical outcomes and the billed facility level.",
        image: "/images/payor-ed-facility-feat-3.png",
      },
    ],
    prevSlug: "drg-validation",
    nextSlug: "line-item",
  },
  {
    slug: "line-item",
    number: "05",
    shortTitle: "Line-Item Compliance",
    title: "Line-Item Coding Compliance",
    description:
      "Michael Hill MD and Associates — Line-Item Coding Compliance: Establish an error-resistant quality gate within the revenue cycle to align claim submissions with actual care delivered, ensuring clinical-to-financial precision and preventing revenue leakage.",
    heroDescription:
      "Establish an error-resistant quality gate within the revenue cycle to align claim submissions with actual care delivered, ensuring clinical-to-financial precision and preventing revenue leakage.",
    heroImage: "/images/payor-line-item-hero.png",
    infoText: "Every charge must reflect a documented clinical event — no exceptions.",
    infoBadge: "ZERO REVENUE LEAKAGE",
    processSteps: [
      {
        title: "Analyze",
        desc: "We systematically review procedure codes to identify unbundled charges that should be reported as a single comprehensive code under CCI guidelines to withstand payor scrutiny.",
      },
      {
        title: "Flag",
        desc: "We utilize systematic detection protocols to identify duplicate charges for the same service or supply that lack clinical justification, eliminating billing errors at their source.",
      },
      {
        title: "Validate",
        desc: "We verify that billed units do not exceed Medically Unlikely Edit (MUE) thresholds established by CMS, catching clinically implausible charges before they trigger denials.",
      },
      {
        title: "Confirm",
        desc: "We match every billed line item against physician orders, clinical notes, and the plan of care to ensure that every charge is an accurate translation of a documented clinical event.",
      },
    ],
    featuresSub:
      "Our line-item claim review methodology focuses on ensuring clinical-to-financial precision by identifying billing inaccuracies and coding non-compliance at the charge level. By cross-referencing every billed service against NCCI edits, MUE thresholds, and physician documentation, we establish an error-resistant quality gate within the revenue cycle. This comprehensive approach aligns claim submissions with actual care delivered to prevent revenue leakage and ensure total administrative transparency.",
    features: [
      {
        title: "CCI Compliance Analysis",
        desc: "Analyze procedure codes systematically to identify unbundled charges under Correct Coding Initiative (CCI) guidelines to withstand payor scrutiny.",
        image: "/images/payor-line-item-feat-1.png",
      },
      {
        title: "MUE Threshold Validation",
        desc: "Validate billed units against CMS-established Medically Unlikely Edit (MUE) thresholds to catch clinically implausible charges before they trigger denials.",
        image: "/images/payor-line-item-feat-2.png",
      },
      {
        title: "Line-Item Verification",
        desc: "Match every billed line item against physician documentation and the plan of care to ensure each charge accurately reflects a documented clinical event.",
        image: "/images/payor-line-item-feat-3.png",
      },
    ],
    prevSlug: "ed-facility",
    nextSlug: "dispute-appeal",
  },
  {
    slug: "dispute-appeal",
    number: "06",
    shortTitle: "Provider Dispute & Appeal",
    title: "Provider Dispute & Appeal Support",
    description:
      "Michael Hill MD and Associates — Provider Dispute & Appeal Support: Conduct independent, evidence-based clinical and administrative reviews to protect financial integrity against provider disputes and ensure that every resolution is grounded in defensible, transparent claim determinations.",
    heroDescription:
      "Conduct independent, evidence-based clinical and administrative reviews to protect financial integrity against provider disputes and ensure that every resolution is grounded in defensible, transparent claim determinations.",
    heroImage: "/images/payor-dispute-appeal-hero.png",
    infoText: "Independent clinical reviews that protect payor financial integrity against provider disputes.",
    infoBadge: "DENIAL DEFENSE",
    processSteps: [
      {
        title: "Deconstruct",
        desc: "We systematically analyze provider appeal letters to identify logical gaps, unsupported clinical assertions, and selective use of medical record data that may undermine the appeal\u2019s validity.",
      },
      {
        title: "Reinforce",
        desc: "We strengthen the original denial rationale by supplementing it with additional clinical evidence, policy citations, and evidence-based criteria to build a more resilient and defensible position.",
      },
      {
        title: "Cross-Reference",
        desc: "We align disputed claims with specific payor policies, contractual terms, and applicable CMS guidelines to confirm that the original denial was issued in accordance with published, transparent standards.",
      },
      {
        title: "Re-Review",
        desc: "We utilize independent physician reviewers to conduct secondary clinical assessments, separate from the original utilization review, adding a layer of credibility and objective expertise to the dispute resolution process.",
      },
    ],
    featuresSub:
      "Our denial defense methodology centers on conducting independent, evidence-based clinical and administrative reviews to protect payor financial integrity against provider disputes. By deconstructing appeal narratives and cross-referencing them against established regulatory and contractual benchmarks, we identify inconsistencies and unsupported assertions in the provider\u2019s case. This structured approach ensures that every dispute resolution is grounded in accurate, transparent findings that uphold the organization\u2019s commitment to defensible claim determinations.",
    features: [
      {
        title: "Appeal Narrative Deconstruction",
        desc: "Deconstruct provider appeal narratives systematically to identify logical gaps, unsupported clinical assertions, and selective use of medical record data.",
        image: "/images/payor-dispute-appeal-42.png",
        imgPosition: "center 20%",
      },
      {
        title: "Policy Alignment",
        desc: "Align disputed claims with specific payor policies, contractual terms, and CMS guidelines to reinforce the original denial rationale.",
        image: "/images/payor-dispute-appeal-43.png",
      },
      {
        title: "Independent Clinical Review",
        desc: "Utilize independent physician reviewers to conduct secondary clinical assessments, adding a layer of objective expertise to the dispute resolution process.",
        image: "/images/payor-dispute-appeal-44.png",
      },
    ],
    prevSlug: "line-item",
    nextSlug: "expert-opinions",
  },
  {
    slug: "expert-opinions",
    number: "07",
    shortTitle: "Expert Medical Opinions",
    title: "Expert Medical Opinion Reports",
    description:
      "Michael Hill MD and Associates — Expert Medical Opinion Reports: Deliver authoritative, physician-led analysis for high-stakes dispute resolution by integrating objective clinical evidence and industry benchmarks, generating formal reports structured for legal defensibility.",
    heroDescription:
      "Deliver authoritative, physician-led analysis for high-stakes dispute resolution by integrating objective clinical evidence and industry benchmarks, generating formal reports structured for legal defensibility.",
    heroImage: "/images/payor-expert-opinions-hero.png",
    infoText: "Authoritative physician-led analysis built for legal defensibility and regulatory scrutiny.",
    infoBadge: "LITIGATION READY",
    processSteps: [
      {
        title: "Assess",
        desc: "We provide written expert opinions on medical necessity by anchoring every conclusion to the patient\u2019s documented clinical condition, presenting symptoms, and evidence-based treatment guidelines.",
      },
      {
        title: "Verify",
        desc: "Our experts evaluate diagnostic and procedure codes against the clinical record and CMS regulations to identify miscoding, unbundling, or billing irregularities that compromise claim integrity.",
      },
      {
        title: "Benchmark",
        desc: "We cross-reference clinical decisions against nationally recognized standards of care and practice guidelines to ensure expert opinions are grounded in the same objective standards used by regulatory bodies.",
      },
      {
        title: "Structure",
        desc: "We prepare detailed, authoritative reports specifically formatted for use in arbitration, litigation, and expert testimony, integrating payer policy citations and data-driven findings.",
      },
    ],
    featuresSub:
      "Our expert medical opinion methodology focuses on delivering authoritative, physician-led analysis for high-stakes dispute resolution through the integration of objective clinical evidence and industry benchmarks. By applying standardized analytical frameworks to medical necessity, coding validity, and billing compliance, we generate formal reports structured specifically for legal defensibility and regulatory scrutiny. This comprehensive approach ensures that every expert opinion is grounded in transparent standards of care and authoritative data, rather than subjective judgment.",
    features: [
      {
        title: "Medical Necessity Assessment",
        desc: "Assess medical necessity by anchoring written conclusions to the patient\u2019s documented clinical condition, presenting symptoms, and evidence-based treatment guidelines.",
        image: "/images/payor-expert-opinions-54.png",
        imgPosition: "center 65%",
      },
      {
        title: "Coding & Billing Evaluation",
        desc: "Evaluate diagnostic and procedure codes against the clinical record and CMS regulations to proactively identify miscoding, unbundling, or billing irregularities.",
        image: "/images/payor-expert-opinions-55.png",
      },
      {
        title: "Authoritative Report Preparation",
        desc: "Prepare detailed, authoritative reports formatted for arbitration and litigation by cross-referencing clinical decisions against nationally recognized standards of care.",
        image: "/images/payor-expert-opinions-56.png",
      },
    ],
    prevSlug: "dispute-appeal",
    nextSlug: "rebuttal",
  },
  {
    slug: "rebuttal",
    number: "08",
    shortTitle: "Rebuttal & Deposition",
    title: "Rebuttal Reports & Deposition Support",
    description:
      "Michael Hill MD and Associates \u2014 Rebuttal Reports & Deposition Support: Identify structural weaknesses in opposing expert testimony through standardized, data-driven analysis and rigorous evidence mapping \u2014 equipping legal counsel with precise, targeted lines of questioning.",
    heroDescription:
      "Identify structural weaknesses in opposing expert testimony through standardized, data-driven analysis and rigorous evidence mapping \u2014 equipping legal counsel with precise, targeted lines of questioning.",
    heroImage: "/images/payor-rebuttal-hero.png",
    heroImagePosition: "center 80%",
    infoText: "Data-driven analysis that exposes structural weaknesses in opposing expert testimony.",
    infoBadge: "EVIDENCE MAPPING",
    processSteps: [
      {
        title: "Challenge",
        desc: "We analyze the opposing expert\u2019s stated methodology to identify unsupported analytical approaches or reliance on subjective clinical judgment that deviates from industry-standard benchmarks.",
      },
      {
        title: "Audit",
        desc: "We conduct a medical record completeness review to detect instances of omitted or selectively cited documentation, ensuring no relevant clinical evidence was overlooked or excluded to skew the findings.",
      },
      {
        title: "Evaluate",
        desc: "Our physician consultants assess the relevance of the opposing expert\u2019s credentials, board certifications, and operational experience to the specific issues in dispute to identify critical qualification gaps.",
      },
      {
        title: "Map",
        desc: "We systematically map every conclusion back to the supporting data using gap-detection protocols to generate precise, targeted lines of questioning that equip legal counsel for effective depositions and rebuttals.",
      },
    ],
    featuresSub:
      "Our rebuttal and deposition support methodology focuses on identifying structural weaknesses in opposing expert testimony through standardized, data-driven analysis and rigorous evidence mapping. By applying Reliable Care Organization (RCO) principles to evaluate the integrity of an opponent\u2019s methodology, we expose unsupported clinical assertions and selective documentation use. This comprehensive approach ensures that every expert conclusion is tested against objective industry benchmarks and the full clinical record, rather than subjective opinion.",
    features: [
      {
        title: "Methodology Challenge",
        desc: "Analyze the opposing expert\u2019s stated methodology to identify unsupported analytical approaches or reliance on subjective clinical judgment that deviates from industry-standard benchmarks.",
        image: "/images/payor-rebuttal-66.png",
      },
      {
        title: "Medical Record Audit",
        desc: "Conduct a medical record completeness review to detect instances of omitted or selectively cited documentation, ensuring no relevant clinical evidence was overlooked or excluded to skew the findings.",
        image: "/images/payor-rebuttal-67.png",
        imgPosition: "center 70%",
        imgPositionMobile: "center 70%",
      },
      {
        title: "Evidence Mapping",
        desc: "Map every conclusion back to the supporting data using gap-detection protocols to generate precise, targeted lines of questioning that equip legal counsel for effective depositions and rebuttals.",
        image: "/images/payor-rebuttal-68.png",
      },
    ],
    prevSlug: "expert-opinions",
    nextSlug: "demonstratives",
  },
  {
    slug: "demonstratives",
    number: "09",
    shortTitle: "Demonstratives",
    title: "Demonstratives & Litigation Support",
    description:
      "Michael Hill MD and Associates — Demonstratives & Litigation Support: Distill complex clinical and financial datasets into clear, high-impact visual exhibits designed to educate factfinders in legal and administrative proceedings.",
    heroDescription:
      "Distill complex clinical and financial datasets into clear, high-impact visual exhibits designed to educate factfinders in legal and administrative proceedings.",
    heroImage: "/images/payor-demonstratives-hero.png",
    heroImagePosition: "center 15%",
    infoText: "Complex clinical data distilled into clear, persuasive visual exhibits for factfinders.",
    infoBadge: "VISUAL ADVOCACY",
    processSteps: [
      {
        title: "Map",
        desc: "We create chronological visual timelines that map a patient\u2019s clinical course against regulatory and contractual milestones, making complex care sequences immediately understandable to factfinders.",
      },
      {
        title: "Quantify",
        desc: "Our team develops financial impact summaries that visualize the true cost of billing irregularities or reimbursement discrepancies in clear, comparative dollar-impact formats.",
      },
      {
        title: "Visualize",
        desc: "We produce detailed process maps that illustrate claim movement through the revenue cycle, pinpointing exactly where operational breakdowns or deviations from standardized workflows occurred.",
      },
      {
        title: "Contrast",
        desc: "We design side-by-side comparative exhibits that provide a structured, point-by-point analysis of provider actions versus payor positions, directly contrasting opposing expert assertions against established industry standards.",
      },
    ],
    featuresSub:
      "Our demonstratives and litigation support methodology focuses on distilling complex clinical and financial datasets into clear, high-impact visual exhibits designed to educate factfinders in legal and administrative proceedings. By translating intricate revenue cycle workflows and medical documentation into intuitive formats, we make the operational realities of healthcare reimbursement accessible to non-technical audiences. This strategic approach ensures that every dispute is supported by transparent, data-driven evidence that bridges the gap between technical data and actionable advocacy.",
    features: [
      {
        title: "Clinical Timeline Mapping",
        desc: "Map chronological visual timelines that track a patient\u2019s clinical course against regulatory and contractual milestones to make complex care sequences immediately understandable.",
        image: "/images/payor-demonstratives-38.png",
      },
      {
        title: "Process Map Design",
        desc: "Design detailed process maps that illustrate claim movement through the revenue cycle to pinpoint operational breakdowns and deviations from standardized workflows.",
        image: "/images/payor-demonstratives-39.png",
      },
      {
        title: "Comparative Exhibit Development",
        desc: "Develop side-by-side comparative exhibits and financial impact summaries to structure a point-by-point analysis of provider actions versus payor positions.",
        image: "/images/payor-demonstratives-40.png",
      },
    ],
    prevSlug: "rebuttal",
    nextSlug: null,
  },
];
