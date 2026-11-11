// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=9-208
// source=src/components/NavigationMenu.tsx
// component=NavigationMenuTrigger
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')

export default {
  example: figma.code`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>${label}</NavigationMenuTrigger>
      <NavigationMenuContent>Content</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  imports: ["import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from \"@bounteous/ui\""],
  id: "navigationmenutrigger",
  metadata: { nestable: true },
}
