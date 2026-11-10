import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Attachment. Figma "Attachment": a file / image chip used in messages and the prompt input.
 *   <Attachment state="done">
 *     <AttachmentMedia><FileText /></AttachmentMedia>
 *     <AttachmentContent><AttachmentTitle>report.pdf</AttachmentTitle><AttachmentDescription>PDF, 2.4 MB</AttachmentDescription></AttachmentContent>
 *     <AttachmentActions><AttachmentAction aria-label="Remove"><X /></AttachmentAction></AttachmentActions>
 *   </Attachment>
 * - `state` idle | uploading | processing | done | error
 * - `size` default | sm | xs, `orientation` horizontal | vertical (image card)
 */
const attachmentVariants = cva(
  'group/attachment relative isolate flex w-fit max-w-full min-w-0 shrink-0 items-center rounded-2xl bg-card text-sm text-card-foreground inset-ring-1 inset-ring-border transition-colors has-[>button]:hover:bg-muted/50 data-[state=error]:text-text-destructive data-[state=error]:inset-ring-destructive-subtle data-[state=idle]:border data-[state=idle]:border-dashed data-[state=idle]:inset-ring-0',
  {
    variants: {
      state: {
        idle: '',
        uploading: 'bg-muted/50',
        processing: 'bg-muted/50',
        error: '',
        done: '',
      },
      size: { default: 'gap-3 p-3', sm: 'gap-2.5 p-2', xs: 'gap-2 rounded-xl p-1.5 text-xs' },
      orientation: { horizontal: '', vertical: 'flex-col items-start' },
    },
    defaultVariants: { state: 'done', size: 'default', orientation: 'horizontal' },
  },
)

export interface AttachmentProps extends React.ComponentProps<'div'>, VariantProps<typeof attachmentVariants> {}

function Attachment({ className, state, size, orientation, ...props }: AttachmentProps) {
  return (
    <div
      data-slot="attachment"
      data-state={state ?? 'done'}
      data-size={size ?? 'default'}
      data-orientation={orientation ?? 'horizontal'}
      aria-busy={state === 'uploading' || state === 'processing' ? true : undefined}
      className={cn(attachmentVariants({ state, size, orientation }), className)}
      {...props}
    />
  )
}

const mediaVariants = cva(
  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted text-foreground group-data-[orientation=vertical]/attachment:w-full group-data-[state=error]/attachment:bg-destructive-subtle group-data-[state=error]/attachment:text-text-destructive [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        icon: 'size-10 text-muted-foreground group-data-[size=sm]/attachment:size-8 group-data-[size=xs]/attachment:size-6',
        image:
          'size-16 group-data-[size=sm]/attachment:size-12 group-data-[size=xs]/attachment:size-8 group-data-[orientation=vertical]/attachment:h-32 [&_img]:size-full [&_img]:object-cover',
      },
    },
    defaultVariants: { variant: 'icon' },
  },
)

function AttachmentMedia({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof mediaVariants>) {
  return <div data-slot="attachment-media" className={cn(mediaVariants({ variant }), className)} {...props} />
}

function AttachmentContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="attachment-content"
      className={cn('flex min-w-0 flex-1 flex-col gap-0.5 leading-tight group-data-[orientation=vertical]/attachment:w-full', className)}
      {...props}
    />
  )
}

function AttachmentTitle({ className, ...props }: React.ComponentProps<'span'>) {
  return <span data-slot="attachment-title" className={cn('block w-fit max-w-full truncate font-medium', className)} {...props} />
}

function AttachmentDescription({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="attachment-description"
      className={cn('block text-xs text-muted-foreground group-data-[state=error]/attachment:text-text-destructive', className)}
      {...props}
    />
  )
}

function AttachmentActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="attachment-actions"
      className={cn(
        'relative z-20 flex shrink-0 items-center gap-1 group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:end-2.5 group-data-[orientation=vertical]/attachment:top-2.5',
        className,
      )}
      {...props}
    />
  )
}

function AttachmentAction({ className, type = 'button', ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      data-slot="attachment-action"
      type={type}
      className={cn(
        'inline-flex size-6 cursor-pointer items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:inset-ring-1 focus-visible:inset-ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-3.5',
        className,
      )}
      {...props}
    />
  )
}

/** Horizontal scrollable row of attachments. */
function AttachmentGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="attachment-group" className={cn('flex w-full min-w-0 gap-3 overflow-x-auto py-1', className)} {...props} />
}

export {
  Attachment,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentGroup,
  attachmentVariants,
}
