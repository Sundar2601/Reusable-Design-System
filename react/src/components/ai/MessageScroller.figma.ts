// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-489
// source=src/components/ai/MessageScroller.tsx
// component=MessageScroller
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<MessageScroller>{messages}</MessageScroller>`,
  imports: ["import { MessageScroller } from \"@bounteous/ui\""],
  id: "messagescroller",
  metadata: { nestable: true },
}
