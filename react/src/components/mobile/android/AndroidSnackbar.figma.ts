// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=52-170
// source=src/components/mobile/android/AndroidSnackbar.tsx
// component=AndroidSnackbar
//
// Figma Android element sheet; props follow the component.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<AndroidSnackbar message="Message" action="Undo" />`,
  imports: ["import { AndroidSnackbar } from \"@bounteous/ui\""],
  id: "androidsnackbar",
  metadata: { nestable: true },
}
