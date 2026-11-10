// url=https://www.figma.com/design/dcJKQOcHWk6gbH7lcMwicU/shadcn-ui-components-with-variables---Tailwind-classes---Updated-October-2026--Community-?node-id=1930-445
// source=src/components/Field.tsx
// component=FieldDescription
import figma from 'figma'
const instance = figma.selectedInstance

const align = instance.getEnum('Alignment', { Left: 'left', Right: 'right' })

export default {
  example: figma.code`<FieldDescription align="${align}">Description</FieldDescription>`,
  imports: ['import { FieldDescription } from "@bounteous/ui"'],
  id: 'field-description',
  metadata: { nestable: true },
}
