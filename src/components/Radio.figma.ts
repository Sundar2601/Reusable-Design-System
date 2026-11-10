// url=https://www.figma.com/design/dcJKQOcHWk6gbH7lcMwicU/shadcn-ui-components-with-variables---Tailwind-classes---Updated-October-2026--Community-?node-id=2064-573
// source=src/components/Radio.tsx
// component=Radio
//
// A Radio lives inside a RadioGroup. "Checked" means the group's value equals the Radio's value.
// Focus is a CSS state. Error becomes aria-invalid, Disabled becomes disabled.
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
  Error: 'default',
  'Error disabled': 'disabled',
})

export default {
  example: figma.code`<RadioGroup defaultValue="${checked ? 'option' : ''}"><Radio value="option" aria-label="Radio"${invalid ? ' aria-invalid' : ''}${interaction === 'disabled' ? ' disabled' : ''} /></RadioGroup>`,
  imports: ['import { Radio, RadioGroup } from "@bounteous/ui"'],
  id: 'radio',
  metadata: { nestable: true },
}
