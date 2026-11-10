// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=5-391
// source=src/components/Button.tsx
// component=Button
//
// Hover and focus are CSS states in code, so they are not Figma variants.
// The Icon left / Icon right toggles and their Left icon / Right icon swaps are not mapped:
// they need Code Connect templates for the icon components first. In code use leftIcon and rightIcon.
// Rounded buttons are a separate Figma set: see ButtonRounded.figma.ts.
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
  default: 'default',
  outline: 'outline',
  secondary: 'secondary',
  ghost: 'ghost',
  destructive: 'destructive',
  link: 'link',
})
const size = instance.getEnum('Size', { xs: 'xs', sm: 'sm', default: 'default', lg: 'lg' })
const disabled = instance.getEnum('Disabled', { false: false, true: true })
const label = instance.getString('Label')

export default {
  example: figma.code`<Button variant="${variant}" size="${size}"${disabled ? ' disabled' : ''}>${label}</Button>`,
  imports: ['import { Button } from "@bounteous/ui"'],
  id: 'button',
  metadata: { nestable: true },
}
