// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-789
// source=src/components/NavigationMenu.tsx
// component=NavigationMenuContent
import figma from 'figma'

export default {
  example: figma.code`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
      <NavigationMenuContent>Content</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  imports: ["import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from \"@bounteous/ui\""],
  id: "navigationmenucontent",
  metadata: { nestable: true },
}
