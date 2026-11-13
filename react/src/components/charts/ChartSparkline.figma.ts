// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-855
// source=src/components/ChartsAdvanced.tsx
// component=ChartSparkline
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartSparkline />`,
  imports: ["import { ChartSparkline } from \"@bounteous/ui\""],
  id: "chartsparkline",
  metadata: { nestable: true },
}
