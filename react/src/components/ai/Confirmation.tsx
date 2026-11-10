import * as React from 'react'
import { ShieldAlert } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../Button'

/**
 * Confirmation. Figma component "Confirmation". An approval request for a tool call.
 * `state` picks which part is visible: the request with actions, or the accepted / rejected result.
 */
export type ConfirmationState = 'requested' | 'accepted' | 'rejected'

function Confirmation({
  className,
  state = 'requested',
  title,
  description,
  approveLabel = 'Approve',
  rejectLabel = 'Reject',
  onApprove,
  onReject,
  ...props
}: Omit<React.ComponentProps<'div'>, 'title'> & {
  state?: ConfirmationState
  title: React.ReactNode
  description?: React.ReactNode
  approveLabel?: string
  rejectLabel?: string
  onApprove?: () => void
  onReject?: () => void
}) {
  return (
    <div
      role="alert"
      data-slot="confirmation"
      data-state={state}
      className={cn('flex w-full flex-col gap-3 rounded-lg bg-card p-4 text-sm text-card-foreground inset-ring-1 inset-ring-border', className)}
      {...props}
    >
      <div className="flex items-start gap-2">
        <ShieldAlert className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
        <div className="flex flex-col gap-1">
          <div data-slot="confirmation-title" className="font-medium">{title}</div>
          {state === 'requested' && description && <div className="text-muted-foreground">{description}</div>}
          {state === 'accepted' && <div className="text-muted-foreground">You approved this request.</div>}
          {state === 'rejected' && <div className="text-text-destructive">You rejected this request.</div>}
        </div>
      </div>
      {state === 'requested' && (
        <div data-slot="confirmation-actions" className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={onReject}>{rejectLabel}</Button>
          <Button size="sm" onClick={onApprove}>{approveLabel}</Button>
        </div>
      )}
    </div>
  )
}

export { Confirmation }
