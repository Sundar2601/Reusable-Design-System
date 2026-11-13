// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-490
// source=src/components/ai/PromptInput.tsx
// component=PromptInput
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'

export default {
  example: figma.code`<PromptInput>
  <PromptInputTextarea />
  <PromptInputSubmit />
</PromptInput>`,
  imports: ["import { PromptInput, PromptInputTextarea, PromptInputSubmit } from \"@bounteous/ui\""],
  id: "promptinput",
  metadata: { nestable: true },
}
