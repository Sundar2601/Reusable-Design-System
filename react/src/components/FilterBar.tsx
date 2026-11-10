import * as React from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './Button'
import { Input } from './Input'

/**
 * FilterBar. Extended component (beyond shadcn): search box plus a row of filter dropdowns.
 * - `filters` -> { key, label, options: { value, label }[] }
 * - `value` / `defaultValue` / `onValueChange` -> selected option per filter key (controlled or uncontrolled)
 * - `search` / `onSearchChange` -> search text (shown when `onSearchChange` or `search` is given)
 * - A "Clear" button appears when anything is active.
 */
export interface FilterBarFilter {
  key: string
  label: string
  options: { value: string; label: string }[]
}

export interface FilterBarProps extends Omit<React.ComponentProps<'div'>, 'defaultValue' | 'onChange'> {
  filters: FilterBarFilter[]
  value?: Record<string, string>
  defaultValue?: Record<string, string>
  onValueChange?: (value: Record<string, string>) => void
  search?: string
  onSearchChange?: (search: string) => void
  searchPlaceholder?: string
}

function FilterBar({
  className,
  filters,
  value,
  defaultValue = {},
  onValueChange,
  search,
  onSearchChange,
  searchPlaceholder = 'Search',
  ...props
}: FilterBarProps) {
  const [inner, setInner] = React.useState(defaultValue)
  const [innerSearch, setInnerSearch] = React.useState('')
  const current = value ?? inner
  const query = search ?? innerSearch

  const setFilter = (key: string, v: string) => {
    const next = { ...current }
    if (v) next[key] = v
    else delete next[key]
    if (value === undefined) setInner(next)
    onValueChange?.(next)
  }
  const setQuery = (q: string) => {
    if (search === undefined) setInnerSearch(q)
    onSearchChange?.(q)
  }
  const active = Object.keys(current).length > 0 || query !== ''

  return (
    <div data-slot="filter-bar" className={cn('flex flex-wrap items-center gap-2', className)} {...props}>
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
          className="w-64 pl-8"
        />
      </div>
      {filters.map((f) => (
        <select
          key={f.key}
          data-slot="filter-bar-select"
          aria-label={f.label}
          value={current[f.key] ?? ''}
          onChange={(e) => setFilter(f.key, e.target.value)}
          className={cn(
            'h-8 cursor-pointer rounded-lg bg-background px-2.5 text-sm outline-none inset-ring-1 inset-ring-border',
            'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
            current[f.key] ? 'text-foreground' : 'text-muted-foreground',
          )}
        >
          <option value="">{f.label}</option>
          {f.options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      ))}
      {active && (
        <Button
          variant="ghost"
          size="sm"
          rightIcon={<X />}
          onClick={() => {
            setQuery('')
            if (value === undefined) setInner({})
            onValueChange?.({})
          }}
        >
          Clear
        </Button>
      )}
    </div>
  )
}

export { FilterBar }
