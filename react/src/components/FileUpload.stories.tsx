import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileUpload } from './FileUpload'

const meta = {
  title: 'Components/File Upload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: { multiple: { control: 'boolean' }, disabled: { control: 'boolean' } },
} satisfies Meta<typeof FileUpload>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Multiple: Story = { args: { multiple: true } }
export const ImagesOnly: Story = {
  args: { accept: 'image/*', title: 'Upload an image', description: 'PNG or JPG up to 5 MB' },
}
export const Disabled: Story = { args: { disabled: true } }
