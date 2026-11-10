# CLAUDE.md: how to use this design system

Read this before writing any UI with `@bounteous/ui`. The source of truth for design is the Figma file "shadcn/ui components with variables - Tailwind classes" (file key `dcJKQOcHWk6gbH7lcMwicU`). The source of truth for code is this repo. See PLAN.md for decisions, the roadmap and known Figma gaps.

## Stack
Vite, React, TypeScript, Tailwind v4, shadcn/ui patterns on Radix (restyled to the Figma tokens), Storybook, Figma Code Connect, Lucide icons, Inter via `@fontsource-variable/inter`.

## Rules for building with this system
1. **Use the components first.** Import from the package root before writing custom markup. Check Storybook or `src/components/` for what exists.
2. **Never hard-code values.** No hex colors, no pixel font sizes. Use Tailwind classes that read the tokens (`bg-primary`, `text-muted-foreground`, `border-border`, `rounded-lg`, `gap-4`, `text-sm`).
3. **Colors are shadcn's semantic names**, from the Figma `mode` collection: `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring` (each with a `-foreground` partner where it has one), plus `destructive-subtle` and `text-destructive`. Do not add colors; ask the owner to add a token in Figma first.
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
5. Write the Code Connect template `Name.figma.ts` (a template file, never `.figma.tsx`) and run `npx figma connect parse`.
6. Export it from `src/index.ts`, add it to the index below, and commit.

Before committing: `npm test`, `npm run typecheck`, `npm run build`.

## Component index
| Component | Figma -> React props | Notes |
|---|---|---|
| `Button` | `Variant` -> `variant` (`default` `outline` `secondary` `ghost` `destructive` `link`); `Size` -> `size` (`xs` 24px, `sm` 28px, `default` 32px, `lg` 36px); `State=Disabled` -> `disabled`; `Roudness=Rounded` -> `rounded`; `Left icon` / `Right icon` -> `leftIcon` / `rightIcon`; `Kbd` -> `kbd`; label = children | Default size is `default`. `asChild` renders a link. Figma spells Roundness "Roudness". |
| `Input` | `State=Destructive` -> `aria-invalid`; `State=Disabled` -> `disabled`; `Roudness=Rounded` -> `rounded`; `Text` -> `placeholder` / `value` | A plain 320x32 field. Label and description are `Field` parts. Override width with `className`. |
| `Field`, `FieldLabel`, `FieldDescription` | `FieldLabel`: `Asterisk` -> `required`, `State=Disabled` -> `disabled`. `FieldDescription`: `Alignment` -> `align` | Stack around an Input, Checkbox or Radio. |
| `Checkbox` | `Data state` Checked -> `checked` / `defaultChecked` + `onCheckedChange`; Invalid states -> `aria-invalid`; `Interaction=Disabled` -> `disabled`; field label and description -> `label`, `description` | 16px, built on Radix. Without `label`/`description` it is the bare control. |
| `Radio`, `RadioGroup` | `Data state` Checked -> the group's `value` equals the Radio's `value`; Error/Invalid -> `aria-invalid`; `Interaction=Disabled` -> `disabled`; `label`, `description` | A Radio must be inside a `RadioGroup`. |
| `Card` + parts | `Card` (`size`: `default` / `sm`), `CardImage`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter` | Figma has no single Card component; the code mirrors its header/content/footer parts. 384px wide. |
| `Avatar` + parts | `Size` -> `size` (`sm` 24px, `default` 32px, `lg` 40px); image -> `AvatarImage`; fallback (icon or count) -> `AvatarFallback`; `Badge` -> `AvatarBadge`; group -> `AvatarGroup`, `AvatarGroupCount` | Built on Radix Avatar. |

Not built yet: Icon Button (exists in Figma), and the other 60+ components in the Figma file. Machine-readable summary: `llms.txt`.

## Boundaries for agents
- Do not push to GitHub, publish Code Connect, or publish to npm without the owner's confirmation. Show what will leave the computer first.
- Never ask for, type or store passwords, tokens or API keys. The owner signs in and publishes.
- Do not change the Figma file unless asked. Temporary frames made for comparison must be deleted afterwards.

## Known gaps
See PLAN.md "Figma fixes". The biggest for agents: no component in the Figma file has a description. Until that is fixed, this file and `llms.txt` are the descriptions.
