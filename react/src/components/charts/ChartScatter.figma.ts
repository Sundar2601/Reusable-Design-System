// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-854
// source=src/components/ChartsAdvanced.tsx
// component=ChartScatter
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartScatter />`,
  imports: ["import { ChartScatter } from \"@bounteous/ui\""],
  id: "chartscatter",
  metadata: { nestable: true },
}
