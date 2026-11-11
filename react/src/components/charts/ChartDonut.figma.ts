// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-849
// source=src/components/ChartsBasic.tsx
// component=ChartDonut
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ChartDonut data={data} config={config} />`,
  imports: ["import { ChartDonut } from \"@bounteous/ui\""],
  id: "chartdonut",
  metadata: { nestable: true },
}
