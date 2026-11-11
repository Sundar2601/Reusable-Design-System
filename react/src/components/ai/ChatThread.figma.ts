// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-484
// source=src/components/ai/Message.tsx
// component=ChatThread
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ChatThread>
  <Message align="end"><MessageContent>Hello</MessageContent></Message>
</ChatThread>`,
  imports: ["import { ChatThread, Message, MessageContent } from \"@bounteous/ui\""],
  id: "chatthread",
  metadata: { nestable: true },
}
