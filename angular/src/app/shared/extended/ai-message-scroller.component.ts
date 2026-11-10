import { ChangeDetectionStrategy, Component, ElementRef, input, signal, viewChild } from '@angular/core'
import { ZardButtonComponent } from '@/shared/components/button/button.component'

/**
 * Message Scroller (AI Elements). Scroll region that shows a "scroll to latest" button once the user
 * scrolls up. Project the thread as content. Mirrors the React MessageScroller.
 */
@Component({
  selector: 'ui-ai-message-scroller',
  imports: [ZardButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'relative flex min-h-0 w-full flex-col', 'data-slot': 'message-scroller' },
  template: `
    <div
      #viewport
      data-slot="message-scroller-viewport"
      tabindex="0"
      class="min-h-0 flex-1 overflow-y-auto overscroll-contain outline-none focus-visible:ring-1 focus-visible:ring-ring"
      (scroll)="measure()"
    >
      <ng-content />
    </div>
    @if (!atBottom()) {
      <button z-button data-slot="message-scroller-button" type="button" zType="outline" zSize="sm" class="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full shadow-sm" (click)="scrollToBottom()">
        {{ scrollToBottomLabel() }}
      </button>
    }
  `,
})
export class AiMessageScrollerComponent {
  readonly scrollToBottomLabel = input('Scroll to latest')
  protected readonly atBottom = signal(true)
  private readonly viewport = viewChild.required<ElementRef<HTMLDivElement>>('viewport')

  protected measure() {
    const el = this.viewport().nativeElement
    this.atBottom.set(el.scrollHeight - el.scrollTop - el.clientHeight < 24)
  }

  scrollToBottom() {
    const el = this.viewport().nativeElement
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }
}
