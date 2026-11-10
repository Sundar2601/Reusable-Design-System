// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=5-440
// source=src/components/Button.tsx
// component=Button
//
// The pill-shaped Figma set "Button / Rounded" is the Button with the rounded prop.
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
const label = instance.getString('Label')

export default {
  example: figma.code`<Button rounded variant="${variant}" size="${size}">${label}</Button>`,
  imports: ['import { Button } from "@bounteous/ui"'],
  id: 'button-rounded',
  metadata: { nestable: true },
}
