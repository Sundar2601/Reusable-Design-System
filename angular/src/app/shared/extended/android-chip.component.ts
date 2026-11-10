import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core'

/** Android Chip (Material 3): assist, filter, input, suggestion. Leading icon via `[slot=icon]`. */
@Component({
  selector: 'android-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      data-slot="android-chip"
      [attr.data-variant]="variant()"
      [attr.data-state]="selected() ? 'selected' : 'unselected'"
      [attr.aria-pressed]="variant() === 'filter' ? selected() : null"
      [disabled]="disabled()"
      [class]="cls()"
      (click)="onClick()"
    >
      @if (variant() === 'filter' && selected()) {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      } @else {
        <ng-content select="[slot=icon]" />
      }
      <ng-content />
      @if (variant() === 'input') {
        <span role="button" aria-label="Remove" class="-mr-1 rounded-full hover:bg-foreground/12" (click)="$event.stopPropagation(); removed.emit()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </span>
      }
    </button>
  `,
})
export class AndroidChipComponent {
  readonly variant = input<'assist' | 'filter' | 'input' | 'suggestion'>('assist')
  readonly selected = model(false)
  readonly disabled = input(false)
  readonly hasIcon = input(false)
  readonly removed = output<void>()
  protected onClick() {
    if (this.variant() === 'filter') this.selected.set(!this.selected())
  }
  protected readonly cls = computed(() => {
    const tone = this.selected() ? 'bg-secondary text-secondary-foreground' : 'bg-transparent text-foreground inset-ring-1 inset-ring-border hover:bg-foreground/8'
    const pad = (this.variant() === 'filter' && this.selected()) || this.hasIcon() ? 'pl-2' : ''
    return `inline-flex h-8 shrink-0 cursor-pointer items-center gap-2 rounded-lg px-3 text-sm font-medium whitespace-nowrap outline-none transition-colors focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4.5 ${tone} ${pad}`
  })
}

/** A wrapping row of chips. */
@Component({
  selector: 'android-chip-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-wrap items-center gap-2', role: 'group', '[attr.data-slot]': '"android-chip-group"' },
  template: `<ng-content />`,
})
export class AndroidChipGroupComponent {}
