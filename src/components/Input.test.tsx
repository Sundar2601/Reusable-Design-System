import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('connects the label to the field', () => {
    render(<Input label="Email" placeholder="you@example.com" />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('placeholder', 'you@example.com')
  })

  it('describes the field with the helper text', () => {
    render(<Input label="Email" helperText="We never share it" />)
    expect(screen.getByLabelText('Email')).toHaveAccessibleDescription('We never share it')
  })

  it('marks the field invalid when error is set', () => {
    const { rerender } = render(<Input label="Email" />)
    expect(screen.getByLabelText('Email')).not.toHaveAttribute('aria-invalid')
    rerender(<Input label="Email" error helperText="Required" />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true')
  })

  it('accepts typing, and not when disabled', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<Input label="Name" />)
    await user.type(screen.getByLabelText('Name'), 'Ada')
    expect(screen.getByLabelText('Name')).toHaveValue('Ada')

    rerender(<Input label="Name" disabled />)
    expect(screen.getByLabelText('Name')).toBeDisabled()
  })

  it('renders without a label or helper text', () => {
    render(<Input aria-label="Search" />)
    expect(screen.getByRole('textbox', { name: 'Search' })).toBeInTheDocument()
  })
})
