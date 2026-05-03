# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server
pnpm check:com        # Full validation: biome check --write . && knip && tsc --noEmit && next build
pnpm check            # Biome lint + format (auto-fix)
pnpm check:all        # Biome + knip (no build)
pnpm knip             # Dead code / unused dependency detection
```

`pnpm check:com` is the source of truth — always run before considering work done.

Pre-commit hook runs `biome check --write` on staged `*.{ts,tsx,css}` via lint-staged.

## Architecture

Next.js 16 App Router portfolio. `app/page.tsx` (RSC) composes client section components. All interactive components are `'use client'`.

**Animation strategy**: GSAP for timeline-based entrance sequences (hero intro, scroll-triggered reveals). Framer Motion for declarative scroll transforms, layout animations, hover states, and staggered children. Some components blend both.

**Styling**: Tailwind v4 via PostCSS (no tailwind.config file). Theme defined in `app/globals.css` with `@theme inline` and CSS custom properties. Dark-mode-only (always `html.dark`). Fonts: Inter (`--font-inter`) + JetBrains Mono (`--font-jetbrains-mono`) via `next/font/google`, mapped in `@theme inline`.

**shadcn/ui**: Configured in `components.json` (new-york style, zinc base). Utils alias points to `@/lib/utils/cn`. Add components with `npx shadcn@latest add`.

## Code Style (enforced by Biome)

- Single quotes, no semicolons, trailing commas
- Arrow parens only when needed: `x => x` not `(x) => x`
- Node imports require `node:` protocol (`node:os` not `os`)
- `any` is forbidden (`noExplicitAny: error`)
- Imports auto-organized on save/check

## Key Patterns

- `cn()` from `@/lib/utils/cn` for all Tailwind class merging (clsx + tailwind-merge)
- `useGSAP` hook from `@gsap/react` with `{ scope: ref }` for scoped GSAP animations
- `ScrollTrigger` must be registered: `gsap.registerPlugin(ScrollTrigger)`
- Vercel env vars exposed to client via `next.config.ts` `env` block (e.g., `NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA`)
- External images with `next/image` use `unoptimized` prop to skip `remotePatterns` config

## Release

Semantic-release on `main` branch via GitHub Actions. Conventional Commits required for PR titles (feat, fix, chore, ci, docs, refactor, test, perf). Version bumped in `package.json`, changelog generated automatically.
