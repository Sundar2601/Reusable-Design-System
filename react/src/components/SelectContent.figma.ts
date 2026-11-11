// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-778
// source=src/components/Select.tsx
// component=SelectContent
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<SelectContent>
  <SelectItem value="one">One</SelectItem>
  <SelectItem value="two">Two</SelectItem>
</SelectContent>`,
  imports: ["import { SelectContent, SelectItem } from \"@bounteous/ui\""],
  id: "selectcontent",
  metadata: { nestable: true },
}
