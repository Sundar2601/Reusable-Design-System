// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=9-380
// source=src/components/DropdownMenu.tsx
// component=DropdownMenuItem
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const shortcut = instance.getString('Shortcut')
const state = instance.getEnum('State', { default: '', focus: '', destructive: ' variant="destructive"', disabled: ' disabled' })

export default {
  example: figma.code`<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Menu</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem${state}>
      ${label}
      <DropdownMenuShortcut>${shortcut}</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  imports: ["import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut } from \"@bounteous/ui\"","import { Button } from \"@bounteous/ui\""],
  id: "menuitem",
  metadata: { nestable: true },
}
