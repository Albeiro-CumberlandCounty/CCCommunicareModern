# GitHub Pages stakeholder review preview

## Objective

Give CommuniCare reviewers a public preview **before** moving the production custom domain. This is a manual, controlled preview of approved commits on `main`. It does not imply content acceptance or launch readiness.

## Preview URL

After GitHub Pages is enabled and the workflow first succeeds:

https://albeiro-cumberlandcounty.github.io/CCCommunicareModern/

The production site remains at https://cccommunicare.org until the M17 cutover is separately authorized. **Do not set a custom domain or change DNS for this preview.**

## One-time repository settings (manual administrator action)

1. Open **Settings > Pages** for this GitHub repository.
2. Set **Build and deployment > Source** to **GitHub Actions**.
3. Keep **Custom domain** empty. Do not point it at `cccommunicare.org`.
4. In **Actions**, ensure the repository permits the GitHub-owned checkout, setup-node and Pages actions used here.
5. Confirm the site is public-information-only. This preview URL is public, not password-protected.

## Publish or refresh a preview

1. Merge only the changes you want Sarah to review into `main`.
2. Open **Actions > Publish review preview to GitHub Pages > Run workflow**, selecting `main`.
3. Wait for the build and deployment to succeed; copy the preview URL from the deployment job.
4. Test internal navigation, logo, stylesheet, mobile layout, referral placeholder, and policy pages.
5. Share the preview as **work in progress**, requesting specific feedback through the established ITS process.
6. Repeat the manually triggered workflow when approved review changes are ready. Merging a PR alone does not automatically update the preview.

## Safety and indexing

This workflow rewrites generated internal asset and navigation paths to the project subpath. It replaces generated production canonical URLs with preview URLs, adds `noindex, nofollow` to built HTML, and writes a disallowing `robots.txt`. Search engine exclusion is a request, **not an access-control measure**. Anyone with the URL can view public pages; do not upload confidential content, client records, draft sensitive documents, or secrets.

The script modifies only the generated `dist/` artifact during preview deployment. `astro.config.mjs` and the production domain configuration remain unchanged.

## Boundaries

- This is a stakeholder-review preview, not an M16 UAT signoff or M17 cutover.
- GitHub Pages provides one Pages site per repository, so the preview occupies this repository's Pages deployment until production cutover.
- Secure referral collection remains in Laserfiche Forms and is not implemented by this workflow.
- A GitHub repository admin must make the one-time Pages settings changes; the connector used to author this workflow cannot edit those settings.
