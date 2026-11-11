// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=11-540
// source=src/components/StatCard.tsx
// component=StatCard
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const value = instance.getString('Value')
const trend = instance.getEnum('Trend', { up: 'up', down: 'down' })

export default {
  example: figma.code`<StatCard label="${label}" value="${value}" trend="${trend}" />`,
  imports: ["import { StatCard } from \"@bounteous/ui\""],
  id: "statcard",
  metadata: { nestable: true },
}
