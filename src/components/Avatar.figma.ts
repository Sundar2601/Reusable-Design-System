// url=https://www.figma.com/design/dcJKQOcHWk6gbH7lcMwicU/shadcn-ui-components-with-variables---Tailwind-classes---Updated-October-2026--Community-?node-id=2192-2550
// source=src/components/Avatar.tsx
// component=Avatar
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { sm: 'sm', default: 'default', lg: 'lg' })
const badge = instance.getBoolean('Badge')

export default {
  example: figma.code`<Avatar size="${size}"><AvatarImage src="/avatar.png" alt="" /><AvatarFallback>AB</AvatarFallback>${badge ? '<AvatarBadge />' : ''}</Avatar>`,
  imports: ['import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@bounteous/ui"'],
  id: 'avatar',
  metadata: { nestable: true },
}
