import type { Meta, StoryObj } from '@storybook/react-vite'
import { IosButton } from './IosButton'

const meta = {
  title: 'Mobile/iOS/Button',
  component: IosButton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['filled', 'tinted', 'gray', 'plain'] },
    size: { control: 'inline-radio', options: ['large', 'medium', 'small'] },
  },
  args: { children: 'Continue', variant: 'filled', size: 'medium' },
} satisfies Meta<typeof IosButton>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {}
export const Tinted: Story = { args: { variant: 'tinted' } }
export const Gray: Story = { args: { variant: 'gray' } }
export const Plain: Story = { args: { variant: 'plain' } }
export const Destructive: Story = { args: { destructive: true, children: 'Delete' } }
export const Disabled: Story = { args: { disabled: true } }
export const Large: Story = {
  args: { size: 'large' },
  decorators: [(Story) => <div className="w-[358px]">{Story()}</div>],
}
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IosButton size="medium">Medium</IosButton>
      <IosButton size="small">Small</IosButton>
    </div>
  ),
}
