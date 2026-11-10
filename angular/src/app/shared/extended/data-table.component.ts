import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input, signal } from '@angular/core';

import { ZardTableImports } from '@/shared/components/table/table.imports';

export interface Payment {
  id: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
  amount: number;
}

export const SAMPLE_PAYMENTS: Payment[] = [
  { id: 'm5gr84i9', amount: 316, status: 'success', email: 'ken99@example.com' },
  { id: '3u1reuv4', amount: 242, status: 'success', email: 'abe45@example.com' },
  { id: 'derv1ws0', amount: 837, status: 'processing', email: 'monserrat44@example.com' },
  { id: '5kma53ae', amount: 874, status: 'success', email: 'silas22@example.com' },
  { id: 'bhqecj4p', amount: 721, status: 'failed', email: 'carmella@example.com' },
];

type SortKey = 'status' | 'email' | 'amount';

/**
 * Hand-built (ZardUI has no data table). The ZardUI table plus signals for sorting and row
 * selection, mirroring the React DataTable (TanStack Table).
 */
@Component({
  selector: 'app-data-table',
  imports: [ZardTableImports],
  template: `
    <div class="w-full max-w-2xl">
      <div class="overflow-hidden rounded-lg inset-ring-1 inset-ring-border">
        <table z-table>
          <thead z-table-header>
            <tr z-table-row>
              <th z-table-head>
                <input
                  type="checkbox"
                  role="checkbox"
                  aria-label="Select all"
                  class="size-4 cursor-pointer accent-primary"
                  [checked]="allSelected()"
                  [indeterminate]="!allSelected() && selected().size > 0"
                  (change)="toggleAll($any($event.target).checked)"
                />
              </th>
              @for (col of columns; track col.key) {
                <th z-table-head [attr.aria-sort]="ariaSort(col.key)">
                  <button
                    type="button"
                    class="inline-flex cursor-pointer items-center gap-1 outline-none focus-visible:underline"
                    (click)="sortBy(col.key)"
                  >
                    {{ col.label }}
                    <span aria-hidden="true" class="text-xs text-muted-foreground">{{ arrow(col.key) }}</span>
                  </button>
                </th>
              }
            </tr>
          </thead>
          <tbody z-table-body>
            @for (row of rows(); track row.id) {
              <tr z-table-row [attr.data-state]="selected().has(row.id) ? 'selected' : null">
                <td z-table-cell>
                  <input
                    type="checkbox"
                    role="checkbox"
                    aria-label="Select row"
                    class="size-4 cursor-pointer accent-primary"
                    [checked]="selected().has(row.id)"
                    (change)="toggleRow(row.id, $any($event.target).checked)"
                  />
                </td>
                <td z-table-cell class="capitalize">{{ row.status }}</td>
                <td z-table-cell>{{ row.email }}</td>
                <td z-table-cell class="font-medium">{{ formatAmount(row.amount) }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <p class="px-2 pt-3 text-sm text-muted-foreground">{{ selected().size }} of {{ rows().length }} row(s) selected.</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppDataTableComponent {
  readonly data = input<Payment[]>(SAMPLE_PAYMENTS);

  protected readonly columns: { key: SortKey; label: string }[] = [
    { key: 'status', label: 'Status' },
    { key: 'email', label: 'Email' },
    { key: 'amount', label: 'Amount' },
  ];

  protected readonly sort = signal<{ key: SortKey; dir: 'asc' | 'desc' } | null>(null);
  protected readonly selected = signal<ReadonlySet<string>>(new Set());

  protected readonly rows = computed(() => {
    const rows = [...this.data()];
    const s = this.sort();
    if (s) {
      rows.sort((a, b) => {
        const x = a[s.key];
        const y = b[s.key];
        const r = typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y));
        return s.dir === 'asc' ? r : -r;
      });
    }
    return rows;
  });

  protected readonly allSelected = computed(() => this.data().length > 0 && this.selected().size === this.data().length);

  protected sortBy(key: SortKey): void {
    const s = this.sort();
    if (!s || s.key !== key) this.sort.set({ key, dir: 'asc' });
    else if (s.dir === 'asc') this.sort.set({ key, dir: 'desc' });
    else this.sort.set(null);
  }

  protected arrow(key: SortKey): string {
    const s = this.sort();
    return s?.key === key ? (s.dir === 'asc' ? '↑' : '↓') : '↕';
  }

  protected ariaSort(key: SortKey): 'ascending' | 'descending' | null {
    const s = this.sort();
    return s?.key === key ? (s.dir === 'asc' ? 'ascending' : 'descending') : null;
  }

  protected toggleRow(id: string, on: boolean): void {
    const next = new Set(this.selected());
    if (on) next.add(id);
    else next.delete(id);
    this.selected.set(next);
  }

  protected toggleAll(on: boolean): void {
    this.selected.set(on ? new Set(this.data().map((r) => r.id)) : new Set());
  }

  protected formatAmount(n: number): string {
    return n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}
