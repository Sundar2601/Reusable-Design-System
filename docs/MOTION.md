# Motion

How things move. Tokens are the Figma `Motion` collection.

## Tokens

| Token | Value |
|---|---|
| `duration/instant` | 75 ms |
| `duration/fast` | 150 ms |
| `duration/base` | 200 ms |
| `duration/slow` | 300 ms |
| `duration/slower` | 500 ms |
| `easing/out` | `cubic-bezier(0, 0, 0.2, 1)`: things entering |
| `easing/in` | `cubic-bezier(0.4, 0, 1, 1)`: things leaving |
| `easing/in-out` | `cubic-bezier(0.4, 0, 0.2, 1)`: things that change in place |
| `easing/linear` | `linear`: spinners and progress |

## Rules

1. **Move to give feedback or show where something came from.** Not for decoration.
2. **Small and quick for small things.** Hover, press and focus use `fast`.
3. **Entering is slower than leaving.** Enter with `easing/out`; leave with `easing/in` at about two thirds of the time.
4. **Only animate `opacity`, `transform` and color.** Not width, height or layout.
5. **Never block the user.** An animation must not delay the next action.

## Targets per component

Proposed targets. The code currently uses the `tw-animate-css` defaults (mostly `duration-200`, fade and zoom), so this table is where it should converge.

| Component | Enter | Leave |
|---|---|---|
| Button, Toggle, Checkbox, Radio, Switch, Input (state change) | `fast`, `in-out` | n/a |
| Tooltip | `fast`, `out` | `instant`, `in` |
| Popover, Select, Dropdown Menu, Hover Card, Combobox | `base`, `out` | `fast`, `in` |
| Accordion, Collapsible | `base`, `out` | `base`, `in-out` |
| Tabs (indicator) | `base`, `in-out` | n/a |
| Dialog, Alert Dialog | `slow`, `out` | `base`, `in` |
| Sheet, Drawer | `slow`, `out` | `base`, `in` |
| Sonner (toast) | `slow`, `out` | `base`, `in` |
| Spinner | `linear`, loop | n/a |

## Reduced motion

`src/theme/theme.css` has a global `prefers-reduced-motion: reduce` rule that ends all transitions and animations at once. Elements with `role="status"` (Spinner) are excluded so loading stays visible. Do not add motion that depends on movement to be understood; the information must also be in text or color.
