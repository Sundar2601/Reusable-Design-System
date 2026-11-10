// url=https://www.figma.com/design/R1fwFPPMBLnVhMLWumxCkw/shadcn-ui-Design-System-agent-ready?node-id=7-1515
// source=src/components/Card.tsx
// component=Card
//
// The Figma Card is one component with toggles; the code Card is built from parts.
// Image, Action, Content and Footer toggles decide which parts appear.
// The Action button is a nested Button instance and uses the Button template.
// Only the first footer button is rendered (both are named "Button" in Figma).
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { default: 'default', sm: 'sm' })
const title = instance.getString('Title')
const description = instance.getString('Description')
const content = instance.getString('Content text')
const showImage = instance.getBoolean('Image')
const showAction = instance.getBoolean('Action')
const showContent = instance.getBoolean('Content')
const showFooter = instance.getBoolean('Footer')

const action = instance.findInstance('Action')
let actionCode
if (showAction && action && action.type === 'INSTANCE') {
  actionCode = action.executeTemplate().example
}
const footerButton = instance.findInstance('Button')
let footerCode
if (showFooter && footerButton && footerButton.type === 'INSTANCE') {
  footerCode = footerButton.executeTemplate().example
}

export default {
  example: figma.code`<Card size="${size}">
  ${showImage ? '<CardImage />' : ''}
  <CardHeader>
    <CardTitle>${title}</CardTitle>
    <CardDescription>${description}</CardDescription>
    ${showAction ? figma.code`<CardAction>${actionCode}</CardAction>` : ''}
  </CardHeader>
  ${showContent ? figma.code`<CardContent>${content}</CardContent>` : ''}
  ${showFooter ? figma.code`<CardFooter>${footerCode}</CardFooter>` : ''}
</Card>`,
  imports: ['import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from "@bounteous/ui"'],
  id: 'card',
  metadata: { nestable: true },
}
