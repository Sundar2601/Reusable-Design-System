// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Design-System?node-id=12-179
// source=src/components/Avatar.tsx
// component=Avatar
//
// TODO before publishing: replace LIBRARY_FILE_KEY with the key of the Figma file that
// hosts the "Design System" library. 12-179 is the Avatar component set in that file.
import figma from 'figma'
const instance = figma.selectedInstance

const initials = instance.getString('Initials')
const size = instance.getEnum('Size', { Small: 'sm', Medium: 'md', Large: 'lg' })

export default {
  example: figma.code`<Avatar size="${size}" initials="${initials}" />`,
  imports: ['import { Avatar } from "@your-scope/ui"'],
  id: 'avatar',
  metadata: { nestable: true },
}
