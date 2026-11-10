// url=https://www.figma.com/design/dcJKQOcHWk6gbH7lcMwicU/shadcn-ui-components-with-variables---Tailwind-classes---Updated-October-2026--Community-?node-id=1932-860
// source=src/components/Card.tsx
// component=CardHeader
//
// Type=Button / Badge puts an action (the nested button or badge) at the right of the header.
// Type=Image is the CardImage part, shown above the header, and has no text.
import figma from 'figma'
const instance = figma.selectedInstance

const type = instance.getEnum('Type', { Image: 'image', Button: 'action', Badge: 'action' })

const button = instance.findInstance('Button')
let buttonCode
if (button && button.type === 'INSTANCE') {
  buttonCode = button.executeTemplate().example
}

export default {
  example:
    type === 'image'
      ? figma.code`<CardImage />`
      : figma.code`<CardHeader><CardTitle>Title</CardTitle><CardDescription>Description</CardDescription><CardAction>${buttonCode}</CardAction></CardHeader>`,
  imports: ['import { CardAction, CardDescription, CardHeader, CardImage, CardTitle } from "@bounteous/ui"'],
  id: 'card-header',
  metadata: { nestable: true },
}
