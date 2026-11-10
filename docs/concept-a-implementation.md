# Concept A design implementation

This implementation follows the user-approved **community-first editorial** design. Source text from CommuniCare is preserved; changes are presentational only. No external UI framework, stock imagery, collection form, or live-domain change is introduced.

## Design principles

- Primary colors continue to use existing CommuniCare brand CSS variables; layout emphasizes readable text and restrained accents.
- Desktop: maximum 78rem outer grid, reading width 46rem; natural column balance and visible actions.
- Mobile: one column by 38rem, accessible menu behavior retained; target 320 CSS px width.
- Design system: native Astro components and CSS, with system font fallback; no new runtime dependencies.
- True clickable cards use anchors and keyboard-visible focus; programs without approved details remain noninteractive.
- The original Sarah Word documents remain source authority. Do not paraphrase or fabricate content to fill cards.
- Use images only after provenance, rights, release and meaningful alt text are approved.
- The public preview remains an **unapproved, public work in progress**. The domain and DNS remain untouched.

## PR sequence

1. **Design foundation**: global typography, buttons, spacing, navigation, footer.
2. **Home and About**: hierarchy, content presentation, responsive editorial rhythm; no text changes.
3. **Programs and other pages**: navigable outpatient service card, program detail hierarchy, accessible contact/referral/resources styling, and page consistency.

## Required review, not automatic compliance certification

Test 1440, 1280, 768, 390 and 320 CSS px widths; 200 and 400 percent zoom; keyboard Tab/Shift+Tab, Escape mobile navigation, visible focus, headings/landmarks, text contrast, reduced motion, and screen-reader checks. Run `npm run check` and `npm run build`. Confirm exact public copy against Sarah's supplied source documents. Review that sensitive referral data remains outside the static GitHub Pages site.

Approval of this design direction does not authorize production cutover or make unfinished privacy and HIPAA notices publication-ready.
