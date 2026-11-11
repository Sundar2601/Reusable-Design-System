// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-163
// source=src/components/mobile/android/AndroidFab.tsx
// component=AndroidFab
//
// Figma Android element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<AndroidFab icon={<Plus />} />`,
  imports: ["import { AndroidFab } from \"@bounteous/ui\"", "import { Plus } from \"lucide-react\""],
  id: "androidfab",
  metadata: { nestable: true },
}
