import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('keeps a text size next to a text color (primary Button text stayed white earlier)', () => {
    const out = cn('text-primary-foreground', 'text-sm')
    expect(out).toContain('text-primary-foreground')
    expect(out).toContain('text-sm')
  })

  it('keeps our custom destructive text color next to a text size', () => {
    const out = cn('text-text-destructive', 'text-xs')
    expect(out).toContain('text-text-destructive')
    expect(out).toContain('text-xs')
  })

  it('keeps the inside outline width and color together', () => {
    const out = cn('inset-ring-1', 'inset-ring-border')
    expect(out).toContain('inset-ring-1')
    expect(out).toContain('inset-ring-border')
  })

  it('keeps our focus ring shadow next to the inside outline', () => {
    const out = cn('inset-ring-1 inset-ring-border', 'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring')
    expect(out).toContain('focus-visible:shadow-focus-ring')
    expect(out).toContain('focus-visible:inset-ring-ring')
  })

  it('lets a later class override an earlier conflicting one', () => {
    expect(cn('px-2.5', 'px-4')).toBe('px-4')
    expect(cn('h-8', 'h-10')).toBe('h-10')
    expect(cn('rounded-lg', 'rounded-full')).toBe('rounded-full')
  })

  it('lets a consumer override our colors', () => {
    expect(cn('bg-primary text-primary-foreground', 'bg-secondary')).toBe('text-primary-foreground bg-secondary')
  })
})
