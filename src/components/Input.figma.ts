// url=https://www.figma.com/design/dcJKQOcHWk6gbH7lcMwicU/shadcn-ui-components-with-variables---Tailwind-classes---Updated-October-2026--Community-?node-id=1928-3990
// source=src/components/Input.tsx
// component=Input
//
// Focus is a CSS state in code. Destructive becomes aria-invalid, Disabled becomes disabled.
// The addon text, icons and group toggles are not mapped: the code Input is the plain field.
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  Default: 'default',
  'Focus/Active': 'default',
  Destructive: 'invalid',
  Disabled: 'disabled',
})
// "Roudness" is a typo in the Figma file; the property name must match it exactly.
const rounded = instance.getEnum('Roudness', { Default: false, Rounded: true })

export default {
  example: figma.code`<Input placeholder="Placeholder"${state === 'invalid' ? ' aria-invalid' : ''}${state === 'disabled' ? ' disabled' : ''}${rounded ? ' rounded' : ''} />`,
  imports: ['import { Input } from "@bounteous/ui"'],
  id: 'input',
  metadata: { nestable: true },
}
