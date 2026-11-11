// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-151
// source=src/components/mobile/ios/IosNavigationBar.tsx
// component=IosNavigationBar
//
// Figma iOS element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<IosNavigationBar title="Title" />`,
  imports: ["import { IosNavigationBar } from \"@bounteous/ui\""],
  id: "iosnavigationbar",
  metadata: { nestable: true },
}
