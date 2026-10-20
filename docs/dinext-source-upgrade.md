# Dinext source upgrade

Selected upstream release: [v15.123.0](https://github.com/frappe/erpnext/releases/tag/v15.123.0).
Immutable upstream commit: `e864addb6c367688d2b264f284c2dd9b9360a97d`.
Dinext integration line: `dinext/main/v15`.

The merge has two parents: the previous Dinext tip `3a305204e99040c41a7ed84f4ce79faf199ef84f` and the upstream tag. The reconciliation base is the current vendor snapshot `8a91afc515b47beaa654062344b08ab418d6b470`. That vendor ref is a rewritten snapshot and is not moved.

## Preserved company changes

Keep the existing Dinext CI profile (`.github/dinext-ci.json` mode `platform-smoke`), policy workflow, validation workflow and the README note that names `dinext/main/v15`. Upstream product workflows stay under `.github/imported-workflows-disabled/`. There is no product patch on top of the selected tag.

## Verification and activation

`dinext/vendor/v15` stays at the previous snapshot. This pull request does not change a running site, a Support or Prod manifest, or an existing tag.

The paired Frappe line is `dinext/upgrade/v15.123.0` in `Dinext-pro/dinext_platform`. The Dinext acceptance workflow installs this revision together with that branch on a fresh bench, migrates, builds and pings. Cypress acceptance then completes setup on that same disposable site and runs the upstream Frappe `cypress/integration/awesome_bar.js` spec. Those jobs are the isolated pair check. They are not a substitute for the repository validation workflow, and a skipped job is not acceptance.

Node 18 is sufficient for this Frappe 15 pair. A runtime cutover still requires a backup, the merged integration commit and a separate site migrate.

## Verification record

The result of this revision is the GitHub check runs on this pull request: `Validation / Repository checks`, `Validation / App unit tests`, `Compatibility acceptance` and `Cypress acceptance`. This file does not claim those runs passed before they complete.
