// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=9-349
// source=src/components/Popover.tsx
// component=Popover
import figma from 'figma'

export default {
  example: figma.code`<Popover>
  <PopoverTrigger asChild><Button variant="outline">Open</Button></PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>`,
  imports: ["import { Popover, PopoverTrigger, PopoverContent } from \"@bounteous/ui\"","import { Button } from \"@bounteous/ui\""],
  id: "popover",
  metadata: { nestable: true },
}
