import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** Android Dialog panel (Material 3): 28dp radius. Slots: `[slot=icon]`, default content, `[slot=actions]`. */
@Component({
  selector: 'android-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex w-[312px] max-w-full flex-col gap-4 rounded-[28px] bg-muted p-6 text-foreground shadow-lg',
    role: 'dialog',
    'aria-modal': 'true',
    '[attr.data-slot]': '"android-dialog"',
  },
  template: `
    <div class="flex justify-center text-primary empty:hidden [&_svg]:size-6"><ng-content select="[slot=icon]" /></div>
    <h2 class="text-2xl leading-8" [class.text-center]="centered()">{{ title() }}</h2>
    @if (description()) {
      <p class="text-sm leading-5 text-muted-foreground">{{ description() }}</p>
    }
    <ng-content />
    <div class="flex justify-end gap-2 pt-2 empty:hidden"><ng-content select="[slot=actions]" /></div>
  `,
})
export class AndroidDialogComponent {
  readonly title = input('')
  readonly description = input<string | undefined>(undefined)
  /** Center the title (use together with an icon). */
  readonly centered = input(false)
}
