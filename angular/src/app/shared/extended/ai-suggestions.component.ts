import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { ZardButtonComponent } from '@/shared/components/button/button.component'

/** Suggestions (AI Elements). Prompt chips composed from ZardUI Button. Mirrors the React Suggestions / Suggestion. */
@Component({
  selector: 'ui-ai-suggestions',
  imports: [ZardButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'list',
    'data-slot': 'suggestions',
    '[attr.data-layout]': 'layout()',
    class: 'flex gap-2',
    '[class.flex-wrap]': 'layout() === "wrap"',
    '[class.flex-nowrap]': 'layout() === "scroll"',
    '[class.overflow-x-auto]': 'layout() === "scroll"',
  },
  template: `
    @for (s of suggestions(); track s) {
      <button z-button data-slot="suggestion" role="listitem" type="button" zType="outline" zSize="sm" class="shrink-0 rounded-full font-normal" (click)="selected.emit(s)">{{ s }}</button>
    }
  `,
})
export class AiSuggestionsComponent {
  readonly suggestions = input<string[]>([])
  readonly layout = input<'wrap' | 'scroll'>('wrap')
  readonly selected = output<string>()
}
