// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=8-156
// source=src/components/Separator.tsx
// component=Separator
import figma from 'figma'
const instance = figma.selectedInstance

const orientation = instance.getEnum('Orientation', { horizontal: 'horizontal', vertical: 'vertical' })

export default {
  example: figma.code`<Separator orientation="${orientation}" />`,
  imports: ["import { Separator } from \"@bounteous/ui\""],
  id: "separator",
  metadata: { nestable: true },
}
