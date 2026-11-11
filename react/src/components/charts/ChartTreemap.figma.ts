// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-859
// source=src/components/ChartsAdvanced.tsx
// component=ChartTreemap
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ChartTreemap />`,
  imports: ["import { ChartTreemap } from \"@bounteous/ui\""],
  id: "charttreemap",
  metadata: { nestable: true },
}
