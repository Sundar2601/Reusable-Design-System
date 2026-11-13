// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-846
// source=src/components/ChartsBasic.tsx
// component=ChartArea
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartArea data={data} config={config} xKey="month" />`,
  imports: ["import { ChartArea } from \"@bounteous/ui\""],
  id: "chartarea",
  metadata: { nestable: true },
}
