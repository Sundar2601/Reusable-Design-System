import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * PageHeader. Extended component (beyond shadcn): title row for the top of a page.
 * - `title`, `description` -> heading and supporting text
 * - `breadcrumb` -> element rendered above the title (for example a breadcrumb trail)
 * - `actions` -> elements aligned to the right (for example Buttons)
 */
export interface PageHeaderProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  breadcrumb?: React.ReactNode
  actions?: React.ReactNode
}

function PageHeader({ className, title, description, breadcrumb, actions, ...props }: PageHeaderProps) {
  return (
    <div
      data-slot="page-header"
      className={cn('flex w-full flex-col gap-3 border-b border-border pb-4', className)}
      {...props}
    >
      {breadcrumb && <div data-slot="page-header-breadcrumb" className="text-sm text-muted-foreground">{breadcrumb}</div>}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <h1 data-slot="page-header-title" className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
          {description && <p data-slot="page-header-description" className="text-sm text-muted-foreground">{description}</p>}
        </div>
        {actions && <div data-slot="page-header-actions" className="flex shrink-0 items-center gap-2">{actions}</div>}
      </div>
    </div>
  )
}

export { PageHeader }
