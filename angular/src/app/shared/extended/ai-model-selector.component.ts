import { ChangeDetectionStrategy, Component, computed, input, model, signal } from '@angular/core'
import { ZardBadgeComponent } from '@/shared/components/badge/badge.component'
import { ZardButtonComponent } from '@/shared/components/button/button.component'

export interface AiModelOption {
  id: string
  name: string
  provider: string
  badge?: string
}

/** AI Model Selector. Searchable popover list of models grouped by provider. Mirrors the React ModelSelector. */
@Component({
  selector: 'ui-ai-model-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ZardBadgeComponent, ZardButtonComponent],
  host: { class: 'relative inline-block', '[attr.data-slot]': '"ai-model-selector"' },
  template: `
    <button z-button zType="outline" type="button" class="w-64 justify-between" aria-haspopup="listbox" [attr.aria-expanded]="open()" (click)="open.set(!open())">
      {{ selected()?.name || placeholder() }}
      <svg class="size-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5M7 9l5-5 5 5" /></svg>
    </button>
    @if (open()) {
      <div class="absolute top-full left-0 z-50 mt-1 w-72 overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md inset-ring-1 inset-ring-border">
        <input class="h-9 w-full border-b border-border bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground" placeholder="Search models..." [value]="query()" (input)="query.set($any($event.target).value)" />
        <div class="max-h-64 overflow-auto p-1" role="listbox">
          @for (g of groups(); track g.provider) {
            <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">{{ g.provider }}</div>
            @for (m of g.items; track m.id) {
              <button type="button" role="option" class="flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-muted" [attr.aria-selected]="m.id === value()" (click)="pick(m.id)">
                <span class="flex-1">{{ m.name }}</span>
                @if (m.badge) {
                  <z-badge zType="secondary">{{ m.badge }}</z-badge>
                }
                @if (m.id === value()) {
                  <span aria-hidden="true">✓</span>
                }
              </button>
            }
          } @empty {
            <div class="py-6 text-center text-sm text-muted-foreground">No model found.</div>
          }
        </div>
      </div>
    }
  `,
})
export class AiModelSelectorComponent {
  readonly models = input<AiModelOption[]>([])
  readonly value = model<string | undefined>(undefined)
  readonly placeholder = input('Select model')
  protected readonly open = signal(false)
  protected readonly query = signal('')
  protected readonly selected = computed(() => this.models().find((m) => m.id === this.value()))
  protected readonly groups = computed(() => {
    const q = this.query().toLowerCase()
    const list = this.models().filter((m) => `${m.name} ${m.provider}`.toLowerCase().includes(q))
    return Array.from(new Set(list.map((m) => m.provider))).map((provider) => ({ provider, items: list.filter((m) => m.provider === provider) }))
  })
  protected pick(id: string) {
    this.value.set(id)
    this.open.set(false)
    this.query.set('')
  }
}
