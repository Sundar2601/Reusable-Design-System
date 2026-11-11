// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-172
// source=src/components/mobile/android/AndroidSegmentedButton.tsx
// component=AndroidSegmentedButton
//
// Figma Android element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<AndroidSegmentedButton options={[{ value: "a", label: "A" }]} />`,
  imports: ["import { AndroidSegmentedButton } from \"@bounteous/ui\""],
  id: "androidsegmentedbutton",
  metadata: { nestable: true },
}
