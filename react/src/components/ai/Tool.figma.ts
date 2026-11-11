// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-494
// source=src/components/ai/Tool.tsx
// component=Tool
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Tool>
  <ToolHeader />
  <ToolContent>
    <ToolInput input={{ query: "design system" }} />
  </ToolContent>
</Tool>`,
  imports: ["import { Tool, ToolHeader, ToolContent, ToolInput } from \"@bounteous/ui\""],
  id: "tool",
  metadata: { nestable: true },
}
