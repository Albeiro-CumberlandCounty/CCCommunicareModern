# M5 Accessibility Standard

## Target

CommuniCare will target WCAG 2.2 Level AA.

Accessibility acceptance is owned by Cumberland County ITS. Albeiro Florez and Adriana perform the final review.

This document defines the implementation baseline. M13 will automate appropriate checks, and M15 will perform formal accessibility validation/remediation.

## Semantic structure

Every page should include:

- skip link to main content
- semantic header
- primary navigation
- exactly one primary page heading unless a justified exception exists
- logical heading order
- main landmark
- footer
- additional landmarks only when useful and uniquely labelled

Prefer native HTML elements before adding ARIA.

## Keyboard access

Everything interactive must be usable without a mouse.

Test:

- Tab
- Shift+Tab
- Enter
- Space where appropriate
- Escape for dismissible overlays/menus
- arrow-key behavior only where the chosen native/custom pattern requires it

Keyboard focus must never be trapped unintentionally.

## Focus

- visible focus indicators are mandatory
- do not globally remove outlines
- focus order must match the visual/logical reading order
- opening/closing menus must manage focus predictably
- anchored navigation should not hide focused content beneath a sticky header

## Navigation

- current-page state must be programmatically conveyed
- mobile menu button must expose expanded/collapsed state
- dropdown/submenu behavior must not depend on hover
- link names must make sense in context
- repeated navigation must remain consistent across pages

## Target size

Interactive controls should meet WCAG 2.2 AA target-size expectations or an allowed exception.

Design should generally exceed the minimum where practical, especially for:

- mobile navigation
- referral CTA
- phone/email actions
- social links
- small icon controls

## Color and contrast

- meet WCAG AA text contrast
- meaningful UI boundaries/states must have sufficient non-text contrast
- never communicate status only by color
- links in body text must remain identifiable without relying exclusively on hue where surrounding text makes that ambiguous

## Text and reflow

Pages must remain usable at:

- 200% browser zoom
- 400% zoom/reflow
- narrow mobile widths

Requirements:

- no loss of content
- no overlap
- no two-dimensional scrolling for ordinary page content
- allow text to wrap
- avoid fixed-height content boxes for variable text
- do not disable browser text resizing

Exceptions such as large data tables may use an accessible horizontal-scroll region when necessary.

## Images

For every image:

- informative image: concise meaningful alt text
- decorative image: empty alt attribute
- linked image: alternative text describes link purpose
- logos: accessible name identifies the organization
- complex graphics: provide equivalent explanation/data

Do not place essential paragraphs or labels inside images.

## Links

Avoid vague repeated labels such as:

- Click here
- Read more
- Learn more

when the accessible name does not identify the destination.

Preferred examples:

- Juvenile Assessment Center details
- View Tailored Care Management services
- Start a referral

## Forms

The Astro site does not directly collect sensitive referral data.

For the Laserfiche referral experience:

- every field requires an associated label
- required fields must be conveyed programmatically
- errors must be described in text
- error focus/summary behavior must be usable by keyboard
- instructions cannot rely solely on placeholder text
- validation cannot rely only on color
- the embed must have an accessible title
- provide a direct-link fallback
- test the actual deployed Laserfiche form, not only the Astro wrapper

## Tables

Use data tables only for genuinely tabular information.

- include table headers
- associate headers correctly
- include caption/introductory context when useful
- do not use tables for page layout

## Charts and Impact data

Visual charts must not be the sole source of information.

Each chart should include one or more of:

- accessible data table
- text summary of the key values/trend
- accessible SVG structure when practical

Do not rely only on:

- color
- hover tooltips
- visual position

to communicate required information.

## Documents

Any PDF or downloadable office document published on the site must be reviewed for accessibility.

At minimum:

- meaningful title
- logical reading order
- headings/structure
- tagged content where applicable
- table headers
- alt text for informative images
- usable links
- sufficient contrast

Do not migrate historical documents merely because they existed on the old site.

## Audio/video

If introduced later:

- captions for prerecorded video with meaningful audio
- transcript or equivalent where required
- no autoplay with sound
- controls must be keyboard accessible

## Motion and timing

- respect reduced-motion preferences
- no flashing content
- avoid time limits
- if a third-party workflow has session/time limits, disclose and test them

## Language and content

- set page/document language
- spell out unfamiliar acronyms on first use when appropriate
- use plain-language headings
- keep instructions direct
- avoid unexplained jargon where a public audience would not reasonably know it

## Third-party content

Third-party embeds do not receive an accessibility exemption merely because they are hosted elsewhere.

For Laserfiche and any future embedded service:

- validate keyboard access
- validate labels/errors
- validate zoom/reflow
- validate mobile behavior
- validate contrast/theme
- provide a fallback route when needed

## Manual acceptance checklist

For each major template and interactive component:

- keyboard-only review
- visible focus review
- heading/landmark review
- zoom/reflow review
- image alt review
- link-purpose review
- color/contrast review
- form error/label review where applicable

Before production launch, ITS should also spot-check representative pages with a screen reader.

## Automated checks

Later quality gates should include automated testing for:

- HTML/build errors
- broken internal links
- common accessibility violations
- Lighthouse/accessibility regressions where useful

Automated tools do not replace manual WCAG review.
