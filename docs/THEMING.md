# Theming and branding

How to give a project (or client) its own look without changing components.

## How the layers work

```
Primitives  ->  Color (semantic, Light + Dark)  ->  components
neutral/500     control-border                      inset-ring-control-border
```

- **Primitives** (Figma collection `Primitives`) are raw colors. Components never use them.
- **Color** is the semantic layer: `background`, `primary`, `destructive`, `control-border` and so on. It has a Light and a Dark mode. Components use only these.
- In code, the same names are CSS variables in `react/src/theme/theme.css` (`--primary`) and Tailwind classes (`bg-primary`).

So a brand is a new set of values for the semantic Color tokens, nothing else.

## Re-theme for a project

1. **Pick the brand colors.** At least: `primary`, `primary-foreground`, `ring`, and the `chart-1` to `chart-5` series.
2. **In Figma** (Color collection), point those tokens at new primitives, or edit the primitive values. Set both Light and Dark.
3. **Check contrast** (see below).
4. **In code**, set the same values in `:root` and `.dark` of `theme.css` (or in a project override file that loads after it).
5. **Run** `cd react && npm run tokens:check`, then open Storybook in Light and Dark.

## What you may change

| Change freely | Ask the owner first | Do not change |
|---|---|---|
| `primary`, `ring`, `chart-*`, `sidebar-primary` | `radius/*`, font family, `destructive`, `success`, `warning`, `info` | Token names, component structure, focus-ring width, minimum sizes |

## Contrast checklist (every theme)

| Pair | Needs |
|---|---|
| `foreground` on `background`, `card-foreground` on `card` | 4.5:1 |
| `primary-foreground` on `primary` | 4.5:1 |
| `muted-foreground` on `background` and `muted` | 4.5:1 |
| `destructive` and `text-destructive` on `background` | 4.5:1 |
| `success-foreground`, `warning-foreground`, `info-foreground`, `destructive-foreground` on their color | 4.5:1 |
| `control-border` on `background` and `card` | 3:1 |
| `ring` on `background` | 3:1 |

Check both modes. The Guidelines page in Figma lists the current ratios as a model.

## Dark mode

Dark applies when an ancestor has the `.dark` class. Never write dark-specific colors inside a component.

## Fonts

Inter (UI) and Roboto Mono (code), loaded through `@fontsource-variable/inter`. To change the font, set `--font-sans` in `theme.css`, update the Figma text styles, and re-check line heights.

## Multiple brands

Define each brand as its own set of variable values: in Figma as extra modes of the Color collection (the Figma file already uses Light and Dark; add `Brand A / Light`, `Brand A / Dark`), in code as a class on an ancestor (for example `.brand-a`) that overrides the variables.
