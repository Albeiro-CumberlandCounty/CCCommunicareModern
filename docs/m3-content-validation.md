# M3 Content Validation Working Plan

## Purpose

M3 determines what legacy content should actually appear on the modern CommuniCare website.

The M2 inventory classified what exists. M3 now requires business/content approval for each item using one of five actions:

- Keep
- Rewrite
- Merge
- Archive
- Remove

A recommended first-pass disposition for all 55 non-backup legacy ASPX pages is in `docs/m3-content-disposition.csv`.

## Known approved contact content

Use the following current contact information for the new site:

- Address: 109 Bradford Ave, Fayetteville, NC 28301
- Phone: 910-829-9017
- Email: shallock@cccommunicare.org
- Facebook: https://www.facebook.com/CCCommuniCareFayettevilleNC/
- LinkedIn: https://www.linkedin.com/company/cumberland-county-communicare-inc-/

Initial release contact method:

- public contact details only
- no website contact form
- no collection of sensitive information

## Strong recommendations already supported by the legacy review

### Remove from the modern site

- `comment_form.aspx`: orphaned Cumberland County Public Health ASP.NET/Telerik page
- `online_referral.aspx`: old sensitive FrontPage referral form
- hand-maintained `sitemap.aspx`: replace with generated Astro sitemap

### Archive, not publish by default

- all dated/backup copies
- 2008-era training-library content unless CommuniCare explicitly wants it retained
- older-navigation program pages whose programs are no longer active
- duplicate legacy pages such as older JAC/BOC/HBOC variants

### Rewrite before publication

The following current-navigation content is too old to copy as-is and should be fact-checked before launch:

- homepage
- mission/about content
- programs and services
- referrals/how-to-get-help information
- board
- staff
- resources
- HIPAA/privacy notice
- terms/privacy language

## Recommended new content groups

The legacy site has many overlapping pages. The modern site should consolidate content into a smaller, clearer structure.

### Home

Short current summary of CommuniCare, key services/programs, primary contact/get-help actions, and current announcements.

### About

Potential sections:

- Mission and vision
- Who we serve
- Capabilities
- Community partners
- Board, if CommuniCare wants the board listed publicly

### Programs and Services

Use a program/service overview plus individual detail pages only for programs that are confirmed active.

Potential legacy source pages include:

- Juvenile Assessment Center
- FACT
- Basic Outpatient Counseling
- Home-Based Outpatient Counseling
- CGPP
- ASAP Adolescent
- ASAP Adult
- other programs only if confirmed current

### Resources

Rebuild from current approved external resources. Do not copy the old link directory wholesale.

### Get Involved

Donation and volunteer information only if still current. Confirm the current donation platform before publishing a donation button.

### Contact

Use the approved current contact details listed above.

### Privacy / HIPAA / Terms

Require a current content-owner/legal/privacy review before publication. Legacy text should be treated as source material only.

## Information that must be confirmed with Sarah Hallock

The following are the highest-value questions. They do not require a 55-page review if Sarah can answer them at the program level.

1. Which programs and services are active today?
2. Which old program names should no longer appear anywhere on the site?
3. Does CommuniCare still want a public Program Referrals or Get Help page?
4. If yes, what are the current referral instructions and destinations?
5. Does CommuniCare still accept online donations? If yes, what is the approved current donation link/provider?
6. Should the website list the Board of Directors? If yes, provide the current approved roster.
7. Should the website list staff? If yes, provide the current approved roster and which contact details may be public.
8. Should the old public training files remain available? Recommended default: no.
9. Provide the current approved HIPAA/Notice of Privacy Practices text or confirm who will validate the existing notice.
10. Confirm whether the Terms/Privacy page should include any language beyond GA4 analytics, external-link disclaimer, and standard website privacy information.
11. Identify any new content/pages that are not represented in the legacy site.
12. Confirm whether Facebook and LinkedIn should appear in the header/footer, footer only, or Contact page only.

## Recommended review process

1. ITS provides Sarah the M3 content disposition matrix.
2. Sarah confirms the active program/service list first.
3. ITS updates all related legacy page dispositions based on those program decisions.
4. Sarah confirms current board/staff/referral/donation/policy information.
5. ITS marks each row in the matrix with a final action.
6. M3 is complete when all launch content has a final disposition and all required new content has an identified owner/source.

## Current M3 status

| Task | Status |
|---|---|
| Create first-pass content disposition recommendations | Complete |
| Record known current contact/social details | Complete |
| Identify obvious Remove/Archive candidates | Complete |
| Identify overlapping pages to merge | Complete |
| Identify content requiring current business validation | Complete |
| Sarah confirms active programs/services | Pending |
| Sarah confirms referral/donation details | Pending |
| Sarah confirms board/staff publication choices | Pending |
| Current HIPAA/privacy/terms approval | Pending |
| Final Keep/Rewrite/Merge/Archive/Remove matrix | Pending |
| New-content requirements confirmed | Pending |

## M3 completion criteria

M3 is complete when:

- every launch page has an approved purpose
- every legacy page has a final disposition
- every program/service intended for launch is confirmed current
- all public contact information is approved
- board/staff publishing choices are approved
- referral and donation links are approved or excluded
- policy/privacy content has an identified approved source
- new content requirements are documented
