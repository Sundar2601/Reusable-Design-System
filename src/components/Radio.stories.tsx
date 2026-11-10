import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, RadioGroup } from './Radio'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: { label: 'Label', value: 'a' },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Group: Story = {
  render: () => (
    <RadioGroup defaultValue="b">
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" disabled />
    </RadioGroup>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-lg">
      <RadioGroup defaultValue="">
        <Radio value="a" label="Unselected" />
      </RadioGroup>
      <RadioGroup defaultValue="a">
        <Radio value="a" label="Selected" />
      </RadioGroup>
      <RadioGroup defaultValue="">
        <Radio value="a" label="Disabled" disabled />
      </RadioGroup>
      <RadioGroup defaultValue="a">
        <Radio value="a" label="Disabled selected" disabled />
      </RadioGroup>
    </div>
  ),
}
