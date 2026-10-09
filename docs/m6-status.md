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
| Global production header/navigation/footer | M7 | Current M6 shell is intentionally minimal |
| GitHub Pages workflow | M14 | Not added in M6 |
| GA4 | M12 / implementation item | Measurement ID still pending |
| Final content | M3/M8-M11 | Content-owner approval required |

## Validation

Run locally:

```bash
npm install
npm run check
npm run build
npm run dev
```

The code scaffold is ready for local/runtime validation. Dependency installation could not be executed in the isolated authoring environment because registry.npmjs.org is unavailable there. Run the commands above locally after pulling the branch; commit the generated npm lockfile in a follow-up PR if needed.
