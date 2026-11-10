import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('is announced by its initials', () => {
    render(<Avatar initials="AB" />)
    expect(screen.getByRole('img', { name: 'AB' })).toBeInTheDocument()
  })

  it('defaults to small, matching the Figma default', () => {
    render(<Avatar initials="AB" />)
    expect(screen.getByRole('img')).toHaveAttribute('data-size', 'sm')
  })

  it.each([
    ['sm', 'size-8'],
    ['md', 'size-10'],
    ['lg', 'size-14'],
  ] as const)('size=%s is %s (32 / 40 / 56px in Figma)', (size, cls) => {
    render(<Avatar initials="AB" size={size} />)
    expect(screen.getByRole('img')).toHaveClass(cls)
  })
})
