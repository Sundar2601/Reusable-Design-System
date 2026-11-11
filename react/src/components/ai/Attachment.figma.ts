// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-486
// source=src/components/ai/Attachment.tsx
// component=Attachment
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Attachment>
  <AttachmentContent><AttachmentTitle>file.pdf</AttachmentTitle></AttachmentContent>
</Attachment>`,
  imports: ["import { Attachment, AttachmentContent, AttachmentTitle } from \"@bounteous/ui\""],
  id: "attachment",
  metadata: { nestable: true },
}
