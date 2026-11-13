// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-502
// source=src/components/ai/Terminal.tsx
// component=Terminal
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'

export default {
  example: figma.code`<Terminal output="$ npm test" />`,
  imports: ["import { Terminal } from \"@bounteous/ui\""],
  id: "terminal",
  metadata: { nestable: true },
}
