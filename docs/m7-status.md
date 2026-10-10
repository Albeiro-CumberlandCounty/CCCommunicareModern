# M7 Status

M7 replaces the temporary M6 shell with reusable production global components.

M3 remains open in parallel for content validation. M7 does not publish unapproved programs or invent new service content.

| M7 task | Status | Notes |
|---|---|---|
| Production header | Complete | CommuniCare logo, primary navigation, referral CTA |
| Current navigation state | Complete | Exact current page uses `aria-current="page"`; section styling supports future child routes |
| Mobile navigation | Complete | Button exposes `aria-expanded`, supports Escape, closes after navigation, and has a no-JavaScript fallback |
| Footer | Complete | Contact, Explore, Get Help, policy, and approved social links |
| Breadcrumb component | Complete | Reusable semantic component for interior/detail pages |
| Progressive enhancement | Complete | Core navigation remains available when JavaScript is unavailable |
| WCAG-oriented interaction baseline | Complete | Keyboard focus, target sizing, semantic landmarks, reduced-motion support |
| Local Astro check/build | Complete | `npm run check` passed with 0 errors, 0 warnings, and 0 hints; production build completed successfully with 8 static pages |
| Visual mobile/desktop review | Complete | Desktop and narrow/mobile layouts reviewed; mobile menu open/close, Escape behavior, footer navigation, and refreshed section contrast verified |

## Navigation scope

The primary navigation remains intentionally small:

- Home
- About
- Programs & Services
- Get Help
- Resources
- Contact

The header CTA is `Start a Referral` and points to `/referrals/#start-referral`.

M7 does not add a large Programs & Services dropdown. The programs landing page remains the authoritative list, consistent with the M4 navigation decision.

## Footer scope

The footer publishes only currently approved public information:

- 109 Bradford Ave, Fayetteville, NC 28301
- 910-829-9017
- referrals@cccommunicare.org
- Facebook
- LinkedIn
- HIPAA / privacy links

MORES/crisis numbers are not included because the approved number(s) remain pending.

## Validation completed

Validation was completed on the County workstation:

- `npm run check`: 0 errors, 0 warnings, 0 hints
- `npm run build`: successful, 8 static pages generated
- desktop header/navigation reviewed
- narrow/mobile menu opened and closed correctly
- Escape closed the mobile menu correctly
- footer sections and navigation links were verified
- section/background contrast was adjusted and visually reviewed after refresh
- final production build passed after the styling change

M7 is ready for merge.
