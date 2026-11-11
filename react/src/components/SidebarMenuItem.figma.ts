// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=9-244
// source=src/components/Sidebar.tsx
// component=SidebarMenuButton
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const active = instance.getEnum('State', { default: '', active: ' isActive' })

export default {
  example: figma.code`<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton${active}>${label}</SidebarMenuButton>
  </SidebarMenuItem>
</SidebarMenu>`,
  imports: ["import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from \"@bounteous/ui\""],
  id: "sidebarmenuitem",
  metadata: { nestable: true },
}
