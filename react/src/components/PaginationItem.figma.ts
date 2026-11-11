// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=9-176
// source=src/components/Pagination.tsx
// component=PaginationLink
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const active = instance.getEnum('State', { default: '', hover: '', active: ' isActive' })

export default {
  example: figma.code`<PaginationLink href="#"${active}>${label}</PaginationLink>`,
  imports: ["import { PaginationLink } from \"@bounteous/ui\""],
  id: "paginationitem",
  metadata: { nestable: true },
}
