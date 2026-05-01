<div align="center">

<img src="public/assets/img/me-ia.png" alt="Logo" width="auto" height="200" style="border-radius: 50%; margin-bottom: 15px;">

[![CI](https://github.com/henchoznoe/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/henchoznoe/Portfolio/actions/workflows/ci.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fhenchoznoe.ch&label=Website)](https://henchoznoe.ch)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Biome](https://img.shields.io/badge/formatter|linter-biome-39B420?style=flat&logo=biome)](https://biomejs.dev/)
[![Lines of Code](https://img.shields.io/badge/dynamic/json?label=lines%20of%20code&query=%24%5B-1%3A%5D.linesOfCode&url=https%3A%2F%2Fapi.codetabs.com%2Fv1%2Floc%3Fgithub%3Dhenchoznoe%2FPortfolio&color=blue)](https://github.com/henchoznoe/Portfolio)

## Portfolio

Title here

</div>

## Overview

Overview here

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19, TailwindCSS v4, shadcn/ui |
| Language | TypeScript (strict) |
| Quality | Biome, Vitest, knip, Codecov, Husky, lint-staged |
| Hosting | Vercel |

## Project Structure

```bash
.
├── app/                  # Next.js routes, layouts, error pages, API routes
├── components/           # UI split by public/admin/shared domains
├── lib/
│   ├── actions/          # Server mutations
│   ├── services/         # Cached read-side access
│   ├── core/             # Auth, env, logger, Prisma, Stripe
│   ├── config/           # Routes and constants
│   ├── validations/      # Zod schemas
│   ├── utils/            # Formatting, auth, refund, team, image helpers
│   └── types/            # Shared TypeScript types
├── public/               # Static assets and fonts
└── .github/workflows/   # CI, release, dependency review, PR title validation
```

## Quick Start

### Prerequisites

- Node.js 22+
- pnpm 11+

### Installation

```bash
pnpm install
pnpm dev
```

The app runs on `http://localhost:3000`.

## Development Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Next.js dev server |
| `pnpm build` | Build Next.js |
| `pnpm start` | Start the production server |
| `pnpm exec tsc --noEmit` | Run TypeScript type-checking |
| `pnpm exec biome check .` | Run formatter/linter check without writing |
| `pnpm check` | Run Biome and write fixes |
| `pnpm check:com` | Run all checks before commit |

## Quality Workflow

CI runs the following checks in order ([`ci.yml`](.github/workflows/ci.yml), reused by [`release.yml`](.github/workflows/release.yml) via `workflow_call`):

```bash
pnpm exec tsc --noEmit              # Type-check
pnpm exec biome check .             # Lint & format
pnpm exec knip                      # Dead code analysis
pnpm audit --audit-level=high       # Security audit
```

Additional CI workflows:

- [`dependency-review.yml`](.github/workflows/dependency-review.yml) — blocks PRs introducing high-severity vulnerable dependencies.
- [`pr-title.yml`](.github/workflows/pr-title.yml) — enforces Conventional Commits format on PR titles (required for semantic-release).

Pre-commit only runs Biome on staged `*.{ts,tsx,css}` files through `lint-staged`, so local type-checking and tests are still your responsibility before shipping changes.

## Deployment Notes

The project is designed for Vercel deployment.

## License

None
