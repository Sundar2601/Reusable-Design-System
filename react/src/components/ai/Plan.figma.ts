// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-496
// source=src/components/ai/Plan.tsx
// component=Plan
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Plan>
  <PlanHeader>Plan</PlanHeader>
  <PlanContent>Steps</PlanContent>
</Plan>`,
  imports: ["import { Plan, PlanHeader, PlanContent } from \"@bounteous/ui\""],
  id: "plan",
  metadata: { nestable: true },
}
