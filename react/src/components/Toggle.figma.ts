// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=5-337
// source=src/components/Toggle.tsx
// component=Toggle
//
// Figma State hover and focus are CSS states; on maps to defaultPressed.
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', { default: 'default', outline: 'outline' })
const size = instance.getEnum('Size', { default: 'default', sm: 'sm', lg: 'lg' })
const state = instance.getEnum('State', { off: '', on: ' defaultPressed', hover: '', focus: '', disabled: ' disabled' })
const label = instance.getString('Label')

export default {
  example: figma.code`<Toggle variant="${variant}" size="${size}"${state}>${label}</Toggle>`,
  imports: ["import { Toggle } from \"@bounteous/ui\""],
  id: "toggle",
  metadata: { nestable: true },
}
