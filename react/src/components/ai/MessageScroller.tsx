import * as React from 'react'
import { ArrowDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../Button'

/**
 * Message Scroller. Figma "Message Scroller": the scrolling region of a chat that sticks to the
 * latest message and shows a "scroll to latest" button once the user scrolls up.
 *   <MessageScroller className="h-96"><ChatThread>...</ChatThread></MessageScroller>
 * - `autoScroll` keeps the view pinned to the bottom while content grows (until the user scrolls up).
 * - `scrollToBottomLabel` text of the jump button.
 */
export interface MessageScrollerProps extends React.ComponentProps<'div'> {
  autoScroll?: boolean
  scrollToBottomLabel?: string
}

function MessageScroller({ className, children, autoScroll = true, scrollToBottomLabel = 'Scroll to latest', ...props }: MessageScrollerProps) {
  const viewport = React.useRef<HTMLDivElement>(null)
  const [atBottom, setAtBottom] = React.useState(true)
  const pinned = React.useRef(true)

  const measure = React.useCallback(() => {
    const el = viewport.current
    if (!el) return
    const near = el.scrollHeight - el.scrollTop - el.clientHeight < 24
    pinned.current = near
    setAtBottom(near)
  }, [])

  const scrollToBottom = React.useCallback((behavior: ScrollBehavior = 'smooth') => {
    const el = viewport.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior })
  }, [])

  // Pin to the bottom when content changes, unless the user scrolled up.
  React.useLayoutEffect(() => {
    if (autoScroll && pinned.current) scrollToBottom('auto')
  }, [children, autoScroll, scrollToBottom])

  return (
    <div data-slot="message-scroller" className={cn('relative flex min-h-0 w-full flex-col', className)} {...props}>
      <div
        ref={viewport}
        data-slot="message-scroller-viewport"
        onScroll={measure}
        tabIndex={0}
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain outline-none focus-visible:inset-ring-1 focus-visible:inset-ring-ring"
      >
        {children}
      </div>
      {!atBottom ? (
        <Button
          data-slot="message-scroller-button"
          variant="outline"
          size="sm"
          rounded
          className="absolute bottom-3 left-1/2 -translate-x-1/2 shadow-sm"
          leftIcon={<ArrowDown />}
          onClick={() => scrollToBottom()}
        >
          {scrollToBottomLabel}
        </Button>
      ) : null}
    </div>
  )
}

export { MessageScroller }
