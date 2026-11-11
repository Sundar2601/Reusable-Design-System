// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=13-216
// source=src/components/mobile/android/AndroidSwitch.tsx
// component=AndroidSwitch
import figma from 'figma'
const instance = figma.selectedInstance

const checked = instance.getEnum('Checked', { false: '', true: ' defaultChecked' })

export default {
  example: figma.code`<AndroidSwitch${checked} />`,
  imports: ["import { AndroidSwitch } from \"@bounteous/ui\""],
  id: "androidswitchset",
  metadata: { nestable: true },
}
