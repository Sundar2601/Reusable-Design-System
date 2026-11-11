// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-500
// source=src/components/ai/Context.tsx
// component=Context
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Context used={42000} max={200000} />`,
  imports: ["import { Context } from \"@bounteous/ui\""],
  id: "context",
  metadata: { nestable: true },
}
