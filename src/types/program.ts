/** M9 content contract. Only content approved by CommuniCare may be published. */
export interface ProgramContent {
  /** Public program title approved by the content owner. */
  title: string;
  /** Stable URL path, e.g. /programs-services/example/. */
  canonicalPath: `/programs-services/${string}/`;
  /** Approved short summary used in page metadata and introduction. */
  summary: string;
  /** Optional public audience/eligibility information, once approved. */
  audience?: string;
  /** Optional approved services; each string is a plain-language item. */
  services?: string[];
  /** Optional approved eligibility criteria. */
  eligibility?: string;
  /** Optional approved public contact details, not personal case information. */
  contact?: {
    label?: string;
    phone?: string;
    email?: string;
  };
  /** Optional approved referral instructions. No sensitive data is submitted here. */
  referralInstructions?: string;
  /** Whether the common secure-referral link should be displayed. */
  showReferralLink?: boolean;
  /** Optional approved resource links. */
  resources?: Array<{ label: string; href: string }>;
  /** Optional approved program-specific funding acknowledgment. */
  fundingAttribution?: {
    text: string;
    logoSrc?: string;
    logoAlt?: string;
  };
}
