// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=7-275
// source=src/components/Sonner.tsx
// component=Toaster
import figma from 'figma'

export default {
  example: figma.code`<Toaster />
// toast("Event created", { action: { label: "Undo", onClick: () => {} } })`,
  imports: ["import { Toaster, toast } from \"@bounteous/ui\""],
  id: "sonner",
  metadata: { nestable: true },
}
