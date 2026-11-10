// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=7-1097
// source=src/components/Avatar.tsx
// component=Avatar
//
// Type=image shows an AvatarImage with a fallback; fallback and icon show only the AvatarFallback.
// The Badge toggle adds the green status dot (AvatarBadge).
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { sm: 'sm', default: 'default', lg: 'lg' })
const type = instance.getEnum('Type', { fallback: 'fallback', icon: 'icon', image: 'image' })
const initials = instance.getString('Initials')
const badge = instance.getBoolean('Badge')

export default {
  example: figma.code`<Avatar size="${size}">${type === 'image' ? '<AvatarImage src="/avatar.png" alt="" />' : ''}<AvatarFallback>${type === 'icon' ? '<User />' : initials}</AvatarFallback>${badge ? '<AvatarBadge />' : ''}</Avatar>`,
  imports: ['import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@bounteous/ui"', 'import { User } from "lucide-react"'],
  id: 'avatar',
  metadata: { nestable: true },
}
