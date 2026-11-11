// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=7-241
// source=src/components/Badge.tsx
// component=Badge
//
// Code Badge has no success or warning variant; they map to default.
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', { default: 'default', secondary: 'secondary', destructive: 'destructive', outline: 'outline', success: 'default', warning: 'default' })
const label = instance.getString('Label')

export default {
  example: figma.code`<Badge variant="${variant}">${label}</Badge>`,
  imports: ["import { Badge } from \"@bounteous/ui\""],
  id: "badge",
  metadata: { nestable: true },
}
