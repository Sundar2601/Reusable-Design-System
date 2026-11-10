// url=https://www.figma.com/design/dcJKQOcHWk6gbH7lcMwicU/shadcn-ui-components-with-variables---Tailwind-classes---Updated-October-2026--Community-?node-id=1939-2183
// source=src/components/Checkbox.tsx
// component=Checkbox
//
// Focus is a CSS state. Invalid becomes aria-invalid, Disabled becomes disabled.
import figma from 'figma'
const instance = figma.selectedInstance

const checked = instance.getEnum('Data state', {
  Checked: true,
  Unchecked: false,
  'Invalid-checked': true,
  'Invalid-unchecked': false,
})
const invalid = instance.getEnum('Data state', {
  Checked: false,
  Unchecked: false,
  'Invalid-checked': true,
  'Invalid-unchecked': true,
})
const interaction = instance.getEnum('Interaction', {
  Default: 'default',
  Focus: 'default',
  Disabled: 'disabled',
  Invalid: 'default',
})

export default {
  example: figma.code`<Checkbox aria-label="Checkbox"${checked ? ' defaultChecked' : ''}${invalid ? ' aria-invalid' : ''}${interaction === 'disabled' ? ' disabled' : ''} />`,
  imports: ['import { Checkbox } from "@bounteous/ui"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
