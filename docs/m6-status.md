# M6 Status

M6 creates the first runnable Astro codebase for the CommuniCare modernization.

M3 remains open in parallel for content validation. M6 intentionally uses placeholders where final content is not yet approved.

| M6 task | Status | Notes |
|---|---|---|
| Astro scaffold | Complete | Astro 7, TypeScript, static output |
| Canonical site configuration | Complete | `https://cccommunicare.org` |
| Global layout | Complete baseline | Metadata, SVG favicon, skip link, semantic main |
| Brand design tokens | Complete baseline | Derived from current CommuniCare logo/social materials |
| Responsive global CSS | Complete baseline | Mobile-first, reduced motion, focus states |
| Logo asset | Complete | Current true-vector logo supplied by ITS |
| SVG favicon | Complete | Optimized tree emblem based on current CommuniCare mark |
| Route shells | Complete | Home, About, Programs & Services, Referrals, Resources, Contact, HIPAA, Privacy |
| Secure referral placeholder | Complete | Laserfiche embed/link arrives after approved form build |
| Global production header/navigation/footer | M7 | Implemented in M7 |
| GitHub Pages workflow | M14 | Not added in M6 |
| GA4 | M12 / implementation item | Measurement ID still pending |
| Final content | M3/M8-M11 | Content-owner approval required |

## Local validation

M6 was validated on the County workstation after PR #10 and the follow-up PR #11:

- `npm install` completed successfully using the Windows/system CA configuration
- `npm run check` completed with 0 errors, 0 warnings, and 0 hints
- `npm run build` completed successfully and generated all 8 current static routes
- `npm run dev` served the site successfully for browser review
- the corrected full CommuniCare logo rendered successfully
- `package-lock.json` was committed for reproducible installs

Node 22.16.0 produced an engine warning from `undici`, which prefers Node 22.19.0 or newer. The M6 build still completed successfully. Upgrade within the Node 22 line before CI/deployment work.
