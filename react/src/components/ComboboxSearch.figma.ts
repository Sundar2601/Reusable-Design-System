// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-782
// source=src/components/Combobox.tsx
// component=Combobox
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Combobox options={[{ value: "one", label: "One" }]} />`,
  imports: ["import { Combobox } from \"@bounteous/ui\""],
  id: "comboboxsearch",
  metadata: { nestable: true },
}
