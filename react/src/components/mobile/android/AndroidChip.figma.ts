// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-167
// source=src/components/mobile/android/AndroidChip.tsx
// component=AndroidChip
//
// Figma Android element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<AndroidChipGroup>
  <AndroidChip>Chip</AndroidChip>
</AndroidChipGroup>`,
  imports: ["import { AndroidChip, AndroidChipGroup } from \"@bounteous/ui\""],
  id: "androidchip",
  metadata: { nestable: true },
}
