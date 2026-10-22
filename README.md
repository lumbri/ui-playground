# UI Playground

## Photography portfolio

The homepage recreates the structure and photography of https://liubov.ch using
reusable shadcn blocks. Frontend content lives in `src/content/photography.ts`;
downloaded and resized original assets live in `public/images/portfolio`.
The image carousel, profile introduction, photo gallery with dialog viewer,
service sections, and image banners accept content through props. One unavailable
gallery image is replaced with the source site's outdoor portrait image.
The contact number was confirmed as +41 79 819 78 75.

## Permanent URLs, SEO, and backend API

Home lives at `/` and About at `/about`. These are regular crawlable links.
Section anchors such as `#our-story` only navigate within a page.
`npm run build` prerenders both pages with content, titles, descriptions, and
Open Graph metadata in their HTML. React hydrates that HTML for interactive UI.

Copy `.env.example` to `.env.local`. Set `VITE_SITE_URL` to the production website
origin to generate absolute canonical URLs and `sitemap.xml`. Set
`VITE_API_BASE_URL` to the backend base URL (defaults to `/api`). Vite embeds these
public values during the build; never use them for secrets.

Use `apiRequest<T>` from `src/lib/api-client.ts` for backend requests. It accepts
fetch options (including AbortSignal and credentials) and throws `ApiError` for
failed HTTP responses. No backend endpoints or authentication contract have been
provided yet; page content is currently static. Public API-driven content that
must be indexed should also be loaded during prerendering or server rendering.

Production hosting must serve `dist/about.html` for `/about`, serve
`dist/404.html` with HTTP 404 for unknown paths, and redirect URL aliases to their
canonical paths. Do not configure every unknown URL to return the homepage with
HTTP 200. The hosting configuration depends on the deployment provider.
For a separate backend origin, configure CORS there; cookie authentication also
requires the appropriate credentials, cookie, and CSRF configuration.

React + TypeScript + Vite, Tailwind CSS v4, and shadcn/ui (Radix Nova).

## Development

Node.js 24 LTS and npm are managed by Homebrew (`brew install node@24`).
From the project root, activate them in a terminal:

```sh
source scripts/env.sh
npm run dev
```

New VS Code integrated terminals automatically include Homebrew's Node.js 24.

```sh
npm run shadcn -- add card dialog input
npm run build
npm run lint
```

Dependencies are pinned in `package-lock.json`; use `npm ci` to reinstall.

## Frontend tools

Homebrew provides pnpm for `pnpm dlx` commands. App dependencies continue to use
npm and `package-lock.json`.

The official `shadcn` and `migrate-radix-to-base` skills are installed for Codex
under `.agents/skills`, with versions recorded in `skills-lock.json`.

- `npm run format` — Prettier with Tailwind class sorting.
- `npm run format:check` — check formatting without writing.
- `npm run test:e2e` — desktop and mobile Chromium checks, including axe accessibility.
- `npm run test:ui` — interactive Playwright test runner.

Chromium is stored in `.local/playwright`. To reinstall it, run
`PLAYWRIGHT_BROWSERS_PATH=.local/playwright npx playwright install chromium`.
VS Code extension recommendations include Tailwind IntelliSense, Prettier,
Playwright, and Oxc. Prettier runs on save when its extension is installed.

## GitHub tools

Homebrew provides `gh` and `github-mcp-server`. Authenticate once with
`gh auth login --hostname github.com --git-protocol https --web`.
The GitHub MCP launcher reuses `gh auth token` at startup; no token is stored
in this repository. Both Codex and VS Code MCP configurations include GitHub.
After signing in, restart Codex or reload the VS Code window to connect.

## shadcn MCP configuration

Project configurations are provided for Codex (`.codex/config.toml`) and
VS Code Copilot (`.vscode/mcp.json`). Both run the installed shadcn CLI through
`scripts/shadcn-mcp.sh`, which sets Homebrew's Node.js PATH and project directory.

Restart Codex with this project trusted to load its MCP server. In VS Code,
open `.vscode/mcp.json` and click Start for shadcn. Try asking:
"Show me the available shadcn components" or "Add a card and dialog".

The Codex configuration contains this checkout's absolute path; update it if the
repository moves. Install Node.js with Homebrew and run `npm ci` on a new checkout.
