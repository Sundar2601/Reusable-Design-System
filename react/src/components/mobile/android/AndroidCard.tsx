import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Android card (Material 3). Figma "Card".
 * - `variant`: elevated | filled | outlined. 12dp corner radius.
 */
const androidCardVariants = cva('flex flex-col overflow-hidden rounded-xl text-foreground transition-shadow', {
  variants: {
    variant: {
      elevated: 'bg-muted shadow-sm',
      filled: 'bg-muted',
      outlined: 'bg-background border border-border',
    },
    interactive: { true: 'cursor-pointer hover:shadow-md active:bg-foreground/8', false: '' },
  },
  defaultVariants: { variant: 'elevated', interactive: false },
})

export interface AndroidCardProps extends React.ComponentProps<'div'>, VariantProps<typeof androidCardVariants> {}

function AndroidCard({ variant, interactive, className, ...props }: AndroidCardProps) {
  return <div data-slot="android-card" data-variant={variant ?? 'elevated'} className={cn(androidCardVariants({ variant, interactive }), className)} {...props} />
}

function AndroidCardMedia({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="android-card-media" className={cn('h-40 w-full bg-primary/10', className)} {...props} />
}

function AndroidCardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="android-card-content" className={cn('flex flex-col gap-1 p-4', className)} {...props} />
}

function AndroidCardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return <h3 data-slot="android-card-title" className={cn('text-base leading-6 font-medium', className)} {...props} />
}

function AndroidCardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot="android-card-description" className={cn('text-sm leading-5 text-muted-foreground', className)} {...props} />
}

function AndroidCardActions({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="android-card-actions" className={cn('flex justify-end gap-2 px-4 pb-4', className)} {...props} />
}

export { AndroidCard, AndroidCardMedia, AndroidCardContent, AndroidCardTitle, AndroidCardDescription, AndroidCardActions, androidCardVariants }
