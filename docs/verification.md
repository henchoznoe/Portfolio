# Local verification — October 13, 2026

## Final implementation

Node.js **24.21.0**, pnpm **12.11.2**, exact direct dependencies, and a single-document pnpm lockfile. The development environment's global Node installation was not replaced; validation used the pinned Node version from a temporary installation.

The delivery setup uses GitHub CI followed by semantic-release on `main`, alongside Vercel's existing automatic Git deployment. There is no Vercel CLI dependency, deployment script, custom staging/promotion flow, Docker setup, or additional Vercel secret requirement. Release and deployment are checked independently after publication.

## Code and workflow checks

- Frozen dependency installation: passed under the pinned Node/pnpm versions.
- `pnpm check:com`: passed (read-only Biome check, knip, TypeScript, production build).
- `pnpm test:release`: 19 tests passed without publishing. Covers functional changes, maintenance, dependency updates, `!` shorthand, breaking-change footers, documentation-only changes, generated release commits, and useful English maintenance release notes.
- actionlint 1.7.12: all four GitHub workflows passed static validation. Action references use verified commit SHAs.
- Structural inspection: all 12 components accepting props declare the corresponding interface before their arrow function and use `Readonly<ComponentProps>`. Required default exports appear last.
- `CLAUDE.md` resolves to `AGENTS.md`; the Next.js managed instruction block matches the installed version.
- Tailwind cleanup converted 172 arbitrary spacing utilities to their exact numeric equivalents, plus canonical font-weight, letter-spacing, border-width, and radius utilities where equivalent. Custom breakpoints, colors, calculations, and grids remain explicit.

Static workflow checks do not execute GitHub jobs or publish a release. Required branch checks and bot push permissions still need remote configuration and confirmation.

## Production build and HTTP checks

The final build generates both home pages, eight case studies, metadata routes, icons, and both Open Graph images statically. Only the root language-selection route is dynamic.

One-off HTTP checks against the local production server verified:

- All 10 editorial routes return 200 with the expected HTML language, canonical URL, language alternates, and valid JSON-LD.
- Eight invalid locale/path/project/image URLs return 404.
- Seven language-selection cases return 307 with the expected destination, private/no-store caching, and language/cookie variation. Saved choices override browser language; invalid cookies fall back to negotiation.
- The sitemap contains 10 editorial URLs.
- `/og/fr`, `/og/en`, `/icon`, and `/apple-icon` return PNGs with valid signatures.

The HTTP verifier was used temporarily for this delivery and is not added to the project or CI. No permanent browser-test framework was added.

## Browser checks

Both home pages were checked at **360, 768, and 1440 px** with no horizontal overflow. At a viewport height of 900 px, the introduction ends at 900 px in each checked layout. GitSetup's case study was checked at the same widths; switching from French to English preserves the project and supports a direct refresh.

Keyboard checks confirmed menu opening with Enter, closing with Escape, focus returning to the menu button, and the skip link focusing `main-content`. Reduced-motion emulation leaves content visible without reveal transforms. No browser warnings or errors were captured in the checked views. Temporary viewport and media overrides are cleared after verification.

The initial comparison build predated some existing working-tree edits, so it is not treated as a pixel-perfect baseline for the current source.

## Dependency audit

The production dependency audit reports **zero vulnerabilities**. The full audit retains one high-severity development-tooling advisory in `braces` 3.0.3, with no patched version reported: [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). No advisory is suppressed. Dependency review blocks newly introduced high/critical vulnerabilities; it is separate from the full-tree audit.

The single-document lockfile workaround is documented in the README and release guide. GitHub's dependency graph and the first actual Dependabot run must still be checked after the configuration reaches `main`.

## Earlier Lighthouse measurement

The existing verification log recorded a local mobile Lighthouse audit before this cleanup: performance 96, accessibility 100, best practices 100, SEO 100; LCP 2.9 s, CLS 0, total blocking time 10 ms. These historical measurements are retained as context; Lighthouse was not rerun during this cleanup and scores are not promised for production.

## Publication boundary

Changes remain local on `develop`, staged for review, without a commit, push, tag, release, or deployment. GitHub and Vercel settings were not changed. Detailed Vercel project inspection returned HTTP 403 during planning. Follow [releasing.md](releasing.md) to confirm the remote settings and verify the first real release and deployment separately.
