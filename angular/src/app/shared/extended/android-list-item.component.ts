import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/** Android List Item (Material 3): 1/2/3 line rows. Slots: `[slot=leading]`, `[slot=trailing]`. */
@Component({
  selector: 'android-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'cls()',
    '[attr.data-slot]': '"android-list-item"',
    '[attr.data-lines]': 'count()',
    '[attr.data-state]': 'selected() ? "selected" : null',
  },
  template: `
    <span class="flex shrink-0 items-center text-muted-foreground empty:hidden [&_svg]:size-6"><ng-content select="[slot=leading]" /></span>
    <span class="flex min-w-0 flex-1 flex-col">
      @if (overline()) {
        <span class="text-[11px] leading-4 font-medium tracking-wide text-muted-foreground">{{ overline() }}</span>
      }
      <span class="truncate text-base leading-6">{{ headline() }}</span>
      @if (supportingText()) {
        <span class="text-sm leading-5 text-muted-foreground" [class]="count() === 3 ? 'line-clamp-2' : 'truncate'">{{ supportingText() }}</span>
      }
    </span>
    <span class="flex shrink-0 items-center text-xs text-muted-foreground empty:hidden [&_svg]:size-6"><ng-content select="[slot=trailing]" /></span>
  `,
})
export class AndroidListItemComponent {
  readonly headline = input('')
  readonly supportingText = input<string | undefined>(undefined)
  readonly overline = input<string | undefined>(undefined)
  readonly divider = input(false)
  readonly selected = input(false)
  readonly interactive = input(false)
  readonly lines = input<1 | 2 | 3 | undefined>(undefined)
  protected readonly count = computed(() => this.lines() ?? (this.supportingText() ? 2 : 1))
  protected readonly cls = computed(() => {
    const h = this.count() === 1 ? 'min-h-14' : this.count() === 2 ? 'min-h-18' : 'min-h-22 items-start py-3'
    return [
      'flex w-full items-center gap-4 px-4 py-2 text-foreground transition-colors',
      h,
      this.interactive() ? 'cursor-pointer hover:bg-foreground/8 active:bg-foreground/12' : '',
      this.selected() ? 'bg-primary/10' : '',
      this.divider() ? 'border-b border-border' : '',
    ].join(' ')
  })
}
