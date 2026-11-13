// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-162
// source=src/components/mobile/android/AndroidNavigationBar.tsx
// component=AndroidNavigationBar
//
// Figma Android element sheet; props follow the component.
import figma from 'figma'

export default {
  example: figma.code`<AndroidNavigationBar items={[{ value: "home", label: "Home", icon: <Home /> }]} />`,
  imports: ["import { AndroidNavigationBar } from \"@bounteous/ui\"", "import { Home } from \"lucide-react\""],
  id: "androidnavigationbar",
  metadata: { nestable: true },
}
