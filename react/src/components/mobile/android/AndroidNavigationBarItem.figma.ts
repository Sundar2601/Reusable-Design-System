// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=13-146
// source=src/components/mobile/android/AndroidNavigationBar.tsx
// component=AndroidNavigationBar
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const active = instance.getEnum('State', { active: 'home', inactive: 'other' })

export default {
  example: figma.code`<AndroidNavigationBar value="${active}" items={[{ value: "home", label: "${label}", icon: null }]} />`,
  imports: ["import { AndroidNavigationBar } from \"@bounteous/ui\""],
  id: "androidnavigationbaritem",
  metadata: { nestable: true },
}
