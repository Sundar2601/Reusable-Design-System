import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** Stat Card. A single metric on a card. Mirrors the React StatCard. Project an icon with the `icon` attribute. */
@Component({
  selector: 'ui-stat-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'relative flex w-64 flex-col gap-2 overflow-hidden rounded-xl bg-card px-4 py-4 text-sm text-card-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:content-[\'\']',
    '[attr.data-slot]': '"stat-card"',
  },
  template: `
    <div class="flex items-center justify-between gap-2">
      <span class="text-sm text-muted-foreground">{{ label() }}</span>
      <span class="text-muted-foreground [&_svg]:size-4"><ng-content select="[icon]" /></span>
    </div>
    <div data-slot="stat-card-value" class="text-2xl font-semibold tracking-tight">{{ value() }}</div>
    @if (delta() || description()) {
      <div class="flex items-center gap-2 text-xs">
        @if (delta()) {
          <span
            class="inline-flex items-center gap-1 font-medium"
            [class]="trend() === 'up' ? 'text-green-600' : trend() === 'down' ? 'text-text-destructive' : 'text-muted-foreground'"
            [attr.data-trend]="trend()"
          >
            @if (trend() === 'up') {
              <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" /></svg>
            } @else if (trend() === 'down') {
              <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 17h6v-6" /><path d="m22 17-8.5-8.5-5 5L2 7" /></svg>
            }
            {{ delta() }}
          </span>
        }
        @if (description()) {
          <span class="text-muted-foreground">{{ description() }}</span>
        }
      </div>
    }
  `,
})
export class StatCardComponent {
  readonly label = input('')
  readonly value = input<string | number>('')
  readonly delta = input('')
  readonly trend = input<'up' | 'down' | 'neutral'>('neutral')
  readonly description = input('')
}
