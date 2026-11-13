// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-850
// source=src/components/ChartsBasic.tsx
// component=ChartDonutText
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartDonutText data={data} config={config} label="Visitors" />`,
  imports: ["import { ChartDonutText } from \"@bounteous/ui\""],
  id: "chartdonuttext",
  metadata: { nestable: true },
}
