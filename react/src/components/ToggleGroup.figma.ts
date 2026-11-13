// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-777
// source=src/components/ToggleGroup.tsx
// component=ToggleGroup
import figma from 'figma'

export default {
  example: figma.code`<ToggleGroup type="single">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
</ToggleGroup>`,
  imports: ["import { ToggleGroup, ToggleGroupItem } from \"@bounteous/ui\""],
  id: "togglegroup",
  metadata: { nestable: true },
}
