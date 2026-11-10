// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=8-150
// source=src/components/Avatar.tsx
// component=Avatar
//
// Type=image shows an AvatarImage with a fallback; Type=fallback shows only the AvatarFallback.
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { sm: 'sm', default: 'default', lg: 'lg' })
const type = instance.getEnum('Type', { image: 'image', fallback: 'fallback' })

export default {
  example: figma.code`<Avatar size="${size}">${type === 'image' ? '<AvatarImage src="/avatar.png" alt="" />' : ''}<AvatarFallback>AB</AvatarFallback></Avatar>`,
  imports: ['import { Avatar, AvatarFallback, AvatarImage } from "@bounteous/ui"'],
  id: 'avatar',
  metadata: { nestable: true },
}
