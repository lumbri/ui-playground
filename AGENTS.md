# Frontend conventions

- Use shadcn/ui primitives in `src/components/ui`; prefer their built-in variants.
- Compose pages from reusable blocks in `src/components/blocks`.
- Pass content, links, and actions into blocks through typed props. Keep page copy
  in the frontend; photography content lives in `src/content/photography.ts`.
- Use the active preset's semantic color tokens and theme classes. Avoid custom
  color palettes, page-specific primitive styling, and duplicated overlay logic.
- Keep API access in `src/lib/api-client.ts`; do not embed secrets in frontend code.
- Keep permanent, crawlable page paths and preserve build-time HTML and metadata.
- Verify meaningful behavior with build, formatting, and relevant Playwright checks.
