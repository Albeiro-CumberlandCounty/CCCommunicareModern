# M9 Status: Program and Service Content

## Scope of foundation work (PR #19)

M9 is **in progress**. Content-owner validation under M3 remains open. This initial implementation supplies a reusable Astro page template and typed content fields without creating routes, publishing placeholders as program facts, or migrating legacy program text.

| M9 task | Status | Notes |
|---|---|---|
| M9.1 Reusable Program/Service template | Implemented; validation/review pending | `src/components/ProgramPage.astro`; not used by a public route yet |
| M9.2 Consistent content fields | Provisional technical baseline | `src/types/program.ts`; optional fields require business validation |
| M9.3 Migrate approved program pages | Blocked by M3 | Await approved program descriptions |
| M9.4 Rewrite approved content | Blocked by M3 | No facts or program claims invented |
| M9.5 Remove duplicated legacy markup | Foundation supports this | Uses shared `BaseLayout`; actual migration cleanup follows M9.3 |
| M9.6 Add approved related links | Pending M3 | Template supports links but none are published |
| M9.7 CommuniCare review/signoff | Pending | Requires Sarah's content approval |

## Template structure

One page title (H1), introductory approved summary, and optional sections for audience, services, eligibility, referral instructions, program contact, related resources, and program-specific funding attribution. Existing site header, footer, breadcrumbs, accessibility styles, and referral route are reused.

Only render sections populated with approved content. The template does not handle any sensitive referral data, does not provide a new form, and does not create public routes by itself. A program-specific funding logo must not be supplied unless the logo and attribution are approved.

## Confirmed names, not approved descriptions

Sarah identified Juvenile Assessment Center, FACT, Intensive Services Network, Reclaiming Futures, PEACE Project, Tailored Care Management, Community Based Capacity Restoration, and Skill Building Classes as current content areas for the site. Detailed copy, eligibility, contacts, and page-level approval remain pending. Basic Outpatient Counseling, ASAP Adolescent, ASAP Adult, and Mental Health Services require direct confirmation before publication.

## Release gate

Before any individual program detail page is added:
1. Receive approved current content and confirm public program name, summary, and route.
2. Confirm each optional field and link against the M3 business disposition.
3. Confirm JCPC-funded programs and any required County logo/attribution.
4. Build the route using this template, then run `npm run check` and `npm run build`.
5. Review content, keyboard navigation, headings, zoom/reflow, links, and responsive layout.
6. Obtain CommuniCare review/signoff before treating the page as final.

The existing Programs & Services landing page remains unchanged in this foundation PR.
