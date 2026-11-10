import { ChangeDetectionStrategy, Component, OnDestroy, computed, input, signal, ViewEncapsulation } from '@angular/core';

import { type ClassValue } from 'clsx';

import { mergeClasses } from '@/shared/utils/merge-classes';

/**
 * Hand-built (ZardUI has no code block). A styled pre/code block with a language label and a
 * copy button, matching the React CodeBlock. No syntax highlighting.
 */
@Component({
  selector: 'app-code-block',
  template: `
    @if (language() || copyable()) {
      <div
        data-slot="code-block-header"
        class="flex h-9 items-center justify-between border-b border-border px-3 text-xs text-muted-foreground"
      >
        <span>{{ language() }}</span>
        @if (copyable()) {
          <button
            type="button"
            data-slot="code-block-copy"
            class="inline-flex h-7 min-w-7 cursor-pointer items-center justify-center rounded-sm px-1.5 text-xs text-foreground outline-none transition-all hover:bg-background focus-visible:inset-ring-1 focus-visible:inset-ring-ring"
            [attr.aria-label]="copied() ? 'Copied' : 'Copy code'"
            (click)="copy()"
          >
            {{ copied() ? 'Copied' : 'Copy' }}
          </button>
        }
      </div>
    }
    <pre data-slot="code-block-pre" class="overflow-x-auto p-3 font-mono text-[13px] leading-relaxed"><code>{{ code() }}</code></pre>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { 'data-slot': 'code-block', '[class]': 'classes()' },
})
export class AppCodeBlockComponent implements OnDestroy {
  readonly code = input.required<string>();
  readonly language = input<string>('');
  readonly copyable = input(true);
  readonly class = input<ClassValue>('');

  protected readonly copied = signal(false);
  private timer?: ReturnType<typeof setTimeout>;

  protected readonly classes = computed(() =>
    mergeClasses('relative block w-full overflow-hidden rounded-lg bg-muted text-sm text-foreground', this.class()),
  );

  async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.code());
      this.copied.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copied.set(false), 1500);
    } catch {
      // Clipboard may be unavailable; ignore.
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
