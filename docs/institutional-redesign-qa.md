# Modern Institutional redesign: implementation and acceptance

**Approved scope:** User-approved Modern Institutional design brief, November 2026 (source: user-supplied implementation brief). Replaces the visual direction of Concept A without changing approved CommuniCare narratives. Changes are on three stacked review PRs; nothing is merged or deployed by creating them.

## Work packages

1. **A, typography and spacing:** final loaded style layer `src/styles/institutional-foundation.css` overrides Concept A's 112.5% root font and oversize H1s. Desktop body is 16px, H1 capped at 48px, standard desktop sections 40–56px, with 16px minimum mobile body sizing, responsive gutters, and existing focus/nav behavior.
2. **B, homepage widgets:** approved-style decorative SVGs, real HTML quick-access widgets, exact nine service titles in `src/data/program-directory.ts` rendered via reusable `ServiceGrid.astro`. The only linked service card is Outpatient Behavioral Health Services. Impact metrics remain unpublished until verified and approved.
3. **C, interior layouts:** semantic About story panels, same shared nine-item service grid on Programs, readable outpatient sections, improved Contact/Referrals/Resources utility areas, and unchanged legal notice placeholders.

## Approved graphic implementation

Two lightweight original SVG renderings of the approved aesthetic are in `public/brand/institutional-abstract.svg` and `public/brand/connected-services.svg`. These are **vector interpretations** of the two user-approved generated design examples, not pixel-identical reuploads. They contain no words or actual locations, staff, clients, or facilities. They are decorative and presented with empty alternative text. The nine-cell layout idea from Graphic 3 is implemented without its building imagery.

## Editorial provenance

Sarah's supplied `Website Redesign 10.docx` and `CommuniCare Homepage sequence.docx` govern the organizational and outpatient prose. The rebuild adds HTML wrappers, navigational widget labels, CSS, and decorative assets; no user-supplied narrative sentences have intentionally been rewritten. Review the rendered public copy against those two source documents before merge. Header/navigation and short widget labels are existing functional UI terms.

## Security, privacy and publication boundaries

- No online intake or new public form is introduced. Laserfiche remains the planned secure workflow.
- The existing HIPAA and website privacy notices remain unapproved placeholders and block production readiness.
- No actual outcome metrics, additional program claims, photographs, partner logos, new testimonials, or donation links have been invented.
- Changes are repository PRs only. Manual GitHub Pages preview deployment, main-branch merge, and any production DNS work are separate approval steps.

## Acceptance checklist

| Check | Target | Status |
|---|---|---|
| CI TypeScript/Astro | `npm run check` | Verify GitHub Actions PR result |
| Static site build | `npm run build` | Verify GitHub Actions PR result |
| Static local links/landmarks | `npm run test:site` | Verify GitHub Actions PR result |
| Desktop | 1440 and 1280px, typography maximums and no oversized whitespace | Not manually tested |
| Tablet | 768px, grid and menu | Not manually tested |
| Mobile | 390 and 320px, correct 1-column grid, no horizontal scroll | Not manually tested |
| Reflow | 200% and 400% zoom without content loss | Not manually tested |
| Keyboard | Tab, Shift+Tab, Enter, Escape mobile menu, focus visibility | Not manually tested |
| Assistive tech | NVDA/JAWS/VoiceOver as available | Not manually tested |
| Automated WCAG scan | axe-core against rendered pages | Not yet executed |
| Contrast and target sizes | WCAG 2.2 AA color/interactive target review | Not manually tested |
| Copy exactness | Compare source DOCX with rendered site, punctuation included | Pending editorial verification |

## Merge order

Merge phase A first, retarget phase B to `main`, merge B after review, then retarget and merge phase C after review and quality checks. Do not delete upstream feature branches while their dependent PRs remain open. Rerun the **manual** GitHub Pages review-preview workflow only after authorized merges.

## Remaining CommuniCare approvals

Detailed program descriptions and eligibility; impact metrics with reporting periods, sources, denominators and approval; secure referral form URL and workflow; HIPAA notice and website privacy policy; program contacts/hours; any funding attribution, partner names and photos.

**Do not claim WCAG/ADA certification, clinical-content verification, or production readiness based on static build success alone.**
