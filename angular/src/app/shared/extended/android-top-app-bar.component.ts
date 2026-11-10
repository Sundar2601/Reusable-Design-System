import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/**
 * Android Top App Bar. Variants small, center, medium, large.
 * Slots: `[slot=navigation]` leading icon, `[slot=actions]` trailing icons.
 */
@Component({
  selector: 'android-top-app-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'cls()',
    '[attr.data-slot]': '"android-top-app-bar"',
    '[attr.data-variant]': 'variant()',
  },
  template: `
    <div class="flex h-16 shrink-0 items-center gap-1 px-1 [&_svg]:size-6">
      <span class="flex size-12 items-center justify-center empty:hidden"><ng-content select="[slot=navigation]" /></span>
      @if (collapsed()) {
        <h1 class="flex-1 truncate text-[22px] leading-7" [class]="variant() === 'center' ? 'text-center' : 'px-1'">{{ title() }}</h1>
      } @else {
        <span class="flex-1"></span>
      }
      <span class="flex items-center"><ng-content select="[slot=actions]" /></span>
    </div>
    @if (!collapsed()) {
      <h1 class="mt-auto truncate px-4 pb-6" [class]="variant() === 'medium' ? 'text-2xl leading-8' : 'text-[32px] leading-10'">{{ title() }}</h1>
    }
  `,
})
export class AndroidTopAppBarComponent {
  readonly variant = input<'small' | 'center' | 'medium' | 'large'>('small')
  readonly title = input('')
  readonly scrolled = input(false)
  protected readonly collapsed = computed(() => this.variant() === 'small' || this.variant() === 'center')
  protected readonly cls = computed(() => {
    const h = this.variant() === 'medium' ? 'h-28' : this.variant() === 'large' ? 'h-38' : 'h-16'
    return `flex w-full flex-col text-foreground transition-colors ${h} ${this.scrolled() ? 'bg-muted' : 'bg-background'}`
  })
}
