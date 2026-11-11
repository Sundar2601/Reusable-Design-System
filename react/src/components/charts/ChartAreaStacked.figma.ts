// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-847
// source=src/components/ChartsBasic.tsx
// component=ChartAreaStacked
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ChartAreaStacked data={data} config={config} xKey="month" />`,
  imports: ["import { ChartAreaStacked } from \"@bounteous/ui\""],
  id: "chartareastacked",
  metadata: { nestable: true },
}
