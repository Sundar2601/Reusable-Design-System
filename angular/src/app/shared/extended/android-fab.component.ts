import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/** Android FAB. Sizes small 40dp / default 56dp / large 96dp; set `label` for an extended FAB. Icon via content projection. */
@Component({
  selector: 'android-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button" data-slot="android-fab" [class]="cls()" [disabled]="disabled()" [attr.aria-label]="label() ? null : ariaLabel()">
      <ng-content />
      {{ label() }}
    </button>
  `,
})
export class AndroidFabComponent {
  readonly variant = input<'primary' | 'secondary' | 'surface'>('primary')
  readonly size = input<'small' | 'default' | 'large'>('default')
  readonly label = input<string | undefined>(undefined)
  readonly ariaLabel = input('Action')
  readonly disabled = input(false)
  protected readonly cls = computed(() => {
    const v = { primary: 'bg-primary text-primary-foreground', secondary: 'bg-secondary text-secondary-foreground', surface: 'bg-muted text-foreground' }[this.variant()]
    const s = this.label()
      ? 'h-14 rounded-2xl px-4 text-sm [&_svg]:size-6'
      : { small: 'size-10 rounded-xl [&_svg]:size-6', default: 'size-14 rounded-2xl [&_svg]:size-6', large: 'size-24 rounded-[28px] [&_svg]:size-9' }[this.size()]
    return `inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 font-medium shadow-md outline-none transition-all hover:shadow-lg focus-visible:shadow-focus-ring active:shadow-md disabled:pointer-events-none disabled:opacity-50 ${v} ${s}`
  })
}
