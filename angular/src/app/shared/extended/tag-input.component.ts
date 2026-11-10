import { ChangeDetectionStrategy, Component, input, model, signal } from '@angular/core'

/** Tag Input. Text input that turns entries into removable tags. Mirrors the React TagInput. */
@Component({
  selector: 'ui-tag-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex min-h-8 w-80 flex-wrap items-center gap-1 rounded-lg bg-background px-1.5 py-1 text-sm text-foreground inset-ring-1 inset-ring-border transition-[color,box-shadow] focus-within:inset-ring-ring focus-within:shadow-focus-ring',
    '[class.pointer-events-none]': 'disabled()',
    '[class.opacity-50]': 'disabled()',
    '[class.inset-ring-text-destructive]': 'invalid()',
    '[class.shadow-destructive-ring]': 'invalid()',
    '[attr.aria-invalid]': 'invalid() ? "true" : null',
    '[attr.data-slot]': '"tag-input"',
  },
  template: `
    @for (tag of value(); track tag) {
      <span data-slot="tag-input-tag" class="inline-flex h-6 items-center gap-1 rounded-sm bg-secondary pr-1 pl-2 text-xs font-medium text-secondary-foreground">
        {{ tag }}
        <button
          type="button"
          class="cursor-pointer rounded-sm outline-none hover:opacity-70 focus-visible:shadow-focus-ring"
          [attr.aria-label]="'Remove ' + tag"
          [disabled]="disabled()"
          (click)="remove(tag)"
        >
          <svg class="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
      </span>
    }
    <input
      data-slot="tag-input-field"
      class="h-6 min-w-20 flex-1 bg-transparent px-1 outline-none placeholder:text-muted-foreground"
      [value]="draft()"
      [disabled]="disabled()"
      [attr.placeholder]="value().length === 0 ? placeholder() : null"
      (input)="onInput($event)"
      (keydown)="onKeydown($event)"
      (blur)="commit()"
    />
  `,
})
export class TagInputComponent {
  readonly value = model<string[]>([])
  readonly placeholder = input('Add a tag')
  readonly max = input<number | undefined>(undefined)
  readonly disabled = input(false)
  readonly invalid = input(false)
  protected readonly draft = signal('')

  protected onInput(e: Event) {
    const v = (e.target as HTMLInputElement).value
    this.draft.set(v)
    if (v.endsWith(',')) this.commit()
  }
  protected onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.commit()
    } else if (e.key === 'Backspace' && this.draft() === '' && this.value().length > 0) {
      this.value.set(this.value().slice(0, -1))
    }
  }
  protected commit() {
    const t = this.draft().trim().replace(/,$/, '').trim()
    this.draft.set('')
    const max = this.max()
    if (!t || this.value().includes(t) || (max !== undefined && this.value().length >= max)) return
    this.value.set([...this.value(), t])
  }
  protected remove(tag: string) {
    this.value.set(this.value().filter((t) => t !== tag))
  }
}
