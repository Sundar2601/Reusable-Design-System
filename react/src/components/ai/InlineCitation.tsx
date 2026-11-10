import * as React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '../Badge'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../HoverCard'

/**
 * Inline Citation. Figma component "Inline Citation". A numbered chip placed inside text;
 * hovering it opens a card with the source details.
 */
function InlineCitation({ className, ...props }: React.ComponentProps<'span'>) {
  return <span data-slot="inline-citation" className={cn('inline-flex items-center gap-1', className)} {...props} />
}

function InlineCitationText({ className, ...props }: React.ComponentProps<'span'>) {
  return <span data-slot="inline-citation-text" className={cn('transition-colors hover:bg-muted', className)} {...props} />
}

function InlineCitationCard({ openDelay = 0, closeDelay = 0, ...props }: React.ComponentProps<typeof HoverCard>) {
  return <HoverCard openDelay={openDelay} closeDelay={closeDelay} {...props} />
}

function InlineCitationCardTrigger({
  index,
  className,
  ...props
}: Omit<React.ComponentProps<typeof Badge>, 'children'> & { index: number | string }) {
  return (
    <HoverCardTrigger asChild>
      <Badge variant="secondary" tabIndex={0} className={cn('ml-0.5 cursor-pointer rounded-full tabular-nums', className)} {...props}>
        {index}
      </Badge>
    </HoverCardTrigger>
  )
}

function InlineCitationCardBody({ className, ...props }: React.ComponentProps<typeof HoverCardContent>) {
  return <HoverCardContent data-slot="inline-citation-card" className={cn('flex w-80 flex-col gap-2 p-3', className)} {...props} />
}

function InlineCitationSource({
  className,
  title,
  url,
  description,
  ...props
}: Omit<React.ComponentProps<'div'>, 'title'> & { title: string; url?: string; description?: string }) {
  return (
    <div data-slot="inline-citation-source" className={cn('flex flex-col gap-1', className)} {...props}>
      <h4 className="truncate text-sm font-medium">{title}</h4>
      {url && <p className="truncate text-xs break-all text-muted-foreground">{url}</p>}
      {description && <p className="line-clamp-3 text-xs text-muted-foreground">{description}</p>}
    </div>
  )
}

export { InlineCitation, InlineCitationText, InlineCitationCard, InlineCitationCardTrigger, InlineCitationCardBody, InlineCitationSource }
