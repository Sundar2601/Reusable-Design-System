// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-493
// source=src/components/ai/ChainOfThought.tsx
// component=ChainOfThought
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ChainOfThought>
  <ChainOfThoughtStep label="Step" status="complete" />
</ChainOfThought>`,
  imports: ["import { ChainOfThought, ChainOfThoughtStep } from \"@bounteous/ui\""],
  id: "chainofthought",
  metadata: { nestable: true },
}
