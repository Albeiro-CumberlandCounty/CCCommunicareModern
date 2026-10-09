# M2 Status

| Task | Status | Notes |
|---|---|---|
| M2.1 Inventory all repository files | Complete | 143 files inventoried in `legacy-file-inventory.csv`. |
| M2.2 Inventory active navigation links | Complete for repository baseline | Based on the current `index.aspx` navigation. |
| M2.3 Identify duplicates, dated copies, backups, orphan candidates | Complete initial pass | 26 obvious dated/backup items plus exact duplicate hash findings documented. |
| M2.4 Identify static content pages | Complete initial pass | Most current-navigation pages are effectively static apart from the announcement control. |
| M2.5 Identify pages with dynamic/server markers | Complete | Contact, comment form, online referral, announcement control documented. |
| M2.6 Determine whether dynamic pages are actually linked | Complete initial pass | `comment_form.aspx` and `online_referral.aspx` are not in current `index.aspx` navigation. |
| M2.7 Inventory documents/media | Complete | 15 PDF/PPS documents and 43 images identified. |
| M2.8 Check links | Partial/initial complete | Repo-local links scanned; one missing target found. Historical external links require M3 content validation. |
| M2.9 Capture URLs to preserve/redirect | Initial inventory complete | 55 non-backup root ASPX routes are in `url-inventory.csv`; final URL decisions belong to M4. |
| M2.10 Record headings/content purpose | Initial inventory complete | Headings/purpose recorded for the 55 root ASPX pages. Detailed content rewrite decisions belong to M3. |

## M2 conclusion

The repository supports the static-site architecture decision. The active public-facing implementation is predominantly static content. Legacy server-side code should be treated as historical reference only, not as code to port.

## Next milestone

M3 is CommuniCare content validation: Sarah Hallock reviews the inventory and decides Keep, Rewrite, Merge, Archive, or Remove for each page/content group before full migration.
