// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=6-214
// source=src/components/DatePicker.tsx
// component=DatePicker
//
// State empty/filled follows the value prop.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<DatePicker />`,
  imports: ["import { DatePicker } from \"@bounteous/ui\""],
  id: "datepicker",
  metadata: { nestable: true },
}
