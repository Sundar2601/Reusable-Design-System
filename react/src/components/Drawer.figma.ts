// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=9-333
// source=src/components/Drawer.tsx
// component=Drawer
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Drawer>
  <DrawerTrigger asChild><Button>Open</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`,
  imports: ["import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from \"@bounteous/ui\"","import { Button } from \"@bounteous/ui\""],
  id: "drawer",
  metadata: { nestable: true },
}
