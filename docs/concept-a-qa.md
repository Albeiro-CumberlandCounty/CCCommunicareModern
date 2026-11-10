# Concept A acceptance and QA record

## Scope

Applies to the approved community-first editorial redesign in PRs #26, #27, and #28. Source-derived CommuniCare text remains unchanged. The secure Laserfiche referral service, privacy notices, unapproved programs, outcome metrics and public-domain DNS are outside this redesign.

## Implemented

- Shared typography, line-height, spacing, focus outlines, buttons, responsive header/footer and brand tokens
- Homepage and About editorial layout: hierarchy, space, prose presentation, CTAs and mobile fallbacks
- Native `ServiceCard.astro`: links only where a real public route exists; labels without approved detail pages are not fake links
- Program template reading layout, contact/referrals/resources placeholder treatments, responsive cards
- Dependency-free `scripts/check-generated-site.mjs` checking one H1 per page, language, main/skip links, local routes/assets, in-page fragment references
- Existing PR CI runs `npm ci`, `npm run check`, `npm run build`, and the generated-site check

## Automated evidence

PR #26 GitHub Actions workflow run `42902041706` completed successfully before this note.
PR #28 GitHub Actions workflow run `42902671277` completed successfully before this note.

Later commits require a fresh workflow run to verify the final head SHA. Automated build and static checks do not establish WCAG conformance, browser accessibility, legal compliance or production readiness.

## Manual review matrix (NOT RUN)

| Item | Verification | Status |
| --- | --- | --- |
| Desktop layout | 1440 and 1280 CSS px screenshots; headline wrapping, column balance | NOT RUN |
| Tablet layout | 768 CSS px, header/menu, program grids | NOT RUN |
| Mobile layout | 390 and 320 CSS px, no horizontal scroll/obscured controls | NOT RUN |
| Reflow | 200% and 400% browser zoom, no content overlap or loss | NOT RUN |
| Keyboard | Tab/Shift+Tab/Enter/Space, visible focus, Escape mobile menu | NOT RUN |
| Screen reader | NVDA/JAWS/VoiceOver as available, landmarks/headings/link names | NOT RUN |
| Automated accessibility | axe-core or equivalent against rendered pages, review all findings | NOT RUN |
| Contrast | Text, focus states, buttons and meaningful borders against WCAG 2.2 AA | NOT RUN |
| Reduced motion | prefers-reduced-motion enabled, navigation remains usable | NOT RUN |
| Content comparison | Compare exact supplied Sarah DOCX text to rendered site | NOT RUN |
| Visual QA | Check common browsers, desktop/mobile/print where relevant | NOT RUN |
| Referrals/privacy | Ensure placeholders are not mistaken for approved clinical intake/legal notices | NOT RUN |

## Approval and rollout

1. Merge PR #26; retarget PR #27 to `main`, then merge it after review.
2. Retarget PR #28 to `main`, run/verify CI and perform manual QA before merging.
3. The GitHub Pages preview is manually published from `main` only; run its preview workflow after review. This must not alter `cccommunicare.org` DNS or trigger a production cutover.
4. Seek CommuniCare content approval separately for claims, legal notices, final program pages, statistics and sensitive referral handling.

Do not claim ADA or WCAG certification from these checks.
