// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-788
// source=src/components/Pagination.tsx
// component=Pagination
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`,
  imports: ["import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from \"@bounteous/ui\""],
  id: "pagination",
  metadata: { nestable: true },
}
