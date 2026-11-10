import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Typography. Figma "Typography" styles as small components:
 * H1, H2, H3, H4, P, Lead, Large, Small, Muted, InlineCode, Blockquote.
 */
function H1({ className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      data-slot="typography-h1"
      className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight text-balance text-foreground lg:text-5xl', className)}
      {...props}
    />
  )
}

function H2({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      data-slot="typography-h2"
      className={cn('scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0', className)}
      {...props}
    />
  )
}

function H3({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3 data-slot="typography-h3" className={cn('scroll-m-20 text-2xl font-semibold tracking-tight text-foreground', className)} {...props} />
  )
}

function H4({ className, ...props }: React.ComponentProps<'h4'>) {
  return (
    <h4 data-slot="typography-h4" className={cn('scroll-m-20 text-xl font-semibold tracking-tight text-foreground', className)} {...props} />
  )
}

function P({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot="typography-p" className={cn('leading-7 text-foreground [&:not(:first-child)]:mt-6', className)} {...props} />
}

function Lead({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot="typography-lead" className={cn('text-xl text-muted-foreground', className)} {...props} />
}

function Large({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="typography-large" className={cn('text-lg font-semibold text-foreground', className)} {...props} />
}

function Small({ className, ...props }: React.ComponentProps<'small'>) {
  return <small data-slot="typography-small" className={cn('text-sm leading-none font-medium text-foreground', className)} {...props} />
}

function Muted({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot="typography-muted" className={cn('text-sm text-muted-foreground', className)} {...props} />
}

function InlineCode({ className, ...props }: React.ComponentProps<'code'>) {
  return (
    <code
      data-slot="typography-inline-code"
      className={cn('relative rounded-sm bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground', className)}
      {...props}
    />
  )
}

function Blockquote({ className, ...props }: React.ComponentProps<'blockquote'>) {
  return (
    <blockquote
      data-slot="typography-blockquote"
      className={cn('mt-6 border-l-2 border-border pl-6 italic text-foreground', className)}
      {...props}
    />
  )
}

export { H1, H2, H3, H4, P, Lead, Large, Small, Muted, InlineCode, Blockquote }
