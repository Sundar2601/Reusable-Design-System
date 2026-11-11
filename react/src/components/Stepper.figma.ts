// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=11-315
// source=src/components/Stepper.tsx
// component=Stepper
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')

export default {
  example: figma.code`<Stepper current={1} steps={[{ title: "${title}", description: "${description}" }]} />`,
  imports: ["import { Stepper } from \"@bounteous/ui\""],
  id: "stepper",
  metadata: { nestable: true },
}
