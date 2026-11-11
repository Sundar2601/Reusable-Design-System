// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=7-279
// source=src/components/Tooltip.tsx
// component=Tooltip
import figma from 'figma'
const instance = figma.selectedInstance

const text = instance.getString('Text')

export default {
  example: figma.code`<Tooltip>
  <TooltipTrigger asChild><Button variant="outline">Hover</Button></TooltipTrigger>
  <TooltipContent>${text}</TooltipContent>
</Tooltip>`,
  imports: ["import { Tooltip, TooltipTrigger, TooltipContent } from \"@bounteous/ui\"","import { Button } from \"@bounteous/ui\""],
  id: "tooltip",
  metadata: { nestable: true },
}
