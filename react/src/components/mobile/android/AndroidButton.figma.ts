// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-164
// source=src/components/mobile/android/AndroidButton.tsx
// component=AndroidButton
//
// Figma Android element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<AndroidButton>Button</AndroidButton>`,
  imports: ["import { AndroidButton } from \"@bounteous/ui\""],
  id: "androidbutton",
  metadata: { nestable: true },
}
