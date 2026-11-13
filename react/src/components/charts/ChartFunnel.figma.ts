// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-857
// source=src/components/ChartsAdvanced.tsx
// component=ChartFunnel
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartFunnel />`,
  imports: ["import { ChartFunnel } from \"@bounteous/ui\""],
  id: "chartfunnel",
  metadata: { nestable: true },
}
