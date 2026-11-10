import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('toggles when the label is clicked and reports the change', async () => {
    const onCheckedChange = vi.fn()
    const user = userEvent.setup()
    render(<Checkbox label="Accept" onCheckedChange={onCheckedChange} />)
    const box = screen.getByRole('checkbox', { name: 'Accept' })
    expect(box).not.toBeChecked()
    await user.click(screen.getByText('Accept'))
    expect(box).toBeChecked()
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('works without a label (the control alone, 16px)', () => {
    render(<Checkbox aria-label="Select row" />)
    expect(screen.getByRole('checkbox', { name: 'Select row' })).toHaveClass('size-4')
  })

  it('starts checked with defaultChecked', () => {
    render(<Checkbox label="Accept" defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup()
    render(<Checkbox label="Accept" disabled />)
    await user.click(screen.getByText('Accept'))
    expect(screen.getByRole('checkbox')).not.toBeChecked()
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('toggles from the keyboard', async () => {
    const user = userEvent.setup()
    render(<Checkbox label="Accept" />)
    await user.tab()
    await user.keyboard(' ')
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('passes aria-invalid through for the invalid state', () => {
    render(<Checkbox label="Accept" aria-invalid />)
    expect(screen.getByRole('checkbox')).toBeInvalid()
  })

  it('shows the description under the label', () => {
    render(<Checkbox label="Accept" description="Read the terms first." />)
    expect(screen.getByText('Read the terms first.')).toBeInTheDocument()
  })
})
