import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from './Avatar'

describe('Avatar', () => {
  it('shows the fallback when there is no image', () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    )
    expect(screen.getByText('AB')).toHaveAttribute('data-slot', 'avatar-fallback')
  })

  it('defaults to the default size (32px)', () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    )
    const avatar = screen.getByText('AB').closest('[data-slot=avatar]')
    expect(avatar).toHaveAttribute('data-size', 'default')
    expect(avatar).toHaveClass('data-[size=default]:size-8')
  })

  it.each(['sm', 'default', 'lg'] as const)('accepts size=%s', (size) => {
    render(
      <Avatar size={size}>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    )
    expect(screen.getByText('AB').closest('[data-slot=avatar]')).toHaveAttribute('data-size', size)
  })

  it('renders a status badge inside the avatar', () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
        <AvatarBadge data-testid="badge" />
      </Avatar>,
    )
    expect(screen.getByTestId('badge').closest('[data-slot=avatar]')).toBeInTheDocument()
  })

  it('groups avatars with a count', () => {
    render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>,
    )
    expect(screen.getByText('+3')).toHaveAttribute('data-slot', 'avatar-group-count')
  })
})
