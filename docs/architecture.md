# Architecture Decision: Static Astro Site on GitHub Pages

## Status

Approved baseline.

## Decision

Build the CommuniCare website with Astro and deploy static output to GitHub Pages.

## Why

Review of the legacy repository shows that the publicly used website is predominantly informational content. The base modernization does not require IIS, .NET, SQL Server, server-side rendering, or a database.

## Approved decisions

- D-01: Use new repository `CCCommunicareModern`.
- D-02: Repository visibility is public.
- D-03: Use Astro with static output.
- D-04: Use `https://cccommunicare.org` as the canonical domain. Redirect `www` to the apex domain.
- D-05: Use Google Analytics 4.
- D-06: Publish public contact details only. Do not include a contact form in the initial release.
- D-07: Sarah Hallock is the CommuniCare content owner and submits requests through the ITS helpdesk.
- D-08: Accessibility acceptance is handled by ITS, with Albeiro Florez and Adriana reviewing WCAG/ADA concerns.
- D-09: Albeiro Florez is the primary publishing approver in GitHub.
- D-10: Use Cumberland County Laserfiche Forms for secure referral intake. The public Astro site will link to or embed the Laserfiche form after the approved referral form is rebuilt and validated.

## Contact information approved for the new site

- Address: 109 Bradford Ave, Fayetteville, NC 28301
- Phone: 910-829-9017
- Email: shallock@cccommunicare.org
- Facebook: https://www.facebook.com/CCCommuniCareFayettevilleNC/
- LinkedIn: https://www.linkedin.com/company/cumberland-county-communicare-inc-/

## Architecture boundary

GitHub Pages is appropriate for the approved public static website. Any later requirement involving confidential data, authentication, trusted server-side execution, protected storage, or secrets must be reviewed as a separate architecture change.


## Referral architecture

The public CommuniCare website remains a static Astro site hosted on GitHub Pages.

Sensitive referral intake will be handled by Cumberland County Laserfiche Forms, not by GitHub Pages.

Planned integration:

- public Get Help / Referrals page remains part of the Astro site
- a Start a Referral action will open or embed the approved Laserfiche Form
- referral data is submitted directly to Laserfiche and is not stored in the GitHub Pages site
- Laserfiche handles the secured form workflow, storage, permissions, and downstream processing
- the public form URL and embed code will be supplied after the current referral form is rebuilt and approved

The embedded experience should visually fit the CommuniCare site where possible. Final implementation must also preserve accessibility, responsive behavior, keyboard usability, and a direct-link fallback if the embedded form does not work well in a given browser or assistive technology.

Workflow notifications should avoid placing sensitive referral data or attachments directly into ordinary email. Prefer a notification that a referral was received with an authenticated/secure link to the Laserfiche record or task, subject to the final Laserfiche workflow design.
