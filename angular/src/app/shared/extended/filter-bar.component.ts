import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core'

export interface FilterBarFilter {
  key: string
  label: string
  options: { value: string; label: string }[]
}

/** Filter Bar. Search box plus filter dropdowns with a Clear button. Mirrors the React FilterBar. */
@Component({
  selector: 'ui-filter-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-wrap items-center gap-2', '[attr.data-slot]': '"filter-bar"' },
  template: `
    <div class="relative">
      <svg class="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
      <input
        type="text"
        data-slot="input"
        class="h-8 w-64 min-w-0 rounded-lg bg-background py-1 pr-2.5 pl-8 text-sm text-foreground inset-ring-1 inset-ring-border outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:inset-ring-ring focus-visible:shadow-focus-ring"
        [value]="search()"
        [placeholder]="searchPlaceholder()"
        [attr.aria-label]="searchPlaceholder()"
        (input)="search.set($any($event.target).value)"
      />
    </div>
    @for (f of filters(); track f.key) {
      <select
        data-slot="filter-bar-select"
        class="h-8 cursor-pointer rounded-lg bg-background px-2.5 text-sm outline-none inset-ring-1 inset-ring-border focus-visible:inset-ring-ring focus-visible:shadow-focus-ring"
        [class]="value()[f.key] ? 'text-foreground' : 'text-muted-foreground'"
        [attr.aria-label]="f.label"
        (change)="setFilter(f.key, $any($event.target).value)"
      >
        <option value="" [selected]="!value()[f.key]">{{ f.label }}</option>
        @for (o of f.options; track o.value) {
          <option [value]="o.value" [selected]="value()[f.key] === o.value">{{ o.label }}</option>
        }
      </select>
    }
    @if (active()) {
      <button
        type="button"
        class="inline-flex h-7 cursor-pointer items-center justify-center gap-1 rounded-sm px-2.5 text-xs font-medium whitespace-nowrap outline-none transition-all hover:bg-muted focus-visible:inset-ring-1 focus-visible:inset-ring-ring focus-visible:shadow-focus-ring"
        (click)="clear()"
      >
        Clear
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
      </button>
    }
  `,
})
export class FilterBarComponent {
  readonly filters = input<FilterBarFilter[]>([])
  readonly value = model<Record<string, string>>({})
  readonly search = model('')
  readonly searchPlaceholder = input('Search')
  protected readonly active = computed(() => Object.keys(this.value()).length > 0 || this.search() !== '')

  protected setFilter(key: string, v: string) {
    const next = { ...this.value() }
    if (v) next[key] = v
    else delete next[key]
    this.value.set(next)
  }
  protected clear() {
    this.search.set('')
    this.value.set({})
  }
}
