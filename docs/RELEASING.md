# Releasing

How a change reaches a project. The React package is `@bounteous/ui` (`react/package.json`).

## Versioning

Semantic versioning: `MAJOR.MINOR.PATCH`.

| Change | Bump |
|---|---|
| Bug fix, visual tweak that keeps the API | PATCH |
| New component, variant, prop or token | MINOR |
| Removed or renamed prop, variant, token or component | MAJOR |
| A deprecated item is removed | MAJOR (it must have been deprecated for one MINOR first) |

The package is at `0.0.0`. Treat `0.x` as unstable until the owner sets `1.0.0`.

## The package (set up)

`@bounteous/ui` is a real library package. `npm run build:lib` (in `react/`) builds it:

- `vite.lib.config.ts` bundles `src/index.ts` to `dist-lib/index.js` (ESM). All dependencies stay external; React and React DOM are peer dependencies.
- `tsconfig.lib.json` plus `tsc-alias` emit `dist-lib/**/*.d.ts` with the `@/` path alias rewritten to relative paths.
- `package.json` has `main`, `module`, `types`, `exports` (`.`, `./theme.css`, `./utilities.css`), `files` and `publishConfig.access = restricted` (a private scoped package). `prepack` runs the build.

Verified on 2026-11-13: `npm pack`, then installing the tarball into a new project, importing 435 exports, rendering a Button, resolving both CSS files, and compiling a TypeScript app against the declarations (a wrong `variant` is rejected).

**Still the owner's decision before the first publish:** which registry and scope (the package name is `@bounteous/ui`; `restricted` assumes npm), and the first version number (it is `0.0.0`). Angular is deliberately not packaged. Its roughly 130 components are copy-in (the Zard pattern) and import each other through an `@/` alias and a shared `core/` folder, so an `ng-packagr` library would mean restructuring the whole project. `MIGRATION.md` lists exactly what to copy and what to install. If you later want an npm package for Angular, treat it as its own project: one secondary entry point per component, no `@/` alias, and a test install in a new Angular app.

## Release steps

1. **Token sync.** In Figma, check the variables. Run `cd react && npm run tokens:check`. Fix any drift in `src/theme/theme.css` or in Figma.
2. **Checks.** `cd react && npm test && npm run typecheck && npm run build`. All must pass. `npm test` includes the accessibility test.
3. **Storybook.** Open it, flip Light and Dark, and look at the changed components.
4. **Changelog.** Add an entry on the Figma Documentation page (newest first) with the version and date.
5. **Version.** Set the new version in `react/package.json`. Commit: `Release vX.Y.Z`.
6. **Tag.** `git tag vX.Y.Z` and push the tag.
7. **Publish to npm.** `cd react && npm publish` (the owner runs this; it needs the npm login). `prepack` builds the library. Check the contents first with `npm pack --dry-run`.
8. **Publish Code Connect.** `cd react && FIGMA_ACCESS_TOKEN=... npx figma connect publish` (the owner runs this; it needs the Figma token). It replaces existing mappings.
9. **Announce.** Post the changelog entry in the team channel.

## Rules

- Do not push, publish to npm, or publish Code Connect without the owner's go-ahead.
- Never put tokens or passwords in the repo or in a chat.
- A release that breaks a project is rolled back by publishing a new PATCH with the fix, not by deleting the version.

## Visual regression (recommended, not set up)

Storybook already lists every variant, so a visual-diff service on Storybook (Chromatic, or Playwright snapshots) would catch accidental visual changes. Add it before the first 1.0 release.
