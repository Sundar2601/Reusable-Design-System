// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Design-System?node-id=12-39
// source=src/components/Input.tsx
// component=Input
//
// TODO before publishing: replace LIBRARY_FILE_KEY with the key of the Figma file that
// hosts the "Design System" library. 12-39 is the Input component set in that file.
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const placeholder = instance.getString('Placeholder')
const helperText = instance.getString('Helper text')
// Focus is a CSS state in code. Error and Disabled become props.
const state = instance.getEnum('State', {
  Default: 'default',
  Focus: 'default',
  Error: 'error',
  Disabled: 'disabled',
})

export default {
  example: figma.code`<Input label="${label}" placeholder="${placeholder}" helperText="${helperText}"${state === 'error' ? ' error' : ''}${state === 'disabled' ? ' disabled' : ''} />`,
  imports: ['import { Input } from "@your-scope/ui"'],
  id: 'input',
  metadata: { nestable: true },
}
