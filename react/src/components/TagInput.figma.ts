// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-794
// source=src/components/TagInput.tsx
// component=TagInput
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<TagInput />`,
  imports: ["import { TagInput } from \"@bounteous/ui\""],
  id: "taginput",
  metadata: { nestable: true },
}
