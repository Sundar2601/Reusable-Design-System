// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-793
// source=src/components/DataTable.tsx
// component=DataTable
import figma from 'figma'

export default {
  example: figma.code`<DataTable columns={columns} data={data} />`,
  imports: ["import { DataTable } from \"@bounteous/ui\""],
  id: "datatable",
  metadata: { nestable: true },
}
