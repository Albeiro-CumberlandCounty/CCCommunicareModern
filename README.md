# CCCommunicareModern

Modern, accessible static website for Cumberland County CommuniCare.

## Project baseline

- Framework: Astro 7
- Rendering: static output only
- Hosting: GitHub Pages
- Primary domain: https://cccommunicare.org
- Secondary domain: https://www.cccommunicare.org redirects to the primary domain
- Accessibility target: WCAG 2.2 Level AA
- Analytics: Google Analytics 4
- Backend/database: none in the base project
- Secure referral intake: Cumberland County Laserfiche Forms
- Public contact form: not included in the initial release

## Governance

CommuniCare content requests are submitted by Sarah Hallock, Executive Director, through Cumberland County ITS helpdesk tickets. Cumberland County ITS implements and publishes approved changes.

Publishing approval is primarily handled by Albeiro Florez. Accessibility review is handled within Cumberland County ITS by Albeiro Florez and Adriana.

## Legacy source

Legacy source repository:

`Albeiro-CumberlandCounty/CCCommunicareWebsite2026`

The legacy repository is reference-only. Do not copy legacy ASP.NET Web Forms, VB.NET, Telerik Web UI, FrontPage handlers, server configuration, or other obsolete implementation code into this project.

## Local development

Install dependencies and start Astro:

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run check
npm run build
npm run preview
```

`node_modules/`, `.astro/`, and `dist/` are ignored. Commit the npm lockfile so future CI/deployment uses reproducible dependency versions.

## Development workflow

1. Create a branch from `main`.
2. Make a focused change.
3. Run local build and quality checks.
4. Open a pull request.
5. Review content, accessibility, and visual impact.
6. Merge approved changes to `main`.
7. GitHub Actions publishes the site to GitHub Pages after deployment automation is introduced in the deployment milestone.

## Current implementation status

M7 replaces the temporary M6 site shell with reusable production global components: the CommuniCare header, accessible primary/mobile navigation, Start a Referral CTA, footer, current-page navigation treatment, and reusable breadcrumbs.

M3 content validation remains open in parallel, so unapproved content is still represented by review placeholders rather than copied from the legacy site.
