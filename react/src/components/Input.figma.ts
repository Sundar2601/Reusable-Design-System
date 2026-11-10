// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=6-71
// source=src/components/Input.tsx
// component=Input
//
// State=error maps to aria-invalid, disabled to disabled. focus is a CSS state. filled shows the typed text.
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { default: 'default', focus: 'focus', filled: 'filled', disabled: 'disabled', error: 'error' })
const text = instance.getString('Text')

export default {
  example: figma.code`<Input ${state === 'filled' ? 'defaultValue' : 'placeholder'}="${text}"${state === 'disabled' ? ' disabled' : ''}${state === 'error' ? ' aria-invalid' : ''} />`,
  imports: ['import { Input } from "@bounteous/ui"'],
  id: 'input',
  metadata: { nestable: true },
}
