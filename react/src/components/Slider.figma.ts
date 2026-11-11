// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=7-181
// source=src/components/Slider.tsx
// component=Slider
import figma from 'figma'
const instance = figma.selectedInstance

const disabled = instance.getEnum('State', { default: '', focus: '', disabled: ' disabled' })

export default {
  example: figma.code`<Slider defaultValue={[50]}${disabled} />`,
  imports: ["import { Slider } from \"@bounteous/ui\""],
  id: "slider",
  metadata: { nestable: true },
}
