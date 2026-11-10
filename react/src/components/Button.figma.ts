// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=5-267
// source=src/components/Button.tsx
// component=Button
//
// Figma Size=icon has no matching size in code yet, so it maps to the default size.
// Figma State hover and focus are CSS states in code, so only State=disabled maps to a prop.
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
  default: 'default',
  destructive: 'destructive',
  outline: 'outline',
  secondary: 'secondary',
  ghost: 'ghost',
  link: 'link',
})
const size = instance.getEnum('Size', { default: 'default', sm: 'sm', lg: 'lg', icon: 'default' })
const disabled = instance.getEnum('State', { default: false, hover: false, focus: false, disabled: true })
const label = instance.getString('Label')

export default {
  example: figma.code`<Button variant="${variant}" size="${size}"${disabled ? ' disabled' : ''}>${label}</Button>`,
  imports: ['import { Button } from "@bounteous/ui"'],
  id: 'button',
  metadata: { nestable: true },
}
