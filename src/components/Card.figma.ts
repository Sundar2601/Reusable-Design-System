// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Design-System?node-id=12-139
// source=src/components/Card.tsx
// component=Card
//
// TODO before publishing: replace LIBRARY_FILE_KEY with the key of the Figma file that
// hosts the "Design System" library. 12-139 is the Card component set in that file.
import figma from 'figma'
const instance = figma.selectedInstance

// Figma "Style" becomes the React prop "variant" ("style" is a built-in React prop).
const variant = instance.getEnum('Style', { Outlined: 'outlined', Elevated: 'elevated' })
const title = instance.getString('Title')
const description = instance.getString('Description')

// The Button inside the card is a nested instance with its own Code Connect template.
const button = instance.findInstance('Button')
let buttonCode
if (button && button.type === 'INSTANCE') {
  buttonCode = button.executeTemplate().example
}

export default {
  example: figma.code`<Card variant="${variant}" title="${title}" description="${description}" action={${buttonCode}} />`,
  imports: ['import { Card } from "@bounteous/ui"'],
  id: 'card',
  metadata: { nestable: true },
}
