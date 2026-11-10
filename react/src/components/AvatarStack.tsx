import * as React from 'react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from './Avatar'

/**
 * AvatarStack. Extended component built from the Avatar parts (Figma "AvatarGroup" with overflow).
 * - `items` -> people (name for initials / alt, optional image `src`)
 * - `max` -> number of avatars shown before the "+N" overflow bubble
 * - `size` -> sm | default | lg
 */
export interface AvatarStackItem {
  name: string
  src?: string
}

export interface AvatarStackProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  items: AvatarStackItem[]
  max?: number
  size?: 'sm' | 'default' | 'lg'
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')

function AvatarStack({ className, items, max = 4, size = 'default', ...props }: AvatarStackProps) {
  const visible = items.slice(0, max)
  const extra = items.length - visible.length
  return (
    <div
      data-slot="avatar-stack"
      role="group"
      aria-label={`${items.length} people`}
      className={cn('flex -space-x-2', className)}
      {...props}
    >
      {visible.map((item) => (
        <Avatar key={item.name} size={size} title={item.name} className="ring-2 ring-background">
          {item.src && <AvatarImage src={item.src} alt={item.name} />}
          <AvatarFallback>{initials(item.name)}</AvatarFallback>
        </Avatar>
      ))}
      {extra > 0 && (
        <Avatar size={size} data-slot="avatar-stack-count" className="ring-2 ring-background">
          <AvatarFallback>+{extra}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

export { AvatarStack }
