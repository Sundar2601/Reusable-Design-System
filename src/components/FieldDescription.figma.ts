// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=8-2860
// source=src/components/Field.tsx
// component=FieldDescription
import figma from 'figma'
const instance = figma.selectedInstance

const align = instance.getEnum('Align', { left: 'left', right: 'right' })
const text = instance.getString('Text')

export default {
  example: figma.code`<FieldDescription align="${align}">${text}</FieldDescription>`,
  imports: ['import { FieldDescription } from "@bounteous/ui"'],
  id: 'field-description',
  metadata: { nestable: true },
}
