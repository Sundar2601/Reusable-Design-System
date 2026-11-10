import * as React from 'react'
import { Check, Copy, Eraser, TerminalSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../Button'
import { ScrollArea } from '../ScrollArea'
import { Spinner } from '../Spinner'

export interface TerminalProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  /** Output text. ANSI codes are not interpreted. */
  output: string
  title?: string
  /** Shows a spinner while output is still arriving. */
  streaming?: boolean
  /** Called when Clear is pressed. Hides the button when omitted. */
  onClear?: () => void
  /** Max height of the scrolling output. */
  maxHeight?: number | string
}

/** Terminal. Output panel with copy and clear actions. */
function Terminal({ output, title = 'Terminal', streaming, onClear, maxHeight = 240, className, ...props }: TerminalProps) {
  const [copied, setCopied] = React.useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <div data-slot="ai-terminal" className={cn('w-full overflow-hidden rounded-lg bg-card inset-ring-1 inset-ring-border', className)} {...props}>
      <div className="flex items-center gap-2 border-b border-border px-3 py-1.5 text-xs text-muted-foreground">
        <TerminalSquare className="size-4" />
        <span className="flex-1 font-medium">{title}</span>
        {streaming && <Spinner className="size-3" />}
        <Button variant="ghost" size="xs" aria-label="Copy output" onClick={copy} leftIcon={copied ? <Check /> : <Copy />} />
        {onClear && <Button variant="ghost" size="xs" aria-label="Clear output" onClick={onClear} leftIcon={<Eraser />} />}
      </div>
      <ScrollArea style={{ maxHeight }} className="overflow-auto">
        <pre className="p-3 font-mono text-xs leading-5 whitespace-pre-wrap text-foreground">
          {output || <span className="text-muted-foreground">No output</span>}
        </pre>
      </ScrollArea>
    </div>
  )
}

export { Terminal }
