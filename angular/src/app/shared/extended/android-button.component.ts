import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/** Android Button (Material 3): filled, tonal, outlined, elevated, text. Leading icon via `[slot=icon]`. */
@Component({
  selector: 'android-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button" data-slot="android-button" [attr.data-variant]="variant()" [class]="cls()" [disabled]="disabled()">
      <ng-content select="[slot=icon]" />
      <ng-content />
    </button>
  `,
})
export class AndroidButtonComponent {
  readonly variant = input<'filled' | 'tonal' | 'outlined' | 'elevated' | 'text'>('filled')
  readonly disabled = input(false)
  protected readonly cls = computed(() => {
    const v = {
      filled: 'bg-primary text-primary-foreground hover:opacity-90 hover:shadow-sm active:opacity-80',
      tonal: 'bg-secondary text-secondary-foreground hover:opacity-90 active:opacity-80',
      outlined: 'bg-transparent text-foreground inset-ring-1 inset-ring-border hover:bg-foreground/8 active:bg-foreground/12',
      elevated: 'bg-muted text-foreground shadow-sm hover:shadow-md active:bg-foreground/12',
      text: 'bg-transparent px-3 text-foreground hover:bg-foreground/8 active:bg-foreground/12',
    }[this.variant()]
    return `inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-medium whitespace-nowrap outline-none transition-all focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4.5 [&_svg]:shrink-0 ${v}`
  })
}
