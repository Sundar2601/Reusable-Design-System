import * as React from 'react'
import { ChevronRight, File as FileIcon, Folder, FolderOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * TreeView. Extended component (beyond shadcn): expandable hierarchy.
 * - `nodes` -> { id, label, icon?, children? }
 * - `defaultExpanded` -> ids expanded initially
 * - `selected` / `onSelect` -> highlighted node id
 */
export interface TreeNode {
  id: string
  label: string
  icon?: React.ReactNode
  children?: TreeNode[]
}

export interface TreeViewProps extends Omit<React.ComponentProps<'ul'>, 'children' | 'onSelect'> {
  nodes: TreeNode[]
  defaultExpanded?: string[]
  selected?: string
  onSelect?: (id: string) => void
}

function TreeView({ className, nodes, defaultExpanded = [], selected, onSelect, ...props }: TreeViewProps) {
  const [expanded, setExpanded] = React.useState(() => new Set(defaultExpanded))
  const [innerSelected, setInnerSelected] = React.useState<string | undefined>(undefined)
  const current = selected ?? innerSelected

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const renderNodes = (list: TreeNode[], level: number): React.ReactNode =>
    list.map((node) => {
      const hasChildren = !!node.children?.length
      const open = expanded.has(node.id)
      return (
        <li key={node.id} role="treeitem" aria-expanded={hasChildren ? open : undefined} aria-selected={current === node.id}>
          <button
            type="button"
            data-slot="tree-view-item"
            data-selected={current === node.id}
            onClick={() => {
              if (hasChildren) toggle(node.id)
              if (selected === undefined) setInnerSelected(node.id)
              onSelect?.(node.id)
            }}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
            className={cn(
              'flex h-7 w-full cursor-pointer items-center gap-1.5 rounded-md pr-2 text-left text-sm text-foreground outline-none',
              'hover:bg-muted focus-visible:shadow-focus-ring data-[selected=true]:bg-muted data-[selected=true]:font-medium',
              '[&_svg]:size-4 [&_svg]:shrink-0',
            )}
          >
            <ChevronRight
              className={cn('text-muted-foreground transition-transform', open && 'rotate-90', !hasChildren && 'invisible')}
            />
            <span className="text-muted-foreground">
              {node.icon ?? (hasChildren ? open ? <FolderOpen /> : <Folder /> : <FileIcon />)}
            </span>
            <span className="truncate">{node.label}</span>
          </button>
          {hasChildren && open && (
            <ul role="group" className="flex flex-col gap-0.5">
              {renderNodes(node.children!, level + 1)}
            </ul>
          )}
        </li>
      )
    })

  return (
    <ul data-slot="tree-view" role="tree" className={cn('flex w-64 flex-col gap-0.5', className)} {...props}>
      {renderNodes(nodes, 0)}
    </ul>
  )
}

export { TreeView }
