# M4 Information Architecture

## Status

Working M4 baseline. M3 remains open in parallel while Sarah Hallock supplies the remaining program confirmations and updated content.

This architecture intentionally avoids treating any M3-pending program as approved for launch.

## IA goals

The modern site should:

- make it obvious what CommuniCare does
- make Get Help / Referrals one of the easiest actions to find
- group programs and services logically instead of reproducing the legacy site's overlapping navigation
- reduce duplicate pages
- keep sensitive referral intake in Laserfiche
- keep contact information easy to find
- support WCAG 2.2 AA navigation and reflow
- use clean, readable, stable URLs
- allow new programs and data/impact content to be added without restructuring the site

## Primary navigation

Recommended desktop/mobile primary navigation:

1. Home
2. About
3. Programs & Services
4. Get Help
5. Resources
6. Contact

A visually distinct "Start a Referral" action may also appear in the header. It links to the Get Help / Referrals page, not directly to an uncontextualized third-party form.

## Proposed sitemap

### Home

Canonical URL: `/`

Purpose:

- current short description of CommuniCare
- key program/service entry points
- prominent Get Help / Start a Referral action
- current announcements or important notices
- selected impact/data highlights when approved
- social links or selected social content only when approved

### About

Canonical URL: `/about/`

Purpose:

- Who We Are
- Mission and vision
- Who CommuniCare serves
- Current capabilities
- concise organizational background

Do not create public Board or staff-directory pages.

Optional child page:

- `/about/partners/` for current approved community partners if enough current content exists

### Programs & Services

Canonical URL: `/programs-services/`

Purpose:

- plain-language overview
- cards/list of current approved programs and services
- audience/eligibility summaries
- direct links to program detail pages
- JCPC funding attribution on applicable programs only

Confirmed program/service detail routes to prepare:

- `/programs-services/juvenile-assessment-center/`
- `/programs-services/fact/`
- `/programs-services/intensive-services-network/`
- `/programs-services/reclaiming-futures/`
- `/programs-services/peace-project/`
- `/programs-services/tailored-care-management/`
- `/programs-services/community-based-capacity-restoration/`
- `/programs-services/skill-building-classes/`

M3-pending routes that are reserved but must not be published until Sarah confirms the programs/services are current:

- `/programs-services/basic-outpatient-counseling/`
- `/programs-services/asap-adolescent/`
- `/programs-services/asap-adult/`
- `/programs-services/mental-health-services/`

Removed legacy programs must not appear as launch pages:

- Home-Based Outpatient Counseling
- Cumberland Gang Prevention Partnership
- Teens Making A Change
- old Juvenile Crime Prevention program page
- substance abuse prevention content

### Get Help / Referrals

Canonical URL: `/referrals/`

Purpose:

- explain how to get started
- main phone: 910-829-9017
- referral email: referrals@cccommunicare.org
- explain who can make a referral, once approved
- embed or link the approved Laserfiche Form
- provide a direct secure Laserfiche-link fallback
- provide crisis/MORES information once Sarah supplies the approved number(s)

The Astro page itself does not collect sensitive referral information.

Preferred CTA label:

`Start a Referral`

### Resources

Canonical URL: `/resources/`

Purpose:

- current approved community/family resources
- current external links only
- no wholesale migration of the legacy link directory
- no historical 2008 training library

### Data / Impact

Reserved URL: `/impact/`

Status: content pending.

Sarah requested upgraded data/content. This route is reserved so the site can display approved outcomes, service statistics, community impact, or annual data without forcing the content into the homepage.

Do not publish it until Sarah identifies the data and source/period.

### Get Involved

Reserved URL: `/get-involved/`

Status: content pending.

Potential content:

- volunteer information, if still offered
- donation information after a provider/account is selected

Do not publish an online donation action until an approved platform/link exists.

### Contact

Canonical URL: `/contact/`

Approved information:

- 109 Bradford Ave, Fayetteville, NC 28301
- 910-829-9017
- shallock@cccommunicare.org
- Facebook
- LinkedIn

Use stable service/role contacts instead of a full staff directory where appropriate.

Social links should appear on Contact and in the site footer. They do not need to occupy primary navigation.

### HIPAA / Notice of Privacy Practices

Canonical URL: `/hipaa/`

Status: rewrite/update pending current approved content.

### Privacy / Terms

Canonical URL: `/privacy/`

Status: rewrite pending final approved language.

Use Cumberland County's privacy approach as a model, adapted to CommuniCare's actual static-site, GA4, external-link, email, and Laserfiche-referral architecture.

## Header structure

Recommended header:

- CommuniCare identity/logo
- primary navigation
- Start a Referral CTA
- mobile menu control at narrow widths

Do not place program-specific phone numbers, staff listings, social icons, or large utility menus in the primary header.

## Footer structure

Recommended footer groups:

### CommuniCare

- short organization identifier
- address
- main phone
- general/public email as approved

### Explore

- About
- Programs & Services
- Resources
- Contact

### Get Help

- Referrals
- main phone
- crisis/MORES link or number once approved

### Policies

- HIPAA
- Privacy
- optional Accessibility page if ITS later chooses to publish a formal statement

### Social

- Facebook
- LinkedIn

Do not place a Cumberland County logo globally merely because some programs are JCPC funded. County logo/funding attribution belongs on the specific approved program pages unless CommuniCare/County directs otherwise.

## Breadcrumbs

Use breadcrumbs on interior detail pages.

Examples:

- Home > Programs & Services > Juvenile Assessment Center
- Home > Programs & Services > PEACE Project
- Home > Resources

Breadcrumbs are not necessary on Home.

## URL conventions

- lowercase
- words separated with hyphens
- human-readable nouns
- no `.aspx`
- no dates in normal page URLs
- trailing slash canonical style
- no technology/framework names in URLs
- avoid abbreviations in URLs unless the abbreviation is the public program identity

Examples:

- good: `/programs-services/juvenile-assessment-center/`
- avoid: `/jac.aspx`
- good: `/referrals/`
- avoid: `/program_referrals.aspx`

## Navigation behavior and accessibility

The global navigation must:

- use semantic `nav` and list markup
- be fully keyboard operable
- expose current-page state
- have visible focus indicators
- avoid hover-only menus
- provide a skip link
- keep mobile menu state programmatically exposed
- work at 200% and 400% zoom/reflow
- not require precise pointer movement
- use meaningful link labels rather than generic "Learn More" where context is insufficient

## Search

Do not add site search in the initial architecture.

The proposed site is small enough for clear navigation and direct program links. Search can be added later if content growth demonstrates a real need.

## M3 dependency rule

M4 may reserve a URL or navigation position before M3 content is complete, but a page must not be published solely because a route exists in this architecture.

M3 remains the authority for whether a specific program/content item is current and approved.
