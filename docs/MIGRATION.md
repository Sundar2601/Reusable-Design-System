# Adopting the design system in an existing app

A plan for moving a project onto `@bounteous/ui` (React) or the Angular components, one area at a time.

## 1. Set up

**React**
1. Install `@bounteous/ui` (`npm i @bounteous/ui`; the owner gives you registry access). It is built and tested as a package, but check with the owner that the first version has been published. Until then, install the tarball (`npm pack` in `react/`) or add the repo as a git or workspace dependency, or copy `react/src/components`, `react/src/lib/utils.ts` and `react/src/theme` into your app (the shadcn way).
2. Install what the styles need: `tailwindcss` v4, `tw-animate-css`, `@fontsource-variable/inter`. React 19 is a peer dependency.
3. In your main CSS file, in this order (this is the repo's own `src/index.css`):
   ```css
   @import 'tailwindcss';
   @import 'tw-animate-css';
   @import '@fontsource-variable/inter';
   @import '@bounteous/ui/theme.css';
   @import '@bounteous/ui/utilities.css'; /* optional: Scroll Fade, Shimmer */
   @source '../node_modules/@bounteous/ui/dist-lib'; /* so Tailwind generates the classes the components use */
   ```
   Adjust the `@source` path to where your CSS file sits.
4. Import components: `import { Button, Input } from '@bounteous/ui'`. Types are included.

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
