/**
 * Approved community impact figures only.
 *
 * Sarah's source document includes seven proposed figures and asks whether they
 * should appear. None are published until CommuniCare confirms the claims,
 * reporting period, population/denominator, data source and approval.
 * Preserve each approved statement verbatim from the final approved copy.
 */
export interface ImpactMetric {
  /** Exact CommuniCare-approved statistic sentence, unchanged. */
  exactStatement: string;
  /** Visible featured numeric value, as approved. */
  value: string;
  /** Reporting period (e.g., fiscal-year date range), verified by CommuniCare. */
  reportingPeriod: string;
  /** Public-facing source/reference for the statistic. */
  source: string;
  /** The population and denominator/measurement method behind the claim. */
  methodology: string;
  /** Approved request or source reference, to trace who signed off. */
  approvalReference: string;
}

/** Intentionally empty: pending evidence and approval; no fabricated figures. */
export const impactMetrics: ImpactMetric[] = [];
