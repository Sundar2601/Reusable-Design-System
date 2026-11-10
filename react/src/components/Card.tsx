import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Card. Figma has no single "Card" component. It is built from "Card header",
 * "Card footer" and free content, so the code mirrors that:
 *   <Card>
 *     <CardHeader>
 *       <CardTitle>Title</CardTitle>
 *       <CardDescription>Description</CardDescription>
 *       <CardAction><Button size="sm">Sign up</Button></CardAction>
 *     </CardHeader>
 *     <CardContent>...</CardContent>
 *     <CardFooter>...</CardFooter>
 *   </Card>
 * - Figma card header `Type=Image`   -> <CardImage>
 * - Figma card header `Type=Button / Badge` -> <CardAction>
 * - `size="sm"` is the compact card from the Figma examples.
 */
function Card({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        // Figma: 384 wide, radius xl, 16px gaps; the 1px border is drawn inside, over the footer
        'group/card relative flex w-96 flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground',
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:content-['']",
        'has-data-[slot=card-footer]:pb-0 has-data-[slot=card-image]:pt-0',
        className,
      )}
      {...props}
    />
  )
}

function CardImage({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-image"
      className={cn('h-54 w-full shrink-0 overflow-hidden bg-muted [&>img]:size-full [&>img]:object-cover', className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn('grid auto-rows-min items-start gap-1 px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto]', className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('text-base font-medium text-card-foreground group-data-[size=sm]/card:text-sm', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-description" className={cn('text-sm text-muted-foreground', className)} {...props} />
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('px-4 text-sm text-card-foreground', className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex flex-col gap-2 bg-muted p-4 shadow-[inset_0_1px_0_0_var(--border)]', className)}
      {...props}
    />
  )
}

export { Card, CardImage, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter }
