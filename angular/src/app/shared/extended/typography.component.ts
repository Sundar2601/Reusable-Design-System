import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core'

import { mergeClasses } from '@/shared/utils/merge-classes'

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'lead' | 'large' | 'small' | 'muted' | 'code' | 'blockquote'

const TYPOGRAPHY_CLASSES: Record<TypographyVariant, string> = {
  h1: 'block scroll-m-20 text-4xl font-extrabold tracking-tight text-balance text-foreground lg:text-5xl',
  h2: 'block scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight text-foreground',
  h3: 'block scroll-m-20 text-2xl font-semibold tracking-tight text-foreground',
  h4: 'block scroll-m-20 text-xl font-semibold tracking-tight text-foreground',
  p: 'block leading-7 text-foreground',
  lead: 'block text-xl text-muted-foreground',
  large: 'block text-lg font-semibold text-foreground',
  small: 'text-sm leading-none font-medium text-foreground',
  muted: 'block text-sm text-muted-foreground',
  code: 'relative rounded-sm bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground',
  blockquote: 'block border-l-2 border-border pl-6 italic text-foreground',
}

/**
 * Typography. ZardUI has no typography component, so this is hand-built with the same Tailwind
 * classes and tokens as the React Typography file (H1-H4, P, Lead, Large, Small, Muted, InlineCode, Blockquote).
 */
@Component({
  selector: 'app-typography',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { '[class]': 'classes()', '[attr.data-slot]': '"typography-" + variant()' },
})
export class TypographyComponent {
  readonly variant = input<TypographyVariant>('p')
  readonly class = input<string>('')

  protected readonly classes = computed(() => mergeClasses(TYPOGRAPHY_CLASSES[this.variant()], this.class()))
}
