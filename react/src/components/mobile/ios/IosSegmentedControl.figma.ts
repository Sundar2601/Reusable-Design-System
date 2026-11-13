// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-155
// source=src/components/mobile/ios/IosSegmentedControl.tsx
// component=IosSegmentedControl
//
// Figma iOS element sheet; props follow the component.
import figma from 'figma'

export default {
  example: figma.code`<IosSegmentedControl options={[{ value: "a", label: "A" }]} />`,
  imports: ["import { IosSegmentedControl } from \"@bounteous/ui\""],
  id: "iossegmentedcontrol",
  metadata: { nestable: true },
}
