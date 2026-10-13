# Releases and deployment

## Everyday workflow

1. Work on `develop`. Ordinary Dependabot PRs target this branch.
2. Merge `develop` into `main` with a **merge commit**.
3. GitHub runs the quality checks, then semantic-release updates `package.json` and `CHANGELOG.md`, commits release assets, creates `vX.Y.Z`, and publishes a GitHub Release. Nothing is published to npm.
4. Vercel's existing Git integration deploys `main` automatically. Preview deployments remain available for other branches.
5. Merge `main` back into `develop` with a **merge commit** to synchronize the release version and changelog.

Do not squash or rebase merges between the two long-lived branches: preserving ancestry prevents already released commits from being analyzed again. Feature and Dependabot PRs into `develop` may be squashed with a Conventional Commit title. Use `chore: merge develop into main` and `chore(sync): merge main into develop` for synchronization PR titles. Do not bump the application version manually.

**Release and deployment are independent after a merge to main.** GitHub gates the release on quality checks; Vercel builds the production branch independently. A successful GitHub Release does not prove a successful deployment, and a failed release does not stop Vercel. Production may serve the merge commit before the release metadata commit exists. This standard flow needs no Vercel CLI, deployment token, custom deployment script, or promotion step. Require passing PR checks before merging to protect the production branch.

## Versioning

| Commit | Release |
| --- | --- |
| Breaking change (`!` or `BREAKING CHANGE`) | Major |
| `feat` | Minor |
| `fix`, `perf`, `refactor`, `chore`, `ci`, `build`, `test`, `revert` | Patch |
| `docs` alone or generated `chore(release)` | None |

The highest applicable change since the previous tag wins. Documentation-only merges can still trigger a Vercel build. The Conventional Commits preset is pinned to **9.3.1**, compatible with the existing generator; it handles `!` correctly and includes maintenance changes in release notes. Dependabot ignores preset **10.x** because it requires `conventional-changelog-writer` 9, while the stable `@semantic-release/release-notes-generator` 14.1.1 uses writer 8. Remove this constraint when adopting a compatible stable generator; writer 9 support is currently in the [generator's 15 beta releases](https://github.com/semantic-release/release-notes-generator/releases). `pnpm test:release` checks version rules and generated notes without publishing.

The release workflow loads full Git history and tags, runs after the shared CI checks, and prevents concurrent release jobs. Generated release commits omit `[skip ci]`, allowing synchronization PR checks to run; their scope is excluded from release analysis and the workflow skips release creation for them.

## GitHub and Vercel settings

- Keep `main` as the default GitHub branch and Vercel production branch. Use Node **24.x** on Vercel, `pnpm install --frozen-lockfile`, and `pnpm build`. The committed `packageManager` selects pnpm **12.11.2**.
- Keep Vercel's Git integration and automatic production deployment enabled. No GitHub Vercel credentials are needed.
- Protect `main` and `develop` with PRs and required quality, dependency-review, and PR-title checks. Keep merge commits enabled and disallow force pushes/deletion. Select check names from actual workflow runs.
- Allow the release identity to push version/changelog commits and `v*` tags. The workflow uses `GITHUB_TOKEN` by default. If branch/tag protections require a dedicated bypass identity, configure an appropriately scoped repository secret `RELEASE_TOKEN` for that identity. Do not enable a protection rule that prevents the release bot from updating its assets.
- Enable GitHub's dependency graph, Dependabot alerts, and security updates. Publish `.github/dependabot.yml` on `main` for its configuration to take effect. Security PRs target the default branch, so urgent fixes may go directly to `main`; merge them back into `develop`. [GitHub documentation](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customizing-dependabot-prs).

These are activation instructions; local implementation does not change remote settings. During planning on October 13, 2026, GitHub had no release workflow or main-branch protection, and Dependabot security updates were disabled. Detailed Vercel project access returned HTTP 403, so hosted settings still need confirmation.

## Dependabot and dependency checks

Weekly checks run Monday at 04:00 Europe/Zurich against `develop`. Version updates wait 3 days for patches, 7 for minors, and 14 for majors; Actions wait 7 days. Security updates are not delayed by these cooldowns. Related packages are grouped for minor/patch updates. Coupled Next/React, Tailwind, and semantic-release major migrations have dedicated groups; unrelated majors remain separate PRs. No automerge is configured. Node types stay on 24 and pnpm on 12.

Every PR runs formatting/lint, dead-code analysis, types, a production build, and the fast release tests. Dependency review blocks newly introduced high/critical vulnerabilities. It does not replace a full `pnpm audit --audit-level=high` or guarantee that an update cannot break behavior.

Keep `packageManager` and `engines.pnpm` on the same exact version. `pmOnFail: ignore` preserves a single-document lockfile while [the pnpm 12 dependency-graph issue](https://github.com/dependabot/dependabot-core/issues/15904) remains open. CI explicitly checks the pnpm version because this workaround disables pnpm's own manager selection. After publication, check that GitHub's dependency graph includes application dependencies; an empty graph does not mean zero vulnerabilities.

## Verification and recovery

For the first real release, confirm the GitHub jobs, generated version/changelog commit, tag target, and release page. Separately confirm Vercel's deployment status and production pages, then synchronize `develop`. Local results are recorded in [verification.md](verification.md).

If CI fails, fix the check before merging. If semantic-release fails, inspect the job and any partially created assets before retrying; never force-move a published tag. If Vercel fails, the previous successful deployment remains available. Use Vercel's dashboard to redeploy or roll back, then prepare a corrective change on the appropriate branch.
