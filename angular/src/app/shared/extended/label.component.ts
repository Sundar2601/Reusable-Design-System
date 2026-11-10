import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { mergeClasses } from '@/shared/utils/merge-classes';

/**
 * Label. Hand-built (ZardUI has no standalone Label): same look as the React Label.
 * Use as `<label z-label for="id">Text</label>`; `zRequired` adds a red asterisk.
 */
@Component({
  selector: 'label[z-label]',
  template: `
    <ng-content />
    @if (zRequired()) {
      <span aria-hidden="true" class="text-text-destructive">*</span>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'data-slot': 'label',
    '[class]': 'classes()',
  },
  exportAs: 'zLabel',
})
export class ZardLabelComponent {
  readonly class = input<ClassValue>('');
  readonly zRequired = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    mergeClasses(
      'flex items-center gap-2 text-sm leading-none font-medium text-foreground select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      this.class(),
    ),
  );
}
