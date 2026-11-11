// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=8-229
// source=src/components/Item.tsx
// component=Item
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')

export default {
  example: figma.code`<Item>
  <ItemContent>
    <ItemTitle>${title}</ItemTitle>
    <ItemDescription>${description}</ItemDescription>
  </ItemContent>
</Item>`,
  imports: ["import { Item, ItemContent, ItemTitle, ItemDescription } from \"@bounteous/ui\""],
  id: "item",
  metadata: { nestable: true },
}
