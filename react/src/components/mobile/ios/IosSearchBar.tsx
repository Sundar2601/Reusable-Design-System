import * as React from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

/** iOS Search Bar: 36px rounded field with magnifier, clear button and optional Cancel. */
export interface IosSearchBarProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  /** Show the Cancel text button (focused search state). */
  showCancel?: boolean
  onCancel?: () => void
  onClear?: () => void
}

function IosSearchBar({ className, showCancel = false, onCancel, onClear, placeholder = 'Search', value, ...props }: IosSearchBarProps) {
  const hasValue = value !== undefined && String(value).length > 0
  return (
    <div data-slot="ios-search-bar" className={cn('flex w-full items-center gap-3 font-[system-ui,-apple-system,sans-serif]', className)}>
      <label className="flex h-9 flex-1 items-center gap-1.5 rounded-[10px] bg-muted px-2 text-muted-foreground">
        <Search className="size-4 shrink-0" />
        <input
          type="search"
          value={value}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-[17px] text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
          {...props}
        />
        {hasValue && (
          <button type="button" aria-label="Clear" onClick={onClear} className="cursor-pointer rounded-full bg-muted-foreground/60 p-0.5 text-background outline-none">
            <X className="size-3" strokeWidth={3} />
          </button>
        )}
      </label>
      {showCancel && (
        <button type="button" onClick={onCancel} className="cursor-pointer text-[17px] text-[color:var(--ios-tint,#007aff)] outline-none">
          Cancel
        </button>
      )}
    </div>
  )
}

/** iOS Text Field: 44px field with optional leading label, rounded 10px. */
export interface IosTextFieldProps extends React.ComponentProps<'input'> {
  label?: string
}

function IosTextField({ className, label, id, ...props }: IosTextFieldProps) {
  const autoId = React.useId()
  const fieldId = id ?? autoId
  return (
    <div
      data-slot="ios-text-field"
      className={cn('flex h-11 w-full items-center gap-3 rounded-[10px] bg-muted px-4 font-[system-ui,-apple-system,sans-serif] text-[17px]', className)}
    >
      {label && (
        <label htmlFor={fieldId} className="w-24 shrink-0 text-foreground">
          {label}
        </label>
      )}
      <input id={fieldId} className="min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground" {...props} />
    </div>
  )
}

export { IosSearchBar, IosTextField }
