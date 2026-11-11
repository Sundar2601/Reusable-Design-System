// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-506
// source=src/components/ai/Subagent.tsx
// component=Subagent
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Subagent name="Agent" task="Task" status="pending" />`,
  imports: ["import { Subagent } from \"@bounteous/ui\""],
  id: "subagent",
  metadata: { nestable: true },
}
