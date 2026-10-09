# CCCommunicareModern

Modern, accessible static website for Cumberland County CommuniCare.

## Project baseline

- Framework: Astro
- Rendering: static output only
- Hosting: GitHub Pages
- Primary domain: https://cccommunicare.org
- Secondary domain: https://www.cccommunicare.org redirects to the primary domain
- Accessibility target: WCAG 2.2 Level AA
- Analytics: Google Analytics 4
- Backend/database: none in the base project
- Public contact form: not included in the initial release

## Governance

CommuniCare content requests are submitted by Sarah Hallock, Executive Director, through Cumberland County ITS helpdesk tickets. Cumberland County ITS implements and publishes approved changes.

Publishing approval is primarily handled by Albeiro Florez. Accessibility review is handled within Cumberland County ITS by Albeiro Florez and Adriana.

## Legacy source

Legacy source repository:

`Albeiro-CumberlandCounty/CCCommunicareWebsite2026`

The legacy repository is reference-only. Do not copy legacy ASP.NET Web Forms, VB.NET, Telerik Web UI, FrontPage handlers, server configuration, or other obsolete implementation code into this project.

## Development workflow

1. Create a branch from `main`.
2. Make a focused change.
3. Run local build and quality checks.
4. Open a pull request.
5. Review content, accessibility, and visual impact.
6. Merge approved changes to `main`.
7. GitHub Actions publishes the site to GitHub Pages.

The Astro project scaffold will be added during the static-site foundation milestone.
