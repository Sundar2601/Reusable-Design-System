// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-791
// source=src/components/Sidebar.tsx
// component=Sidebar
import figma from 'figma'

export default {
  example: figma.code`<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarMenu>
        <SidebarMenuItem><SidebarMenuButton>Home</SidebarMenuButton></SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`,
  imports: ["import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from \"@bounteous/ui\""],
  id: "sidebar",
  metadata: { nestable: true },
}
