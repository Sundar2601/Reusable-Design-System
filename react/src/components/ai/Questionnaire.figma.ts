// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-487
// source=src/components/ai/Questionnaire.tsx
// component=Questionnaire
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Questionnaire items={[]} />`,
  imports: ["import { Questionnaire } from \"@bounteous/ui\""],
  id: "questionnaire",
  metadata: { nestable: true },
}
