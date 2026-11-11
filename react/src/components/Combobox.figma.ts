// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=6-178
// source=src/components/Combobox.tsx
// component=Combobox
//
// State closed/open is internal popover state.
import figma from 'figma'
const instance = figma.selectedInstance

const value = instance.getString('Value')

export default {
  example: figma.code`<Combobox placeholder="${value}" options={[{ value: "one", label: "One" }]} />`,
  imports: ["import { Combobox } from \"@bounteous/ui\""],
  id: "combobox",
  metadata: { nestable: true },
}
