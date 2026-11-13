// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=122-430
// source=src/components/Kbd.tsx
// component=KbdGroup
import figma from 'figma'

export default {
  example: figma.code`<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>B</Kbd>
</KbdGroup>`,
  imports: ['import { Kbd, KbdGroup } from "@bounteous/ui"'],
  id: 'kbdgroup',
  metadata: { nestable: true },
}
