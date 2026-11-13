// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-843
// source=src/components/ChartsBasic.tsx
// component=ChartBarStacked
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartBarStacked data={data} config={config} xKey="month" />`,
  imports: ["import { ChartBarStacked } from \"@bounteous/ui\""],
  id: "chartbarstacked",
  metadata: { nestable: true },
}
