import type { Meta, StoryObj } from '@storybook/react-vite'
import { IosSwitch } from './IosSwitch'

const meta = {
  title: 'Mobile/iOS/Switch',
  component: IosSwitch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { 'aria-label': 'Airplane mode' },
} satisfies Meta<typeof IosSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {}
export const On: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } }
