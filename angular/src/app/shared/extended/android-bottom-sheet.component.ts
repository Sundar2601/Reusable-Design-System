import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/** Android Bottom Sheet surface (Material 3): 28dp top radius and drag handle. Position it at the bottom of your screen. */
@Component({
  selector: 'android-bottom-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'cls()', '[attr.data-slot]': '"android-bottom-sheet"', '[attr.data-variant]': 'variant()' },
  template: `
    @if (handle()) {
      <div class="flex h-6 items-center justify-center" aria-hidden="true"><span class="h-1 w-8 rounded-full bg-muted-foreground/60"></span></div>
    }
    @if (title()) {
      <h2 class="px-6 pb-2 text-base font-medium">{{ title() }}</h2>
    }
    <div class="flex flex-col"><ng-content /></div>
  `,
})
export class AndroidBottomSheetComponent {
  readonly title = input<string | undefined>(undefined)
  readonly handle = input(true)
  readonly variant = input<'modal' | 'standard'>('modal')
  protected readonly cls = computed(() => `flex w-full flex-col rounded-t-[28px] bg-muted pb-6 text-foreground ${this.variant() === 'modal' ? 'shadow-lg' : 'shadow-sm'}`)
}
