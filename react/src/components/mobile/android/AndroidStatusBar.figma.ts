// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-160
// source=src/components/mobile/android/AndroidStatusBar.tsx
// component=AndroidStatusBar
//
// Figma Android element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<AndroidStatusBar />`,
  imports: ["import { AndroidStatusBar, AndroidGestureBar } from \"@bounteous/ui\""],
  id: "androidstatusbar",
  metadata: { nestable: true },
}
