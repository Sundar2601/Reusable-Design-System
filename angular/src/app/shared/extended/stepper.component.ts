import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export interface StepperStep {
  title: string
  description?: string
}

/** Stepper. Progress through a multi-step flow. Mirrors the React Stepper. */
@Component({
  selector: 'ui-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', '[attr.data-slot]': '"stepper"', '[attr.data-orientation]': 'orientation()' },
  template: `
    <ol class="flex text-sm" [class]="horizontal() ? 'w-full items-start' : 'flex-col'">
      @for (step of steps(); track $index; let i = $index; let last = $last) {
        <li
          data-slot="stepper-item"
          class="flex"
          [class]="horizontal() ? (last ? 'flex-none' : 'flex-1') + ' flex-col gap-2' : 'gap-3'"
          [attr.data-state]="state(i)"
          [attr.aria-current]="i === current() ? 'step' : null"
        >
          <div class="flex" [class]="horizontal() ? 'items-center gap-2 pr-2' : 'flex-col items-center gap-1'">
            <span
              data-slot="stepper-indicator"
              class="flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors"
              [class]="indicatorClass(i)"
            >
              @if (state(i) === 'complete') {
                <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
              } @else {
                {{ i + 1 }}
              }
            </span>
            @if (!last) {
              <span
                data-slot="stepper-connector"
                [class]="(horizontal() ? 'h-px flex-1' : 'min-h-6 w-px flex-1') + ' ' + (i < current() ? 'bg-primary' : 'bg-border')"
              ></span>
            }
          </div>
          <div class="flex flex-col gap-0.5" [class]="horizontal() ? '' : 'pt-0.5 pb-6'">
            <span class="font-medium" [class]="state(i) === 'upcoming' ? 'text-muted-foreground' : 'text-foreground'">{{ step.title }}</span>
            @if (step.description) {
              <span class="text-xs text-muted-foreground">{{ step.description }}</span>
            }
          </div>
        </li>
      }
    </ol>
  `,
})
export class StepperComponent {
  readonly steps = input<StepperStep[]>([])
  /** Zero-based index of the active step. */
  readonly current = input(0)
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal')
  protected readonly horizontal = computed(() => this.orientation() === 'horizontal')

  protected state(i: number) {
    return i < this.current() ? 'complete' : i === this.current() ? 'current' : 'upcoming'
  }
  protected indicatorClass(i: number) {
    const s = this.state(i)
    return s === 'complete'
      ? 'bg-primary text-primary-foreground'
      : s === 'current'
        ? 'bg-background text-foreground inset-ring-2 inset-ring-primary'
        : 'bg-muted text-muted-foreground'
  }
}
