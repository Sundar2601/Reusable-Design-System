// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=7-421
// source=src/components/Radio.tsx
// component=Radio
//
// Radio with a label and an optional description, inside a RadioGroup.
import figma from 'figma'
const instance = figma.selectedInstance

const checked = instance.getEnum('Checked', { false: false, true: true })
const disabled = instance.getEnum('Disabled', { false: false, true: true })
const label = instance.getString('Label')
const description = instance.getString('Description')
const showDescription = instance.getBoolean('Show description')

export default {
  example: figma.code`<RadioGroup defaultValue="${checked ? 'option' : ''}"><Radio value="option" label="${label}"${showDescription ? ` description="${description}"` : ''}${disabled ? ' disabled' : ''} /></RadioGroup>`,
  imports: ['import { Radio, RadioGroup } from "@bounteous/ui"'],
  id: 'radio-field',
  metadata: { nestable: true },
}
