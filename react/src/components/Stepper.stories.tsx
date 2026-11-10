import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Stepper } from './Stepper'

const steps = [
  { title: 'Account', description: 'Create your account' },
  { title: 'Profile', description: 'Tell us about you' },
  { title: 'Review', description: 'Confirm details' },
  { title: 'Done' },
]

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
    current: { control: { type: 'number', min: 0, max: 4 } },
  },
  args: { steps, current: 1, orientation: 'horizontal' },
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = { render: (args) => <div className="w-[560px]"><Stepper {...args} /></div> }
export const Vertical: Story = { args: { orientation: 'vertical' } }
export const Interactive: Story = {
  render: (args) => {
    const [current, setCurrent] = React.useState(0)
    return (
      <div className="flex w-[560px] flex-col gap-6">
        <Stepper {...args} current={current} />
        <div className="flex gap-2">
          <Button variant="outline" disabled={current === 0} onClick={() => setCurrent((c) => c - 1)}>Back</Button>
          <Button disabled={current === steps.length} onClick={() => setCurrent((c) => c + 1)}>Next</Button>
        </div>
      </div>
    )
  },
}
