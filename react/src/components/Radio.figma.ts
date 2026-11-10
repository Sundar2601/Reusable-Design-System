// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-785
// source=src/components/Radio.tsx
// component=RadioGroup
//
// The Figma Radio Group is a single component without variants.
import figma from 'figma'

export default {
  example: figma.code`<RadioGroup defaultValue="a">
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>`,
  imports: ['import { Radio, RadioGroup } from "@bounteous/ui"'],
  id: 'radio-group',
  metadata: { nestable: true },
}
