// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=6-111
// source=src/components/Select.tsx
// component=SelectItem
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')

export default {
  example: figma.code`<SelectItem value="item">${label}</SelectItem>`,
  imports: ["import { SelectItem } from \"@bounteous/ui\""],
  id: "selectitem",
  metadata: { nestable: true },
}
