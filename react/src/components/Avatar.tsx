import * as React from 'react'
import { Avatar as AvatarPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Avatar. Figma components "Avatar" (image), "Avatar" (fallback), "AvatarBadge", "AvatarGroup".
 * - Figma `Size` sm 24 / default 32 / lg 40 -> `size`
 * - Image avatar   -> <AvatarImage src=... />
 * - Fallback avatar (Type=Icon or Count) -> <AvatarFallback>+3</AvatarFallback>
 * - Figma `Badge` toggle -> <AvatarBadge /> (status dot, green)
 * - AvatarGroup -> <AvatarGroup> with avatars inside; <AvatarGroupCount>+3</AvatarGroupCount>
 */
function Avatar({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & { size?: 'sm' | 'default' | 'lg' }) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        'group/avatar relative flex shrink-0 rounded-full select-none',
        'data-[size=sm]:size-6 data-[size=default]:size-8 data-[size=lg]:size-10',
        className,
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full rounded-full object-cover', className)}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground',
        'group-data-[size=sm]/avatar:text-xs',
        "[&>svg]:size-4 group-data-[size=sm]/avatar:[&>svg]:size-3.5 group-data-[size=lg]/avatar:[&>svg]:size-[18px]",
        className,
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        // Figma: 8 / 10 / 12px green dot with a 1px white ring, bottom right
        'absolute right-0 bottom-0 z-10 flex items-center justify-center rounded-full bg-green-600 inset-ring-1 inset-ring-white select-none',
        'group-data-[size=sm]/avatar:size-2 group-data-[size=default]/avatar:size-2.5 group-data-[size=lg]/avatar:size-3',
        className,
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="avatar-group" className={cn('flex -space-x-2', className)} {...props} />
}

function AvatarGroupCount({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        'relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-1 ring-background',
        className,
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount }
