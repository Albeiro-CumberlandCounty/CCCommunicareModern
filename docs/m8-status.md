# M8 Status

M8 builds the production homepage experience on top of the M7 global shell.

M3 remains open in parallel. M8 uses only approved public contact details, confirmed service-area names, and already-approved site routes. It does not invent program descriptions or publish M3-pending programs.

| M8 task | Status | Notes |
|---|---|---|
| Homepage hero | Complete | Clear CommuniCare identity, primary referral CTA, Programs & Services CTA |
| Direct help panel | Complete | Approved main phone and referral email |
| Quick pathways | Complete | Programs & Services, Referrals, Resources |
| Confirmed service-area overview | Complete | Uses only the eight service areas already confirmed by the content owner |
| Contact CTA | Complete | Main phone and Contact page |
| Responsive homepage layout | Complete | Desktop, tablet, and narrow/mobile styles |
| Final program descriptions | Pending M3 | Homepage deliberately avoids unapproved program summaries |
| Impact/data section | Pending content | Reserved until approved data/source/period are supplied |
| Social-content module | Pending content | Footer social links remain available; homepage social feed is not added without an approved requirement |
| Local check/build/visual review | Pending validation | Validate on the County workstation before merge |

## Content safeguards

M8 does not publish:

- Basic Outpatient Counseling
- ASAP Adolescent
- ASAP Adult
- Mental Health Services

because those items remain pending direct confirmation.

M8 also does not publish MORES/crisis numbers, donation links, public impact statistics, or detailed program descriptions because those items still require approved content.

## Validation before merge

Run:

```bash
npm run check
npm run build
npm run dev
```

Review the homepage at desktop and narrow/mobile widths. Confirm referral/contact links, card navigation, service-list reflow, focus states, and absence of horizontal scrolling.
