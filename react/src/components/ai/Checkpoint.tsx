import * as React from 'react'
import { Bookmark, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../Button'
import { Separator } from '../Separator'

export interface CheckpointProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  /** Checkpoint label, for example "Checkpoint 3". */
  label?: string
  /** Secondary text such as a timestamp. */
  description?: string
  /** Called when Restore is pressed. Hides the button when omitted. */
  onRestore?: () => void
}

/** Checkpoint. A conversation divider marking a restorable point. */
function Checkpoint({ label = 'Checkpoint', description, onRestore, className, ...props }: CheckpointProps) {
  return (
    <div data-slot="ai-checkpoint" className={cn('flex w-full items-center gap-3 text-muted-foreground', className)} {...props}>
      <Bookmark className="size-4 shrink-0" />
      <span className="text-xs font-medium whitespace-nowrap">{label}</span>
      {description && <span className="text-xs whitespace-nowrap opacity-70">{description}</span>}
      <Separator className="flex-1" />
      {onRestore && (
        <Button variant="ghost" size="xs" leftIcon={<RotateCcw />} onClick={onRestore}>
          Restore
        </Button>
      )}
    </div>
  )
}

export { Checkpoint }
