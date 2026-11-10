# Sarah content intake and design implementation review

**Intake:** November 10, 2026  
**Source documents:** `Website Redesign 10.docx` (internal document title "Website Redesign 10.13.26") and `CommuniCare Homepage sequence.docx`, supplied by CommuniCare through ITS.  
**Status:** Draft implementation for owner review. Receipt does not constitute final claim validation or production signoff.

## Non-negotiable editorial rule

All *source-derived public prose* implemented in this PR is reproduced verbatim, with only HTML character escaping (e.g., `&amp;`) and visual segmentation. No source sentence is quietly reworded, rewritten, corrected, abbreviated, or presented as independently verified. Navigational labels, metadata, comments, and CSS classes are functional implementation text, not source-document quotations. Source Word files are not committed to the public repository.

## Creative and information architecture decisions

The **agency direction** is an accessible, restrained civic/nonprofit editorial design: strong typographic hero, blue/green existing brand palette, readable prose on warm white backgrounds, subtle gradients, prominent service pathways, generous whitespace, and small well-defined calls to action. No invented photos, testimonial quotes, impact metrics, affiliations, or badges. Any later imagery requires CommuniCare approval, usage rights, and accessible alternative text.

The implementation follows the six-section source sequence:
1. Welcome to CommuniCare
2. Community Impact Snapshot
3. Programs & Services
4. What Makes CommuniCare Different / accessible service pathways
5. Partnerships & Collaboration
6. Contact & Referrals

The two supplied files use **different proposed welcome phrasing**. The main hero uses the exact "Welcome to Cumberland County CommuniCare" and "Strengthening Individuals. Empowering Families. Building a Healthier Community." wording from `Website Redesign 10.docx`. The "Because Access to Care Shouldn't Depend on Your Ability to Pay." and corresponding paragraph from `CommuniCare Homepage sequence.docx` appear in a secondary hero panel. This is a presentation choice, not a change to either source's copy; Sarah should confirm the preferred hero emphasis.

## File and source mapping

| Implementation | Source | Status |
| --- | --- | --- |
| `src/pages/index.astro` welcome and partnerships prose | `Website Redesign 10.docx` | Verbatim, review pending |
| `src/pages/index.astro` access, impact introductory prose, programs prose | `CommuniCare Homepage sequence.docx` | Verbatim, review pending |
| `src/pages/about.astro` | `Website Redesign 10.docx` | Verbatim, review pending |
| `src/pages/programs-services.astro` programs overview | `CommuniCare Homepage sequence.docx` | Verbatim, review pending |
| `src/pages/programs-services/outpatient-behavioral-health.astro` | `CommuniCare Homepage sequence.docx` | Verbatim, clinical/service review pending |
| Eight service area names and approved public contact methods | `docs/m3-content-validation.md` | Previously confirmed baseline |
| Homepage impact statistics | `CommuniCare Homepage sequence.docx` | **Intentionally not published**; see below |

The Outpatient detail page uses the existing reusable M9 `ProgramPage` wrapper. A new content slot allows long-form approved source sections without duplicating site layout, breadcrumbs, navigation, or footer.

## Metrics held back

The homepage source says, "(I am not sure how you feel about adding this section) Explore the reach and impact of our work through the numbers below." Seven figures follow. The implementation retains the exact "CommuniCare at a Glance" introduction but **does not publish any numeric outcome claims** until Sarah confirms the section and supplies a defensible reporting period, population/denominator, data source, calculation definition, and permission to publish each figure.

This includes the reported youth counseling improvement, no-new-complaints, behavior reduction, completion, adult no-new-arrests, permanent housing placement, and emergency-department visit reduction figures. Do not invent denominators or time periods.

After approval, use accessible text-based statistic cards and a source/period note. Keep metrics editable without reworking layout. Do not animate numbers or rely on decorative charts alone.

## Content and factual review required before merging for public preview

- Confirm whether the two source files are final approved public copy or working drafts, and which welcome line should take prominence.
- Confirm Outpatient Behavioral Health Services is an approved current program page, and all listed services are currently offered, including psychological testing, medication management, and trauma/problem sexualized behavior treatment. M3 previously left some outpatient and mental-health program taxonomy unresolved.
- Verify the statement "For more than 28 years", the 1998 founding date, and current CARF accreditation scope/status. Preserve source wording pending owner correction.
- Confirm public meaning of "publicly funded programs" and access for eligible uninsured/underinsured people; avoid promising universal free care.
- Obtain approval and supporting sources for statistics before any numeric impact display.
- Confirm any adult housing supports, youth mentoring, crisis intervention, and substance-use treatment descriptions align with currently available services and scope.
- Determine which current programs receive JCPC funding, the approved County logo and exact required acknowledgment.
- Confirm MORES/crisis contact numbers and whether an urgent-help disclaimer/resource should be provided.
- Verify approved role contacts, program eligibility/referrals, hours, service locations, payer/payment arrangements, age ranges, and accessibility/language accommodation instructions.
- Obtain current approved HIPAA Notice of Privacy Practices and website privacy terms, with applicable legal review. Placeholder policies remain launch blockers.
- Complete and independently validate the Laserfiche secure referral form, privacy notices, retention/access arrangements, and direct-link/accessible fallback before replacing referral placeholder.
- For partnerships, obtain approved organization names/logos and use permissions before featuring partner marks.
- For photography, obtain approved imagery, rights/release confirmation, and meaningful alternative text.
- If donations are desired, approve the payment provider, public nonprofit/charitable solicitation disclosures as applicable, and donation link before adding a button.
- Confirm GA4 measurement configuration and published privacy disclosures before collecting analytics.

## QA and release controls

- New PR workflow runs `npm ci`, `npm run check`, and `npm run build`. Passing those is necessary, **not** WCAG/legal approval.
- Test all modified pages at desktop/mobile widths, 200% and 400% zoom, keyboard-only interaction, screen reader, reduced-motion settings, and contrast per `docs/accessibility.md`.
- Review the source copy *against both DOCX files* before merge; any corrections must come from CommuniCare in a tracked approval.
- Confirm no sensitive client records, names, referral examples, or private forms are committed. GitHub Pages is public.
- Keep production domain and DNS unchanged. The public Pages preview is review-only.
- This PR should remain unmerged until owner approval of source copy and clinical claims, or an explicit decision to publish clearly labelled draft content on the public preview.

## Still-needed content for complete site

1. **Each remaining confirmed program:** approved headline, exact program copy, services, who it serves, eligibility, locations, hours, contact, and referral directions (JAC, FACT, ISN, Reclaiming Futures, PEACE Project, Tailored Care Management, Community Based Capacity Restoration, Skill Building Classes).
2. **Other program decisions:** Basic Outpatient Counseling, ASAP Adolescent, ASAP Adult, Mental Health Services, and any other current programs; approved route/taxonomy decisions.
3. **About and partnerships:** confirmed mission/vision if separate from the submitted narrative, approved collaborator names, partner descriptions, logos, permissions, organization photography, and preferred call to action. Do not recreate a staff/board roster unless Sarah reverses prior removal decision.
4. **Impact and reports:** approved reporting year/range, denominators, definitions, sources and updated values for each statistic; annual reports or accessible publications if intended.
5. **Referral and contact:** approved online form URL/embedded experience and direct fallback, applicable user instructions, service phone numbers, crisis contacts, open hours and public service location details.
6. **Legal notices:** finalized HIPAA notice, website privacy terms, and any legally required charitable or funder attribution.
7. **Resources:** current approved family/community resource links and short descriptions, link owners and review dates; downloadable accessible documents only.
8. **Optional features:** approved donation provider and wording, social/photography/video content with usage rights, and GA4 consent/disclosure plan.

This checklist is a request list, not an assertion that every optional feature is required for launch.
