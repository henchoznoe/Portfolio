<div align="center">

<img src="public/img/me-ia-cartoon.png" alt="Logo" width="auto" height="200">

[![CI](https://github.com/henchoznoe/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/henchoznoe/Portfolio/actions/workflows/ci.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fhenchoznoe.ch&label=Website)](https://henchoznoe.ch)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Biome](https://img.shields.io/badge/formatter|linter-biome-39B420?style=flat&logo=biome)](https://biomejs.dev/)

## Portfolio

Personal developer portfolio built with Next.js, Tailwind CSS, GSAP, and Framer Motion.

</div>

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19, TailwindCSS v4, shadcn/ui |
| Animation | GSAP, Framer Motion |
| Language | TypeScript (strict) |
| Quality | Biome, knip, Husky, lint-staged |
| Hosting | Vercel |

## Project Structure

```bash
.
├── app/                  # Next.js App Router (layouts, pages, global styles)
├── components/
│   ├── sections/         # Page sections (hero, about, projects, skills)
│   └── ui/               # Reusable UI components
├── lib/
│   └── utils/            # Utility functions (cn, app-version, commit-hash)
├── public/
│   ├── img/              # Profile images
│   └── projects/         # Project logos
└── .github/workflows/    # CI, release, dependency review, PR title validation
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
| `pnpm check` | Run Biome and write fixes |
| `pnpm check:com` | Full validation (Biome + knip + tsc + build) |
| `pnpm knip` | Dead code / unused dependency detection |

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

Pre-commit only runs Biome on staged `*.{ts,tsx,css}` files through `lint-staged`.

## License

This project is licensed under the MIT License.
