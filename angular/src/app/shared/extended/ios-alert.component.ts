import { NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

export interface IosAlertAction {
  label: string
  /** default = tint, cancel = bold tint, destructive = red. */
  style?: 'default' | 'cancel' | 'destructive'
}

/** iOS Alert: 270px wide, 14px radius, hairline-separated actions (stacked unless exactly two). Mirrors the React IosAlert. */
@Component({
  selector: 'ios-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', '[attr.data-slot]': '"ios-alert-host"' },
  template: `
    @if (backdrop()) {
      <div class="flex min-h-[320px] w-full items-center justify-center bg-black/40 p-4"><ng-container *ngTemplateOutlet="card" /></div>
    } @else {
      <ng-container *ngTemplateOutlet="card" />
    }
    <ng-template #card>
      <div role="alertdialog" [attr.aria-label]="title()" data-slot="ios-alert" class="w-[270px] overflow-hidden rounded-[14px] bg-popover/90 text-center font-[system-ui,-apple-system,sans-serif] text-popover-foreground backdrop-blur-xl">
        <div class="px-4 pt-5 pb-4">
          <div class="text-[17px] leading-[22px] font-semibold">{{ title() }}</div>
          @if (message()) {
            <div class="mt-0.5 text-[13px] leading-[18px]">{{ message() }}</div>
          }
        </div>
        <div class="flex border-t border-border" [class]="actions().length === 2 ? 'flex-row' : 'flex-col'">
          @for (a of actions(); track a.label; let i = $index) {
            <button
              type="button"
              data-slot="ios-alert-action"
              class="h-11 flex-1 cursor-pointer text-[17px] outline-none active:bg-muted"
              [class]="actionClass(a, i)"
              (click)="actionClick.emit(a.label)"
            >
              {{ a.label }}
            </button>
          }
        </div>
      </div>
    </ng-template>
  `,
  imports: [NgTemplateOutlet],
})
export class IosAlertComponent {
  readonly title = input.required<string>()
  readonly message = input('')
  readonly actions = input<IosAlertAction[]>([{ label: 'OK', style: 'cancel' }])
  readonly backdrop = input(false)
  readonly actionClick = output<string>()

  protected actionClass(a: IosAlertAction, i: number) {
    const color = a.style === 'destructive' ? 'text-[color:var(--ios-destructive,#ff3b30)]' : 'text-[color:var(--ios-tint,#007aff)]'
    const weight = a.style === 'cancel' ? 'font-semibold' : ''
    const sep = i === 0 ? '' : this.actions().length === 2 ? 'border-l border-border' : 'border-t border-border'
    return `${color} ${weight} ${sep}`
  }
}
