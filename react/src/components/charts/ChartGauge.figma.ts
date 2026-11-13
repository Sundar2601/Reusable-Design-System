// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-856
// source=src/components/ChartsAdvanced.tsx
// component=ChartGauge
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartGauge data={{ value: 72, label: "Score" }} />`,
  imports: ["import { ChartGauge } from \"@bounteous/ui\""],
  id: "chartgauge",
  metadata: { nestable: true },
}
