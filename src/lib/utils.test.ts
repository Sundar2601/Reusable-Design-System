import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('keeps a text color next to a text style (regression: primary Button text went dark)', () => {
    const out = cn('text-brand-on-brand', 'text-button-large')
    expect(out).toContain('text-brand-on-brand')
    expect(out).toContain('text-button-large')
  })

  it('keeps every text style we define next to a color', () => {
    for (const style of [
      'heading-h1', 'heading-h2', 'heading-h3', 'heading-h4',
      'body-large', 'body-medium', 'body-small',
      'button-large', 'button-medium', 'button-small', 'label', 'caption',
    ]) {
      expect(cn(`text-${style}`, 'text-muted-foreground')).toContain(`text-${style}`)
    }
  })

  it('still lets a later class override an earlier conflicting one', () => {
    expect(cn('px-md', 'px-xl')).toBe('px-xl')
  })
})

describe('cn with our spacing names', () => {
  it('lets a consumer override padding and gap by name', () => {
    expect(cn('gap-sm px-lg', 'gap-xl px-xs')).toBe('gap-xl px-xs')
  })
})
