import type { Meta, StoryObj } from '@storybook/react-vite'
import { AndroidButton } from './AndroidButton'
import { AndroidCard, AndroidCardActions, AndroidCardContent, AndroidCardDescription, AndroidCardMedia, AndroidCardTitle } from './AndroidCard'

const meta = {
  title: 'Mobile/Android/Card',
  component: AndroidCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { variant: { control: 'inline-radio', options: ['elevated', 'filled', 'outlined'] }, interactive: { control: 'boolean' } },
  args: { variant: 'elevated', className: 'w-80' },
  render: (args) => (
    <AndroidCard {...args}>
      <AndroidCardMedia />
      <AndroidCardContent>
        <AndroidCardTitle>Weekend trip</AndroidCardTitle>
        <AndroidCardDescription>Two nights by the lake with friends, leaving Friday evening.</AndroidCardDescription>
      </AndroidCardContent>
      <AndroidCardActions>
        <AndroidButton variant="text">Dismiss</AndroidButton>
        <AndroidButton variant="filled">Open</AndroidButton>
      </AndroidCardActions>
    </AndroidCard>
  ),
} satisfies Meta<typeof AndroidCard>

export default meta
type Story = StoryObj<typeof meta>

export const Elevated: Story = {}
export const Filled: Story = { args: { variant: 'filled' } }
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Interactive: Story = { args: { interactive: true } }
