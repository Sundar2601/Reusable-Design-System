// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-842
// source=src/components/ChartsBasic.tsx
// component=ChartBar
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ChartBar data={data} config={config} xKey="month" />`,
  imports: ["import { ChartBar } from \"@bounteous/ui\""],
  id: "chartbar",
  metadata: { nestable: true },
}
