import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar'

/**
 * Message & Bubble (Chat Thread). Figma "Message", "Bubble".
 *   <ChatThread>
 *     <Message align="end"><MessageContent><Bubble variant="default">Hi</Bubble></MessageContent></Message>
 *     <Message><MessageAvatar fallback="AI" /><MessageContent><MessageHeader>Assistant</MessageHeader><Bubble variant="ghost">Hello</Bubble></MessageContent></Message>
 *   </ChatThread>
 * - `align="end"` is the user's own turn (right aligned), `start` the assistant's.
 * - Bubble `variant` mirrors the Figma surface: default | secondary | muted | outline | ghost | destructive.
 */
function ChatThread({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="chat-thread"
      role="log"
      aria-live="polite"
      className={cn('flex w-full min-w-0 flex-col gap-4', className)}
      {...props}
    />
  )
}

export interface MessageProps extends React.ComponentProps<'div'> {
  /** `end` = the user's turn, `start` = the other party. */
  align?: 'start' | 'end'
}

function Message({ className, align = 'start', ...props }: MessageProps) {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        'group/message flex w-full min-w-0 items-start gap-2 text-sm',
        'data-[align=end]:flex-row-reverse',
        className,
      )}
      {...props}
    />
  )
}

export interface MessageAvatarProps extends React.ComponentProps<typeof Avatar> {
  src?: string
  alt?: string
  /** Initials shown when there is no image. */
  fallback?: React.ReactNode
}

function MessageAvatar({ className, src, alt = '', fallback, ...props }: MessageAvatarProps) {
  return (
    <Avatar data-slot="message-avatar" size="sm" className={cn('shrink-0', className)} {...props}>
      {src ? <AvatarImage src={src} alt={alt} /> : null}
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}

function MessageContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="message-content"
      className={cn(
        'flex min-w-0 max-w-[80%] flex-col gap-1 group-data-[align=end]/message:items-end',
        className,
      )}
      {...props}
    />
  )
}

function MessageHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="message-header" className={cn('text-xs text-muted-foreground', className)} {...props} />
}

function MessageFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="message-footer" className={cn('flex items-center gap-1 text-xs text-muted-foreground', className)} {...props} />
}

const bubbleVariants = cva('w-fit max-w-full rounded-2xl px-3 py-2 text-sm leading-normal wrap-break-word', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      muted: 'bg-muted text-foreground',
      outline: 'bg-background text-foreground inset-ring-1 inset-ring-border',
      ghost: 'bg-transparent px-0 text-foreground',
      destructive: 'bg-destructive-subtle text-text-destructive',
    },
  },
  defaultVariants: { variant: 'default' },
})

export interface BubbleProps extends React.ComponentProps<'div'>, VariantProps<typeof bubbleVariants> {}

function Bubble({ className, variant, ...props }: BubbleProps) {
  return <div data-slot="bubble" data-variant={variant ?? 'default'} className={cn(bubbleVariants({ variant }), className)} {...props} />
}

/** Stacks several bubbles of one turn. */
function BubbleGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="bubble-group" className={cn('flex min-w-0 flex-col gap-2 group-data-[align=end]/message:items-end', className)} {...props} />
}

export { ChatThread, Message, MessageAvatar, MessageContent, MessageHeader, MessageFooter, Bubble, BubbleGroup, bubbleVariants }
