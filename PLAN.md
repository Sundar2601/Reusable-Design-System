# PLAN: Figma design system → agent-ready React library

## Goal
Turn the Figma file **"shadcn/ui components with variables - Tailwind classes"** into a React component library on GitHub that Claude and other agents can read, use and build with correctly.

## History of the source (so nobody is confused later)
1. The first link (`g6m8PJkzs1l9uW6Kg4GZLk`, "Untitled") was an empty file. I first built from a different published library, "Design System" (blue brand, a custom token set).
2. On 2026-11-10 the owner pointed to the shadcn community file (`dcJKQOcHWk6gbH7lcMwicU`) and chose to **make it the new source**. Theme, all six components, tests and Code Connect were rebuilt from it. The earlier library's work is in git history (commits before `4ec7d9c`).
3. Library variables were imported into the empty file during step 1 and are still there. Nothing else was added to either Figma file.

## Decisions (from the interview)
| Topic | Decision |
|---|---|
| Stack | Vite, React, TypeScript, Tailwind v4, shadcn/ui patterns on Radix restyled to the tokens, Storybook |
| Fonts | Inter, loaded with `@fontsource-variable/inter` (bundled, no external request) |
| Default theme | Light. Dark applies with the `.dark` class on a parent element |
| Icons | Lucide (`lucide-react`) |
| Package name | `@bounteous/ui` (private; cannot be published to npm by accident) |
| Repo | `Sundar2601/Reusable-Design-System` on GitHub (https://github.com/Sundar2601/Reusable-Design-System). Meant to be private: confirm in GitHub Settings. |
| Build order | Button, Input, Checkbox, Radio, Card, Avatar |
| Prop names | Figma property names become React prop names, in camelCase |
| Code Connect | One `.figma.ts` template file per Figma component, pointing at the shadcn file |

## Approved mapping (Stop 1) and Button (Stop 2)
shadcn's variable names are already the Figma `mode` collection's names, so the mapping is 1:1 (see `src/theme/theme.css` and `tokens/figma-tokens.json`). Radius, shadow and text styles follow the Figma values. Spacing and the type scale are Tailwind's defaults, which match Figma. Button was compared with Figma in light and dark (`docs/button-compare/button-figma-vs-code.png`): colors match pixel for pixel, sizes within 1px.

## Figma fixes to make (by priority) – for the shadcn file
Most important for **agents**: 1, 2. Most important for **code**: 3, 4, 5.
1. **No component has a description.** Add one to every component: what it is, the React name, and allowed values. This is the biggest gap for agents.
2. **Dark-mode `input` token is `#171717`**, almost invisible on dark cards and on the dark background. Give it a visible dark value.
3. **Typo "Roudness"** on Button and Input (should be "Roundness"). Code Connect matches the typo for now.
4. **Hover and Focus are variants** on Button, and `Dir` (LTR/RTL) is a variant on most components. These are CSS states and the `dir` attribute in code, not props. They multiply the variants (Button has 192).
5. **Button's default `Size` is `xs`** (the first value). `default` is the real default; code uses it.
6. **Card is not a component.** It is a page frame built from Card header and Card footer. Make a real Card component with header, content and footer slots.
7. **Destructive is a raw color.** `destructive`, `destructive-subtle` and `text-destructive` are raw hex values, not aliases of a base color, and the Destructive button applies a 10% paint opacity on top of a variable that already has 10% alpha. Confirm which is intended.
8. **Checkbox and Radio name states differently** (`Invalid` vs `Error`, `Interaction` vs `State`). Pick one set.
9. **A 4px corner radius** on Checkbox is not a token (`radius-sm` is 6).
10. **20 variable collections** (`tw/*` primitives) and a `tokens` collection with numeric names ("0", "1" …). Hide the primitives from publishing and keep one semantic set so agents do not pick raw palette values.
11. **Icon, badge and key-hint toggles** on Button point at icon instances without Code Connect templates, so the Code Connect files do not map them yet.

## Status
| Phase | State |
|---|---|
| 1 Setup | Done |
| 2 Tokens and theme (Stop 1 approved) | Done, rebuilt from the shadcn file |
| 3 Button (Stop 2 approved) | Done |
| 4 Input, Field, Checkbox, Radio, Card, Avatar | Done, measured against Figma values in light and dark |
| 5 Agent readiness | CLAUDE.md, `llms.txt`, README written; 54 tests pass |
| 6 Ship (Stop 3) | **Pushed to GitHub** (commit `d8b0784`, 2026-11-10, approved by the owner). **Code Connect is not published.** |

Verified: `npm test` (54 tests), `npm run typecheck`, `npm run build`, `npm run build-storybook`, and `npx figma connect parse` (9 template files).

Not done yet:
- Confirming the GitHub repo is private (the owner checks Settings → General → Danger Zone).
- Publishing Code Connect (owner runs it; needs the file published as a library and a Figma token with Code Connect write access).
- Icon Button and the other 60+ components in the file.
- Visual side-by-side images for components other than Button (the others were checked by measured values).

## Phases and checkpoints
1. **Setup**: scaffold, write this file and CLAUDE.md, commit.
2. **Tokens**: **STOP 1:** show the shadcn-variable mapping before any theme code. Then the theme CSS.
3. **Button**: **STOP 2:** show Button against Figma in light and dark, with its Code Connect file.
4. **Remaining components**, each with stories, tests and a Code Connect file.
5. **Agent readiness**: CLAUDE.md, `llms.txt`, README.
6. **Ship**: **STOP 3:** show anything leaving this computer (a push to GitHub, publishing Code Connect) before it happens.

## Working rules
- Commit often, in plain-language messages.
- Sign-ins and publishing are done by the owner. Agents never handle passwords or tokens.
- Explain choices in plain language; the owner is a designer.
- The git repo lives in this folder (separate from the home-folder repo).
- Temporary frames made in Figma for comparison are deleted afterwards.
