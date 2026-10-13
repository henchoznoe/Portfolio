# Repository guidance

## Commands

- `pnpm dev`: development server.
- `pnpm check:com`: Biome (read-only), knip, TypeScript and production build. Run before considering work done.
- `pnpm start`: production preview after building.

## Architecture

Next.js App Router, TypeScript strict, Tailwind v4 and Framer Motion. The dynamic root layout in `app/[locale]/layout.tsx` sets the HTML language and loads local Manrope. `/` redirects according to the saved language choice or browser Accept-Language (French fallback); project route segments are localized. Pages are statically generated. The global 404 supports invalid locales and uses `experimental.globalNotFound`.

Content belongs in typed `lib/config/portfolio.ts` and `lib/config/projects.ts`. Maintain equivalent French and English information. Metadata, sitemap and structured data share these sources. Do not invent experience, outcomes, mastery ratings, public links or screenshots. Consult `docs/content-sources.md`.

Keep content components on the server. Only header interactions and the small reveal component are client components. Use light theme, native scrolling, keyboard navigation, visible focus and reduced-motion support. The site must work with animations disabled.

## Language and toolchain

Write documentation (including README), comments, identifiers, errors in tooling, and workflow labels in English. Visitor-facing portfolio copy remains bilingual French/English. Preserve existing localized public URLs and proper names.

Use Node.js from `.node-version` and pnpm from `package.json`. Keep direct dependencies and overrides exact; use `pnpm add --save-exact`. Keep the single-document lockfile and documented `pmOnFail: ignore` compatibility workaround.

## Components and functions

Use named arrow functions for components, pages, layouts, route handlers, and helpers. Preserve named exports. If a default export is required, put `export default Component` on the final line, separate from its declaration.

Declare an explicit `interface ComponentProps` before every component accepting props, and annotate its parameter with `Readonly<ComponentProps>`. Do not use inline object types or generic `Props` aliases for component props.

```tsx
interface ExampleProps {
  title: string
}

const Example = ({ title }: Readonly<ExampleProps>) => <h2>{title}</h2>

export default Example
```

## Style and delivery

Prefer Tailwind utility classes in TSX. Replace arbitrary values with equivalent canonical Tailwind v4 utilities whenever available (for example, `gap-[30px]` becomes `gap-7.5`). Preserve custom breakpoints, colors, calculations, and grid definitions when no equivalent exists. Do not approximate values or change the rendered design merely to shorten a class. Share repeated utility compositions in `lib/styles.ts` or small components. Keep `app/globals.css` limited to theme tokens, base styles and necessary global fallbacks; do not add component styles there.

Biome enforces single quotes, no semicolons, trailing commas and organized imports. Do not introduce explicit `any`. Use `cn` for class merging when needed. Verify responsive layouts at 360, 768 and 1440 px and both language routes. Publication is separate from local implementation.

Semantic-release targets `main`; see `docs/releasing.md` for release rules, the Vercel Git deployment, and the manual merge back into `develop`. Ordinary Dependabot PRs target `develop`; security hotfix PRs may target `main`. CI validation must not rewrite source files; use `pnpm check:fix` for explicit fixes. Use Conventional Commits when commits are requested; do not add a co-author.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
