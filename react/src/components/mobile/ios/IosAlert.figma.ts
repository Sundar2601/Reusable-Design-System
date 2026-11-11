// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-158
// source=src/components/mobile/ios/IosAlert.tsx
// component=IosAlert
//
// Figma iOS element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<IosAlert title="Title" message="Message" />`,
  imports: ["import { IosAlert } from \"@bounteous/ui\""],
  id: "iosalert",
  metadata: { nestable: true },
}
