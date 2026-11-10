import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

export interface IosActionSheetAction {
  label: string
  destructive?: boolean
}

/** iOS Action Sheet: grouped actions card (14px radius) with a separate bold Cancel button. Mirrors the React IosActionSheet. */
@Component({
  selector: 'ios-action-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full flex-col gap-2 px-2 font-[system-ui,-apple-system,sans-serif]', '[attr.data-slot]': '"ios-action-sheet"' },
  template: `
    <div class="overflow-hidden rounded-[14px] bg-popover/90 text-popover-foreground backdrop-blur-xl">
      @if (title() || message()) {
        <div class="px-4 py-3.5 text-center">
          @if (title()) {
            <div class="text-[13px] leading-[18px] font-semibold text-muted-foreground">{{ title() }}</div>
          }
          @if (message()) {
            <div class="text-[13px] leading-[18px] text-muted-foreground">{{ message() }}</div>
          }
        </div>
      }
      @for (a of actions(); track a.label) {
        <button
          type="button"
          data-slot="ios-action-sheet-action"
          class="block h-14 w-full cursor-pointer border-t border-border text-[20px] outline-none active:bg-muted"
          [class]="a.destructive ? 'text-[color:var(--ios-destructive,#ff3b30)]' : 'text-[color:var(--ios-tint,#007aff)]'"
          (click)="actionClick.emit(a.label)"
        >
          {{ a.label }}
        </button>
      }
    </div>
    <button
      type="button"
      data-slot="ios-action-sheet-cancel"
      class="h-14 w-full cursor-pointer rounded-[14px] bg-popover text-[20px] font-semibold text-[color:var(--ios-tint,#007aff)] outline-none active:bg-muted"
      (click)="cancel.emit()"
    >
      {{ cancelLabel() }}
    </button>
  `,
})
export class IosActionSheetComponent {
  readonly title = input('')
  readonly message = input('')
  readonly actions = input<IosActionSheetAction[]>([])
  readonly cancelLabel = input('Cancel')
  readonly actionClick = output<string>()
  readonly cancel = output<void>()
}
