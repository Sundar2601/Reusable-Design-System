// url=https://www.figma.com/design/dcJKQOcHWk6gbH7lcMwicU/shadcn-ui-components-with-variables---Tailwind-classes---Updated-October-2026--Community-?node-id=1928-3999
// source=src/components/Field.tsx
// component=FieldLabel
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { Default: 'default', Destructive: 'default', Disabled: 'disabled' })
const required = instance.getBoolean('Asterisk')
const label = instance.getString('Field label')

export default {
  example: figma.code`<FieldLabel${required ? ' required' : ''}${state === 'disabled' ? ' disabled' : ''}>${label}</FieldLabel>`,
  imports: ['import { FieldLabel } from "@bounteous/ui"'],
  id: 'field-label',
  metadata: { nestable: true },
}
