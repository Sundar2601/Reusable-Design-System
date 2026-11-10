// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=8-118
// source=src/components/Card.tsx
// component=Card
//
// The Figma Card is a single component; the code Card is built from parts.
import figma from 'figma'

export default {
  example: figma.code`<Card>
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
