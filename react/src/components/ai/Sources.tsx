import * as React from 'react'
import { BookOpen, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../Collapsible'

/**
 * Sources. Figma component "Sources". A collapsible "Used N sources" list of links.
 */
function Sources({ className, ...props }: React.ComponentProps<typeof Collapsible>) {
  return <Collapsible data-slot="sources" className={cn('group/sources not-prose flex w-full flex-col gap-2 text-sm', className)} {...props} />
}

function SourcesTrigger({
  className,
  count,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleTrigger> & { count: number }) {
  return (
    <CollapsibleTrigger
      data-slot="sources-trigger"
      className={cn(
        'flex w-fit cursor-pointer items-center gap-2 rounded-sm font-medium text-primary outline-none focus-visible:inset-ring-1 focus-visible:inset-ring-ring',
        className,
      )}
      {...props}
    >
      {children ?? (
        <>
          <BookOpen className="size-4" />
          <span>Used {count} sources</span>
          <ChevronDown className="size-4 transition-transform group-data-[state=open]/sources:rotate-180" />
        </>
      )}
    </CollapsibleTrigger>
  )
}

function SourcesContent({ className, ...props }: React.ComponentProps<typeof CollapsibleContent>) {
  return <CollapsibleContent data-slot="sources-content" className={cn('flex flex-col gap-2', className)} {...props} />
}

function Source({ className, href, title, children, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      data-slot="source"
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn('flex items-center gap-2 rounded-sm text-foreground outline-none hover:underline focus-visible:inset-ring-1 focus-visible:inset-ring-ring', className)}
      {...props}
    >
      {children ?? (
        <>
          <BookOpen className="size-4 shrink-0 text-muted-foreground" />
          <span className="truncate">{title ?? href}</span>
        </>
      )}
    </a>
  )
}

export { Sources, SourcesTrigger, SourcesContent, Source }
