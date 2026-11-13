# Component status

Every component has a status so a project knows what it can rely on. The Figma file lists the same status on the Documentation page.

## Statuses

| Status | Meaning | Rely on it? |
|---|---|---|
| **Stable** | Designed, built in React and Angular, tested, mapped in Code Connect. API changes follow semver and a deprecation period. | Yes |
| **Beta** | Works and is used, but the API or look may still change in a MINOR release. | With care |
| **Planned** | Designed in Figma, no code yet. | No |
| **Deprecated** | Has a replacement. Removed after one MINOR version. The Figma description starts with "Deprecated:" and names the replacement. | No |

## Current tiers

| Tier | Status | Components |
|---|---|---|
| Core (shadcn/ui) | **Stable** | Button, Toggle, Toggle Group, Label, Input, Textarea, Select, Field, Button Group, Input Group, Combobox, Date Picker, Kbd, Input OTP, Checkbox, Radio, Switch, Slider, Alert, Badge, Progress, Skeleton, Sonner, Tooltip, Card, Avatar, Separator, Accordion, Collapsible, Hover Card, Empty, Item, Spinner, Tabs, Breadcrumb, Pagination, Navigation Menu, Menubar, Sidebar, Dialog, Alert Dialog, Sheet, Drawer, Popover, Dropdown Menu, Context Menu, Command, Table, Data Table, Calendar, Carousel, Resizable, Scroll Area, Code Block |
| Extended (beyond shadcn) | **Beta** | Stepper, Timeline, Rating, File Upload, Tag Input, Number Input, Banner, Avatar Group, Segmented Control, Stat Card, Page Header, Filter Bar, Tree View, Notification Item |
| Charts | **Stable** for basic (bar, line, area, pie, radar, radial); **Beta** for advanced (scatter, sparkline, gauge, funnel, heatmap, treemap, sankey) | |
| AI elements | **Beta** | Chat thread, Message, Bubble, Prompt Input, Reasoning, Chain of Thought, Tool, Plan, Queue, Sources, Terminal, Test Results, Stack Trace and the rest |
| Mobile (iOS and Android) | **Beta** | The iOS (HIG) and Android (Material 3) component sets |
| Smartwatch, TV, spatial (AR/VR/XR), car, voice | **Planned** | Rules, numbers and component lists are in `PLATFORMS.md`. The `Surfaces` tokens are in the new Figma file. No components built. |

These tiers are a starting proposal. The owner confirms them, and a component moves up when it meets the Stable checklist in `GOVERNANCE.md`.

## Known gaps

- **Avatar Badge** has no Angular version (the Angular avatar has no badge).
- **Select, Combobox and Date Picker** have `error` and `disabled` states in Figma and React; their Code Connect mappings in Figma still show the older snippets until the owner republishes.
- Names differ slightly between frameworks: React `Radio` and `DropdownMenu` are `radio-group` and `dropdown` in Angular.
