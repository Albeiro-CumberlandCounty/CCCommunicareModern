# M4 Navigation Specification

## Primary navigation

| Label | URL | Launch status |
|---|---|---|
| Home | `/` | Launch |
| About | `/about/` | Launch |
| Programs & Services | `/programs-services/` | Launch |
| Get Help | `/referrals/` | Launch |
| Resources | `/resources/` | Launch |
| Contact | `/contact/` | Launch |

Header CTA:

| Label | Destination |
|---|---|
| Start a Referral | `/referrals/#start-referral` |

## Programs & Services navigation model

Do not create a giant hover dropdown modeled after the legacy site.

Preferred implementation:

- primary nav item links to `/programs-services/`
- on desktop, an accessible compact submenu may be used if it remains manageable
- on mobile, program links appear inside the expanded Programs & Services section
- the Programs & Services landing page remains the authoritative complete list

Confirmed detail pages:

- Juvenile Assessment Center
- FACT
- Intensive Services Network
- Reclaiming Futures
- PEACE Project Domestic Violence Intervention Program
- Tailored Care Management Services
- Community Based Capacity Restoration Program
- Skill Building Classes

Pending confirmation and hidden from production navigation until M3 approval:

- Basic Outpatient Counseling
- ASAP Adolescent
- ASAP Adult
- Mental Health Services

## Footer navigation

Recommended footer links:

- About
- Programs & Services
- Referrals
- Resources
- Contact
- HIPAA
- Privacy
- Facebook
- LinkedIn

Conditional links:

- Impact, once approved content exists
- Get Involved, once current volunteer/donation content is approved
- Accessibility, if ITS publishes a formal accessibility statement

## Content pages deliberately excluded from navigation

Do not create navigation entries for:

- Board of Directors
- staff directory
- legacy training files
- CGPP
- TMAC
- Home-Based Outpatient Counseling
- old Juvenile Crime Prevention page
- substance abuse prevention
- legacy sitemap page

## Referral integration

The `/referrals/` page should contain context before the Laserfiche integration.

Recommended order:

1. page title and brief explanation
2. urgent/crisis guidance once approved
3. call/email referral options
4. Start a Referral section
5. embedded Laserfiche form when available
6. secure direct-link fallback
7. brief privacy/security explanation without exposing implementation details

The Laserfiche iframe/form must not replace the page's semantic heading/navigation structure.
