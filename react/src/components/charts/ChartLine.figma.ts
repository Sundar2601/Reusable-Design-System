// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-845
// source=src/components/ChartsBasic.tsx
// component=ChartLine
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartLine data={data} config={config} xKey="month" />`,
  imports: ["import { ChartLine } from \"@bounteous/ui\""],
  id: "chartline",
  metadata: { nestable: true },
}
