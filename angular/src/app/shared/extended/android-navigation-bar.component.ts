import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'
import { NgTemplateOutlet } from '@angular/common'

export interface AndroidNavigationItem {
  value: string
  label: string
  /** Inline SVG markup (24x24, stroke currentColor). */
  icon: string
  badge?: number | boolean
}

/** Android Navigation Bar. 80dp bar, active destination gets a 64x32 pill indicator. */
@Component({
  selector: 'android-navigation-bar',
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-20 w-full items-start bg-muted px-2 pt-3 pb-4 text-foreground',
    role: 'navigation',
    '[attr.data-slot]': '"android-navigation-bar"',
  },
  template: `
    @for (item of items(); track item.value) {
      <button
        type="button"
        data-slot="android-navigation-item"
        class="group flex flex-1 cursor-pointer flex-col items-center gap-1 outline-none"
        [attr.data-state]="item.value === current() ? 'active' : 'inactive'"
        [attr.aria-current]="item.value === current() ? 'page' : null"
        (click)="value.set(item.value)"
      >
        <span
          class="relative flex h-8 w-16 items-center justify-center rounded-full transition-colors group-hover:bg-foreground/8 group-focus-visible:shadow-focus-ring [&_svg]:size-6"
          [class]="item.value === current() ? 'bg-primary/15 text-foreground' : 'text-muted-foreground'"
        >
          <span class="contents" [innerHTML]="item.icon"></span>
          @if (item.badge !== undefined && item.badge !== false) {
            <span class="absolute top-0 left-9 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[11px] leading-none text-white">{{ item.badge === true ? '' : item.badge }}</span>
          }
        </span>
        <span class="text-xs leading-4" [class]="item.value === current() ? 'font-semibold text-foreground' : 'font-medium text-muted-foreground'">{{ item.label }}</span>
      </button>
    }
  `,
})
export class AndroidNavigationBarComponent {
  readonly items = input<AndroidNavigationItem[]>([])
  readonly value = model<string | undefined>(undefined)
  protected current() {
    return this.value() ?? this.items()[0]?.value
  }
}
