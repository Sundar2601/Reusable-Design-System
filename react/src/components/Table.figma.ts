// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-792
// source=src/components/Table.tsx
// component=Table
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Table>
  <TableHeader>
    <TableRow><TableHead>Name</TableHead></TableRow>
  </TableHeader>
  <TableBody>
    <TableRow><TableCell>Value</TableCell></TableRow>
  </TableBody>
</Table>`,
  imports: ["import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from \"@bounteous/ui\""],
  id: "table",
  metadata: { nestable: true },
}
