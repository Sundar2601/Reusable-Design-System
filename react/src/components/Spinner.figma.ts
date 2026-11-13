// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=122-421
// source=src/components/Spinner.tsx
// component=Spinner
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { '16': 'size-4', '20': 'size-5', '24': 'size-6' })

export default {
  example: figma.code`<Spinner className="${size}" />`,
  imports: ['import { Spinner } from "@bounteous/ui"'],
  id: 'spinner',
  metadata: { nestable: true },
}
