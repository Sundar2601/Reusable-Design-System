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
6. **Props match Figma.** Figma property names become camelCase React props, and values are lowercase (`variant="primary"`, `size="lg"`). If a prop isn't in Figma, don't invent it.
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
4. Write the Code Connect file next to the component.
5. Export it from `src/index.ts`, add it to the component index below, and commit.

## Component index
_Filled in as components are built._ Planned order: Button, Input, Checkbox, Radio, Card, Avatar.

## Boundaries for agents
- Do not push to GitHub, publish Code Connect, or publish to npm without the owner's confirmation. Show what will leave the computer first.
- Never ask for, type or store passwords, tokens or API keys. The owner signs in and publishes.
- Don't change the Figma file unless asked.

## Known gaps (Figma side)
See PLAN.md "Figma fixes". Until they're done, prefer the documented token names and ask before assuming a token exists.
