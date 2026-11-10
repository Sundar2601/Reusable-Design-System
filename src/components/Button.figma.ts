// url=https://www.figma.com/design/dcJKQOcHWk6gbH7lcMwicU/shadcn-ui-components-with-variables---Tailwind-classes---Updated-October-2026--Community-?node-id=1872-3230
// source=src/components/Button.tsx
// component=Button
//
// Hover and Focus are CSS states in code, so only Disabled becomes a prop.
// The Left icon, Right icon and Kbd toggles are not mapped yet: they need Code Connect
// templates for the icon components first (leftIcon, rightIcon and kbd accept any element).
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
  Default: 'default',
  Outline: 'outline',
  Secondary: 'secondary',
  Ghost: 'ghost',
  Destructive: 'destructive',
  Link: 'link',
})
const size = instance.getEnum('Size', { xs: 'xs', sm: 'sm', default: 'default', lg: 'lg' })
const state = instance.getEnum('State', {
  Default: 'default',
  Hover: 'default',
  Focus: 'default',
  Disabled: 'disabled',
})
// "Roudness" is a typo in the Figma file; the property name must match it exactly.
const rounded = instance.getEnum('Roudness', { Default: false, Rounded: true })

export default {
  example: figma.code`<Button variant="${variant}" size="${size}"${rounded ? ' rounded' : ''}${state === 'disabled' ? ' disabled' : ''}>Button</Button>`,
  imports: ['import { Button } from "@bounteous/ui"'],
  id: 'button',
  metadata: { nestable: true },
}
