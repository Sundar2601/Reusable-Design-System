// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Design-System?node-id=12-81
// source=src/components/Radio.tsx
// component=Radio
//
// TODO before publishing: replace LIBRARY_FILE_KEY with the key of the Figma file that
// hosts the "Design System" library. 12-81 is the Radio component set in that file.
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
// "Selected" is the group's value matching this Radio's value.
const selected = instance.getEnum('Selected', { False: false, True: true })
const state = instance.getEnum('State', { Default: 'default', Disabled: 'disabled' })

export default {
  example: figma.code`<RadioGroup defaultValue="${selected ? 'option' : ''}"><Radio value="option" label="${label}"${state === 'disabled' ? ' disabled' : ''} /></RadioGroup>`,
  imports: ['import { Radio, RadioGroup } from "@your-scope/ui"'],
  id: 'radio',
  metadata: { nestable: true },
}
