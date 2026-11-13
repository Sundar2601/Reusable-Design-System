// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-786
// source=src/components/Tabs.tsx
// component=TabsList
import figma from 'figma'

export default {
  example: figma.code`<Tabs defaultValue="a">
  <TabsList>
    <TabsTrigger value="a">Tab A</TabsTrigger>
    <TabsTrigger value="b">Tab B</TabsTrigger>
  </TabsList>
</Tabs>`,
  imports: ["import { Tabs, TabsList, TabsTrigger } from \"@bounteous/ui\""],
  id: "tabslist",
  metadata: { nestable: true },
}
