import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core';

import { type ClassValue } from 'clsx';

import { mergeClasses } from '@/shared/utils/merge-classes';

/**
 * Hand-built (ZardUI has no scroll area). Native scrolling with thin, token-colored scrollbars,
 * matching the React ScrollArea. Give it a fixed size via `class`, for example `h-72 w-48`.
 * `zOrientation`: vertical, horizontal or both.
 */
@Component({
  selector: 'app-scroll-area',
  template: `
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'data-slot': 'scroll-area',
    tabindex: '0',
    '[class]': 'classes()',
  },
})
export class AppScrollAreaComponent {
  readonly class = input<ClassValue>('');
  readonly zOrientation = input<'vertical' | 'horizontal' | 'both'>('vertical');

  protected readonly classes = computed(() =>
    mergeClasses(
      'relative block rounded-[inherit] outline-none focus-visible:inset-ring-1 focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
      '[scrollbar-width:thin] [scrollbar-color:var(--color-border)_transparent]',
      this.zOrientation() === 'vertical' && 'overflow-y-auto overflow-x-hidden',
      this.zOrientation() === 'horizontal' && 'overflow-x-auto overflow-y-hidden',
      this.zOrientation() === 'both' && 'overflow-auto',
      this.class(),
    ),
  );
}
