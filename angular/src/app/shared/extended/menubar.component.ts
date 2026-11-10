import { ChangeDetectionStrategy, Component, ElementRef, inject, input, signal } from '@angular/core'

export interface MenubarItem {
  label?: string
  shortcut?: string
  disabled?: boolean
  destructive?: boolean
  /** Renders a divider instead of an item. */
  separator?: boolean
}

export interface MenubarMenu {
  label: string
  items: MenubarItem[]
}

/**
 * Menubar. A desktop-style row of menus. ZardUI has no Menubar, so this is hand-built with the
 * same Tailwind tokens as the React Menubar (Radix). Click a trigger to open, hover to switch
 * between menus, Escape or an outside click to close.
 */
@Component({
  selector: 'ui-menubar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-9 w-fit items-center gap-1 rounded-lg bg-background p-1 inset-ring-1 inset-ring-border',
    role: 'menubar',
    'data-slot': 'menubar',
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'openIndex.set(null)',
  },
  template: `
    @for (menu of menus(); track menu.label; let i = $index) {
      <div class="relative" data-slot="menubar-menu">
        <button
          type="button"
          role="menuitem"
          aria-haspopup="menu"
          data-slot="menubar-trigger"
          class="flex cursor-default items-center rounded-md px-2 py-1 text-sm font-medium outline-hidden select-none hover:bg-muted focus-visible:bg-muted data-[state=open]:bg-muted"
          [attr.aria-expanded]="openIndex() === i"
          [attr.data-state]="openIndex() === i ? 'open' : 'closed'"
          (click)="toggle(i)"
          (mouseenter)="openIndex() !== null && openIndex.set(i)"
        >
          {{ menu.label }}
        </button>
        @if (openIndex() === i) {
          <div
            role="menu"
            data-slot="menubar-content"
            data-state="open"
            class="absolute top-full left-0 z-50 mt-2 min-w-48 overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-border animate-in fade-in-0 zoom-in-95 slide-in-from-top-2"
          >
            @for (item of menu.items; track $index) {
              @if (item.separator) {
                <div role="separator" data-slot="menubar-separator" class="-mx-1 my-1 h-px bg-border"></div>
              } @else {
                <button
                  type="button"
                  role="menuitem"
                  data-slot="menubar-item"
                  class="relative flex w-full cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-hidden select-none hover:bg-muted focus-visible:bg-muted disabled:pointer-events-none disabled:opacity-50"
                  [class.text-text-destructive]="item.destructive"
                  [disabled]="item.disabled"
                  (click)="openIndex.set(null)"
                >
                  {{ item.label }}
                  @if (item.shortcut) {
                    <span data-slot="menubar-shortcut" class="ml-auto text-xs tracking-widest text-muted-foreground">{{ item.shortcut }}</span>
                  }
                </button>
              }
            }
          </div>
        }
      </div>
    }
  `,
})
export class MenubarComponent {
  readonly menus = input<MenubarMenu[]>([])
  protected readonly openIndex = signal<number | null>(null)
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef)

  protected toggle(i: number) {
    this.openIndex.update((current) => (current === i ? null : i))
  }

  protected onDocumentClick(event: Event) {
    if (!this.host.nativeElement.contains(event.target as Node)) this.openIndex.set(null)
  }
}
