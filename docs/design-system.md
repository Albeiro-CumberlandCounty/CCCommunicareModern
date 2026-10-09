# M5 Design System Foundation

## Status

Working design baseline for the modern CommuniCare site.

M3 remains open for content decisions. M5 may define reusable visual and interaction patterns without inventing program content or unapproved brand details.

## Design principles

The site should feel:

- calm and trustworthy
- modern without feeling corporate or flashy
- easy to scan
- welcoming to youth, adults, families, providers, and court/community partners
- highly legible
- consistent across desktop, tablet, and mobile
- accessible by default rather than remediated later

## Brand rule

Do not infer final brand colors or fonts from the legacy site.

Until CommuniCare provides or approves a current brand palette/logo treatment:

- use semantic CSS custom properties rather than hard-coded brand colors throughout components
- maintain accessible contrast
- avoid external web-font dependencies
- use a system font stack
- keep the design easy to re-theme later

## Typography

Default system stack:

`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Guidelines:

- body text target: 1rem minimum
- comfortable line height: approximately 1.5 to 1.7
- avoid long all-caps text
- headings must reflect document structure, not visual size alone
- do not use font size below a readable baseline for important content
- line length should generally remain within a comfortable reading width

Suggested type scale:

- display / hero: fluid, approximately 2.25rem to 3.5rem
- h1: fluid, approximately 2rem to 3rem
- h2: fluid, approximately 1.5rem to 2.25rem
- h3: approximately 1.25rem to 1.5rem
- body: 1rem to 1.125rem
- small/supporting text: 0.875rem minimum where appropriate

Use `clamp()` for large responsive headings rather than abrupt breakpoint jumps.

## Layout

Recommended layout primitives:

- full-width site shell
- centered content container
- readable article width for long-form content
- responsive CSS Grid/Flexbox
- no fixed pixel page widths
- no horizontal scrolling at standard zoom/reflow

Suggested container widths:

- wide content: approximately 80rem max
- standard page content: approximately 72rem max
- reading/prose column: approximately 48rem to 56rem max

## Spacing scale

Use a small consistent spacing scale through CSS custom properties.

Suggested scale:

- xs: 0.25rem
- sm: 0.5rem
- md: 1rem
- lg: 1.5rem
- xl: 2rem
- 2xl: 3rem
- 3xl: 4rem
- 4xl: 6rem

Prefer spacing tokens over arbitrary one-off margins.

## Semantic design tokens

The implementation should expose semantic tokens such as:

- `--color-bg`
- `--color-surface`
- `--color-text`
- `--color-text-muted`
- `--color-border`
- `--color-primary`
- `--color-primary-contrast`
- `--color-accent`
- `--color-focus`
- `--color-success`
- `--color-warning`
- `--color-danger`
- `--radius-sm`
- `--radius-md`
- `--radius-lg`
- `--shadow-sm`
- `--shadow-md`
- spacing and container tokens

Final color values remain subject to CommuniCare brand review.

## Contrast requirements

At minimum:

- normal text: WCAG AA contrast
- large text: WCAG AA contrast
- interactive controls and meaningful non-text UI boundaries: sufficient non-text contrast
- focus indicators must clearly contrast with both the component and surrounding background

Do not use low-contrast gray text for essential content.

## Buttons and links

Primary CTA examples:

- Start a Referral
- Call CommuniCare
- View Programs & Services

Rules:

- buttons represent actions
- links represent navigation
- do not style ordinary links so subtly that users cannot identify them
- preserve visible hover and focus states
- minimum interactive target sizing should support WCAG 2.2 target-size expectations
- do not rely on color alone to indicate state
- external-link treatment should be consistent

## Component foundation

M5 should define visual behavior for these reusable components before M7 implementation:

### Header

- clear CommuniCare identity
- primary navigation
- Start a Referral CTA
- mobile menu trigger
- visible focus states
- no hover-only dependency

### Footer

- contact information
- Explore links
- Get Help links
- policies
- social links

### Hero

- one clear H1
- concise supporting text
- no auto-rotating carousel
- one or two high-priority CTAs

### Program/service cards

Each card may contain:

- program name
- short approved summary
- audience/eligibility cue if approved
- meaningful detail link

Whole-card click targets should be implemented carefully so semantics remain understandable to keyboard and screen-reader users.

### Alerts / announcements

Use only for genuinely important current content.

Provide:

- visible heading/label
- adequate contrast
- no color-only meaning
- no auto-dismiss requirement for essential information

### Breadcrumbs

- semantic breadcrumb navigation
- current page exposed correctly
- visual separators treated as decorative

### Contact blocks

Use real link protocols:

- `tel:`
- `mailto:`

Do not expose personal/staff information beyond approved public contacts.

### Data / impact widgets

The architecture supports future:

- number/statistic cards
- trend charts
- category charts
- tables
- year-over-year comparisons

Every chart or visual statistic must have an accessible text equivalent, data table, or sufficiently complete textual summary.

Do not make public-facing impact widgets depend on GA4 unless CommuniCare specifically asks to publish website-traffic metrics.

### Laserfiche referral embed

The host page should provide:

- a descriptive heading
- context/instructions before the embed
- accessible iframe title if an iframe is used
- responsive container
- direct secure-link fallback
- no sensitive data handling in Astro/GitHub Pages

Styling inside a cross-origin Laserfiche iframe must be configured in Laserfiche itself. The Astro wrapper should visually coordinate with that theme.

## Images and photography

Preferred visual direction:

- authentic community/service imagery where CommuniCare has rights and consent
- avoid generic medical stock imagery when possible
- avoid text baked into images
- informative images require meaningful alt text
- decorative images use empty alt text
- logos use appropriate accessible naming

## Icons

Use icons sparingly.

- icons must not be the only way an action is identified when text is needed
- decorative icons should be hidden from assistive technology
- avoid icon libraries that introduce large client-side dependencies solely for a few symbols

## Motion

Default to restrained motion.

- respect `prefers-reduced-motion`
- no autoplaying carousels
- no parallax dependency
- no flashing/strobing content
- animation must not be required to understand content

## Responsive baseline

Design mobile-first.

Key checks:

- approximately 320 CSS px viewport width
- 200% zoom
- 400% zoom/reflow
- touch and keyboard interaction
- long program names
- long email addresses
- embedded Laserfiche content
- charts/data cards when Impact is implemented

## Visual acceptance

Before code is treated as complete:

- visual hierarchy is clear
- content does not overlap or clip
- interactive states are visible
- mobile and desktop layouts are coherent
- no horizontal page scrolling for normal content
- brand choices are approved rather than inferred
