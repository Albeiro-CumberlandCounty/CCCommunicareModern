# M3 Content Validation Working Plan

## Purpose

M3 determines what legacy content should actually appear on the modern CommuniCare website.

The M2 inventory classified what exists. M3 now records final or provisional business dispositions using one of five actions:

- Keep
- Rewrite
- Merge
- Archive
- Remove

The working page-level matrix is in `docs/m3-content-disposition.csv`.

Sarah Hallock's 2026-10-09 business response is summarized in `docs/m3-sarah-business-response.md`.

## Known approved contact content

Use the following current contact information for the new site:

- Address: 109 Bradford Ave, Fayetteville, NC 28301
- Main phone: 910-829-9017
- Executive Director email: shallock@cccommunicare.org
- Referral email: referrals@cccommunicare.org
- Facebook: https://www.facebook.com/CCCommuniCareFayettevilleNC/
- LinkedIn: https://www.linkedin.com/company/cumberland-county-communicare-inc-/

Initial release contact model:

- public contact details only
- no general website contact form
- no collection of sensitive information through GitHub Pages
- referral instructions may include an approved downloadable form after the supplied form is reviewed

## Confirmed content decisions from Sarah

### Rewrite/update

- Juvenile Assessment Center
- FACT
- Intensive Services Network
- Reclaiming Futures
- Who We Are / foundational organization content
- HIPAA / Notice of Privacy Practices
- Terms / Privacy language

### Remove

- Home-Based Outpatient Counseling
- Cumberland Gang Prevention Partnership
- Teens Making A Change
- old Juvenile Crime Prevention page/content
- substance abuse prevention content
- Board of Directors listing
- old training presentations/documents

### Add

- PEACE Project Domestic Violence Intervention Program
- Tailored Care Management Services
- Community Based Capacity Restoration Program
- Skill Building Classes
- upgraded data/content areas
- social media content/integration

### Referral/Get Help

A public referral path is approved.

Use:

- referrals@cccommunicare.org
- 910-829-9017

The supplied referral form still needs to be reviewed before determining whether it is published as an accessible download or handled another way.

### Donations

CommuniCare does not currently have an approved online donation platform but wants one established.

Do not publish a donation button until a provider/account/link is approved.

### Staff directory

Do not plan on a maintained individual staff directory for launch.

Prefer stable role/service contacts instead.

Known role contact:

- Clinical Director: 910-222-6388

Exact MORES crisis service public number(s) still need to be supplied.

### JCPC funding attribution

Do not retain the old Juvenile Crime Prevention page.

Instead:

- identify which current programs are JCPC funded
- display the approved Cumberland County logo on those program pages
- include any required funding attribution language

## Remaining no-assumption questions

Sarah did not explicitly annotate the following items in her response, so ITS should not infer a decision:

- Basic Outpatient Counseling
- ASAP Adolescent
- ASAP Adult
- Mental health services

Substance abuse treatment remains in scope at the category level because Sarah specifically directed ITS to delete prevention, not treatment. Current program names/details still need validation.

## New content still needed

Current approved copy or source material is still needed for:

- rewritten JAC
- updated FACT
- rewritten ISN
- rewritten Reclaiming Futures
- PEACE Project Domestic Violence Intervention Program
- Tailored Care Management Services
- Community Based Capacity Restoration Program
- Skill Building Classes
- current organization/Who We Are content
- any data/statistics Sarah wants displayed

## Policy/privacy source

Sarah asked for the new Terms/Privacy language to mirror Cumberland County's approach.

The current County privacy policy source is recorded in `docs/privacy-source.md`.

The CommuniCare version must be adapted to the actual site, especially:

- static GitHub Pages hosting
- Google Analytics 4
- external links
- email/phone contact
- no sensitive-data web form in the initial release

## Current M3 status

| Task | Status |
|---|---|
| First-pass content disposition recommendations | Complete |
| Known contact/social details | Complete |
| Obvious Remove/Archive candidates | Complete |
| Overlapping page merge candidates | Complete |
| Sarah business response recorded | Complete |
| JAC / FACT / ISN / Reclaiming Futures direction | Complete |
| Removal decisions for HBOC / CGPP / TMAC / juvenile prevention / training | Complete |
| Referral contact method | Complete |
| Board publication decision | Complete |
| Staff-directory direction | Complete |
| New program names | Complete |
| Basic Outpatient / ASAP Adolescent / ASAP Adult / Mental Health confirmation | Pending |
| Referral form review | Complete; source copy contains populated personal information and must not be published as-is |
| JCPC-funded program list and County logo attribution | Pending |
| MORES crisis number(s) | Pending |
| Donation platform | Pending |
| Current HIPAA/privacy wording or approval | Pending |
| Detailed new/rewritten program content | Pending |
| Final page-by-page matrix | In progress |

## M3 completion criteria

M3 is complete when:

- every launch page has an approved purpose
- every legacy page has a final disposition
- every program/service intended for launch is confirmed current
- all public contact information is approved
- referral form handling is decided, with a clean current version approved for publication if a downloadable form is used
- JCPC funding attribution requirements are documented
- policy/privacy content has an approved source/reviewer
- new content requirements and owners are documented


## Referral form review outcome

The 5.23.23 referral form supplied by CommuniCare has been reviewed. It collects sensitive personal, clinical, court, insurance, and financial information and must not be implemented as a GitHub Pages web form.

The supplied copy also contains populated personal/referral information, so it must not be committed to the public repository or published as-is.

The public site may offer a clean accessible blank form after CommuniCare provides or approves a current version and ITS confirms the approved return/submission method. See `docs/referral-form-review.md`.
