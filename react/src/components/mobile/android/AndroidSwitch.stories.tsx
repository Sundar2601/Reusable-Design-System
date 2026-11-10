import type { Meta, StoryObj } from '@storybook/react-vite'
import { AndroidSwitch } from './AndroidSwitch'

const meta = {
  title: 'Mobile/Android/Switch',
  component: AndroidSwitch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { checked: { control: 'boolean' }, disabled: { control: 'boolean' }, withIcon: { control: 'boolean' } },
  args: { 'aria-label': 'Wi-Fi' },
} satisfies Meta<typeof AndroidSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {}
export const On: Story = { args: { defaultChecked: true } }
export const WithoutIcon: Story = { args: { defaultChecked: true, withIcon: false } }
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } }
