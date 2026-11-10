import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

export interface IosTabBarItem {
  value: string
  label: string
  /** Inner SVG markup (24x24 viewBox, stroke="currentColor"). */
  icon: string
}

/** iOS Tab Bar: 49px bar, icon over a 10px label. Mirrors the React IosTabBar. */
@Component({
  selector: 'ios-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-[83px] w-full items-start border-t border-border/60 bg-background/80 pt-1.5 font-[system-ui,-apple-system,sans-serif] backdrop-blur-xl',
    role: 'tablist',
    '[attr.data-slot]': '"ios-tab-bar"',
  },
  template: `
    @for (item of items(); track item.value) {
      <button
        type="button"
        role="tab"
        data-slot="ios-tab-bar-item"
        class="flex h-[49px] flex-1 cursor-pointer flex-col items-center justify-center gap-0.5 outline-none"
        [class]="item.value === current() ? 'text-[color:var(--ios-tint,#007aff)]' : 'text-muted-foreground'"
        [attr.aria-selected]="item.value === current()"
        [attr.data-state]="item.value === current() ? 'active' : 'inactive'"
        (click)="value.set(item.value)"
      >
        <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" [innerHTML]="item.icon"></svg>
        <span class="text-[10px] leading-3 font-medium">{{ item.label }}</span>
      </button>
    }
  `,
})
export class IosTabBarComponent {
  readonly items = input<IosTabBarItem[]>([])
  readonly value = model<string | undefined>(undefined)
  protected current() {
    return this.value() ?? this.items()[0]?.value
  }
}
