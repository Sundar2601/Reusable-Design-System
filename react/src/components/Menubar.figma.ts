// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-790
// source=src/components/Menubar.tsx
// component=Menubar
import figma from 'figma'

export default {
  example: figma.code`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
  imports: ["import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from \"@bounteous/ui\""],
  id: "menubar",
  metadata: { nestable: true },
}
