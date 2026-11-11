// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-152
// source=src/components/mobile/ios/IosTabBar.tsx
// component=IosTabBar
//
// Figma iOS element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<IosTabBar items={[{ value: "home", label: "Home", icon: <Home /> }]} />`,
  imports: ["import { IosTabBar } from \"@bounteous/ui\"", "import { Home } from \"lucide-react\""],
  id: "iostabbar",
  metadata: { nestable: true },
}
