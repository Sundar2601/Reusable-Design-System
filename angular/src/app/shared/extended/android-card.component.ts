import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/**
 * Android Card (Material 3): elevated, filled, outlined. 12dp radius.
 * Slots: `[slot=media]`, default content, `[slot=actions]`.
 */
@Component({
  selector: 'android-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'cls()',
    '[attr.data-slot]': '"android-card"',
    '[attr.data-variant]': 'variant()',
  },
  template: `
    <ng-content select="[slot=media]" />
    <div class="flex flex-col gap-1 p-4 empty:hidden"><ng-content /></div>
    <div class="flex justify-end gap-2 px-4 pb-4 empty:hidden"><ng-content select="[slot=actions]" /></div>
  `,
})
export class AndroidCardComponent {
  readonly variant = input<'elevated' | 'filled' | 'outlined'>('elevated')
  readonly interactive = input(false)
  protected readonly cls = computed(() => {
    const v = { elevated: 'bg-muted shadow-sm', filled: 'bg-muted', outlined: 'bg-background border border-border' }[this.variant()]
    return `flex flex-col overflow-hidden rounded-xl text-foreground transition-shadow ${v} ${this.interactive() ? 'cursor-pointer hover:shadow-md active:bg-foreground/8' : ''}`
  })
}
