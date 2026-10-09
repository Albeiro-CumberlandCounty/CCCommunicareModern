# M2 Link Audit

## Scope

This is the repository-level link audit for the legacy CommuniCare source. It separates repo-local links from historical fully-qualified external links.

## Repo-local link check

All non-backup ASPX pages in the repository were scanned for relative `href` targets.

Result:

- One unresolved repo-local target was found: `program_referrals.aspx` references `referrals.aspx`, which does not exist in the repository.
- The old referral page also contains legacy host/path references such as `host2.arcdesignnc.com`, `/~juvenile/`, `/~juvenilep/`, and `/~faithw/`. These are not suitable for automatic migration.

## Historical fully-qualified links requiring human review

The legacy content contains many old HTTP links and external program/resource URLs. These should not be copied automatically. Examples include:

- Network for Good donation URLs
- old Cumberland County/community partner domains
- old state/federal program URLs
- old `http://www.cccommunicare.org/...` paths
- historical MHT/HTML training-file URLs
- old program-specific email addresses

## Current decision

External-link validation remains a content-review item for M3. The new site should only publish external links that are still relevant and approved by CommuniCare.

## Migration rule

Do not preserve a link just because it appears in the legacy HTML. For each external or referral link, confirm the current destination and business purpose before it is added to the Astro site.
