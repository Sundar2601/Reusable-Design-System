import { NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, Component, input, model, signal } from '@angular/core'

export interface TreeNode {
  id: string
  label: string
  children?: TreeNode[]
}

/** Tree View. Expandable hierarchy. Mirrors the React TreeView. */
@Component({
  selector: 'ui-tree-view',
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-64', '[attr.data-slot]': '"tree-view"' },
  template: `
    <ul role="tree" class="flex flex-col gap-0.5">
      <ng-container *ngTemplateOutlet="level; context: { $implicit: nodes(), depth: 0 }" />
    </ul>
    <ng-template #level let-list let-depth="depth">
      @for (node of list; track node.id) {
        <li role="treeitem" [attr.aria-expanded]="node.children?.length ? isOpen(node.id) : null" [attr.aria-selected]="selected() === node.id">
          <button
            type="button"
            data-slot="tree-view-item"
            class="flex h-7 w-full cursor-pointer items-center gap-1.5 rounded-md pr-2 text-left text-sm text-foreground outline-none hover:bg-muted focus-visible:shadow-focus-ring [&_svg]:size-4 [&_svg]:shrink-0"
            [class]="selected() === node.id ? 'bg-muted font-medium' : ''"
            [style.padding-left.px]="depth * 16 + 8"
            [attr.data-selected]="selected() === node.id"
            (click)="onClick(node)"
          >
            <svg
              class="text-muted-foreground transition-transform"
              [class]="(isOpen(node.id) ? 'rotate-90' : '') + (node.children?.length ? '' : ' invisible')"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
            ><path d="m9 18 6-6-6-6" /></svg>
            <svg class="text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              @if (node.children?.length) {
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
              } @else {
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" />
              }
            </svg>
            <span class="truncate">{{ node.label }}</span>
          </button>
          @if (node.children?.length && isOpen(node.id)) {
            <ul role="group" class="flex flex-col gap-0.5">
              <ng-container *ngTemplateOutlet="level; context: { $implicit: node.children, depth: depth + 1 }" />
            </ul>
          }
        </li>
      }
    </ng-template>
  `,
})
export class TreeViewComponent {
  readonly nodes = input<TreeNode[]>([])
  readonly defaultExpanded = input<string[]>([])
  readonly selected = model<string | undefined>(undefined)
  private readonly toggled = signal<Record<string, boolean>>({})

  protected isOpen(id: string) {
    return this.toggled()[id] ?? this.defaultExpanded().includes(id)
  }
  protected onClick(node: TreeNode) {
    if (node.children?.length) this.toggled.update((t) => ({ ...t, [node.id]: !this.isOpen(node.id) }))
    this.selected.set(node.id)
  }
}
