import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core'
import { ZardButtonComponent } from '@/shared/components/button/button.component'

export type AiPromptInputStatus = 'ready' | 'submitted' | 'streaming' | 'error'

/**
 * Prompt Input (AI Elements). Textarea + toolbar + submit. Project `[attachments]` above the textarea
 * and `[tools]` (attach button, model picker) into the toolbar. Mirrors the React PromptInput.
 * Enter submits, Shift+Enter inserts a new line.
 */
@Component({
  selector: 'ui-ai-prompt-input',
  imports: [ZardButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex w-full flex-col gap-2 rounded-2xl border border-border bg-card p-2 text-card-foreground transition-shadow focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/30',
    'data-slot': 'prompt-input',
  },
  template: `
    <div data-slot="prompt-input-attachments" class="flex w-full gap-2 overflow-x-auto px-1 empty:hidden"><ng-content select="[attachments]" /></div>
    <textarea
      data-slot="prompt-input-textarea"
      rows="1"
      class="max-h-48 min-h-10 w-full resize-none bg-transparent px-2 py-1.5 text-sm text-foreground outline-none [field-sizing:content] placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      [placeholder]="placeholder()"
      [disabled]="disabled()"
      [value]="value()"
      (input)="value.set($any($event.target).value)"
      (keydown.enter)="onEnter($event)"
    ></textarea>
    <div data-slot="prompt-input-toolbar" class="flex items-center justify-between gap-2">
      <div data-slot="prompt-input-tools" class="flex min-w-0 items-center gap-1"><ng-content select="[tools]" /></div>
      <button z-button data-slot="prompt-input-submit" type="button" zShape="circle" zSize="icon" [attr.data-status]="status()" [attr.aria-label]="label()" [zDisabled]="submitDisabled()" (click)="onSubmitClick()">
        @if (status() === 'streaming') {
          <svg class="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2" /></svg>
        } @else if (status() === 'submitted') {
          <svg class="size-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
        } @else {
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 7-7 7 7M12 19V5" /></svg>
        }
      </button>
    </div>
  `,
})
export class AiPromptInputComponent {
  readonly value = model('')
  readonly placeholder = input('Ask anything')
  readonly status = input<AiPromptInputStatus>('ready')
  readonly disabled = input(false)
  readonly submitted = output<string>()
  readonly stopped = output<void>()

  protected readonly label = computed(() => (this.status() === 'streaming' ? 'Stop generating' : this.status() === 'submitted' ? 'Sending' : 'Send message'))
  protected readonly submitDisabled = computed(() => this.status() !== 'streaming' && (this.status() === 'submitted' || this.value().trim() === ''))

  protected onEnter(event: Event) {
    const e = event as KeyboardEvent
    if (e.shiftKey || e.isComposing) return
    e.preventDefault()
    this.submit()
  }

  protected onSubmitClick() {
    if (this.status() === 'streaming') this.stopped.emit()
    else this.submit()
  }

  private submit() {
    const text = this.value().trim()
    if (!text || this.status() === 'streaming') return
    this.submitted.emit(text)
    this.value.set('')
  }
}
