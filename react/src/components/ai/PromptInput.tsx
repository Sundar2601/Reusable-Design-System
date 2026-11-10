import * as React from 'react'
import { ArrowUp, Square, LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../Button'

/**
 * Prompt Input. Figma "Prompt Input": the composer at the bottom of a chat.
 *   <PromptInput onSubmit={(text) => send(text)}>
 *     <PromptInputAttachments>{...<Attachment size="xs" />}</PromptInputAttachments>
 *     <PromptInputTextarea placeholder="Ask anything" />
 *     <PromptInputToolbar>
 *       <PromptInputTools><Button variant="ghost" size="sm">Attach</Button><PromptInputModel>GPT-5</PromptInputModel></PromptInputTools>
 *       <PromptInputSubmit status="ready" />
 *     </PromptInputToolbar>
 *   </PromptInput>
 * - Presentational: no SDK calls. `onSubmit` receives the text (Enter submits, Shift+Enter is a new line).
 * - Submit `status` ready | submitted | streaming | error.
 */
interface PromptInputContextValue {
  value: string
  setValue: (value: string) => void
  submit: () => void
}
const PromptInputContext = React.createContext<PromptInputContextValue | null>(null)

export interface PromptInputProps extends Omit<React.ComponentProps<'form'>, 'onSubmit'> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  onSubmit?: (text: string) => void
}

function PromptInput({ className, value, defaultValue = '', onValueChange, onSubmit, children, ...props }: PromptInputProps) {
  const [inner, setInner] = React.useState(defaultValue)
  const current = value ?? inner
  const setValue = React.useCallback(
    (next: string) => {
      setInner(next)
      onValueChange?.(next)
    },
    [onValueChange],
  )
  const submit = React.useCallback(() => {
    const text = current.trim()
    if (!text) return
    onSubmit?.(text)
    setValue('')
  }, [current, onSubmit, setValue])

  return (
    <PromptInputContext.Provider value={{ value: current, setValue, submit }}>
      <form
        data-slot="prompt-input"
        onSubmit={(event) => {
          event.preventDefault()
          submit()
        }}
        className={cn(
          'flex w-full flex-col gap-2 rounded-2xl bg-card p-2 text-card-foreground inset-ring-1 inset-ring-border transition-shadow focus-within:inset-ring-ring focus-within:shadow-focus-ring',
          className,
        )}
        {...props}
      >
        {children}
      </form>
    </PromptInputContext.Provider>
  )
}

function usePromptInput() {
  const ctx = React.useContext(PromptInputContext)
  if (!ctx) throw new Error('PromptInput parts must be used inside <PromptInput>')
  return ctx
}

function PromptInputTextarea({ className, onKeyDown, ...props }: Omit<React.ComponentProps<'textarea'>, 'value' | 'defaultValue'>) {
  const { value, setValue, submit } = usePromptInput()
  return (
    <textarea
      data-slot="prompt-input-textarea"
      rows={1}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={(event) => {
        onKeyDown?.(event)
        if (event.defaultPrevented) return
        if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
          event.preventDefault()
          submit()
        }
      }}
      className={cn(
        'max-h-48 min-h-10 w-full resize-none bg-transparent px-2 py-1.5 text-sm text-foreground outline-none field-sizing-content placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

function PromptInputAttachments({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="prompt-input-attachments" className={cn('flex w-full gap-2 overflow-x-auto px-1 pt-1', className)} {...props} />
}

function PromptInputToolbar({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="prompt-input-toolbar" className={cn('flex items-center justify-between gap-2', className)} {...props} />
}

function PromptInputTools({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="prompt-input-tools" className={cn('flex min-w-0 items-center gap-1', className)} {...props} />
}

/** Model picker slot. Renders a ghost button; pass any element via `asChild`-free children (label, icon). */
function PromptInputModel({ className, children, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button data-slot="prompt-input-model" type="button" variant="ghost" size="sm" className={cn('text-muted-foreground', className)} {...props}>
      {children}
    </Button>
  )
}

export type PromptInputStatus = 'ready' | 'submitted' | 'streaming' | 'error'

export interface PromptInputSubmitProps extends Omit<React.ComponentProps<typeof Button>, 'children'> {
  status?: PromptInputStatus
  /** Called instead of submitting while `streaming`, to stop generation. */
  onStop?: () => void
}

function PromptInputSubmit({ status = 'ready', onStop, onClick, className, disabled, ...props }: PromptInputSubmitProps) {
  const { value } = usePromptInput()
  const streaming = status === 'streaming'
  const label = streaming ? 'Stop generating' : status === 'submitted' ? 'Sending' : 'Send message'
  return (
    <Button
      data-slot="prompt-input-submit"
      data-status={status}
      type={streaming ? 'button' : 'submit'}
      rounded
      aria-label={label}
      disabled={disabled ?? (!streaming && (status === 'submitted' || value.trim() === ''))}
      className={cn('size-8 px-0', className)}
      onClick={(event) => {
        onClick?.(event)
        if (streaming) onStop?.()
      }}
      {...props}
    >
      {streaming ? <Square className="fill-current" /> : status === 'submitted' ? <LoaderCircle className="animate-spin" /> : <ArrowUp />}
    </Button>
  )
}

export { PromptInput, PromptInputTextarea, PromptInputAttachments, PromptInputToolbar, PromptInputTools, PromptInputModel, PromptInputSubmit }
