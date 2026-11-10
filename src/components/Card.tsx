import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Card. Figma component "Card" (Style / Title / Description).
 * - Figma `Style`       -> `variant` ("style" is a React prop). `outlined` or `elevated`.
 * - Figma `Title`       -> `title`
 * - Figma `Description` -> `description`
 * - The image area and the Button in Figma are slots here: `media` and `action`.
 */
const cardVariants = cva('flex w-80 flex-col overflow-hidden rounded-lg bg-card text-card-foreground', {
  variants: {
    variant: {
      outlined: 'border border-border',
      elevated: 'shadow-elevated',
    },
  },
  defaultVariants: { variant: 'outlined' },
})

export interface CardProps
  extends Omit<React.ComponentProps<'div'>, 'title'>,
    VariantProps<typeof cardVariants> {
  title: React.ReactNode
  description?: React.ReactNode
  /** Image or other media shown above the text (160px tall area). Optional. */
  media?: React.ReactNode
  /** Action area under the text, usually a Button. Optional. */
  action?: React.ReactNode
}

function Card({ className, variant, title, description, media, action, ...props }: CardProps) {
  return (
    <div data-slot="card" data-variant={variant ?? 'outlined'} className={cn(cardVariants({ variant }), className)} {...props}>
      {media ? <div className="h-40 w-full shrink-0 overflow-hidden bg-secondary [&>img]:size-full [&>img]:object-cover">{media}</div> : null}
      <div className="flex flex-col gap-md p-xl">
        <h3 className="text-heading-h4 text-foreground">{title}</h3>
        {description ? <p className="text-body-small text-muted-foreground">{description}</p> : null}
        {action ? <div className="flex">{action}</div> : null}
      </div>
    </div>
  )
}

export { Card, cardVariants }
