// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=7-302
// source=src/components/Checkbox.tsx
// component=Checkbox
//
// Checkbox with a label and an optional description: the code Checkbox with label and description props.
import figma from 'figma'
const instance = figma.selectedInstance

const checked = instance.getEnum('Checked', { false: false, true: true })
const disabled = instance.getEnum('Disabled', { false: false, true: true })
const label = instance.getString('Label')
const description = instance.getString('Description')
const showDescription = instance.getBoolean('Show description')

export default {
  example: figma.code`<Checkbox label="${label}"${showDescription ? ` description="${description}"` : ''}${checked ? ' defaultChecked' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ['import { Checkbox } from "@bounteous/ui"'],
  id: 'checkbox-field',
  metadata: { nestable: true },
}
