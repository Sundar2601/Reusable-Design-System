// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-781
// source=src/components/InputGroup.tsx
// component=InputGroup
import figma from 'figma'

export default {
  example: figma.code`<InputGroup>
  <InputGroupInput placeholder="Search" />
</InputGroup>`,
  imports: ["import { InputGroup, InputGroupAddon, InputGroupInput } from \"@bounteous/ui\""],
  id: "inputgroupsearch",
  metadata: { nestable: true },
}
