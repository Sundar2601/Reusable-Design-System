// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-858
// source=src/components/ChartsAdvanced.tsx
// component=ChartHeatmap
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ChartHeatmap />`,
  imports: ["import { ChartHeatmap } from \"@bounteous/ui\""],
  id: "chartheatmap",
  metadata: { nestable: true },
}
