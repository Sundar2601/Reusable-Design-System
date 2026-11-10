import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Avatar. Figma component "Avatar" (Size / Initials).
 * - Figma `Size`     -> `size` (`sm` 32px, `md` 40px, `lg` 56px)
 * - Figma `Initials` -> `initials`
 */
const avatarVariants = cva(
  'inline-flex shrink-0 select-none items-center justify-center rounded-full bg-accent text-primary',
  {
    variants: {
      size: {
        sm: 'size-8 text-button-small',
        md: 'size-10 text-label',
        lg: 'size-14 text-heading-h4',
      },
    },
    defaultVariants: { size: 'sm' },
  },
)

export interface AvatarProps extends React.ComponentProps<'span'>, VariantProps<typeof avatarVariants> {
  /** One or two letters, for example "AB". */
  initials: string
}

function Avatar({ className, size, initials, ...props }: AvatarProps) {
  return (
    <span
      data-slot="avatar"
      data-size={size ?? 'sm'}
      role="img"
      aria-label={initials}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    >
      <span aria-hidden="true">{initials}</span>
    </span>
  )
}

export { Avatar, avatarVariants }
