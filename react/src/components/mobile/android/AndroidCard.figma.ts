// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-166
// source=src/components/mobile/android/AndroidCard.tsx
// component=AndroidCard
//
// Figma Android element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<AndroidCard>
  <AndroidCardContent>
    <AndroidCardTitle>Title</AndroidCardTitle>
  </AndroidCardContent>
</AndroidCard>`,
  imports: ["import { AndroidCard, AndroidCardContent, AndroidCardTitle } from \"@bounteous/ui\""],
  id: "androidcard",
  metadata: { nestable: true },
}
