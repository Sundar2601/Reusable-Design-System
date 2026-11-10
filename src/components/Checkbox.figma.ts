// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Design-System?node-id=12-65
// source=src/components/Checkbox.tsx
// component=Checkbox
//
// TODO before publishing: replace LIBRARY_FILE_KEY with the key of the Figma file that
// hosts the "Design System" library. 12-65 is the Checkbox component set in that file.
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const checked = instance.getEnum('Checked', { False: false, True: true })
const state = instance.getEnum('State', { Default: 'default', Disabled: 'disabled' })

export default {
  example: figma.code`<Checkbox label="${label}"${checked ? ' defaultChecked' : ''}${state === 'disabled' ? ' disabled' : ''} />`,
  imports: ['import { Checkbox } from "@bounteous/ui"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
