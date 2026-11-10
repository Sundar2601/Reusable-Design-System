import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Plus } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('defaults to the default variant and default size (32px)', () => {
    render(<Button>Save</Button>)
    const button = screen.getByRole('button', { name: 'Save' })
    expect(button).toHaveAttribute('data-variant', 'default')
    expect(button).toHaveAttribute('data-size', 'default')
    expect(button).toHaveClass('h-8')
  })

  it.each(['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const)(
    'accepts variant=%s',
    (variant) => {
      render(<Button variant={variant}>Go</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('data-variant', variant)
    },
  )

  it.each([
    ['xs', 'h-6'],
    ['sm', 'h-7'],
    ['default', 'h-8'],
    ['lg', 'h-9'],
  ] as const)('size=%s is %s (24 / 28 / 32 / 36px in Figma)', (size, heightClass) => {
    render(<Button size={size}>Go</Button>)
    expect(screen.getByRole('button')).toHaveClass(heightClass)
  })

  it('rounded makes it a pill', () => {
    render(<Button rounded>Go</Button>)
    expect(screen.getByRole('button')).toHaveClass('rounded-full')
  })

  it('shows icons and a keyboard hint around the label, in order', () => {
    render(
      <Button leftIcon={<Plus data-testid="left" />} kbd={<kbd>K</kbd>}>
        Add
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button.firstElementChild).toBe(screen.getByTestId('left'))
    expect(button.lastElementChild?.tagName).toBe('KBD')
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
    render(<Button asChild variant="link"><a href="/home">Home</a></Button>)
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveAttribute('href', '/home')
    expect(link).toHaveAttribute('data-slot', 'button')
  })
})
