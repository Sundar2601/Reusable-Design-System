// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=8-2855
// source=src/components/Field.tsx
// component=FieldLabel
import figma from 'figma'
const instance = figma.selectedInstance

const required = instance.getEnum('Required', { false: false, true: true })
const disabled = instance.getEnum('Disabled', { false: false, true: true })
const text = instance.getString('Text')

export default {
  example: figma.code`<FieldLabel${required ? ' required' : ''}${disabled ? ' disabled' : ''}>${text}</FieldLabel>`,
  imports: ['import { FieldLabel } from "@bounteous/ui"'],
  id: 'field-label',
  metadata: { nestable: true },
}
