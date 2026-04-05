-- Seed legacy provider + payor case studies (from former hardcoded pages).
-- Requires at least one auth user with a profile (content@ or content1@ preferred).

WITH aid AS (
  SELECT COALESCE(
    (SELECT u.id FROM auth.users u
     INNER JOIN public.profiles p ON p.id = u.id
     WHERE u.email IN ('content@mhmdaa.com', 'content1@mhmdaa.com')
     ORDER BY u.created_at
     LIMIT 1),
    (SELECT id FROM public.profiles ORDER BY created_at LIMIT 1)
  ) AS author_id
)
INSERT INTO public.case_studies (
  author_id, title, slug, subtitle, description, challenge, solution, results, metrics,
  card_challenge, card_solution, card_metrics,
  region, service_type, kind, payor_dispute_type, payor_representation, payor_scope,
  payor_case_ref, payor_counsel, is_published, published_at
)
SELECT
  (SELECT author_id FROM aid),
  v.title, v.slug, v.subtitle, v.description, v.challenge, v.solution, v.results,
  v.metrics::jsonb, v.card_challenge, v.card_solution, v.card_metrics::jsonb,
  v.region, v.service_type, v.kind, v.payor_dispute_type,
  v.payor_representation, v.payor_scope, v.payor_case_ref, v.payor_counsel,
  true, v.published_at::timestamptz
FROM (VALUES
  -- ─── Provider: THP ───
  (
    'Southern Region Integrated Health System',
    'thp',
    'Emergency Department Transformation & Capacity Optimization',
    NULL,
    $c$<p>Texas Regional Medical Center (the Hospital) struggled with a critical lack of inpatient bed capacity, widespread emergency department (ED) inefficiencies, and chronically long wait times that were eroding patient satisfaction and volume.</p>$c$,
    $s$<p><strong>Redesign Patient Care Process.</strong> Teaming with hospital staff, Michael Hill, MD and Associates implemented comprehensively redesigned patient care processes that created a collaborative culture across the entire organization &mdash; aligning clinical and operational leadership around measurable throughput and capacity goals.</p>$s$,
    $r$<p>The measurable increase in operational efficiency, throughput, and capacity enabled the Hospital to implement its <strong>&ldquo;30 Minute Promise&rdquo;</strong> in the ED &mdash; a commitment to see every patient within 30 minutes of arrival. This initiative directly recaptured revenue from nearly <strong>1,000 patients</strong> and raised patient satisfaction scores to <strong>over the 95th percentile</strong> nationally.</p><p>Inpatient length-of-stay decreased by <strong>20%</strong>, dropping to <strong>4.2 days</strong> &mdash; freeing critical bed capacity and improving system-wide throughput.</p>$r$,
    '[{"value":"20%","label":"Reduction in Inpatient LOS"},{"value":"4.2 days","label":"Inpatient LOS Achieved"},{"value":"95th+","label":"Patient Satisfaction Percentile"},{"value":"~1,000","label":"Patients Recaptured"}]'::text,
    'Lack of inpatient bed capacity, ED inefficiencies, and long wait times eroding patient volume and satisfaction.',
    'MHMDAA redesigned patient care processes end-to-end, building a collaborative operational culture that aligned clinical and administrative leadership.',
    '[{"value":"20%","label":"LOS Reduction"},{"value":"4.2d","label":"Inpatient LOS"},{"value":"95th+","label":"Satisfaction %ile"}]'::text,
    'texas', 'ed-transformation', 'provider', NULL, NULL, NULL, NULL, NULL,
    '2023-06-01'
  ),
  -- ─── Provider: SJH ───
  (
    'Pacific Northwest Magnet-Designated Medical Center',
    'sjh',
    'Functional Capacity Expansion & Patient Flow Optimization',
    E'~300\u2013400 Bed \u00B7 Level II Trauma Center \u00B7 High-Volume Emergency Department',
    $c$<p>Pacific Northwest Regional Hospital (the Hospital) faced unprecedented service demands across its three primary service sectors and needed to dramatically optimize functional capacity, reduce length-of-stay, and cut throughput times for both admission and discharge.</p>$c$,
    $s$<p><strong>Improve Patient Flow &amp; Functional Capacity.</strong> Michael Hill, MD and Associates deployed its proprietary <strong>Accountable Hospital Operations</strong> prototype &mdash; a physician-led framework that re-engineers patient flow from the front door through discharge, eliminating bottlenecks and dramatically opening the hospital to treating more patients more effectively.</p>$s$,
    $r$<p>Inpatient units increased functional bed capacity by <strong>50&ndash;100 beds</strong>, with inpatient Medicare length-of-stay decreasing by <strong>0.6 days</strong> just nine months after project completion.</p><p>ED boarding and ambulance diversion were virtually eliminated. Time from patient arrival to physician evaluation decreased from 110 minutes to just over 40 minutes, a 64% improvement. Patients leaving the ED without treatment decreased by nearly 26%. These improvements occurred despite a 30,000 visit (16%) annual increase in ED volume, with minimal or no additional staff and no expansion of space in a facility originally built for half the current volume.</p>$r$,
    '[{"value":"50\u2013100","label":"New Functional Beds Added"},{"value":"0.6 days","label":"Medicare LOS Reduction"},{"value":"64%","label":"Faster ED Physician Access"},{"value":"26%","label":"Fewer Patients Left Untreated"}]'::text,
    'Unprecedented service demands across three primary sectors with urgent need to reduce LOS and cut throughput times for admission and discharge.',
    E'Deployed MHMDAA\u2019s proprietary Accountable Hospital Operations prototype to re-engineer patient flow from front door through discharge.',
    '[{"value":"100+","label":"New Functional Beds"},{"value":"64%","label":"Faster ED Access"},{"value":"+16%","label":"Annual ED Volume"}]'::text,
    'pacific-northwest', 'capacity-expansion', 'provider', NULL, NULL, NULL, NULL, NULL,
    '2022-09-01'
  ),
  -- ─── Provider: SHMC ───
  (
    'Leading Pediatric & Adult Regional Medical Center',
    'shmc',
    'Enterprise-Wide Hospital Operations Redesign',
    NULL,
    $c$<p>Regional Medical &amp; Children&apos;s Hospital (the Hospital) experienced what they believed were challenges limited to the ED: low patient satisfaction, ambulance diversion, a lack of inpatient functional capacity, low reimbursement rates, and a large volume of patients with uncompensated care. The scope of systemic dysfunction, however, extended across the enterprise.</p>$c$,
    $s$<p><strong>Enhance Hospital-Wide Operations &amp; Performance.</strong> Michael Hill, MD and Associates&apos; team were engaged to perform a broad-scale, multi-year ED, inpatient, and perioperative hospital redesign with front-line staff. The engagement introduced innovative technology systems to increase hospital operations transparency and accountability across all service lines.</p>$s$,
    $r$<p>With the MHMDAA operational framework in place, hospital performance improved across the enterprise. Time from ED patient arrival to exam-by-physician was <strong>cut in half</strong>. Ambulance diversion was virtually eliminated and ED patients that left before treatment decreased by <strong>94%</strong> &mdash; all while ED visits per month <strong>increased by 33%</strong>.</p><p>Hospital length-of-stay decreased by <strong>nearly a full day</strong>, increasing functional bed capacity by <strong>40 beds</strong>. Perioperative room utilization increased by <strong>28%</strong>. Patient experience scores rose from the <strong>19th percentile to top quartile</strong> nationally.</p>$r$,
    '[{"value":"94%","label":"Reduction in Left-Before-Treatment"},{"value":"+33%","label":"Monthly ED Volume Growth"},{"value":"40 beds","label":"Functional Capacity Gained"},{"value":"Top Quartile","label":"Patient Experience Scores"}]'::text,
    E'Low patient satisfaction, ambulance diversion, low reimbursement, and uncompensated care \u2014 systemic dysfunction spanning ED, inpatient, and perioperative services.',
    'Multi-year broad-scale redesign of ED, inpatient, and perioperative operations with front-line staff, supported by innovative technology systems for transparency and accountability.',
    '[{"value":"94%","label":"Fewer Left Untreated"},{"value":"+33%","label":"Monthly ED Volume"},{"value":"Top Q","label":"Patient Experience"}]'::text,
    'regional', 'operations-redesign', 'provider', NULL, NULL, NULL, NULL, NULL,
    '2021-04-01'
  ),
  -- ─── Provider: SRM ───
  (
    'Faith-Based Non-Profit Community Hospital',
    'srm',
    'LOS Reduction & Transfer Capacity Optimization',
    E'~278-Bed Integrated Community Hospital \u00B7 Regional Care Network Affiliate \u00B7 Transfer-Dependent Network Hospital',
    $c$<p>California Faith-Based Community Hospital (the Hospital), a 278-bed non-profit, faith-based institution, faced persistently high inpatient length-of-stay, ED crowding, and was routinely forced to deny external transfer requests due to an ongoing lack of functional bed capacity &mdash; directly impacting revenue and community access to care.</p>$c$,
    $s$<p><strong>Hospital Collaborative Care.</strong> MHMDAA worked directly with leadership to introduce a comprehensive, integrated approach to reduce inpatient LOS. This included working closely with hospitalists and specialists to create standardized communication strategies between all staff, physicians, and their patients &mdash; aligning discharge planning with clinical decision-making from day one of each admission.</p>$s$,
    $r$<p>The Hospital was able to reduce inpatient length-of-stay by <strong>0.75 days</strong>. The number of hospitalist discharge orders placed by <strong>9 AM</strong> increased dramatically from <strong>11% to 54%+</strong> &mdash; a transformative shift in morning throughput culture. The number of accepted external incoming transfers increased by <strong>25%</strong>, directly recovering previously lost revenue and expanding community access to the facility.</p>$r$,
    '[{"value":"0.75 days","label":"IP LOS Reduction"},{"value":"11% \u2192 54%+","label":"AM Discharge Orders by 9 AM"},{"value":"+25%","label":"External Transfers Accepted"}]'::text,
    'High inpatient LOS, ED crowding, and an inability to accept external transfers due to persistent capacity constraints in this 278-bed faith-based institution.',
    E'Hospital Collaborative Care engagement \u2014 comprehensive integrated approach with hospitalists and specialists to drive AM discharge culture and restore transfer capacity.',
    '[{"value":"0.75d","label":"IP LOS Reduction"},{"value":"54%+","label":"AM Discharge Orders"},{"value":"+25%","label":"Transfers Accepted"}]'::text,
    'california', 'los-reduction', 'provider', NULL, NULL, NULL, NULL, NULL,
    '2022-02-01'
  )
) AS v(title, slug, subtitle, description, challenge, solution, results, metrics, card_challenge, card_solution, card_metrics, region, service_type, kind, payor_dispute_type, payor_representation, payor_scope, payor_case_ref, payor_counsel, published_at)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  description = EXCLUDED.description,
  challenge = EXCLUDED.challenge,
  solution = EXCLUDED.solution,
  results = EXCLUDED.results,
  metrics = EXCLUDED.metrics,
  card_challenge = EXCLUDED.card_challenge,
  card_solution = EXCLUDED.card_solution,
  card_metrics = EXCLUDED.card_metrics,
  region = EXCLUDED.region,
  service_type = EXCLUDED.service_type,
  kind = EXCLUDED.kind,
  payor_dispute_type = EXCLUDED.payor_dispute_type,
  payor_representation = EXCLUDED.payor_representation,
  payor_scope = EXCLUDED.payor_scope,
  payor_case_ref = EXCLUDED.payor_case_ref,
  payor_counsel = EXCLUDED.payor_counsel,
  is_published = EXCLUDED.is_published,
  published_at = EXCLUDED.published_at;

-- Payor cases (detail body lives in payor_scope; challenge/solution/results null)
WITH aid AS (
  SELECT COALESCE(
    (SELECT u.id FROM auth.users u
     INNER JOIN public.profiles p ON p.id = u.id
     WHERE u.email IN ('content@mhmdaa.com', 'content1@mhmdaa.com')
     ORDER BY u.created_at
     LIMIT 1),
    (SELECT id FROM public.profiles ORDER BY created_at LIMIT 1)
  ) AS author_id
)
INSERT INTO public.case_studies (
  author_id, title, slug, subtitle, description, challenge, solution, results, metrics,
  region, service_type, kind, payor_dispute_type, payor_representation, payor_scope,
  payor_case_ref, payor_counsel, is_published, published_at
)
SELECT
  (SELECT author_id FROM aid),
  v.title, v.slug, v.subtitle, NULL, NULL, NULL, NULL,
  v.metrics::jsonb, NULL, NULL, 'payor', v.payor_dispute_type,
  v.payor_representation, v.payor_scope, v.payor_case_ref, v.payor_counsel,
  true, v.published_at::timestamptz
FROM (VALUES
  (
    E'EMTALA Medical Necessity & Post-Stabilization Admissions',
    'payor-emtala-medical-necessity-aaa',
    NULL,
    '[{"value":"950","label":"Admissions Reviewed"},{"value":"3-Day","label":"Arbitration"},{"value":"AAA","label":"Forum"}]'::text,
    'medical-necessity',
    E'Payor \u2014 National Healthcare Law Group',
    'Recommended defense strategy methodologies, coordinated with additional experts, reviewed 950 hospital admissions, managed parallel reviews with other providers, prepared detailed expert report, provided deposition, participated in three-day arbitration testimony, and submitted rebuttal.',
    E'AAA Coordinated Arbitration Proceeding \u2014 California Medical Necessity Review',
    'National Healthcare Law Group',
    '2022-01-01'
  ),
  (
    'Claims Reimbursement Appropriateness Dispute',
    'payor-claims-reimbursement-aaa',
    NULL,
    '[{"value":"138","label":"Claims Reviewed"},{"value":"AAA","label":"Forum"},{"value":"Payor","label":"Represented"}]'::text,
    'payment-dispute',
    E'Payor \u2014 Regional Healthcare Law Firm',
    'Reviewed and summarized 138 claims, submitted expert report, provided arbitration testimony, and prepared rebuttal statements.',
    E'AAA Arbitration Proceeding \u2014 Claims Reimbursement Review',
    'Regional Healthcare Law Firm',
    '2021-01-01'
  ),
  (
    'Medical Necessity, NICU Care Levels & Claims Reimbursement',
    'payor-nicu-medical-necessity-aaa',
    NULL,
    '[{"value":"230","label":"Patients Reviewed"},{"value":"AAA","label":"Forum"},{"value":"Payor","label":"Represented"}]'::text,
    'medical-necessity',
    E'Payor \u2014 Southwest Regional Law Firm',
    'Prepared summaries for 230 patients across medical necessity of admissions, NICU care levels, outpatient procedures, and claims reimbursement. Generated expert report and participated in deposition.',
    E'AAA Arbitration Proceeding \u2014 NICU Medical Necessity Review',
    'Southwest Regional Law Firm',
    '2022-01-01'
  ),
  (
    'ED Claim Authorizations, DRG Downgrades & Excessive Charge Denials',
    'payor-ed-drg-ahla',
    NULL,
    '[{"value":"172","label":"Claims Reviewed"},{"value":"AHLA","label":"Forum"},{"value":"Payor","label":"Represented"}]'::text,
    'payment-dispute',
    E'Payor \u2014 National Healthcare Law Group',
    'Reviewed ED claim authorizations, facility level down codes, DRG downgrades, pre-payment reviews, and excessive charge denials. Provided expert reports and summaries for 172 claims.',
    E'AHLA Arbitration Proceeding \u2014 ED Authorization & DRG Review',
    'National Healthcare Law Group',
    '2023-01-01'
  ),
  (
    E'High-Dollar Outlier Claim Adjudication \u2014 Managed Medicaid',
    'payor-outlier-ahca',
    NULL,
    '[{"value":"Outlier","label":"Claim Complexity"},{"value":"AHCA","label":"Forum"},{"value":"Payor","label":"Represented"}]'::text,
    'medical-necessity',
    E'Payor \u2014 Florida Healthcare Law Firm',
    E'Prepared expert report, detailed line-item itemized bill analysis, clinical claim summary, and rebuttal on the appropriateness of the payor\u2019s adjudication of a high-dollar, high-clinical complexity outlier claim.',
    E'AHCA Administrative Proceeding \u2014 Outlier Claim Adjudication',
    'Florida Healthcare Law Firm',
    '2026-01-01'
  ),
  (
    E'Corporate Integrity Agreement \u2014 IRO Review',
    'payor-cia-iro',
    'Independent Review Organization Physician UM Leadership',
    '[{"value":"IRO","label":"Designation"},{"value":"Nationwide","label":"Scope"},{"value":"UM Lead","label":"Role"}]'::text,
    'utilization-mgmt',
    'Payor (Corporate Integrity Agreement)',
    E'Led Physician Utilization Management review for a major payor\u2019s Corporate Integrity Agreement as part of the Independent Review Organization. Work included claims review, physician arrangements, quality reviews, provider and Chief Medical Officer training, and investigations.',
    E'Corporate Integrity Agreement \u2014 Independent Review Organization (IRO)',
    'Independent Review Organization',
    '2020-01-01'
  ),
  (
    E'No-Fault Auto Insurance \u2014 Emergency Medical Condition Determination',
    'payor-florida-no-fault-emc',
    NULL,
    '[{"value":"No-Fault","label":"Statute"},{"value":"EMC","label":"Determination"},{"value":"Auto Carrier","label":"Represented"}]'::text,
    'auto-insurance',
    'Florida Auto Insurance Carrier',
    E'Evaluated qualification of routine post-motor vehicle accident follow-up medical care under Emergency Medical Condition determination based on Florida \u201CNo Fault\u201D auto insurance statute. Prepared expert report and case claim summary.',
    E'Florida Auto Insurance \u2014 No Fault Statute Expert Review',
    'Florida Auto Insurance Carrier (In-House Counsel)',
    '2023-06-01'
  )
) AS v(title, slug, subtitle, metrics, payor_dispute_type, payor_representation, payor_scope, payor_case_ref, payor_counsel, published_at)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  metrics = EXCLUDED.metrics,
  payor_dispute_type = EXCLUDED.payor_dispute_type,
  payor_representation = EXCLUDED.payor_representation,
  payor_scope = EXCLUDED.payor_scope,
  payor_case_ref = EXCLUDED.payor_case_ref,
  payor_counsel = EXCLUDED.payor_counsel,
  is_published = EXCLUDED.is_published,
  published_at = EXCLUDED.published_at,
  kind = EXCLUDED.kind;
