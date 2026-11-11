// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-795
// source=src/components/AvatarStack.tsx
// component=AvatarStack
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<AvatarStack />`,
  imports: ["import { AvatarStack } from \"@bounteous/ui\""],
  id: "avatarstack",
  metadata: { nestable: true },
}
