// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-161
// source=src/components/mobile/android/AndroidTopAppBar.tsx
// component=AndroidTopAppBar
//
// Figma Android element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<AndroidTopAppBar title="Title" />`,
  imports: ["import { AndroidTopAppBar } from \"@bounteous/ui\""],
  id: "androidtopappbar",
  metadata: { nestable: true },
}
