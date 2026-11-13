// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-848
// source=src/components/ChartsBasic.tsx
// component=ChartPie
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartPie data={data} config={config} />`,
  imports: ["import { ChartPie } from \"@bounteous/ui\""],
  id: "chartpie",
  metadata: { nestable: true },
}
