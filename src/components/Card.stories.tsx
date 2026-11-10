import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Card title',
    description: 'Short supporting description that explains the card content in one or two lines.',
    variant: 'outlined',
    media: <div className="size-full" />,
    action: <Button size="md">Button</Button>,
  },
  argTypes: { variant: { control: 'inline-radio', options: ['outlined', 'elevated'] } },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Outlined: Story = {}
export const Elevated: Story = { args: { variant: 'elevated' } }
export const TextOnly: Story = { args: { media: undefined, action: undefined } }
