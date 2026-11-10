import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'
import { Card } from './Card'

describe('Card', () => {
  it('shows the title as a heading and the description', () => {
    render(<Card title="Plan" description="Pick one" />)
    expect(screen.getByRole('heading', { name: 'Plan' })).toBeInTheDocument()
    expect(screen.getByText('Pick one')).toBeInTheDocument()
  })

  it('defaults to outlined, and accepts elevated (Figma "Style")', () => {
    const { rerender } = render(<Card title="Plan" />)
    expect(screen.getByText('Plan').closest('[data-slot=card]')).toHaveAttribute('data-variant', 'outlined')
    rerender(<Card title="Plan" variant="elevated" />)
    const card = screen.getByText('Plan').closest('[data-slot=card]')
    expect(card).toHaveAttribute('data-variant', 'elevated')
    expect(card).toHaveClass('shadow-elevated')
  })

  it('renders the media and action slots only when given', () => {
    const { rerender } = render(<Card title="Plan" />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()

    rerender(
      <Card title="Plan" media={<img alt="Cover" src="x.png" />} action={<Button size="md">Choose</Button>} />,
    )
    expect(screen.getByRole('img', { name: 'Cover' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Choose' })).toBeInTheDocument()
  })

  it('does not turn the title into a native tooltip', () => {
    render(<Card title="Plan" />)
    expect(screen.getByText('Plan').closest('[data-slot=card]')).not.toHaveAttribute('title')
  })
})
