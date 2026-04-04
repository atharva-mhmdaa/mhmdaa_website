export interface ServiceFeature {
  title: string;
  description: string;
  icon: "navy" | "red" | "teal" | "green" | "purple";
  image?: string;
  bullets?: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface WorkflowStep {
  num: number;
  title: string;
  desc: string;
  highlight?: boolean;
  color?: string;
}

export interface OverviewCard {
  title: string;
  desc: string;
}

export interface ServiceOverview {
  title: string;
  subtitle: string;
  variant?: "timeline";
  sectionLabel?: string;
  timelineLabels?: string[];
  workflowSteps: WorkflowStep[];
  cards: OverviewCard[];
  footerText: string;
}

export interface ProviderService {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  heroDescription: string;
  heroImage: string;
  tileImage: string;
  overview?: ServiceOverview;
  processSteps?: ProcessStep[];
  featuresSectionTitle?: string;
  featuresSectionSub?: string;
  features: ServiceFeature[];
  prevSlug: string | null;
  nextSlug: string | null;
}

export const providerServices: ProviderService[] = [
  {
    slug: "authorization",
    number: "01",
    title: "Authorization",
    shortTitle: "Authorization",
    description:
      "Eliminate 'No Auth' denials with front-end integrity verification and centralized tracking.",
    heroDescription:
      "Bolster front-end integrity. Our authorization service methodology focuses on securing approvals before services are rendered through robust front-end integrity verification and the centralized tracking of Payor-specific requirements. By embedding structured pre-service checkpoints directly into admission workflows and ensuring strong clinical justification from the outset, we proactively identify and resolve potential authorization gaps. This comprehensive approach aligns clinical, administrative, and billing efforts to seamlessly prevent administrative rejections.",
    heroImage: "/images/service-authorization-79.png",
    tileImage: "/images/index-19.png",
    overview: {
      title: "Authorization",
      subtitle: "The Clinical Authorization Roadmap",
      workflowSteps: [
        { num: 1, title: "Intake & Eligibility", desc: "Verify insurance and confirm coverage at registration." },
        { num: 2, title: "Request & Tracking", desc: "Execute payor-specific workflows with real-time status tracking." },
        { num: 3, title: "Clinical Gathering", desc: "Document clinical necessity from the point of admission." },
        { num: 4, title: "Pre-Service Validation", desc: "Every requirement verified before services are rendered.", highlight: true },
      ],
      cards: [
        { title: "Centralized Payor Database", desc: "Authorization rules organized by procedure and payor — a single source of truth for all staff." },
        { title: "Continuous Staff Education", desc: "Regular training on evolving payor requirements — reduce authorization errors at the source." },
      ],
      footerText: "Validate every requirement before services are rendered — not after.",
    },
    processSteps: [
      {
        title: "Verify",
        description:
          "We work with hospital teams to validate insurance data against Payor systems at registration and establish accurate primary and secondary coverage designations.",
      },
      {
        title: "Track",
        description:
          "We partner with teams to standardize a centralized, real-time database that tracks authorization requirements by specific procedure and Payor.",
      },
      {
        title: "Prevent & Justify",
        description:
          "We implement structured pre-service verification checkpoints and standardize authorization requests across departments, ensuring all procedure and implant authorization requests include the relevant diagnosis codes, clinical findings, and medical necessity documentation for high-risk DRGs.",
      },
      {
        title: "Educate",
        description:
          "We coordinate operational training programs to continuously educate clinical, administrative, and billing staff on current prior-authorization responsibilities and updated Payor requirements.",
      },
    ],
    featuresSectionTitle: "Authorization",
    featuresSectionSub:
      "Front-end integrity verification, centralized tracking of authorization requirements by procedure and Payor, and clinical justification to eliminate 'No Authorization' denials before service is rendered.",
    features: [
      {
        title: "Front-End Integrity Verification",
        description:
          "Work with hospital teams to design and implement systems that ensure insurance and primary/secondary designations established at intake are accurately reflected to prevent administrative rejections.",
        icon: "navy",
        image: "/images/service-authorization-79.png",
        bullets: [
          "Develop processes with staff to validate insurance data against Payor systems at registration",
          "Implement workflows with hospital teams to confirm primary and secondary coverage designations",
          "Establish controls to prevent administrative denials prior to authorization requests",
        ],
      },
      {
        title: "Centralized Tracking",
        description:
          "Partner with hospital teams to design centralized systems for managing Payor-specific authorization requirements, ensuring proactive oversight prior to service.",
        icon: "red",
        image: "/images/service-authorization-80.png",
        bullets: [
          "Partner with teams to standardize a centralized database of authorization requirements by procedure and Payor",
          "Support implementation of automated authorization workflows",
          "Enable development of real-time, cross-departmental authorization tracking systems",
        ],
      },
      {
        title: "Elimination of 'No Authorization' Denials",
        description:
          "Provide guidance to hospital teams to design and embed authorization verification within admission and pre-service workflows, preventing authorization gaps from becoming financial liabilities.",
        icon: "teal",
        image: "/images/service-authorization-81.png",
        bullets: [
          "Standardize authorization request processes across departments",
          "Implement structured pre-service verification checkpoints",
          "Establish consistent documentation practices for authorization evidence",
        ],
      },
      {
        title: "Prior-Authorization Education",
        description:
          "Coordinate with hospital teams to design operational training programs that align clinical, administrative, and billing staff with authorization requirements and responsibilities.",
        icon: "green",
        image: "/images/service-authorization-82.png",
        bullets: [
          "Support development of up-to-date prior-authorization requirement resources by Payor",
          "Implement structured, ongoing education programs for staff",
          "Establish processes for consistent distribution of updated requirements across departments",
        ],
      },
      {
        title: "Clinical Gathering",
        description:
          "Ensure procedure and implant authorizations include clinical data that justifies the level of care from the outset, reducing peer-to-peer reviews later.",
        icon: "purple",
        image: "/images/service-authorization-83.png",
        bullets: [
          "Include relevant clinical findings and diagnosis codes in all authorization requests",
          "Document medical necessity for high-risk DRGs and procedures",
          "Integrate clinical data directly into Payor communication",
        ],
      },
    ],
    prevSlug: null,
    nextSlug: "payor-notification",
  },
  {
    slug: "payor-notification",
    number: "02",
    title: "Payor Notification & Follow-up",
    shortTitle: "Payor Notification & Follow-up",
    description:
      "Timely 18-hour status reviews with a 24-hour UM feedback loop to prevent notification denials.",
    heroDescription:
      "Our methodology for Payor Notification & Follow-up centers on establishing strict, time-bound communication and verification protocols to proactively prevent administrative and untimely notification denials. By synchronizing front-end demographic validation with structured post-admission status reviews, we partner with our clients to ensure that accurate patient data and clinical records are submitted well within contractual timeframes. This proactive, centralized approach creates continuous feedback loops between utilization management (UM) and authorization teams to guarantee claims progress seamlessly without stalling.",
    heroImage: "/images/service-payor-notification-108.png",
    tileImage: "/images/index-20.png",
    overview: {
      title: "Payor Notification & Follow-up",
      subtitle: "Mastering the 18-Hour Window",
      variant: "timeline",
      sectionLabel: "Notification Timeline",
      timelineLabels: ["0–\n12h", "18h", "24h"],
      workflowSteps: [
        { num: 1, title: "Review", desc: "Admit, assess, flag urgent cases" },
        { num: 2, title: "Notify", desc: "Report admission to payor UM team", highlight: true },
        { num: 3, title: "Close", desc: "Confirm receipt, close feedback loop", color: "#16a34a" },
      ],
      cards: [
        { title: "Demographic Accuracy", desc: "Validate insurance eligibility and COB at the point of scheduling — before admission." },
        { title: "UM Communication", desc: "Daily protocols between UM and authorization teams for seamless record sharing." },
        { title: "Follow-up Persistence", desc: "Systematic tracking of payor acknowledgments to eliminate unconfirmed claims." },
      ],
      footerText: "Every minute past 18 hours increases denial risk.",
    },
    processSteps: [
      {
        title: "Timely Status Reviews",
        description:
          "We partner with hospital teams to implement structured 18-hour post-admission status review processes, alongside defined 6-hour remediation workflows to address incomplete documentation.",
      },
      {
        title: "Centralized Communication",
        description:
          "We design and implement communication systems that establish a 24-hour feedback loop between UM and authorization teams, enabling the centralized tracking of notification requests, documentation status, and Payor responses.",
      },
      {
        title: "Front-End Accuracy",
        description:
          "We collaborate to validate demographic, insurance, and Coordination of Benefits (COB) data right at the point of scheduling, implementing real-time verification systems to establish accurate primary and secondary coverage designations upfront.",
      },
      {
        title: "Follow-up Persistence",
        description:
          "We assist in establishing systematic follow-up protocols and escalation workflows to track Payor acknowledgments and documentation receipts, ensuring un-responded notifications are escalated within defined timeframes.",
      },
    ],
    featuresSectionTitle: "Payor Notification & Follow-up",
    featuresSectionSub:
      "Timely 18-hour status reviews, centralized UM communication with 24-hour feedback loops, and front-end demographic accuracy to prevent untimely notification denials.",
    features: [
      {
        title: "Timely Status Reviews",
        description:
          "Partner with hospital teams to develop status review protocols that advance review timelines and incorporate defined remediation windows to prevent \u201cUntimely Notification\u201d denials.",
        icon: "navy",
        image: "/images/service-payor-notification-108.png",
        bullets: [
          "Implement structured 18-hour post-admission status review processes",
          "Establish defined 6-hour remediation workflows for incomplete documentation",
          "Enable development of notification compliance tracking by Payor and unit",
        ],
      },
      {
        title: "Centralized Communication",
        description:
          "Provide strategic guidance to hospital teams to design and implement communication systems that create a 24-hour feedback loop between centralized UM and authorization teams, ensuring records are sent within contractual timeframes.",
        icon: "red",
        image: "/images/service-payor-notification-109.png",
        bullets: [
          "Support development of daily communication protocols between UM and authorization teams",
          "Assist in establishing a 24-hour feedback loop for documentation status",
          "Enable centralized tracking of notification requests and Payor responses",
        ],
      },
      {
        title: "Front-End Accuracy (Demographics & COB)",
        description:
          "Collaborate with hospital teams to design and implement systems that validate demographic, insurance, and coordination of benefits (COB) data at the point of scheduling to prevent \u201cSubscriber Not Found\u201d and coordination errors.",
        icon: "teal",
        image: "/images/service-payor-notification-110.png",
        bullets: [
          "Support validation of insurance eligibility and enrollment at scheduling",
          "Assist in establishing processes to verify primary and secondary coverage designation upfront",
          "Enable implementation of real-time verification systems to prevent COB coordination errors",
        ],
      },
      {
        title: "Follow-up Persistence",
        description:
          "Advise and support hospital teams to design and implement follow-up systems that ensure claims continue progressing after Payor notification and do not stall.",
        icon: "green",
        image: "/images/service-payor-notification-111.png",
        bullets: [
          "Support implementation of systematic follow-up protocols for all Payor notifications",
          "Assist in establishing processes to track Payor acknowledgment and documentation receipt",
          "Enable escalation workflows for unresponded notifications within defined timeframes",
        ],
      },
    ],
    prevSlug: "authorization",
    nextSlug: "p2p",
  },
  {
    slug: "p2p",
    number: "03",
    title: "Accelerated Peer-to-Peer (AP2P)",
    shortTitle: "Accelerated Peer-to-Peer (AP2P)",
    description:
      "A Specialist Strike Team deployed within 6 hours of denial \u2014 forcing rank-for-rank adjudication before denial drift can take hold.",
    heroDescription:
      "Our Accelerated Peer-to-Peer (AP2P) methodology bypasses traditional administrative bottlenecks by deploying a board-certified sub-specialist within six hours of a denial trigger. By matching the Payor\u2019s medical director rank-for-rank, we immediately elevate the conversation from a generalized administrative review to a rigorous clinical discussion. This proactive intervention promotes real-time engagement with the patient\u2019s evolving acuity before administrative \u201cdenial drift\u201d can take hold.",
    heroImage: "/images/service-p2p-103.png",
    tileImage: "/images/index-21.png",
    overview: {
      title: "Accelerated Peer-to-Peer (P2P)",
      subtitle: "6 Hours to Resolution",
      variant: "timeline",
      sectionLabel: "The 6-Hour Protocol",
      timelineLabels: ["Hour 0", "Hour 1", "Hour 2", "Hour 3–5", "Hour 6"],
      workflowSteps: [
        { num: 1, title: "Denial Trigger", desc: "" },
        { num: 2, title: "Specialist Activated", desc: "" },
        { num: 3, title: "Outreach Strike", desc: "" },
        { num: 4, title: "Rank-for-Rank Call", desc: "" },
        { num: 5, title: "Resolution", desc: "", highlight: true },
      ],
      cards: [
        { title: "STANDARD P2P\n15–20%\nSuccess Rate\nGeneralist-led\n~30 min calls\nAdmin notes only", desc: "standard" },
        { title: "ACCELERATED P2P\n65–80%\nSuccess Rate\nSpecialist-led\n~15 min calls\nCertified arbitrator record", desc: "accelerated" },
      ],
      footerText: "Rank-for-rank engagement is the biggest lever for P2P overturn rates.",
    },
    processSteps: [
      {
        title: "Trigger & Scrub",
        description:
          "Upon receiving a denial trigger, we perform a 3-minute clinical scrub of the EMR to prevent the case from stalling in the appeals queue.",
      },
      {
        title: "Specialist Match",
        description:
          "We activate a rank-matched physician (e.g., matching a cardiology denial with a board-certified cardiologist) to ensure specialty parity, creating a \u201cDeference Factor\u201d that makes generalist Payor directors structurally hesitant to overrule our specialist\u2019s technical nuances.",
      },
      {
        title: "Forensic Pre-Review",
        description:
          "Prior to the call, our specialist conducts a 60-minute deep chart dive, mapping objective clinical data \u2014 such as SOFA scores, lactate trends, and Two-Midnight benchmarks \u2014 into an AI-assisted Tactical Prep Sheet verified by a Nurse Auditor.",
      },
      {
        title: "Execute & Document",
        description:
          "During the live Peer-to-Peer, our specialist bypasses generalized criteria to focus on established guidelines like ACC/AHA or NCCN. Every word is documented as a Certified Arbitrator\u2019s Record to build a litigation-ready evidentiary file; if the denial is upheld, we immediately file a Sentinel Dispute to escalate to the Federal IDR track.",
      },
    ],
    featuresSectionTitle: "Accelerated Peer-to-Peer (AP2P)",
    featuresSectionSub:
      "In 2026, where Payor AI can issue a denial in milliseconds, the standard P2P has become a bottleneck. Our Accelerated P2P deploys a board-certified sub-specialist within 6 hours, matching the Payor medical director rank-for-rank and converting the conversation from administrative to clinical \u2014 and are designed to achieve 65\u201380% appeal overturn rates.",
    features: [
      {
        title: "6-Hour Rapid Response Protocol",
        description: "The primary value of a P2P within six hours is immediate preservation of the Clinical Narrative before it is diluted by administrative processing. By intervening at this stage, we force the Payor Medical Director to engage with a living patient\u2019s evolving acuity \u2014 not a static retrospective chart.",
        icon: "navy",
        image: "/images/service-p2p-103.png",
        bullets: [
          "3-Minute Clinical Scrub of EMR upon denial trigger",
          "Prevents 'denial drift' before the case enters the appeals queue",
          "Forces real-time engagement over retrospective paper review",
          "Protects Length of Stay efficiency by resolving status disputes on Day 1",
        ],
      },
      {
        title: "Specialty Parity \u2014 Rank-for-Rank",
        description: "Our Specialist is matched to a Payor Medical Director of equivalent clinical standing. A Cardiology denial triggers a Cardiovascular Specialist. A Payor\u2019s Generalist Medical Director is structurally hesitant to overrule a Board-Certified Sub-Specialist on technical nuances \u2014 creating the Deference Factor.",
        icon: "red",
        image: "/images/service-p2p-104.png",
        bullets: [
          "40\u201350% increase in overturn rates vs. generalist-led P2Ps",
          "Specialist-to-specialist calls resolved in 8\u201310 min vs. 30 min standard",
          "Bypasses the educational phase \u2014 straight to ACC/AHA or NCCN guidelines",
          "Identifies Criteria Drift in real-time during the call",
        ],
      },
      {
        title: "Forensic Pre-Review",
        description: "While a hospital physician has 5\u201310 minutes to prepare between rounds, our Specialist receives a 60-minute deep chart dive before the call \u2014 mapping lactate trends, SOFA scores, Two-Midnight benchmarks, and \u2018failed conservative management\u2019 data points into an AI-assisted P2P Tactical Prep Sheet.",
        icon: "teal",
        image: "/images/service-p2p-105.png",
        bullets: [
          "60-minute forensic chart review vs. 5-min hospital standard",
          "Maps SOFA scores, lactate trends, and objective clinical data",
          "AI-assisted Tactical Prep Sheet verified by a Nurse Auditor",
          "Builds litigation-ready evidentiary record before the call begins",
        ],
      },
      {
        title: "Litigation-Ready Documentation",
        description: "Payors are substantially less likely to issue bad-faith denials when they know an independent firm is documenting every word for potential IDR or legal escalation. If the denial is upheld, we file a Sentinel Dispute and escalate immediately to the Federal IDR track under the No Surprises Act.",
        icon: "green",
        image: "/images/service-p2p-106.png",
        bullets: [
          "Every P2P word documented as a Certified Arbitrator\u2019s Record",
          "Regulatory Non-Compliance flag issued when Criteria Drift is identified",
          "Sentinel Dispute filed if denial is upheld \u2014 No Surprises Act IDR track",
          "Operational deterrent: friction cost of defending denial exceeds Payor savings",
        ],
      },
      {
        title: "Benefits for the Patient",
        description: "Behind every denial is a patient whose care, coverage, and financial stability are directly impacted. MHMDAA\u2019s Accelerated Peer-to-Peer (AP2P) process safeguards patients from the consequences of inappropriate or premature status determinations by ensuring that clinical decisions are rendered by qualified physicians based on real-time acuity and objective clinical data\u2014not automated systems applying generalized criteria. By preserving appropriate inpatient status at the point of review, patients maintain uninterrupted access to medically necessary services. When a denial is reversed within 6 hours, there is no gap in care, no delay in treatment, and no unexpected out-of-pocket liability.",
        icon: "purple",
        image: "/images/service-p2p-107.png",
        bullets: [
          "Prevents inappropriate downgrades from Inpatient to Observation",
          "Reduces risk of surprise billing and unexpected out-of-pocket expense for patients",
          "Preserves continuity of medically necessary treatment without administrative interruption",
          "Maintains accurate representation of patient acuity, ensuring that the patient\u2019s clinical presentation and course are not overshadowed by rigid or generalized decision logic.",
        ],
      },
    ],
    prevSlug: "payor-notification",
    nextSlug: "concurrent-review",
  },
  {
    slug: "concurrent-review",
    number: "04",
    title: "Concurrent Review",
    shortTitle: "Concurrent Review",
    description:
      "Proactive observation-to-inpatient conversion with 18-hour milestone reviews and objective documentation.",
    heroDescription:
      "Our concurrent review methodology deploys a structured, proactive model designed to prevent technical denials through real-time patient evaluation and workflow optimization. By integrating 18-hour milestone evaluations, objective documentation strategies, and evidence-based clinical criteria into the daily care cycle, we partner with our clients to ensure medical necessity is continuously captured and justified. This continuous alignment of clinical operations with compliance standards secures accurate status determinations from admission through discharge.",
    heroImage: "/images/service-concurrent-review-89.png",
    tileImage: "/images/index-22.png",
    processSteps: [
      {
        title: "Proactive Status Conversion",
        description:
          "We train and equip key process stakeholders with the protocols to execute timely observation-to-inpatient status conversions, integrating payor notification procedures directly into the workflow to prevent delays.",
      },
      {
        title: "18-Hour Milestone Evaluations",
        description:
          "We implement automated alerts at the 18-hour observation threshold to trigger structured status reviews, ensuring timely level-of-care reassessment and compliance with payor notification timeframes.",
      },
      {
        title: "Transitions of Care Planning Support",
        description:
          "Discharge planning protocols are initiated right at the point of admission to ensure transition-of-care documentation strictly aligns with the expected length of stay and the Two-Midnight benchmark. MHMDAA reinforces and supports the onsite physician\u2019s clinical decision-making process.",
      },
      {
        title: "Objective & Evidence-Based Documentation",
        description:
          "We rigorously integrate vital signs, imaging, and lab results to continuously document clinical acuity and progression, constantly evaluating objective data against InterQual, Milliman (MCG) guidelines, and CMS admission standards.",
      },
    ],
    featuresSectionTitle: "Concurrent Review",
    featuresSectionSub:
      "A structured concurrent review model featuring proactive status conversion training, 18-hour milestone evaluations, transitions of care planning support, and objective documentation strategies designed to prevent technical denials.",
    features: [
      {
        title: "Proactive Status Conversion",
        description:
          "Our team equips and trains clinical staff to execute timely conversion from Observation to Inpatient status conversions, reducing technical denials that arise from status conversion delays.",
        icon: "navy",
        image: "/images/service-concurrent-review-89.png",
        bullets: [
          "Staff education on observation-to-inpatient conversion protocols",
          "Payor notification procedures integrated into workflow",
          "Prevention of technical denials related to status delays",
        ],
      },
      {
        title: "18-Hour Milestone",
        description:
          "Implementation of earlier structured 18-hour status reviews ensure timely level-of-care reassessment and compliance with Payor notification requirements. This milestone-driven approach supports accurate status determination and defensible documentation.",
        icon: "red",
        image: "/images/service-concurrent-review-90.png",
        bullets: [
          "Automated alerts at 18-hour observation threshold",
          "Timely Payor notification within required regulatory timeframes",
          "Comprehensive audit trail to support compliance and appeals",
        ],
      },
      {
        title: "Early Discharge & Transition Planning Alignment",
        description:
          "Discharge planning is initiated at the point of admission to ensure transition of care documentation aligns with the Two-Midnight benchmark. This proactive approach supports accurate status justification and reduces length-of-stay\u2013related denials.",
        icon: "teal",
        image: "/images/service-concurrent-review-91.png",
        bullets: [
          "Discharge planning protocols initiated at admission",
          "Documentation aligned with Two-Midnight criteria and expected length of stay (LOS)",
          "Reduction of denials associated with extended or unsupported stays",
        ],
      },
      {
        title: "Objective Clinical Documentation",
        description:
          "Integrate vital signs, imaging, and laboratory results throughout the patient\u2019s stay to justify continued inpatient necessity.",
        icon: "green",
        image: "/images/service-concurrent-review-92.png",
        bullets: [
          "Integration of vitals monitoring data",
          "Imaging and lab result correlation with clinical status",
          "Documentation of clinical acuity and progression over time",
        ],
      },
      {
        title: "Evidence-Based Clinical Criteria",
        description:
          "Utilize evidence-based criteria to justify inpatient status determination, ensuring medical decision-making is supported by current clinical guidelines.",
        icon: "purple",
        image: "/images/service-concurrent-review-93.png",
        bullets: [
          "Application of InterQual and Milliman (MCG) guidelines for level-of-care determination",
          "Documentation aligned with objective, evidence-based clinical criteria",
          "Compliance with CMS admission standards and regulatory expectations",
        ],
      },
    ],
    prevSlug: "p2p",
    nextSlug: "coding",
  },
  {
    slug: "coding",
    number: "05",
    title: "Coding",
    shortTitle: "Coding",
    description:
      "Clinical Documentation Improvement (CDI)-focused coding excellence with quality audits and automated CCI/MUE claim scrubbing.",
    heroDescription:
      "Our coding and clinical documentation improvement (CDI) methodology focuses on proactive risk mitigation and uncompromising documentation integrity. By integrating targeted Clinical Documentation Improvement (CDI) on high-risk DRGs, systematic internal quality audits, and advanced automated claim scrubbing, we ensure precision and compliance before claims are ever finalized. This comprehensive strategy unites technological automation with continuous clinical education to capture the true complexity of patient care while preventing preventable administrative errors.",
    heroImage: "/images/service-coding-86.png",
    tileImage: "/images/index-23.png",
    processSteps: [
      {
        title: "Clinical Documentation Improvement (CDI)",
        description:
          "We prioritize analysis on DRGs with significant downgrade exposure and high-risk outpatient procedures prone to audit review, developing specific queries to clarify ambiguous clinical indicators and delivering targeted education to physicians on documentation requirements.",
      },
      {
        title: "Quality Audits",
        description:
          "We assist in the design of systematic, regular internal coding audits across all hospital departments to identify coding error patterns and trends prior to claim finalization, performing deep root cause analyses and developing monitored corrective action plans.",
      },
      {
        title: "Claim Scrubber Integration",
        description:
          "Utilizing advanced technology within a pre-submission workflow, we automatically detect and resolve Correct Coding Initiative (CCI) violations and Medically Unlikely Edits (MUE) to prevent bundling denials, coupled with monthly data-driven education sessions for coders and physicians.",
      },
    ],
    featuresSectionTitle: "Coding",
    featuresSectionSub:
      "Clinical Documentation Improvement focused on high-risk DRGs, quality audits to catch coding trends, and claim scrubber integration for CCI and MUE compliance.",
    features: [
      {
        title: "Clinical Documentation Improvement (CDI)",
        description:
          "We prioritize Clinical Documentation Improvement (CDI) focus on DRGs with significant downgrade exposure and high-risk outpatient procedures prone to audit review.",
        icon: "navy",
        image: "/images/service-coding-86.png",
        bullets: [
          "Analysis of high-risk DRG categories for downgrade exposure",
          "Identification of procedures with elevated audit risk",
          "Targeted physician education on documentation requirements",
          "Query development for ambiguous clinical indicators",
        ],
      },
      {
        title: "Quality Audits",
        description:
          "Perform regular internal reviews to identify trends in incorrect coding before claims are finalized.",
        icon: "red",
        image: "/images/service-coding-87.png",
        bullets: [
          "Systematic internal coding audits across all departments",
          "Identification of coding error patterns and trends",
          "Root cause analysis of recurring coding issues",
          "Corrective action plan development and monitoring",
        ],
      },
      {
        title: "Claim Scrubber Integration",
        description:
          "Using advanced technology, we catch CCI violations and MUE before claim submission, coupled with monthly physician and coder education.",
        icon: "teal",
        image: "/images/service-coding-88.png",
        bullets: [
          "Automated CCI violation detection and resolution",
          "MUE editing to prevent bundling denials",
          "Pre-submission claim scrubbing workflow",
          "Monthly education sessions for physicians and coders",
        ],
      },
    ],
    prevSlug: "concurrent-review",
    nextSlug: "claim-submission",
  },
  {
    slug: "claim-submission",
    number: "06",
    title: "Claim Submission",
    shortTitle: "Claim Submission",
    description:
      "Optimize first-pass payment rates with automated 835 remittance processing and clean claim monitoring.",
    heroDescription:
      "Our claim submission methodology centers on proactive charge-level auditing and advanced automation to optimize first-pass payment rates. We combine rigorous pre-submission compliance checks with automated 835 remittance processing to identify and resolve systemic billing issues immediately. This ensures that every submitted claim is accurate, compliant with specific payor requirements, and primed for seamless reimbursement.",
    heroImage: "/images/service-claim-submission-hero2.png",
    tileImage: "/images/index-24.png",
    features: [
      {
        title: "Clean Claim Rate",
        description:
          "Monitor the percentage of claims paid on the first pass to ensure submission accuracy and identify systemic issues.",
        icon: "navy",
        image: "/images/service-claim-submission-84.png",
        bullets: [
          "First-pass payment rate tracking and benchmarking",
          "Root cause analysis of claim rejections and denials",
          "Identification of submission accuracy gaps",
          "Payor-specific submission requirement management",
        ],
      },
      {
        title: "835 Remittance Automation",
        description:
          "Automatically pull Remark and Reason codes into a workflow dashboard for immediate action, eliminating manual processing delays.",
        icon: "red",
        image: "/images/service-claim-submission-85.png",
        bullets: [
          "Automated 835 EDI file processing and parsing",
          "Remark and Reason code extraction and categorization",
          "Real-time workflow dashboard for claims monitoring",
          "Automated alerts for high-priority denials",
        ],
      },
    ],
    prevSlug: "coding",
    nextSlug: "denial-management",
  },
  {
    slug: "denial-management",
    number: "07",
    title: "Revenue Denial Management",
    shortTitle: "Denial Management",
    description:
      "Initial denial rate targets under 5%, categorization matrices, root cause analysis, denial task forces, and strategic Payor collaboration through Joint Operating Committees.",
    heroDescription:
      "Our denial management methodology provides a comprehensive, cross-departmental framework designed to keep initial denial rates under 5%. By leveraging robust categorization matrices, targeted root cause analysis, and strategic Payor collaboration through Joint Operating Committees (JOCs), we systematically identify and resolve bottlenecks. This proactive approach ensures continuous feedback loops and optimal revenue protection across the entire claim lifecycle.",
    heroImage: "/images/service-denial-management-hero.png",
    tileImage: "/images/index-25.png",
    processSteps: [
      {
        title: "Categorize & Analyze",
        description:
          "We utilize a Categorization Matrix to sort denials into distinct buckets for targeted resolution: Clinical (medical necessity challenges), Administrative (missing documentation or authorization issues), and Technical (claims processing errors or format violations).",
      },
      {
        title: "Track & Benchmark",
        description:
          "We establish baseline performance benchmarks by individual health plan and utilize real-time performance dashboards, deploying dollar-stratified action plans that prioritize high-impact denials.",
      },
      {
        title: "Root Cause Analysis",
        description:
          "We systematically track specific \"Red Flag\" categories to identify the source of the denial, focusing heavily on 2-Midnight Rule violations, post-acute care transition delays, and 30-day readmission patterns by Payor.",
      },
      {
        title: "Mobilize & Educate",
        description:
          "We establish a Denial Task Force that conducts weekly meetings with front-end, clinical, and coding departments, ensuring cross-departmental workflow optimization and strict accountability tracking.",
      },
      {
        title: "Collaborate & Escalate",
        description:
          "We drive strategic Payor collaboration by establishing monthly Joint Operating Committees (JOCs) to align clinical expectations and utilize direct escalation pathways with major health plans to achieve batch resolution of recurring administrative issues.",
      },
    ],
    featuresSectionTitle: "Denial Management",
    featuresSectionSub:
      "Initial denial rate targets under 5%, categorization matrices, root cause analysis, denial task forces, and strategic Payor collaboration through Joint Operating Committees.",
    features: [
      {
        title: "Performance Metrics",
        description:
          "Maintain an initial denial rate target of less than 5% per Payor with stratified action plans based on total dollars.",
        icon: "navy",
        image: "/images/service-denial-management-94.png",
        bullets: [
          "Baseline performance benchmarking by individual health plan",
          "Dollar-stratified action plans for high-impact denials",
          "Real-time performance dashboards and trend analysis",
        ],
      },
      {
        title: "Categorization Matrix",
        description:
          "Sort denials into Clinical, Administrative, and Technical buckets for targeted resolution.",
        icon: "red",
        image: "/images/service-denial-management-95.png",
        bullets: [
          "Clinical denials: Medical necessity challenges",
          "Administrative denials: Missing documentation or authorization issues",
          "Technical denials: Claims processing errors or format violations",
        ],
      },
      {
        title: "Root Cause Analysis",
        description:
          "Track specific 'Red Flag' categories such as 2-Midnight Rule violations, post-acute care delays, and 30-day readmissions by Payor.",
        icon: "teal",
        image: "/images/service-denial-management-96.png",
        bullets: [
          "2-Midnight Rule compliance tracking and violation alerts",
          "Post-acute care transition delay identification",
          "30-day readmission pattern analysis by Payor",
        ],
      },
      {
        title: "Denial Task Force",
        description:
          "Conduct weekly meetings with front-end, clinical, and coding departments to develop implementation plans and close feedback loops.",
        icon: "green",
        image: "/images/service-denial-management-97.png",
        bullets: [
          "Cross-departmental workflow optimization",
          "Targeted education and feedback for front-end staff",
          "Documented action items with accountability tracking",
        ],
      },
      {
        title: "Strategic Payor Collaboration",
        description:
          "Establish monthly Joint Operating Committees (JOCs) to discuss systemic denial trends and align clinical expectations.",
        icon: "purple",
        image: "/images/service-denial-management-98.png",
        bullets: [
          "Direct escalation pathways with major health plans",
          "Systemic denial trend discussion and analysis",
          "Batch resolution of recurring administrative issues",
        ],
      },
    ],
    prevSlug: "claim-submission",
    nextSlug: "appeals",
  },
  {
    slug: "appeals",
    number: "08",
    title: "Appeal Letter Writing",
    shortTitle: "Appeal Letter Writing",
    description:
      "Personalized clinical narratives and evidence-based policy cross-referencing to overturn denials.",
    heroDescription:
      "Our appeal letter methodology focuses on constructing winning rebuttals by replacing generic templates with highly personalized clinical narratives tailored to each patient\u2019s unique presentation and extenuating circumstances. We strategically shift the burden of proof back to the Payor by explicitly documenting the physician\u2019s clinical judgment and expectation of care at the time of admission. By integrating objective data and cross-referencing restrictive policies against established guidelines, we work to establish undeniable medical necessity and effectively challenge the denial.",
    heroImage: "/images/service-appeals-hero.png",
    tileImage: "/images/index-26.png",
    features: [
      {
        title: "Personalized Clinical Narratives",
        description:
          "Replace generic templates with letters tailored to individual patient presentations, including extenuating circumstances.",
        icon: "navy",
        image: "/images/service-appeals-75.png",
        bullets: [
          "Custom appeal letters drafted for every unique encounter",
          "Integration of complex medical histories and nuanced details",
          "Compelling narrative structure establishing medical necessity",
        ],
      },
      {
        title: "Data Integration",
        description:
          "Directly cite vitals, lab results, intensity of services, and imaging that justify the inpatient definition based on evidence-based criteria.",
        icon: "red",
        image: "/images/service-appeals-76.png",
        bullets: [
          "Vital sign trends demonstrating clinical acuity",
          "Lab result abnormalities supporting inpatient level of care",
          "Imaging findings corroborating clinical presentation",
        ],
      },
      {
        title: "Burden of Proof",
        description:
          "Shift the burden of proof back to the Payor by explicitly documenting the physician\u2019s expectation of care at the time of admission.",
        icon: "teal",
        image: "/images/service-appeals-77.png",
        bullets: [
          "Documentation of physician\u2019s clinical judgment at admission",
          "Evidence-based criteria citations for level of care",
          "Direct challenges to the Payor\u2019s alternative interpretation of evidence",
        ],
      },
      {
        title: "Policy Cross-Referencing",
        description:
          "Quote specific Payor policies, CMS guidelines, or evidence-based criteria that the denial contradicts.",
        icon: "green",
        image: "/images/service-appeals-78.png",
        bullets: [
          "Direct citations of restrictive policy language",
          "CMS guidelines and Medicare Local Coverage Determinations",
          "NCCN and specialty society guidelines alignment",
        ],
      },
    ],
    prevSlug: "denial-management",
    nextSlug: "litigation",
  },
  {
    slug: "litigation",
    number: "09",
    title: "Litigation & Expert Support",
    shortTitle: "Litigation & Expert Support",
    description:
      "Comprehensive litigation support grounded in clinical, contractual, and regulatory expertise.",
    heroDescription:
      "Our Litigation and Expert Support methodology provides comprehensive defense against systemic payor processing failures and improper claims handling practices. Grounded in clinical, contractual, and regulatory expertise, we utilize forensic analysis and physician-led reviews to challenge overpayment demands and validate contract compliance. This approach systematically evaluates network agreements, audit methodologies, and regulatory frameworks to ensure robust protection against improper extrapolation and prompt-pay violations.",
    heroImage: "/images/service-litigation-hero.png",
    tileImage: "/images/index-27.png",
    features: [
      {
        title: "Forensic Contract",
        description:
          "Evaluate network agreements for adherence to prompt-pay statutes and the No Surprises Act (NSA).",
        icon: "navy",
        image: "/images/service-litigation-99.png",
        bullets: [
          "Contract compliance analysis against applicable federal and state statutes",
          "Prompt-pay requirement validation and supporting documentation",
          "No Surprises Act (NSA) compliance assessment and gap identification",
        ],
      },
      {
        title: "SIU and Audit Defense",
        description:
          "Analyze the statistical validity of SIU audits and challenge overpayment demands based on improper extrapolation.",
        icon: "red",
        image: "/images/service-litigation-100.png",
        bullets: [
          "Statistical validity assessment of SIU audit methodologies",
          "Sampling methodology review and validation",
          "Overpayment demand analysis and reduction negotiation",
        ],
      },
      {
        title: "Expert Witness Testimony",
        description:
          "Provide physician-led expert testimony rooted in operational experience regarding systemic Payor processing gaps.",
        icon: "teal",
        image: "/images/service-litigation-101.png",
        bullets: [
          "Expert witness qualification, report development, and testimony preparation",
          "Analysis and testimony regarding systemic Payor processing and reimbursement failures",
          "Benchmarking against industry standards and regulatory expectations",
        ],
      },
      {
        title: "Regulatory Complaint Response Support",
        description:
          "Provide strategic consulting support in the development of comprehensive regulatory complaint submissions addressing improper claims handling practices, ensuring alignment with regulatory standards and facilitating escalation to state insurance commissions and oversight bodies.",
        icon: "green",
        image: "/images/service-litigation-102.png",
        bullets: [
          "Complaint documentation aligned with regulatory and compliance standards",
          "State insurance commission filing preparation",
          "Prompt-pay statute violation documentation",
        ],
      },
    ],
    prevSlug: "appeals",
    nextSlug: null,
  },
];

export function getServiceBySlug(
  slug: string,
): ProviderService | undefined {
  return providerServices.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return providerServices.map((s) => s.slug);
}
