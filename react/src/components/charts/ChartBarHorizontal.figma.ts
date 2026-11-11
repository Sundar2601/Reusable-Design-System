// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-844
// source=src/components/ChartsBasic.tsx
// component=ChartBarHorizontal
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ChartBarHorizontal data={data} config={config} xKey="month" />`,
  imports: ["import { ChartBarHorizontal } from \"@bounteous/ui\""],
  id: "chartbarhorizontal",
  metadata: { nestable: true },
}
