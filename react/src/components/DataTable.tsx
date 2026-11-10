import * as React from 'react'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import {
  createColumnHelper,
  createSortedRowModel,
  rowSelectionFeature,
  rowSortingFeature,
  sortFns,
  tableFeatures,
  useTable,
} from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import { Checkbox } from './Checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table'

/**
 * Data Table. The Table primitives driven by @tanstack/react-table (v9):
 * click a header to sort, use the checkboxes for row selection.
 * `DataTable` is a ready-made example over a `Payment` row type; build your own
 * columns with `createColumnHelper` and render them with the same pattern.
 */
export type Payment = {
  id: string
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
  amount: number
}

const features = tableFeatures({
  rowSortingFeature,
  rowSelectionFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns,
})

const columnHelper = createColumnHelper<typeof features, Payment>()

const columns = columnHelper.columns([
  columnHelper.display({
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={table.getIsAllRowsSelected() ? true : table.getIsSomeRowsSelected() ? 'indeterminate' : false}
        onCheckedChange={(v) => table.toggleAllRowsSelected(!!v)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox aria-label="Select row" checked={row.getIsSelected()} onCheckedChange={(v) => row.toggleSelected(!!v)} />
    ),
  }),
  columnHelper.accessor('status', { header: 'Status', cell: (c) => <span className="capitalize">{c.getValue()}</span> }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (c) => (
      <span className="font-medium">
        {c.getValue().toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
    ),
  }),
])

export const samplePayments: Payment[] = [
  { id: 'm5gr84i9', amount: 316, status: 'success', email: 'ken99@example.com' },
  { id: '3u1reuv4', amount: 242, status: 'success', email: 'abe45@example.com' },
  { id: 'derv1ws0', amount: 837, status: 'processing', email: 'monserrat44@example.com' },
  { id: '5kma53ae', amount: 874, status: 'success', email: 'silas22@example.com' },
  { id: 'bhqecj4p', amount: 721, status: 'failed', email: 'carmella@example.com' },
]

export interface DataTableProps extends React.ComponentProps<'div'> {
  /** Rows to show. */
  data?: Payment[]
}

function DataTable({ data = samplePayments, className, ...props }: DataTableProps) {
  const table = useTable({ features, columns, data })
  const selected = table.getSelectedRowModel().rows.length

  return (
    <div data-slot="data-table" className={cn('w-full max-w-2xl', className)} {...props}>
      <div className="overflow-hidden rounded-lg inset-ring-1 inset-ring-border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => {
                  const sorted = header.column.getIsSorted()
                  const canSort = header.column.getCanSort()
                  return (
                    <TableHead key={header.id} aria-sort={sorted === 'asc' ? 'ascending' : sorted === 'desc' ? 'descending' : undefined}>
                      {header.isPlaceholder ? null : canSort ? (
                        <button
                          type="button"
                          onClick={header.column.getToggleSortingHandler()}
                          className="inline-flex cursor-pointer items-center gap-1 outline-none focus-visible:underline"
                        >
                          <table.FlexRender header={header} />
                          {sorted === 'asc' ? (
                            <ArrowUp className="size-3.5" />
                          ) : sorted === 'desc' ? (
                            <ArrowDown className="size-3.5" />
                          ) : (
                            <ArrowUpDown className="size-3.5 text-muted-foreground" />
                          )}
                        </button>
                      ) : (
                        <table.FlexRender header={header} />
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() ? 'selected' : undefined}>
                {row.getAllCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="px-2 pt-3 text-sm text-muted-foreground">
        {selected} of {table.getRowModel().rows.length} row(s) selected.
      </p>
    </div>
  )
}

export { DataTable }
