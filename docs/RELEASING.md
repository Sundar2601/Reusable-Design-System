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

## Before the first release: make the package installable

`react/package.json` is currently `"private": true` with no `main`, `module`, `types`, `exports` or `files`, so `npm publish` would refuse and nothing could be installed from it. One-time work:

1. Add a library build (Vite library mode with `src/index.ts` as the entry, React as a peer dependency) and emit type declarations (`vite-plugin-dts` or `tsc --emitDeclarationOnly`).
2. Set `main`, `module`, `types`, `exports` (the components and `./theme.css` pointing at `src/theme/theme.css`) and `files`.
3. Set `"private": false`, a real scope and registry (`publishConfig`), and `peerDependencies` for `react` and `react-dom`.
4. Test with `npm pack` and install the tarball in a throwaway app.
5. Do the same for Angular if you ship it as a package; today it is consumed from source.

Until then, projects consume the system by copying (see `MIGRATION.md`) or by a workspace or git dependency.

## Release steps

1. **Token sync.** In Figma, check the variables. Run `cd react && npm run tokens:check`. Fix any drift in `src/theme/theme.css` or in Figma.
2. **Checks.** `cd react && npm test && npm run typecheck && npm run build`. All must pass. `npm test` includes the accessibility test.
3. **Storybook.** Open it, flip Light and Dark, and look at the changed components.
4. **Changelog.** Add an entry on the Figma Documentation page (newest first) with the version and date.
5. **Version.** Set the new version in `react/package.json`. Commit: `Release vX.Y.Z`.
6. **Tag.** `git tag vX.Y.Z` and push the tag.
7. **Publish to npm.** `cd react && npm publish` (the owner runs this; it needs the npm login). Check the package contents first with `npm pack --dry-run`.
8. **Publish Code Connect.** `cd react && FIGMA_ACCESS_TOKEN=... npx figma connect publish` (the owner runs this; it needs the Figma token). It replaces existing mappings.
9. **Announce.** Post the changelog entry in the team channel.

## Rules

- Do not push, publish to npm, or publish Code Connect without the owner's go-ahead.
- Never put tokens or passwords in the repo or in a chat.
- A release that breaks a project is rolled back by publishing a new PATCH with the fix, not by deleting the version.

## Visual regression (recommended, not set up)

Storybook already lists every variant, so a visual-diff service on Storybook (Chromatic, or Playwright snapshots) would catch accidental visual changes. Add it before the first 1.0 release.
