import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/** iOS Button. Styles: filled, tinted, gray, plain. Sizes: large (50px), medium (44px), small (32px). */
const iosButtonVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 font-[system-ui,-apple-system,sans-serif] whitespace-nowrap outline-none transition-opacity active:opacity-60 disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        filled: 'bg-[color:var(--ios-tint,#007aff)] font-semibold text-white',
        tinted: 'bg-[color:var(--ios-tint,#007aff)]/15 font-semibold text-[color:var(--ios-tint,#007aff)]',
        gray: 'bg-muted font-semibold text-[color:var(--ios-tint,#007aff)]',
        plain: 'bg-transparent text-[color:var(--ios-tint,#007aff)]',
      },
      size: {
        large: 'h-[50px] w-full rounded-[14px] px-5 text-[17px]',
        medium: 'h-11 rounded-full px-5 text-[17px]',
        small: 'h-8 rounded-full px-3.5 text-[15px]',
      },
      destructive: { true: 'text-[color:var(--ios-destructive,#ff3b30)]', false: '' },
    },
    compoundVariants: [{ variant: 'filled', destructive: true, class: 'bg-[color:var(--ios-destructive,#ff3b30)] text-white' }],
    defaultVariants: { variant: 'filled', size: 'large', destructive: false },
  },
)

export interface IosButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof iosButtonVariants> {}

function IosButton({ className, variant, size, destructive, ...props }: IosButtonProps) {
  return (
    <button
      data-slot="ios-button"
      data-variant={variant ?? 'filled'}
      data-size={size ?? 'large'}
      className={cn(iosButtonVariants({ variant, size, destructive }), className)}
      {...props}
    />
  )
}

export { IosButton, iosButtonVariants }
