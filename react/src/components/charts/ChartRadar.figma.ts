// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-851
// source=src/components/ChartsAdvanced.tsx
// component=ChartRadar
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartRadar />`,
  imports: ["import { ChartRadar } from \"@bounteous/ui\""],
  id: "chartradar",
  metadata: { nestable: true },
}
