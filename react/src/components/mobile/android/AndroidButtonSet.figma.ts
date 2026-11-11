// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=13-208
// source=src/components/mobile/android/AndroidButton.tsx
// component=AndroidButton
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Variant', { filled: 'filled', tonal: 'tonal', outlined: 'outlined', text: 'text', elevated: 'elevated' })

export default {
  example: figma.code`<AndroidButton variant="${variant}">${label}</AndroidButton>`,
  imports: ["import { AndroidButton } from \"@bounteous/ui\""],
  id: "androidbuttonset",
  metadata: { nestable: true },
}
