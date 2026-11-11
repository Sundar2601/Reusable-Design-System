// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=6-102
// source=src/components/Select.tsx
// component=Select
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { default: '', open: '', disabled: ' disabled' })
const placeholder = instance.getString('Placeholder')

export default {
  example: figma.code`<Select>
  <SelectTrigger${state}>
    <SelectValue placeholder="${placeholder}" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="one">One</SelectItem>
  </SelectContent>
</Select>`,
  imports: ["import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from \"@bounteous/ui\""],
  id: "selecttrigger",
  metadata: { nestable: true },
}
