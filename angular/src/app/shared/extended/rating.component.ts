import { NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, input, model, signal } from '@angular/core'

/** Rating. Star rating input. Mirrors the React Rating. */
@Component({
  selector: 'ui-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-flex items-center gap-0.5',
    '[class.opacity-50]': 'disabled()',
    '[attr.data-slot]': '"rating"',
    '[attr.role]': 'interactive() ? "radiogroup" : "img"',
    '[attr.aria-label]': 'interactive() ? "Rating" : "Rated " + value() + " out of " + max()',
    '(mouseleave)': 'hover.set(null)',
  },
  template: `
    @for (n of stars(); track n) {
      @if (interactive()) {
        <button
          type="button"
          role="radio"
          data-slot="rating-star"
          class="cursor-pointer rounded-sm outline-none focus-visible:shadow-focus-ring"
          [attr.aria-checked]="n === value()"
          [attr.aria-label]="n + (n > 1 ? ' stars' : ' star')"
          [attr.data-filled]="n <= shown()"
          (mouseenter)="hover.set(n)"
          (click)="value.set(n === value() ? 0 : n)"
        >
          <ng-container *ngTemplateOutlet="star; context: { $implicit: n }" />
        </button>
      } @else {
        <span data-slot="rating-star" [attr.data-filled]="n <= shown()">
          <ng-container *ngTemplateOutlet="star; context: { $implicit: n }" />
        </span>
      }
    }
    <ng-template #star let-n>
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="shrink-0 transition-colors"
        [class]="sizeClass() + ' ' + (n <= shown() ? 'fill-current text-primary' : 'fill-none text-muted-foreground')"
        aria-hidden="true"
      >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    </ng-template>
  `,
  imports: [NgTemplateOutlet],
})
export class RatingComponent {
  readonly value = model(0)
  readonly max = input(5)
  readonly size = input<'sm' | 'default' | 'lg'>('default')
  readonly readOnly = input(false)
  readonly disabled = input(false)
  protected readonly hover = signal<number | null>(null)
  protected readonly interactive = computed(() => !this.readOnly() && !this.disabled())
  protected readonly stars = computed(() => Array.from({ length: this.max() }, (_, i) => i + 1))
  protected readonly shown = computed(() => this.hover() ?? this.value())
  protected readonly sizeClass = computed(() => ({ sm: 'size-4', default: 'size-5', lg: 'size-6' })[this.size()])
}
