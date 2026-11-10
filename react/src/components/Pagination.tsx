import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from './Button'

/**
 * Pagination. Page links reuse Button (`outline` when active, `ghost` otherwise).
 *   <Pagination>
 *     <PaginationContent>
 *       <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
 *       <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
 *       <PaginationItem><PaginationEllipsis /></PaginationItem>
 *       <PaginationItem><PaginationNext href="#" /></PaginationItem>
 *     </PaginationContent>
 *   </Pagination>
 */
function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul data-slot="pagination-content" className={cn('flex flex-row items-center gap-1', className)} {...props} />
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
  size?: ButtonProps['size']
} & Omit<React.ComponentProps<'a'>, 'size'>

function PaginationLink({ className, isActive, size = 'default', children, ...props }: PaginationLinkProps) {
  return (
    <Button
      asChild
      variant={isActive ? 'outline' : 'ghost'}
      size={size}
      className={cn('min-w-8 cursor-pointer', className)}
    >
      <a
        aria-current={isActive ? 'page' : undefined}
        data-slot="pagination-link"
        data-active={isActive}
        {...props}
      >
        {children}
      </a>
    </Button>
  )
}

function PaginationPrevious({ className, ...props }: Omit<PaginationLinkProps, 'children'>) {
  return (
    <PaginationLink aria-label="Go to previous page" className={cn('gap-1 px-2.5', className)} {...props}>
      <ChevronLeft />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({ className, ...props }: Omit<PaginationLinkProps, 'children'>) {
  return (
    <PaginationLink aria-label="Go to next page" className={cn('gap-1 px-2.5', className)} {...props}>
      <span className="hidden sm:block">Next</span>
      <ChevronRight />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-8 items-center justify-center [&>svg]:size-4', className)}
      {...props}
    >
      <MoreHorizontal />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis }
