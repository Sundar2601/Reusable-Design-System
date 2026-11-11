// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-150
// source=src/components/mobile/ios/IosStatusBar.tsx
// component=IosStatusBar
//
// Figma iOS element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<IosStatusBar />`,
  imports: ["import { IosStatusBar, IosHomeIndicator } from \"@bounteous/ui\""],
  id: "iosstatusbar",
  metadata: { nestable: true },
}
