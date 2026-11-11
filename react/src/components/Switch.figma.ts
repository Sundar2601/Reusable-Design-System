// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=7-164
// source=src/components/Switch.tsx
// component=Switch
import figma from 'figma'
const instance = figma.selectedInstance

const checked = instance.getEnum('Checked', { false: '', true: ' defaultChecked' })
const disabled = instance.getEnum('State', { default: '', focus: '', disabled: ' disabled' })

export default {
  example: figma.code`<Switch${checked}${disabled} />`,
  imports: ["import { Switch } from \"@bounteous/ui\""],
  id: "switch",
  metadata: { nestable: true },
}
