// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=12-49
// source=src/components/mobile/ios/IosTabBar.tsx
// component=IosTabBar
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const selected = instance.getEnum('State', { selected: 'home', unselected: 'other' })

export default {
  example: figma.code`<IosTabBar value="${selected}" items={[{ value: "home", label: "${label}", icon: null }]} />`,
  imports: ["import { IosTabBar } from \"@bounteous/ui\""],
  id: "iostabbaritem",
  metadata: { nestable: true },
}
