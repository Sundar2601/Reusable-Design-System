// url=https://www.figma.com/design/dcJKQOcHWk6gbH7lcMwicU/shadcn-ui-components-with-variables---Tailwind-classes---Updated-October-2026--Community-?node-id=1932-931
// source=src/components/Card.tsx
// component=CardFooter
import figma from 'figma'
const instance = figma.selectedInstance

const button = instance.findInstance('Button')
let buttonCode
if (button && button.type === 'INSTANCE') {
  buttonCode = button.executeTemplate().example
}

export default {
  example: figma.code`<CardFooter>${buttonCode}</CardFooter>`,
  imports: ['import { CardFooter } from "@bounteous/ui"'],
  id: 'card-footer',
  metadata: { nestable: true },
}
