# CLAUDE.md: how to use this design system

Read this before writing any UI with `@your-scope/ui` (placeholder name; set in `package.json`). The source of truth for design is the Figma library "Design System". The source of truth for code is this repo. See PLAN.md for the roadmap.

## Stack
Vite, React, TypeScript, Tailwind, shadcn/ui (restyled to our tokens), Storybook, Figma Code Connect, Lucide icons, Inter font via `@fontsource`.

## Rules for building with this system
1. **Use the components first.** Import from the package before writing custom markup. Check Storybook or `src/components/` for what exists.
2. **Never hard-code values.** No hex colors, no pixel sizes, no raw font sizes. Use Tailwind classes backed by tokens (for example `bg-primary`, `text-muted-foreground`, `rounded-md`).
3. **Colors are semantic.** Pick by purpose (`text/primary`, `border/default`, `danger`), not by hue. Do not add new colors; ask the owner to add a token in Figma.
4. **Text uses the text styles**: Heading H1–H4, Body Large/Medium/Small. They exist as CSS variables like `--font-heading-h2`.
5. **Dark mode is automatic.** Dark applies when a parent has the `.dark` class. Light is the default. Never write dark-specific colors in components.
6. **Props match Figma.** Figma property names become camelCase React props, and values are lowercase (`variant="primary"`, `size="lg"`). If a prop isn't in Figma, don't invent it. Exception: when a Figma name collides with a native or React prop, the code uses `variant` (Figma `Type` on Button, Figma `Style` on Card). Code Connect maps them.
7. **Hover, focus and active are CSS states**, not props. Disabled, error and loading are props.
8. **Icons come from `lucide-react`.** Do not add other icon libraries.
9. **Accessibility is not optional**: labels on inputs, visible focus ring (`border/focus`), keyboard support (comes from shadcn/Radix; don't remove it).

## Layout of the repo
- `src/components/` – one folder per component: `Button.tsx`, `Button.stories.tsx`, `Button.figma.tsx` (Code Connect).
- `src/theme/` – token CSS (light and dark) and the shadcn variable mapping.
- `src/index.ts` – the public exports.
- `.storybook/` – catalog config.

## Adding or changing a component
1. Read the Figma component (properties, variants, description) with the Figma tools.
2. Map Figma properties to props (see rule 6). Reuse the shadcn base, restyled with token classes.
3. Write stories for every variant, in light and dark.
4. Write a test file next to the component (`Name.test.tsx`) and run `npm test`.
5. Write the Code Connect file next to the component (`Name.figma.ts`, a template file, not `.tsx`).
6. Export it from `src/index.ts`, add it to the component index below, and commit.

Before committing: `npm test`, `npm run typecheck`, `npm run build`.

When adding a new text style or spacing name to the theme, also add it to `src/lib/utils.ts` so `cn()` merges it correctly.

## Component index
| Component | Props (Figma name -> React prop) | Notes |
|---|---|---|
| `Button` | `Type` -> `variant` (`primary` / `secondary` / `ghost`), `Size` -> `size` (`lg` 48px / `md` 40px / `sm` 32px), `State=Disabled` -> `disabled`, `Label` -> children | `variant` not `type`: `type` is a native button attribute. Hover/active/focus are CSS. `asChild` renders a link. |
| `Input` | `Label` -> `label`, `Placeholder` -> `placeholder`, `Helper text` -> `helperText`, `State=Error` -> `error`, `State=Disabled` -> `disabled` | Wraps a native input; label and helper are wired for screen readers. Focus is CSS. Default width 320px; override with `className`. |
| `Checkbox` | `Checked` -> `checked` / `defaultChecked` + `onCheckedChange`, `State=Disabled` -> `disabled`, `Label` -> `label` | Built on Radix. |
| `Radio` + `RadioGroup` | `Selected` -> the group's `value` equals the Radio's `value`, `State=Disabled` -> `disabled`, `Label` -> `label` | A Radio must be inside a `RadioGroup`. |

Label rule: Button's `Label` is its children. For form controls, `Label` is a `label` prop because the label is a separate element.
| `Card` | `Style` -> `variant` (`outlined` / `elevated`), `Title` -> `title`, `Description` -> `description`; image and button are slots: `media`, `action` | `variant` not `style` (React prop). Fixed 320px wide by default. |
| `Avatar` | `Size` -> `size` (`sm` 32 / `md` 40 / `lg` 56), `Initials` -> `initials` | Default size is `sm`, matching Figma's default. |

All components are exported from `src/index.ts`. Machine-readable summary: `llms.txt`.

## Boundaries for agents
- Do not push to GitHub, publish Code Connect, or publish to npm without the owner's confirmation. Show what will leave the computer first.
- Never ask for, type or store passwords, tokens or API keys. The owner signs in and publishes.
- Don't change the Figma file unless asked.

## Known gaps (Figma side)
See PLAN.md "Figma fixes". Until they're done, prefer the documented token names and ask before assuming a token exists.
