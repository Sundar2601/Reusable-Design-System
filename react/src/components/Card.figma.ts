// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=148-524
// source=src/components/Card.tsx
// component=Card
//
// The Figma Card is one component set with Size (default, sm); the code Card is built from parts.
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { default: '', sm: ' size="sm"' })

export default {
  example: figma.code`<Card${size}>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>`,
  imports: ['import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@bounteous/ui"'],
  id: 'card',
  metadata: { nestable: true },
}
