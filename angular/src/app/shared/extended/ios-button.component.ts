import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/** iOS Button. Attribute selector: `<button ios-button variant="tinted" size="medium">`. Mirrors the React IosButton. */
@Component({
  selector: 'button[ios-button]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.data-slot]': '"ios-button"',
    '[attr.data-variant]': 'variant()',
    '[attr.data-size]': 'size()',
  },
  template: `<ng-content />`,
})
export class IosButtonComponent {
  readonly variant = input<'filled' | 'tinted' | 'gray' | 'plain'>('filled')
  readonly size = input<'large' | 'medium' | 'small'>('medium')
  readonly destructive = input(false)

  protected readonly classes = computed(() => {
    const base =
      'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 font-[system-ui,-apple-system,sans-serif] whitespace-nowrap outline-none transition-opacity active:opacity-60 disabled:pointer-events-none disabled:opacity-40'
    const tint = this.destructive() ? 'text-[color:var(--ios-destructive,#ff3b30)]' : 'text-[color:var(--ios-tint,#007aff)]'
    const bg = this.destructive() ? 'bg-[color:var(--ios-destructive,#ff3b30)]' : 'bg-[color:var(--ios-tint,#007aff)]'
    const variant = {
      filled: `${bg} font-semibold text-white`,
      tinted: `${bg}/15 font-semibold ${tint}`,
      gray: `bg-muted font-semibold ${tint}`,
      plain: `bg-transparent ${tint}`,
    }[this.variant()]
    const size = {
      large: 'h-[50px] w-full rounded-[14px] px-5 text-[17px]',
      medium: 'h-11 rounded-full px-5 text-[17px]',
      small: 'h-8 rounded-full px-3.5 text-[15px]',
    }[this.size()]
    return `${base} ${variant} ${size}`
  })
}
