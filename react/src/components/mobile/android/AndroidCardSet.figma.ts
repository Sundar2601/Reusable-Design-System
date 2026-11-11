// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=13-229
// source=src/components/mobile/android/AndroidCard.tsx
// component=AndroidCard
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const variant = instance.getEnum('Variant', { filled: 'filled', elevated: 'elevated', outlined: 'outlined' })

export default {
  example: figma.code`<AndroidCard variant="${variant}">
  <AndroidCardContent>
    <AndroidCardTitle>${title}</AndroidCardTitle>
  </AndroidCardContent>
</AndroidCard>`,
  imports: ["import { AndroidCard, AndroidCardContent, AndroidCardTitle } from \"@bounteous/ui\""],
  id: "androidcardset",
  metadata: { nestable: true },
}
