import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Android dialog (Material 3). Figma "Dialog".
 * 28dp radius surface, 280-560dp wide. This is the dialog panel itself (no portal);
 * wrap it in your own scrim / overlay when presenting it.
 */
export interface AndroidDialogProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  /** Optional hero icon above the title (centers the title). */
  icon?: React.ReactNode
  title: React.ReactNode
  /** Supporting text. */
  description?: React.ReactNode
  /** Action buttons (usually two AndroidButton variant="text"). */
  actions?: React.ReactNode
}

function AndroidDialog({ icon, title, description, actions, className, children, ...props }: AndroidDialogProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      data-slot="android-dialog"
      className={cn('flex w-[312px] max-w-full flex-col gap-4 rounded-[28px] bg-muted p-6 text-foreground shadow-lg', className)}
      {...props}
    >
      {icon && <div className="flex justify-center text-primary [&_svg]:size-6">{icon}</div>}
      <h2 className={cn('text-2xl leading-8', icon && 'text-center')}>{title}</h2>
      {description && <p className="text-sm leading-5 text-muted-foreground">{description}</p>}
      {children}
      {actions && <div className="flex justify-end gap-2 pt-2">{actions}</div>}
    </div>
  )
}

/** Full-screen scrim to place behind an AndroidDialog or AndroidBottomSheet. */
function AndroidScrim({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="android-scrim" className={cn('fixed inset-0 bg-black/32', className)} {...props} />
}

export { AndroidDialog, AndroidScrim }
