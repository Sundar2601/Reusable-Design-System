// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=114-453
// source=src/components/Field.tsx
// component=Field
//
// State error -> aria-invalid on the control, and the error text replaces the description.
// State disabled -> disabled on the label and the control. Orientation is layout only.
import figma from 'figma'
const instance = figma.selectedInstance

const required = instance.getBoolean('Required')
const showDescription = instance.getBoolean('Show description')
const description = instance.getString('Description')
const error = instance.getString('Error')
const state = instance.getEnum('State', { default: 'default', error: 'error', disabled: 'disabled' })

export default {
  example: figma.code`<Field>
  <FieldLabel htmlFor="email"${required ? ' required' : ''}${state === 'disabled' ? ' disabled' : ''}>Email</FieldLabel>
  <Input id="email"${state === 'error' ? ' aria-invalid' : ''}${state === 'disabled' ? ' disabled' : ''} />
  ${state === 'error' ? `<FieldDescription>${error}</FieldDescription>` : showDescription ? `<FieldDescription>${description}</FieldDescription>` : ''}
</Field>`,
  imports: ['import { Field, FieldDescription, FieldLabel, Input } from "@bounteous/ui"'],
  id: 'field',
  metadata: { nestable: true },
}
