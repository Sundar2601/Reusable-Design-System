// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=6-54
// source=src/components/Field.tsx
// component=FieldLabel
//
// The Figma Label is a single component without variants. Use required / disabled in code as needed.
import figma from 'figma'

export default {
  example: figma.code`<FieldLabel htmlFor="id">Label</FieldLabel>`,
  imports: ['import { FieldLabel } from "@bounteous/ui"'],
  id: 'field-label',
  metadata: { nestable: true },
}
