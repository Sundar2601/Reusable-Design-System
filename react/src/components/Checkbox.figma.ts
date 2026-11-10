// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=7-273
// source=src/components/Checkbox.tsx
// component=Checkbox
//
// The bare 16px control. Invalid becomes aria-invalid, Disabled becomes disabled.
// Focus is a CSS state. For the control with a label see CheckboxField.figma.ts.
import figma from 'figma'
const instance = figma.selectedInstance

const checked = instance.getEnum('Checked', { false: '', true: ' defaultChecked', indeterminate: ' defaultChecked="indeterminate"' })
const invalid = instance.getEnum('Invalid', { false: false, true: true })
const disabled = instance.getEnum('Disabled', { false: false, true: true })

export default {
  example: figma.code`<Checkbox aria-label="Checkbox"${checked}${invalid ? ' aria-invalid' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ['import { Checkbox } from "@bounteous/ui"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
