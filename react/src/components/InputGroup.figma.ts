// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-780
// source=src/components/InputGroup.tsx
// component=InputGroup
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<InputGroup>
  <InputGroupInput placeholder="Search" />
  <InputGroupAddon>@</InputGroupAddon>
</InputGroup>`,
  imports: ["import { InputGroup, InputGroupAddon, InputGroupInput } from \"@bounteous/ui\""],
  id: "inputgroup",
  metadata: { nestable: true },
}
