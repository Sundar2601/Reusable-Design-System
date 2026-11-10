// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=7-120
// source=src/components/Checkbox.tsx
// component=Checkbox
//
// Checked=indeterminate has no prop in code yet and maps to checked. focus is a CSS state.
import figma from 'figma'
const instance = figma.selectedInstance

const checked = instance.getEnum('Checked', { unchecked: false, checked: true, indeterminate: true })
const disabled = instance.getEnum('State', { default: false, focus: false, disabled: true })

export default {
  example: figma.code`<Checkbox${checked ? ' defaultChecked' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ['import { Checkbox } from "@bounteous/ui"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
