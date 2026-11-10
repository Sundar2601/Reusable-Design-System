import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '../Button'

/**
 * Suggestions. Figma "Suggestions": prompt chips shown under or above the prompt input.
 *   <Suggestions>
 *     <Suggestion suggestion="Summarize this" onSelect={(s) => setPrompt(s)} />
 *   </Suggestions>
 * - `layout="wrap"` wraps onto several lines, `scroll` is a single horizontal row.
 */
export interface SuggestionsProps extends React.ComponentProps<'div'> {
  layout?: 'wrap' | 'scroll'
}

function Suggestions({ className, layout = 'wrap', ...props }: SuggestionsProps) {
  return (
    <div
      data-slot="suggestions"
      data-layout={layout}
      role="list"
      className={cn(
        'flex gap-2 data-[layout=scroll]:w-full data-[layout=scroll]:flex-nowrap data-[layout=scroll]:overflow-x-auto data-[layout=wrap]:flex-wrap',
        className,
      )}
      {...props}
    />
  )
}

export interface SuggestionProps extends Omit<ButtonProps, 'onSelect' | 'children'> {
  /** The suggested prompt text. Shown as the label unless `children` is given. */
  suggestion: string
  children?: React.ReactNode
  /** Called with the suggestion text when chosen. */
  onSelect?: (suggestion: string) => void
}

function Suggestion({ suggestion, children, onSelect, onClick, className, variant = 'outline', size = 'sm', rounded = true, ...props }: SuggestionProps) {
  return (
    <Button
      data-slot="suggestion"
      role="listitem"
      type="button"
      variant={variant}
      size={size}
      rounded={rounded}
      className={cn('shrink-0 font-normal', className)}
      onClick={(event) => {
        onClick?.(event)
        onSelect?.(suggestion)
      }}
      {...props}
    >
      {children ?? suggestion}
    </Button>
  )
}

export { Suggestions, Suggestion }
