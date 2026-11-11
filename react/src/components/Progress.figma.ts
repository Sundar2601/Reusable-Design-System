// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=7-253
// source=src/components/Progress.tsx
// component=Progress
import figma from 'figma'
const instance = figma.selectedInstance

const value = instance.getEnum('Value', { '0': 0, '33': 33, '66': 66, '100': 100 })

export default {
  example: figma.code`<Progress value={${value}} />`,
  imports: ["import { Progress } from \"@bounteous/ui\""],
  id: "progress",
  metadata: { nestable: true },
}
