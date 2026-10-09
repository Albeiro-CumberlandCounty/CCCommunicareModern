# AGENTS.md

## Purpose

This repository contains the modern CommuniCare public website.

## Architecture rules

- Use Astro.
- Produce static output suitable for GitHub Pages.
- Use TypeScript where scripting is needed.
- Prefer native Astro components and semantic HTML.
- Use plain CSS and CSS custom properties for the design system.
- Keep client-side JavaScript minimal and progressively enhanced.
- Do not add React, Vue, Svelte, or another client framework unless an approved requirement clearly needs it.
- Do not add a backend, API server, database, authentication system, or server runtime.
- Do not place secrets, credentials, private certificates, internal-only configuration, or protected data in the repository.
- Do not collect sensitive personal information in the static site.

## Accessibility rules

Target WCAG 2.2 Level AA.

- Prefer native semantic HTML before ARIA.
- All interactive elements must be keyboard accessible.
- Provide a visible focus indicator.
- Maintain logical heading hierarchy and landmark structure.
- Provide meaningful alt text for informative images.
- Mark decorative images appropriately.
- Do not rely on color alone to convey meaning.
- Support browser zoom and narrow-width reflow.
- Respect `prefers-reduced-motion`.
- Use descriptive link text.
- Do not create auto-playing media.
- Test affected pages with automated accessibility tools and manual keyboard review.

## Legacy migration rules

The legacy repository is `Albeiro-CumberlandCounty/CCCommunicareWebsite2026`.

- Treat it as reference-only.
- Do not copy ASP.NET Web Forms architecture.
- Do not copy VB.NET code-behind.
- Do not copy legacy Telerik Web UI code.
- Do not copy FrontPage `_vti_bin` form handlers.
- Do not migrate orphaned forms merely because they exist in the repository.
- Migrate only approved public content.
- If content appears stale, conflicting, or uncertain, flag it for review rather than guessing.

## Content governance

- Sarah Hallock, Executive Director, is the CommuniCare content owner and requestor.
- CommuniCare change requests are submitted through Cumberland County ITS helpdesk tickets.
- Cumberland County ITS implements and publishes changes.
- Albeiro Florez is the primary GitHub publishing approver.
- Albeiro Florez and Adriana perform accessibility review within ITS.

## Domain and analytics

- Canonical domain: `https://cccommunicare.org`
- `https://www.cccommunicare.org` should redirect to the canonical domain.
- Analytics platform: Google Analytics 4.
- Do not add a GA4 Measurement ID until the approved property/stream exists.

## Definition of done

Before completing a code task:

- Build succeeds.
- No unrelated files are modified.
- No secrets or private data are introduced.
- Links added by the change are valid.
- Accessibility requirements are met for affected content/components.
- Responsive behavior is verified.
- Documentation is updated when architecture, build, deployment, or governance changes.
- Summarize files changed, checks run, and any remaining human decisions.
