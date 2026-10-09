# M2 Legacy Site Content Inventory

## Scope

This inventory covers the legacy repository `Albeiro-CumberlandCounty/CCCommunicareWebsite2026` and supports migration planning only. It does not approve legacy content for publication on the new site.

The live site could not be reliably crawled from the analysis environment during this review, so "current navigation" below means pages referenced by the current `index.aspx` navigation in the legacy repository. CommuniCare content approval remains required before migration.

## Repository summary

| Item | Count |
|---|---:|
| Total files | 143 |
| ASPX pages | 65 |
| JPG images | 39 |
| GIF images | 4 |
| PDF documents | 12 |
| PPS presentations | 3 |
| VB.NET files | 6 |
| ASCX controls | 3 |
| CSS files | 3 |
| Config files | 2 |
| DLL/PDB/refresh artifacts | 3 |
| HTML files | 1 |
| PHP files | 1 |
| Markdown files | 1 |
| Obvious dated/backup/refresh files | 26 |

Top-level distribution:

| Location | Files |
|---|---:|
| Repository root | 74 |
| images | 44 |
| _BAK | 12 |
| usercontrols | 7 |
| Bin | 3 |
| style | 3 |

A complete file-level inventory is in `docs/legacy-file-inventory.csv`.

## Current-navigation migration candidates

These pages are linked from the current `index.aspx` navigation or footer and should be treated as the first content set to review with CommuniCare. Candidate does not mean the text is current.

| Legacy page | Visible heading / purpose | Preliminary M2 classification |
|---|---|---|
| index.aspx | Welcome to Communicare | Current-navigation candidate |
| program_referrals.aspx | Program Referrals | Current-navigation candidate; external referral links require review |
| involved.aspx | Get Involved | Current-navigation candidate |
| qualifications.aspx | Capability & Qualifications | Current-navigation candidate |
| programoverview.aspx | Program Overview | Current-navigation candidate |
| mission.aspx | Mission and Capabilities | Current-navigation candidate |
| what_do.aspx | What We Do | Current-navigation candidate |
| programs.aspx | What Our Programs Do | Current-navigation candidate |
| collaboration.aspx | Collaboration Partners | Current-navigation candidate |
| jac.aspx | Juvenile Assessment Center | Current-navigation candidate |
| fact.aspx | FACT | Current-navigation candidate |
| oc_basic.aspx | Basic Outpatient Counseling | Current-navigation candidate |
| oc_home.aspx | Home Based Outpatient Counseling | Current-navigation candidate |
| gangprev.aspx | CGPP | Current-navigation candidate |
| asap_adolescent.aspx | ASAP Adolescent | Current-navigation candidate |
| asap_adult.aspx | ASAP Adult | Current-navigation candidate |
| resources.aspx | Resources | Current-navigation candidate |
| t_files.aspx | Training Files | Current-navigation candidate; many old file links require review |
| f_links.aspx | Family Resources | Current-navigation candidate; external links require review |
| board.aspx | Board | Current-navigation candidate |
| staff.aspx | Our Staff | Current-navigation candidate |
| contact.aspx | Contact | Current-navigation candidate; visible page is effectively static |
| hipaa.aspx | HIPAA Compliance | Current-navigation candidate; content owner/legal review required |
| terms.aspx | Terms of Use | Current-navigation candidate; content owner/legal review required |
| sitemap.aspx | Sitemap | Current-navigation candidate; will be rebuilt from new IA |

The navigation also links `company_overview.pdf`, which must be reviewed for currency and accessibility before migration.

## Additional undated pages requiring CommuniCare review

These files exist outside the obvious backup/datestamped set but are not linked from the current `index.aspx` navigation. Some appear in older navigation variants or legacy content.

| Legacy page | Visible heading / purpose | Preliminary M2 classification |
|---|---|---|
| asap_majors.aspx | ASAP Majors | Review, older navigation variant |
| asap_prev.aspx | ASAP Prevention | Review, older navigation variant |
| boc.aspx | Basic Outpatient Counseling | Review, possible duplicate/older page |
| comment_form.aspx | Public Comments | Orphaned legacy code; Cumberland County Public Health content |
| donate.aspx | Donate Today | Review; current index links directly to Network for Good instead |
| faith_works.aspx | Faith Works | Review, older navigation variant |
| guard.aspx | Neighborhood Guard | Review, older/legacy program |
| hboc.aspx | HBOC | Review, possible older duplicate of home-based counseling |
| intervention.aspx | Intervention Programs | Review, older navigation variant |
| isn.aspx | Intensive Services Network | Review, older navigation variant |
| juv_center.aspx | Juvenile Assessment Center | Review, possible older duplicate of jac.aspx |
| juv_crime.aspx | Juvenile Crime Prevention | Review, older navigation variant |
| links.aspx | Key Sites / Links | Review, older resource page |
| online_referral.aspx | Online Referral System | Orphaned legacy sensitive form; do not migrate into static site |
| overview.aspx | Company Overview | Review, possible duplicate of PDF/other overview content |
| r_futures.aspx | Reclaiming Futures | Review, older navigation variant |
| services.aspx | Clinical Services | Review, not linked from current index navigation |
| tmac.aspx | T-Mac & Youth Leadership | Review, older navigation variant |
| training.aspx | Training & Technical | Review, not linked from current index navigation |
| treatment.aspx | Treatment Programs | Review, not linked from current index navigation |

## Dated and backup pages

The following should not be treated as independent new-site pages. They are historical reference unless CommuniCare identifies unique content that must be preserved.

- `_BAK/*`
- `fact__02-5-2015.aspx`
- `gangprev__08-24-2012.aspx`
- `mission__01-20-2015.aspx`
- `mission__1-20-2015.aspx`
- `mission__7-19-2016.aspx`
- `programs__08-24-2012.aspx`
- `qualifications__08-24-2012.aspx`
- `qualifications__7-19-2016.aspx`
- `resources__08-24-2012.aspx`
- `tmac__refresh.aspx`
- `index-old.html`
- `usercontrols/announcement__1-20-2015.ascx` and its VB.NET code-behind

## Dynamic/server-side marker findings

### Announcement control

Most legacy pages contain the `communicare:announcement` ASP.NET control. The underlying `usercontrols/announcement.ascx` is effectively static announcement markup. It does not justify retaining ASP.NET. In Astro it should become an ordinary reusable component or content block.

### Contact page

`contact.aspx` references VB.NET code-behind and registers the old comment-form control, but the server-side form markup is inside an ASP.NET comment. The visible contact page is address/phone/map information plus the announcement control. The initial Astro site should use the approved public contact details and no form.

### comment_form.aspx

This page contains active ASP.NET controls, legacy Telerik references, reCAPTCHA integration, and code-behind. Its content identifies it as a Cumberland County Department of Public Health public-comment page rather than an active CommuniCare page. No current-navigation link to this page was found. Do not migrate this implementation.

### online_referral.aspx

This page contains an old FrontPage form handler using `_vti_bin/shtml.dll` and collects sensitive referral information. It is not linked from the current `index.aspx` navigation. A dated gang-prevention page references it, but the current `gangprev.aspx` does not. It is outside the approved static-site architecture and must not be recreated on GitHub Pages.

## Documents and downloadable files

The repository contains 15 PDF/PPS documents including one backup copy. Every document must be reviewed for currency, need, and accessibility before migration.

Notable items include:

- `company_overview.pdf`
- `family_handbook.pdf`
- `Fees_2007.pdf`
- `problem_statement.pdf`
- `isn.pdf`
- `Intensive Services Network Graphic Depiction.pdf`
- `contemporary_look.pdf`
- `effective_supervision.pdf`
- `prevent_drug_use.pdf`
- `supervisor_leader.pdf`
- three legacy PPS training presentations
- `CommuniCare, Collaboration, and You (no SFP)-2.pdf`
- backup company overview PDF under `_BAK`

`Fees_2007.pdf` is specifically flagged because its filename indicates 2007-era content.

## Media findings

The repository contains 43 image files: 39 JPG and 4 GIF. Many are structural pieces of the old fixed-width design, including navigation images, row slices, and footer slices. These should not be migrated merely because they exist.

Potentially meaningful content images, logos, or program graphics should be reviewed individually. The new Astro site should use responsive images and text-based navigation rather than legacy image navigation.

## Link findings requiring remediation

The legacy pages contain many HTTP and historical external links. Examples requiring validation include old Network for Good donation links, old government/program domains, and references to legacy CommuniCare paths that are not present in the repository.

Obvious legacy/local references that require a disposition include:

- `referrals.aspx` referenced from `program_referrals.aspx`, but not present in this repository
- old `host2.arcdesignnc.com` referral URLs
- old `/~juvenile/`, `/~juvenilep/`, and `/~faithw/` referral URLs
- `ngp1.htm` references
- old MHT and HTML training files referenced from content but not present in this repository
- historical `http://www.cccommunicare.org/...` document URLs
- old program email addresses embedded in legacy pages

Do not automatically migrate any of these links. They require CommuniCare review and/or replacement.

## Preliminary migration rule

For M2, files are only being classified. Final Keep / Rewrite / Merge / Archive / Remove decisions belong to M3 after CommuniCare review.

The working default is:

1. Current-navigation page: review for migration.
2. Undated but not current-nav page: review with CommuniCare.
3. Dated/backup copy: archive/reference only unless unique approved content exists.
4. Legacy server code: do not migrate implementation.
5. Sensitive or server-dependent workflow: exclude from static site and require separate architecture review.
6. Document/media: migrate only when approved, current, and accessibility requirements are addressed.
