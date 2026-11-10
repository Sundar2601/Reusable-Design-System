import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core'
import { ZardButtonComponent } from '@/shared/components/button/button.component'
import { ZardSpinnerComponent } from '@/shared/components/spinner/spinner.component'

/** AI Terminal. Output panel with copy and clear. Mirrors the React Terminal. */
@Component({
  selector: 'ui-ai-terminal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ZardButtonComponent, ZardSpinnerComponent],
  host: { class: 'block w-full overflow-hidden rounded-lg bg-card inset-ring-1 inset-ring-border', '[attr.data-slot]': '"ai-terminal"' },
  template: `
    <div class="flex items-center gap-2 border-b border-border px-3 py-1.5 text-xs text-muted-foreground">
      <span class="flex-1 font-medium">{{ title() }}</span>
      @if (streaming()) {
        <z-spinner class="size-3" />
      }
      <button z-button zType="ghost" zSize="xs" type="button" (click)="copy()">{{ copied() ? 'Copied' : 'Copy' }}</button>
      <button z-button zType="ghost" zSize="xs" type="button" (click)="cleared.set(true); clear.emit()">Clear</button>
    </div>
    <div class="overflow-auto" [style.max-height.px]="maxHeight()">
      <pre class="p-3 font-mono text-xs leading-5 whitespace-pre-wrap text-foreground">{{ shown() || 'No output' }}</pre>
    </div>
  `,
})
export class AiTerminalComponent {
  readonly output = input('')
  readonly title = input('Terminal')
  readonly streaming = input(false)
  readonly maxHeight = input(240)
  readonly clear = output<void>()
  protected readonly cleared = signal(false)
  protected readonly copied = signal(false)
  protected shown() {
    return this.cleared() ? '' : this.output()
  }
  protected async copy() {
    try {
      await navigator.clipboard.writeText(this.shown())
      this.copied.set(true)
      setTimeout(() => this.copied.set(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }
}
