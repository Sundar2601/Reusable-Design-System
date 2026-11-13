// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=6-214
// source=src/components/DatePicker.tsx
// component=DatePicker
//
// State empty/filled follows the value prop; error and disabled are props.
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { empty: '', filled: '', error: ' aria-invalid', disabled: ' disabled' })

export default {
  example: figma.code`<DatePicker${state} />`,
  imports: ["import { DatePicker } from \"@bounteous/ui\""],
  id: "datepicker",
  metadata: { nestable: true },
}
