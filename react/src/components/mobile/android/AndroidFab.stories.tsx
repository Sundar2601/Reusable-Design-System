import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pencil, Plus } from 'lucide-react'
import { AndroidFab } from './AndroidFab'

const meta = {
  title: 'Mobile/Android/FAB',
  component: AndroidFab,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'surface'] },
    size: { control: 'inline-radio', options: ['small', 'default', 'large'] },
  },
  args: { icon: <Plus />, 'aria-label': 'Add' },
} satisfies Meta<typeof AndroidFab>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Extended: Story = { args: { icon: <Pencil />, label: 'Compose' } }
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <AndroidFab {...args} size="small" />
      <AndroidFab {...args} size="default" />
      <AndroidFab {...args} size="large" />
    </div>
  ),
}
export const Variants: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <AndroidFab {...args} variant="primary" />
      <AndroidFab {...args} variant="secondary" />
      <AndroidFab {...args} variant="surface" />
    </div>
  ),
}
