import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('uses the Figma defaults: primary, large', () => {
    render(<Button>Save</Button>)
    const button = screen.getByRole('button', { name: 'Save' })
    expect(button).toHaveAttribute('data-variant', 'primary')
    expect(button).toHaveAttribute('data-size', 'lg')
  })

  it.each(['primary', 'secondary', 'ghost'] as const)('accepts variant=%s', (variant) => {
    render(<Button variant={variant}>Go</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-variant', variant)
  })

  it.each([
    ['lg', 'h-12'],
    ['md', 'h-10'],
    ['sm', 'h-8'],
  ] as const)('size=%s is %s tall (48 / 40 / 32px in Figma)', (size, heightClass) => {
    render(<Button size={size}>Go</Button>)
    expect(screen.getByRole('button')).toHaveClass(heightClass)
  })

  it('calls onClick, but not when disabled', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    const { rerender } = render(<Button onClick={onClick}>Go</Button>)
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)

    rerender(<Button onClick={onClick} disabled>Go</Button>)
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders as a link with asChild', () => {
    render(<Button asChild><a href="/home">Home</a></Button>)
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveAttribute('href', '/home')
    expect(link).toHaveAttribute('data-slot', 'button')
  })
})
