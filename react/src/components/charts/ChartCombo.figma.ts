// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-853
// source=src/components/ChartsAdvanced.tsx
// component=ChartCombo
//
// Figma chart is an example card without properties; the Advanced charts ship default data.
import figma from 'figma'

export default {
  example: figma.code`<ChartCombo />`,
  imports: ["import { ChartCombo } from \"@bounteous/ui\""],
  id: "chartcombo",
  metadata: { nestable: true },
}
