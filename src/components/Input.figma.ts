// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=7-159
// source=src/components/Input.tsx
// component=Input
//
// Focus is a CSS state. Invalid becomes aria-invalid, Disabled becomes disabled.
// Value=placeholder shows the text as the placeholder; Value=filled shows it as the value.
import figma from 'figma'
const instance = figma.selectedInstance

const value = instance.getEnum('Value', { placeholder: 'placeholder', filled: 'filled' })
const invalid = instance.getEnum('Invalid', { false: false, true: true })
const disabled = instance.getEnum('Disabled', { false: false, true: true })
const rounded = instance.getEnum('Rounded', { false: false, true: true })
const text = instance.getString('Text')

export default {
  example: figma.code`<Input ${value === 'filled' ? 'defaultValue' : 'placeholder'}="${text}"${invalid ? ' aria-invalid' : ''}${disabled ? ' disabled' : ''}${rounded ? ' rounded' : ''} />`,
  imports: ['import { Input } from "@bounteous/ui"'],
  id: 'input',
  metadata: { nestable: true },
}
