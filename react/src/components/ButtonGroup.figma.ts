// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-779
// source=src/components/ButtonGroup.tsx
// component=ButtonGroup
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ButtonGroup>
  <Button variant="outline">One</Button>
  <Button variant="outline">Two</Button>
</ButtonGroup>`,
  imports: ["import { ButtonGroup } from \"@bounteous/ui\"","import { Button } from \"@bounteous/ui\""],
  id: "buttongroup",
  metadata: { nestable: true },
}
