// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-497
// source=src/components/ai/Queue.tsx
// component=Queue
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Queue>
  <QueueSection>
    <QueueItem>Task</QueueItem>
  </QueueSection>
</Queue>`,
  imports: ["import { Queue, QueueSection, QueueItem } from \"@bounteous/ui\""],
  id: "queue",
  metadata: { nestable: true },
}
