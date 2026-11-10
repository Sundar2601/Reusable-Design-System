import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

/** Android Snackbar (Material 3): inverse surface with optional action and close icon. */
@Component({
  selector: 'android-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex min-h-12 w-[344px] max-w-full items-center gap-2 rounded-sm bg-foreground py-1 pr-2 pl-4 text-sm text-background shadow-lg',
    role: 'status',
    '[attr.data-slot]': '"android-snackbar"',
  },
  template: `
    <span class="flex-1 py-2">{{ message() }}</span>
    @if (action()) {
      <button type="button" class="h-10 cursor-pointer rounded-full px-3 text-sm font-medium text-background outline-none hover:bg-background/12 focus-visible:shadow-focus-ring" (click)="actionClick.emit()">{{ action() }}</button>
    }
    @if (closable()) {
      <button type="button" aria-label="Close" class="flex size-10 cursor-pointer items-center justify-center rounded-full outline-none hover:bg-background/12 focus-visible:shadow-focus-ring" (click)="closed.emit()">
        <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
    }
  `,
})
export class AndroidSnackbarComponent {
  readonly message = input('')
  readonly action = input<string | undefined>(undefined)
  readonly closable = input(false)
  readonly actionClick = output<void>()
  readonly closed = output<void>()
}
