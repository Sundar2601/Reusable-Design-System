# CLAUDE.md: how to use this design system

Read this before writing any UI with `@bounteous/ui`. The source of truth for design is the Figma file "shadcn/ui Design System (agent-ready)" (file key `R1fwFPPMBLnVhMLWumxCkw`, https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw). It is built to match this code: Figma property names and values are the React props. The source of truth for code is this repo. See PLAN.md for decisions, the roadmap and known Figma gaps.

## Stack
Vite, React, TypeScript, Tailwind v4, shadcn/ui patterns on Radix (restyled to the Figma tokens), Storybook, Figma Code Connect, Lucide icons, Inter via `@fontsource-variable/inter`.

## Rules for building with this system
1. **Use the components first.** Import from the package root before writing custom markup. Check Storybook or `src/components/` for what exists.
2. **Never hard-code values.** No hex colors, no pixel font sizes. Use Tailwind classes that read the tokens (`bg-primary`, `text-muted-foreground`, `border-border`, `rounded-lg`, `gap-4`, `text-sm`).
3. **Colors are shadcn's semantic names**, from the Figma `Color` collection (Light and Dark modes): `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring` (each with a `-foreground` partner where it has one), plus `destructive-subtle` and `text-destructive`. Do not add colors; ask the owner to add a token in Figma first.
4. **Text uses Tailwind's type scale, which matches the Figma text styles exactly**: `text-xs` 12/16, `text-sm` 14/20, `text-base` 16/24, `text-lg` 18/28, `text-xl` 20/28, with `font-medium` or `font-semibold`. Font is Inter.
5. **Dark mode is automatic.** It applies when an ancestor has the `.dark` class. Light is the default. Never write dark-specific colors in components.
6. **Props match Figma.** Figma property names become camelCase React props, and values are lowercase (`variant="outline"`, `size="lg"`). Do not invent props that are not in Figma. Where a Figma state is really a CSS state, it is not a prop.
7. **Hover, focus and active are CSS states.** Disabled is the `disabled` prop. The invalid/destructive/error states are `aria-invalid`, which also tells screen readers.
8. **Strokes are drawn inside the box**, as in Figma: outlines use `inset-ring-1 inset-ring-border`, not `border`, so sizes match the design. Focus is `focus-visible:shadow-focus-ring` plus a `ring` colored inside stroke; invalid is `shadow-destructive-ring`.
9. **Icons come from `lucide-react`.** Do not add other icon libraries.
10. **Accessibility is not optional**: labels on inputs (`FieldLabel` + `htmlFor`), a visible focus ring, keyboard support (it comes from Radix; do not remove it).

## Layout of the repo
- `src/components/` – per component: `Name.tsx`, `Name.stories.tsx`, `Name.test.tsx`, `Name.figma.ts` (Code Connect template).
- `src/theme/theme.css` – the Figma tokens as CSS (light, dark, radius, shadows). Source values: `tokens/figma-tokens.json`.
- `src/lib/utils.ts` – `cn()`, class merging.
- `src/index.ts` – public exports.
- `docs/button-compare/` – Button vs Figma comparison images.

## Adding or changing a component
1. Read the Figma component (properties, variants, bound variables, text styles) with the Figma tools.
2. Map Figma properties to props (rule 6). Reuse the Radix/shadcn base, styled with token classes.
3. Write stories for every variant; flip light/dark with the Storybook toolbar.
4. Write `Name.test.tsx` and run `npm test`.
5. Write the Code Connect template `Name.figma.ts` (its `// url=` points at the component set in the Figma file above) (a template file, never `.figma.tsx`) and run `npx figma connect parse`.
6. Export it from `src/index.ts`, add it to the index below, and commit.

Before committing: `npm test`, `npm run typecheck`, `npm run build`.

## Component index
Figma property -> React prop. The Figma file uses the code names and values, so most map one to one. The Figma file is for designers and carries no code: descriptions say what a component is for and its options, variable code syntax is cleared, and there are no usage frames. The React usage lives in this file and in Storybook.

| Component | Figma -> React | Code Connect template |
|---|---|---|
| `Button` | `Variant` -> `variant` (`default` `outline` `secondary` `ghost` `destructive` `link`); `Size` -> `size` (`xs` 24px, `sm` 28px, `default` 32px, `lg` 36px); `Disabled=true` -> `disabled`; `Label` -> children; `Icon left` / `Icon right` toggles -> `leftIcon` / `rightIcon` (not mapped yet) | `Button.figma.ts`; pill-shaped Figma set "Button / Rounded" -> `rounded`: `ButtonRounded.figma.ts` |
| `Input` | `Invalid=true` -> `aria-invalid`; `Disabled=true` -> `disabled`; `Rounded=true` -> `rounded`; `Value` + `Text` -> `placeholder` or `defaultValue` | `Input.figma.ts` |
| `Field`, `FieldLabel`, `FieldDescription` | `Field Label`: `Required` -> `required`, `Disabled` -> `disabled`, `Text` -> children. `Field Description`: `Align` -> `align`, `Text` -> children | `FieldLabel.figma.ts`, `FieldDescription.figma.ts` |
| `Checkbox` | `Checked` (`false` `true` `indeterminate`) -> `checked` / `defaultChecked` + `onCheckedChange`; `Invalid` -> `aria-invalid`; `Disabled` -> `disabled`. Figma "Checkbox Field": `Label`, `Description`, `Show description` -> `label`, `description` | `Checkbox.figma.ts`, `CheckboxField.figma.ts` |
| `Radio`, `RadioGroup` | `Checked` -> the group's `value` equals the Radio's `value`; `Invalid` -> `aria-invalid`; `Disabled` -> `disabled`. Figma "Radio Field": `Label`, `Description` -> `label`, `description` | `Radio.figma.ts`, `RadioField.figma.ts` |
| `Card` + parts | One Figma `Card`: `Size` -> `size` (`default` `sm`); toggles `Image`, `Action`, `Content`, `Footer` -> which of `CardImage`, `CardAction`, `CardContent`, `CardFooter` appear; text `Title`, `Description`, `Content text` | `Card.figma.ts` |
| `Avatar` + parts | `Size` -> `size` (`sm` 24px, `default` 32px, `lg` 40px); `Type` (`fallback` `icon` `image`) -> `AvatarFallback` / `AvatarImage`; `Initials` -> fallback text; `Badge` -> `AvatarBadge` | `Avatar.figma.ts` |

The Figma file covers every entry in the shadcn/ui docs as of 2026-11-10 (67 component pages, 126 components and parts). React code exists for the components above only; the rest (Select, Dialog, Tabs, Table, Toast, Combobox, Data Table, Message, Trace and others) are designed in Figma but not built in code yet. Machine-readable summary: `llms.txt`.

Also in the Figma file (added 2026-11-10, no React code yet):
- **Chart examples** page: 68 chart examples (Area 10, Bar 10, Line 10, Pie 11, Radar 12, Radial 6, Tooltip 9). They are cards, not components. Series use `chart-1` to `chart-5`. Radar titles are inferred, the docs pages do not list titles.
- **AI Elements**: one page per component, named as in the shadcn docs (`AI / Chain of Thought`, `AI / Chat`, `AI / Tool`, ...). Each has a description and no component properties yet. The older AI SDK Elements that are not in the shadcn docs were removed.
- **Blocks** pages (`Blocks / Dashboard`, `Sidebar`, `Login`, `Signup`): `dashboard-01`, `sidebar-01` to `sidebar-16`, `login-01` to `login-05`, `signup-01` to `signup-05`. They are token-bound frames, not instances of Button or Input.
- **Themes** page: the 7 shadcn base colors (Neutral, Zinc, Stone, Mauve, Olive, Mist, Taupe) in light and dark. They are modes of the `Color` collection (`Light`/`Dark` = Neutral; the others are named `Zinc / Light` and so on). Values come from ui.shadcn.com/r/colors.
- **Typeset** page and `Typeset` variable collection: the six presets (base, docs, chat, reading, compact, large) with size, leading and flow. Heading scale is an approximation.
- **Scroll Fade** page: the scroll-fade utility (edges, axis, size) drawn as static examples.
- **Sizing** variable collection (control heights, icon, avatar, checkbox and switch sizes, border and ring width, state opacities in percent) and **States** sheets on 18 interactive component pages (default, hover, focus, pressed, disabled, invalid). Hover, focus and pressed stay CSS states in code. New color tokens `warning-subtle`, `warning-border`, `text-warning` (Alert custom colors).
- **More variants** sections at the bottom of 25 component pages (Combobox chips, Select groups, Field choice card, Input File, Input Group block addons, Calendar range ends, Date Picker range, Sidebar floating and inset, Item xs, Button Group parts, Accordion disabled, Alert Dialog destructive, Badge icon and spinner, Button loading, Dialog sticky footer, Drawer handle and snap points, Data Table toolbar and pagination, Message actions, Bubble show more, Marker shimmer, Typography list and table, Popover and Hover Card sides, Context, Menubar and Dropdown checkbox, radio, submenu, shortcut and avatar items). They are token-bound components with a React usage in the description, not variant properties of the main sets.
- **Icons** page: 2,049 Lucide icons as components named `Icon/<name>` (the lucide-react name in kebab-case).

## Code Connect coverage
134 Figma nodes in the file AngMCoShsZnEBQ4B1xMObF have a template under `react/src/components/**/*.figma.ts` (UI components, charts, AI elements, iOS, Android). The 45 `Button state / ...` style sheets are CSS-state illustrations and are not mapped. Publishing needs the owner's token: `cd react && FIGMA_ACCESS_TOKEN=... npx figma connect publish`.

## Boundaries for agents
- Do not push to GitHub, publish Code Connect, or publish to npm without the owner's confirmation. Show what will leave the computer first.
- Never ask for, type or store passwords, tokens or API keys. The owner signs in and publishes.
- Do not change the Figma file unless asked. Temporary frames made for comparison must be deleted afterwards.

## Known gaps
The earlier kit file had no component descriptions; the current Figma file has one on every component. Repo and Figma differ in one place to fix: the repo dark `--input` is `#171717`, Figma uses `neutral/700` (`#404040`) so the field border is visible. See PLAN.md.

## Figma page order
Cover, Getting started, FOUNDATIONS (Colors, Themes, Text styles, Typeset, Radius spacing and shadows, Icons), COMPONENTS (A to Z, with Chart examples, Scroll Fade (utility) and Shimmer (utility)), AI ELEMENTS, BLOCKS. Separator pages are named with dashes.

## Utilities, forms and templates (added 2026-11-13)
Figma file `AngMCoShsZnEBQ4B1xMObF` has a **Utilities** page (after Patterns): Scroll Fade, Shimmer and Direction (LTR/RTL) specimens, token-bound. In code and Storybook:
- **Utilities** (React `src/components/utilities/`, Angular `src/stories/utilities-*.stories.ts`): `scroll-fade` and `shimmer` are optional Tailwind `@utility` classes from `src/theme/utilities.css` (React) and `src/utilities.css` (Angular). Direction is `dir="rtl"` on an ancestor; components use logical properties.
- **Forms** (React `src/components/forms/FormLibraries.stories.tsx`): the same sign-up form on React Hook Form, TanStack Form and Formisch. Angular: `forms-reactive-forms.stories.ts`. Errors go to `aria-invalid` and a message in `FieldDescription`. The three form libraries and `valibot` are devDependencies, used by stories only.
- **Helpers** (React docs `src/docs/code/helpers/`): AI SDK and TanStack AI snippets for the chat components. Not run by Storybook; check them against the installed library version.
- **Templates / Dashboard** (React `patterns/DashboardTemplate.stories.tsx`, Angular `templates-dashboard.stories.ts`): the Figma Templates page at desktop 1440, tablet 834/1194 and mobile 390/844, with menu-open states.
