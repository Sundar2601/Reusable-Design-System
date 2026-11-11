// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=9-148
// source=src/components/Tabs.tsx
// component=TabsTrigger
//
// State active/inactive follows the Tabs value.
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')

export default {
  example: figma.code`<Tabs defaultValue="a">
  <TabsList>
    <TabsTrigger value="a">${label}</TabsTrigger>
  </TabsList>
</Tabs>`,
  imports: ["import { Tabs, TabsList, TabsTrigger } from \"@bounteous/ui\""],
  id: "tabstrigger",
  metadata: { nestable: true },
}
