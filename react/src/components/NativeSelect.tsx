import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Native Select. Figma component "Native Select": the browser's own <select> in the Input style.
 * Use it when you want the platform picker (mobile, forms) instead of the custom Select.
 */
export interface NativeSelectProps extends Omit<React.ComponentProps<'select'>, 'size'> {
  size?: 'sm' | 'default'
}

function NativeSelect({ className, size = 'default', ...props }: NativeSelectProps) {
  return (
    <div
      data-slot="native-select-wrapper"
      data-size={size}
      className="group/native-select relative w-fit has-[select:disabled]:opacity-50"
    >
      <select
        data-slot="native-select"
        data-size={size}
        className={cn(
          'w-full min-w-48 cursor-pointer appearance-none rounded-lg bg-background ps-2.5 pe-8 text-sm text-foreground',
          'inset-ring-1 inset-ring-control-border outline-none transition-[color,box-shadow] select-none',
          'h-8 data-[size=sm]:h-7',
          'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
          'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
          'disabled:pointer-events-none disabled:cursor-not-allowed',
          className,
        )}
        {...props}
      />
      <ChevronDown
        aria-hidden="true"
        data-slot="native-select-icon"
        className="pointer-events-none absolute end-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground select-none"
      />
    </div>
  )
}

function NativeSelectOption(props: React.ComponentProps<'option'>) {
  return <option data-slot="native-select-option" {...props} />
}

function NativeSelectOptGroup({ className, ...props }: React.ComponentProps<'optgroup'>) {
  return <optgroup data-slot="native-select-optgroup" className={cn(className)} {...props} />
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
