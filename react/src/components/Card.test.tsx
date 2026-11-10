import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from './Card'

function Example(props: { size?: 'default' | 'sm' }) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Plan</CardTitle>
        <CardDescription>Pick one</CardDescription>
        <CardAction>
          <Button variant="link">Sign up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>Body</CardContent>
      <CardFooter>
        <Button>Choose</Button>
      </CardFooter>
    </Card>
  )
}

describe('Card', () => {
  it('renders the header, content and footer parts', () => {
    render(<Example />)
    expect(screen.getByText('Plan')).toHaveAttribute('data-slot', 'card-title')
    expect(screen.getByText('Pick one')).toHaveAttribute('data-slot', 'card-description')
    expect(screen.getByText('Body')).toHaveAttribute('data-slot', 'card-content')
    expect(screen.getByRole('button', { name: 'Choose' }).closest('[data-slot=card-footer]')).toBeInTheDocument()
  })

  it('puts the action in the header', () => {
    render(<Example />)
    expect(screen.getByRole('button', { name: 'Sign up' }).closest('[data-slot=card-action]')).toBeInTheDocument()
  })

  it('is the default size, and accepts sm', () => {
    const { rerender } = render(<Example />)
    expect(document.querySelector('[data-slot=card]')).toHaveAttribute('data-size', 'default')
    rerender(<Example size="sm" />)
    expect(document.querySelector('[data-slot=card]')).toHaveAttribute('data-size', 'sm')
  })

  it('is 384px wide like Figma (w-96)', () => {
    render(<Example />)
    expect(document.querySelector('[data-slot=card]')).toHaveClass('w-96')
  })

  it('renders an image area above the header', () => {
    render(
      <Card>
        <CardImage>
          <img alt="Cover" src="x.png" />
        </CardImage>
        <CardHeader>
          <CardTitle>Plan</CardTitle>
        </CardHeader>
      </Card>,
    )
    expect(screen.getByRole('img', { name: 'Cover' }).closest('[data-slot=card-image]')).toBeInTheDocument()
  })
})
