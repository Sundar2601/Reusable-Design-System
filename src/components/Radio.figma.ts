// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=7-394
// source=src/components/Radio.tsx
// component=Radio
//
// A Radio lives inside a RadioGroup. Checked means the group's value equals the Radio's value.
// Focus is a CSS state. Invalid becomes aria-invalid, Disabled becomes disabled.
import figma from 'figma'
const instance = figma.selectedInstance

const checked = instance.getEnum('Checked', { false: false, true: true })
const invalid = instance.getEnum('Invalid', { false: false, true: true })
const disabled = instance.getEnum('Disabled', { false: false, true: true })

export default {
  example: figma.code`<RadioGroup defaultValue="${checked ? 'option' : ''}"><Radio value="option" aria-label="Radio"${invalid ? ' aria-invalid' : ''}${disabled ? ' disabled' : ''} /></RadioGroup>`,
  imports: ['import { Radio, RadioGroup } from "@bounteous/ui"'],
  id: 'radio',
  metadata: { nestable: true },
}
