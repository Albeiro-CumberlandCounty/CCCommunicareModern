# CommuniCare Website Modernization

Modern, accessible public-information website for Cumberland County CommuniCare, developed and supported by Cumberland County Innovation & Technology Services (ITS).

> **Project status:** In development. The modern site has **not** yet completed content approval, accessibility acceptance, deployment, and production cutover. The existing https://cccommunicare.org domain should not be treated as a live preview of this repository.

## Project at a glance

| Area | Baseline |
| --- | --- |
| Framework | Astro 7, TypeScript |
| Output | Static HTML, CSS, and minimal client-side JavaScript |
| Planned hosting | GitHub Pages using GitHub Actions |
| Canonical production domain | https://cccommunicare.org |
| Accessibility target | WCAG 2.2 Level AA |
| Analytics | Google Analytics 4, once configured and approved |
| Secure referrals | Separate Cumberland County Laserfiche Forms workflow, pending approved form and integration |
| Backend/database | None in the public static website |

## Development progress

- **M0-M2:** Architecture, repository baseline, and legacy inventory documented.
- **M3:** Content validation remains open while CommuniCare supplies final approvals.
- **M4-M7:** Information architecture, design system, site foundation, and reusable global components implemented as baselines.
- **M8:** Homepage implemented; final content and acceptance remain subject to review.
- **M9:** Reusable program-page template and typed content model implemented; individual program pages await approved content.
- **M10-M19:** Later content, SEO, quality automation, deployment, acceptance, cutover, operations, and legacy retirement milestones remain to be completed.

These summaries reflect implementation progress, not formal production signoff. For specific decisions and pending items, see the status files below.

## Project documentation

- [Project charter](docs/project-charter.md)
- [Architecture and approved decisions](docs/architecture.md)
- [Decision log](docs/open-decisions.md)
- [Information architecture](docs/information-architecture.md)
- [Design system](docs/design-system.md)
- [Accessibility requirements](docs/accessibility.md)
- [M3 content validation](docs/m3-content-validation.md)
- [M8 homepage status](docs/m8-status.md)
- [M9 program-page status](docs/m9-status.md)
- [Full GitHub Pages modernization project plan](docs/Cumberland_County_CommuniCare_GitHub_Pages_Modernization_Project_Plan.docx)

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
