// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-783
// source=src/components/Combobox.tsx
// component=Combobox
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Combobox options={[{ value: "one", label: "One" }]} />`,
  imports: ["import { Combobox } from \"@bounteous/ui\""],
  id: "comboboxitems",
  metadata: { nestable: true },
}
