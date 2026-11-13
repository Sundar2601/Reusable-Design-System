# Adopting the design system in an existing app

A plan for moving a project onto `@bounteous/ui` (React) or the Angular components, one area at a time.

## 1. Set up

**React**
1. Get the code. `@bounteous/ui` is not published to a registry yet (see `RELEASING.md`, "Before the first release"). Until it is, either add this repo as a git or workspace dependency, or copy `react/src/components`, `react/src/lib/utils.ts` and `react/src/theme` into your app (the shadcn way).
2. Import the theme once, at the app root: `src/theme/theme.css` (it defines every token and the Light and Dark modes). Also import `src/theme/utilities.css` if you use Scroll Fade or Shimmer.
3. Make sure Tailwind v4 is on.
4. Load Inter (`@fontsource-variable/inter`). The theme expects it.

**Angular**
1. Copy the components from `angular/src/app/shared/components` (and `app/shared/extended` for the extra ones).
2. Import `src/styles.css`. It already pulls in the shared `theme.css` from the React folder, plus `typeset.css` and `utilities.css`.

## 2. Map what you have

List your current colors, font sizes, spacings and radii, and match each to a token:

| Your old value | Use |
|---|---|
| Any brand blue | `primary` (re-theme, see `THEMING.md`) |
| Any red | `destructive` |
| Gray backgrounds and text | `muted`, `muted-foreground` |
| Borders on cards and dividers | `border` |
| Borders on form fields | `control-border` |
| Font sizes | `text-xs` to `text-xl` (12, 14, 16, 18, 20) |
| Radii | `rounded-md` for controls, `rounded-xl` for cards |

Anything that has no match is either a mistake in the old design or a request for a new token (see `GOVERNANCE.md`).

## 3. Migrate in this order

1. **Tokens first.** Load the theme. Nothing changes visually yet.
2. **Atoms:** Button, Input, Label, Checkbox, Radio, Switch, Badge. Replace one component type at a time across the app.
3. **Forms:** Field, Select, Textarea, validation messages. Use `aria-invalid`.
4. **Feedback:** Alert, Sonner (toasts), Dialog.
5. **Layout and navigation:** Card, Tabs, Sidebar, Table.
6. **Remove** the old styles for anything you replaced.

Do one area per pull request. Check Light and Dark and the keyboard on each.

## 4. Check each step

- It looks right in Light and Dark.
- You can use it with the keyboard only; the focus ring is visible.
- Every field has a label.
- `npm test` and your own tests pass.

## 5. Common problems

| Problem | Cause and fix |
|---|---|
| Colors look wrong in dark mode | The `.dark` class is not on an ancestor. Add it to `<html>`. |
| Fields have no visible border | Old CSS is overriding `inset-ring`. Remove the old border rule. |
| Text looks different | Inter isn't loaded, or a global font-size is set. |
| A prop doesn't exist | Props match Figma. Check the component page in Storybook; do not invent props. |

## 6. Get help

See `GOVERNANCE.md` for where to ask and how to request a missing component.
