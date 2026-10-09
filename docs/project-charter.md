# Project Charter

## Project

CommuniCare Website Modernization

## Objective

Replace the legacy public website with a modern, responsive, accessible static website hosted through GitHub Pages.

## Client and support relationship

CommuniCare is a nonprofit organization supported by Cumberland County Innovation & Technology Services under an SLA.

## Base scope

The base website contains public information only and is expected to include approved pages for programs, services, resources, organizational information, contact/location information, public documents, and related content.

## Excluded from the base architecture

The following are not part of the initial static-site architecture unless separately approved:

- secure referral intake
- authentication
- protected uploads
- database-backed workflows
- server-side email processing
- online payments
- storage of PHI, PII, juvenile case information, court information, or other non-public data

## Roles

- CommuniCare content owner/requestor: Sarah Hallock, Executive Director
- Change-request channel: Cumberland County ITS helpdesk
- Implementation and publishing: Cumberland County ITS
- Primary GitHub publishing approver: Albeiro Florez
- Accessibility review: Albeiro Florez and Adriana within ITS

## Technical baseline

- Repository: `Albeiro-CumberlandCounty/CCCommunicareModern`
- Repository visibility: public
- Framework: Astro
- Output: static
- Hosting: GitHub Pages
- Canonical domain: `https://cccommunicare.org`
- Accessibility target: WCAG 2.2 Level AA
- Analytics: Google Analytics 4
- Backend/database: none

## Legacy reference

`Albeiro-CumberlandCounty/CCCommunicareWebsite2026` remains the reference source during migration. Legacy application code is not to be carried forward.
