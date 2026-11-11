// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=10-400
// source=src/components/Calendar.tsx
// component=Calendar
//
// A day is one cell of Calendar; state today/selected/outside/range/disabled comes from props.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Calendar mode="single" />`,
  imports: ["import { Calendar } from \"@bounteous/ui\""],
  id: "calendarday",
  metadata: { nestable: true },
}
