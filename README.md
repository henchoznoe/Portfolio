# Portfolio — Noé Henchoz

A bilingual French/English developer portfolio for recruiters and professional contacts. Built with Next.js App Router, strict TypeScript, Tailwind CSS, and Framer Motion. Editorial pages are generated at build time, with a light theme and locally hosted Manrope font.

## Development

Use **Node.js 24.21.0** from `.node-version` and **pnpm 12.11.2** from `package.json`. Node 24 is the supported production major; Vercel manages its minor and patch updates.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The application needs no database or application secrets. Docker would add maintenance without helping the current Vercel deployment, so it is intentionally omitted.

## Quality checks

```sh
pnpm check:com       # Read-only Biome checks, knip, TypeScript, production build
pnpm test:release    # Release rules and configuration; never publishes
pnpm check:fix       # Explicit Biome formatting and safe fixes
pnpm build
pnpm start           # Production server on localhost:3000
```

The pre-commit hook applies Biome fixes to supported staged files. Check production routes and responsive layouts locally with `pnpm build` and `pnpm start`.

Direct dependencies and security overrides use exact versions. `savePrefix: ''` keeps future additions exact; use `pnpm add --save-exact` explicitly. `pmOnFail: ignore` preserves a single-document lockfile while [GitHub's pnpm 12 dependency-graph issue](https://github.com/dependabot/dependabot-core/issues/15904) remains open. Because that setting disables pnpm's own package-manager selection, `engines.pnpm` and an explicit CI version check enforce the exact version. CI reads it from `packageManager` instead of duplicating it in workflows.

## Structure and conventions

- `app/[locale]`: `/fr` and `/en`, with `/fr/projets/[slug]` and `/en/projects/[slug]` case studies.
- `components/portfolio`: server-rendered content, interactive navigation, and progressive reveal effects.
- `lib/config/portfolio.ts` and `lib/config/projects.ts`: typed profile, translations, and project content.
- `lib/config/seo.ts`: shared metadata and structured data.
- `lib/styles.ts`: reusable Tailwind compositions; `app/globals.css`: theme, base styles, and necessary global fallbacks.
- `scripts/release.test.mjs`: fast release-rule and changelog tests without publication.
- `docs/content-sources.md`: editorial sources and their limits.

Components and helpers use named arrow functions. Every component accepting props declares `interface ComponentProps` before its implementation and uses `Readonly<ComponentProps>`. Required default exports appear on the final line. Prefer canonical Tailwind v4 utilities over equivalent arbitrary values without approximating the design. Keep custom breakpoints, colors, calculations, and grid definitions when necessary.

Documentation, comments, identifiers, and tooling messages are written in English. Visitor-facing copy remains bilingual. [AGENTS.md](AGENTS.md) is the shared coding-agent guide; `CLAUDE.md` is a relative symlink to it.

## Content and accessibility

The root route selects a locale from the saved choice, then `Accept-Language`, with French as fallback. Switching languages preserves the project or current section. Editorial pages make no GitHub or LinkedIn requests during a visit. Unknown locales, projects, and incorrectly localized paths return 404. The global 404 uses Next.js `experimental.globalNotFound` for the dynamic locale root layout.

Maintain equivalent information in both languages and derive metadata from the same content. Do not invent experience, outcomes, proficiency scores, links, or screenshots. Add a CV only when a current document is available.

Use native scrolling, visible keyboard focus, a skip link, and a mobile menu that closes with Escape and restores focus. Content remains visible with animations disabled. Check both languages at 360, 768, and 1440 px, including direct case-study access, refresh, and invalid URLs.

## Releases and production

Develop on `develop`; ordinary Dependabot PRs target `develop`. Merge `develop` into `main` with a merge commit. GitHub checks the project and semantic-release updates the version and changelog, commits release assets, creates the tag, and publishes a GitHub Release. Vercel's existing Git integration deploys `main` independently. Finally, merge `main` back into `develop` with a merge commit to synchronize release assets.

`feat` creates a minor release; breaking changes create a major release; fixes, dependency updates, refactors, CI, build, tests, and other maintenance create a patch. Documentation-only and generated release commits create no new release. Vercel may still build these commits.

See [docs/releasing.md](docs/releasing.md) for the workflow, GitHub/Vercel settings, security hotfix exception, and recovery. No Vercel CLI, deployment secrets, or custom deployment pipeline is needed.

See [docs/verification.md](docs/verification.md) for observed local results and remote verification limits.

## License

Code is licensed under MIT. Manrope uses the SIL Open Font License included in `app/fonts/Manrope-LICENSE.txt`. Portraits and screenshots illustrate their author's work.
