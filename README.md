# UI Playground

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
