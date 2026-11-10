# PLAN: Figma design system → agent-ready React library

## Goal
Turn the Figma library **"Design System"** into a React component library on GitHub that Claude and other agents can read, use and build with correctly.

Figma source: the file linked first (`g6m8PJkzs1l9uW6Kg4GZLk`, "Untitled") is empty. The build reads the published library "Design System". **TODO: add the hosting file's link here before Phase 2.**

## Decisions (from the interview)
| Topic | Decision |
|---|---|
| Stack | Vite, React, TypeScript, Tailwind, shadcn/ui restyled to our tokens, Storybook as the catalog |
| Fonts | Inter, loaded with `@fontsource` (bundled, no external request) |
| Default theme | Light. Dark applies with the `.dark` class on a parent element |
| Icons | Lucide (`lucide-react`) |
| Package name | `@your-scope/ui` (placeholder, set in one place) |
| Repo name | `design-system` (placeholder) |
| Build order | Button, then Input, Checkbox, Radio, then Card, Avatar |
| Prop names | Figma property names become React prop names, in camelCase |
| Code Connect | One `.figma.tsx` file per component |

## Figma fixes to make (by priority)
1. Light and Dark modes on the Color collection (unverified; confirm they exist).
2. Surface/background colors and a spacing scale (none found).
3. Code-safe property values: "Large 48" becomes `Large`, so it maps to `lg`.
4. Consistent property names: Radio's "Selected" and Checkbox's "Checked" become one boolean name.
5. Remove Hover and Focus from variants; they are CSS states, not props.
6. Card's action: replace the hard-wired Button with an instance-swap slot.
7. One variable naming order (role/property): `text/primary` vs `danger/text` disagree.
8. Put the code name and allowed values in each component description.
9. Add missing basics: Button destructive, loading and icon-only; Avatar image; an icon set.
10. Verify auto layout, no hard-coded fills or strokes, meaningful layer names.

Matters most for code: 1, 2, 3, 5. Matters most for agents: 1, 2, 3, 8.

## Phases and checkpoints
1. **Setup**: scaffold the project, write this file and CLAUDE.md, commit.
2. **Tokens**: export Figma variables.
   - **STOP 1:** show the table mapping shadcn's theme variables to our tokens, before any theme code.
   - Then build the light and dark theme CSS.
3. **Button**: build it with Storybook stories.
   - **STOP 2:** show Button against Figma in light and dark, with its Code Connect file.
4. **Form core**: Input, Checkbox, Radio, then Card and Avatar. Each has stories, tests and a Code Connect file.
5. **Agent readiness**: finish CLAUDE.md as the usage guide, per-component docs, and a component index.
6. **Ship**:
   - **STOP 3:** show anything leaving this computer (a push to GitHub, publishing Code Connect) before it happens.

## Working rules
- Commit often, in plain-language messages.
- Sign-ins and publishing are done by the owner. Agents never handle passwords or tokens.
- Explain choices in plain language; the owner is a designer.
- The git repo lives in this folder (separate from the home-folder repo).

## Verification
`npm run build`, `npm run typecheck`, Storybook builds, light/dark checked against Figma screenshots, `figma connect parse` for Code Connect files.
