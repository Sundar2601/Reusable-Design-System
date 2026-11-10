import type { Meta, StoryObj } from '@storybook/react-vite'
import { TagInput } from './TagInput'

const meta = {
  title: 'Components/Tag Input',
  component: TagInput,
  tags: ['autodocs'],
  argTypes: { disabled: { control: 'boolean' }, max: { control: { type: 'number', min: 1 } } },
} satisfies Meta<typeof TagInput>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {}
export const WithTags: Story = { args: { defaultValue: ['design', 'system', 'react'] } }
export const MaxTags: Story = { args: { defaultValue: ['one', 'two'], max: 3, placeholder: 'Up to 3 tags' } }
export const Invalid: Story = { args: { defaultValue: ['bad'], 'aria-invalid': true } }
export const Disabled: Story = { args: { defaultValue: ['locked'], disabled: true } }
