import * as React from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Code Block. A styled <pre><code> with an optional language label and a copy button.
 * No syntax highlighting is bundled; pass already-highlighted nodes as `children` if needed.
 */
export interface CodeBlockProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  /** The source text. Used for display and for the copy button. */
  code: string
  /** Language label shown in the header, for example "tsx". */
  language?: string
  /** Show the copy button. */
  copyable?: boolean
}

function CodeBlock({ code, language, copyable = true, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  React.useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard may be unavailable (insecure context); fail silently.
    }
  }

  return (
    <div
      data-slot="code-block"
      className={cn('relative w-full overflow-hidden rounded-lg bg-muted text-sm text-foreground', className)}
      {...props}
    >
      {(language || copyable) && (
        <div
          data-slot="code-block-header"
          className="flex h-9 items-center justify-between border-b border-border px-3 text-xs text-muted-foreground"
        >
          <span>{language}</span>
          {copyable && (
            <button
              type="button"
              data-slot="code-block-copy"
              onClick={copy}
              aria-label={copied ? 'Copied' : 'Copy code'}
              className="inline-flex size-7 cursor-pointer items-center justify-center rounded-sm text-foreground outline-none transition-all hover:bg-background focus-visible:inset-ring-1 focus-visible:inset-ring-ring focus-visible:shadow-focus-ring [&_svg]:size-4"
            >
              {copied ? <Check /> : <Copy />}
            </button>
          )}
        </div>
      )}
      <pre data-slot="code-block-pre" className="overflow-x-auto p-3 font-mono text-[13px] leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export { CodeBlock }
