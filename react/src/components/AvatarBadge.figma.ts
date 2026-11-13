// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=119-422
// source=src/components/Avatar.tsx
// component=AvatarBadge
//
// Size follows the parent Avatar (sm, default, lg). Status picks the dot color from existing tokens.
import figma from 'figma'
const instance = figma.selectedInstance

const status = instance.getEnum('Status', {
  online: 'bg-success',
  away: 'bg-warning',
  busy: 'bg-destructive',
  offline: 'bg-muted-foreground',
})

export default {
  example: figma.code`<Avatar>
  <AvatarFallback>AB</AvatarFallback>
  <AvatarBadge className="${status}" />
</Avatar>`,
  imports: ['import { Avatar, AvatarBadge, AvatarFallback } from "@bounteous/ui"'],
  id: 'avatarbadge',
  metadata: { nestable: true },
}
