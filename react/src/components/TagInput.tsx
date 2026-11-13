import * as React from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * TagInput. Extended component (beyond shadcn): text input that turns entries into removable tags.
 * - Enter or comma adds a tag, Backspace on an empty field removes the last one
 * - `value` / `defaultValue` / `onValueChange` -> controlled or uncontrolled
 * - `max` -> maximum number of tags
 * - Figma-style `aria-invalid` and `disabled` states like Input
 */
export interface TagInputProps extends Omit<React.ComponentProps<'div'>, 'defaultValue' | 'onChange'> {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  placeholder?: string
  max?: number
  disabled?: boolean
  'aria-invalid'?: boolean
}

function TagInput({
  className,
  value,
  defaultValue = [],
  onValueChange,
  placeholder = 'Add a tag',
  max,
  disabled = false,
  ...props
}: TagInputProps) {
  const [inner, setInner] = React.useState(defaultValue)
  const [draft, setDraft] = React.useState('')
  const tags = value ?? inner

  const set = (next: string[]) => {
    if (value === undefined) setInner(next)
    onValueChange?.(next)
  }
  const commit = () => {
    const t = draft.trim().replace(/,$/, '').trim()
    setDraft('')
    if (!t || tags.includes(t) || (max !== undefined && tags.length >= max)) return
    set([...tags, t])
  }

  return (
    <div
      data-slot="tag-input"
      className={cn(
        'flex min-h-8 w-80 flex-wrap items-center gap-1 rounded-lg bg-background px-1.5 py-1 text-sm text-foreground',
        'inset-ring-1 inset-ring-control-border transition-[color,box-shadow]',
        'focus-within:inset-ring-ring focus-within:shadow-focus-ring',
        'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      {...props}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          data-slot="tag-input-tag"
          className="inline-flex h-6 items-center gap-1 rounded-sm bg-secondary pr-1 pl-2 text-xs font-medium text-secondary-foreground"
        >
          {tag}
          <button
            type="button"
            aria-label={`Remove ${tag}`}
            disabled={disabled}
            onClick={() => set(tags.filter((t) => t !== tag))}
            className="cursor-pointer rounded-sm outline-none hover:opacity-70 focus-visible:shadow-focus-ring"
          >
            <X className="size-3" />
          </button>
        </span>
      ))}
      <input
        data-slot="tag-input-field"
        value={draft}
        disabled={disabled}
        placeholder={tags.length === 0 ? placeholder : undefined}
        onChange={(e) => {
          if (e.target.value.endsWith(',')) {
            setDraft(e.target.value)
            setTimeout(commit, 0)
          } else setDraft(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            commit()
          } else if (e.key === 'Backspace' && draft === '' && tags.length > 0) {
            set(tags.slice(0, -1))
          }
        }}
        onBlur={commit}
        className="h-6 min-w-20 flex-1 bg-transparent px-1 outline-none placeholder:text-muted-foreground"
      />
    </div>
  )
}

export { TagInput }
