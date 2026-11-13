// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-504
// source=src/components/ai/StackTrace.tsx
// component=StackTrace
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'

export default {
  example: figma.code`<StackTrace name="Error" message="Something failed" frames={[]} />`,
  imports: ["import { StackTrace } from \"@bounteous/ui\""],
  id: "stacktrace",
  metadata: { nestable: true },
}
