// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-860
// source=src/components/ChartsAdvanced.tsx
// component=ChartSankey
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartSankey />`,
  imports: ["import { ChartSankey } from \"@bounteous/ui\""],
  id: "chartsankey",
  metadata: { nestable: true },
}
