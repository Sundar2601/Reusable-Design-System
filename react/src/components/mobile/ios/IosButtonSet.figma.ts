// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=12-111
// source=src/components/mobile/ios/IosButton.tsx
// component=IosButton
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Variant', { filled: 'filled', tinted: 'tinted', plain: 'plain' })
const size = instance.getEnum('Size', { large: 'large', medium: 'medium', small: 'small' })

export default {
  example: figma.code`<IosButton variant="${variant}" size="${size}">${label}</IosButton>`,
  imports: ["import { IosButton } from \"@bounteous/ui\""],
  id: "iosbuttonset",
  metadata: { nestable: true },
}
