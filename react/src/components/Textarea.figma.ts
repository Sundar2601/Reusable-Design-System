// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=6-85
// source=src/components/Textarea.tsx
// component=Textarea
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { default: '', focus: '', disabled: ' disabled', error: ' aria-invalid' })
const text = instance.getString('Text')

export default {
  example: figma.code`<Textarea placeholder="${text}"${state} />`,
  imports: ["import { Textarea } from \"@bounteous/ui\""],
  id: "textarea",
  metadata: { nestable: true },
}
