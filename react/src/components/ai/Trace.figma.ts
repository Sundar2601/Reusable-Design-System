// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-488
// source=src/components/ai/Trace.tsx
// component=Trace
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'

export default {
  example: figma.code`<Trace>
  <TraceStep title="Step" status="complete" />
</Trace>`,
  imports: ["import { Trace, TraceStep } from \"@bounteous/ui\""],
  id: "trace",
  metadata: { nestable: true },
}
