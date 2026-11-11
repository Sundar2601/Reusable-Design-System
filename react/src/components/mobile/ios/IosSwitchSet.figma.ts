// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=12-119
// source=src/components/mobile/ios/IosSwitch.tsx
// component=IosSwitch
import figma from 'figma'
const instance = figma.selectedInstance

const checked = instance.getEnum('Checked', { false: '', true: ' defaultChecked' })

export default {
  example: figma.code`<IosSwitch${checked} />`,
  imports: ["import { IosSwitch } from \"@bounteous/ui\""],
  id: "iosswitchset",
  metadata: { nestable: true },
}
