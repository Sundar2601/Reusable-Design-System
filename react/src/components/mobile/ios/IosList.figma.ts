// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-157
// source=src/components/mobile/ios/IosList.tsx
// component=IosList
//
// Figma iOS element sheet; props follow the component.
import figma from 'figma'

export default {
  example: figma.code`<IosList>
  <IosListRow title="Row" />
</IosList>`,
  imports: ["import { IosList, IosListRow } from \"@bounteous/ui\""],
  id: "ioslist",
  metadata: { nestable: true },
}
