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
| Local Astro check/build | Pending validation | Run on the County workstation before merge |
| Visual mobile/desktop review | Pending validation | Review the branch locally before merge |

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

## Validation before merge

Run:

```bash
npm run check
npm run build
npm run dev
```

Review at desktop and narrow/mobile widths. Confirm keyboard operation of the menu, visible focus, Escape-to-close behavior, active navigation state, header referral CTA, footer links, and absence of horizontal scrolling.
