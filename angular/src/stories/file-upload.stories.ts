import type { Meta, StoryObj } from '@storybook/angular'
import { FileUploadComponent } from '@/shared/extended/file-upload.component'

const meta: Meta<FileUploadComponent> = {
  title: 'File Upload',
  component: FileUploadComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'File Upload (extended, hand-built). Same API as the React FileUpload: `accept`, `multiple`, `disabled`, `title`, `description`, and a `filesChange` output.' } } },
  argTypes: { multiple: { control: 'boolean' }, disabled: { control: 'boolean' } },
  args: { multiple: false, disabled: false },
  render: (args) => ({
    props: args,
    template: `<ui-file-upload [accept]="accept" [multiple]="multiple" [disabled]="disabled" [title]="title" [description]="description" />`,
  }),
}
export default meta
type Story = StoryObj<FileUploadComponent>

export const Default: Story = {}
export const Multiple: Story = { args: { multiple: true } }
export const ImagesOnly: Story = { args: { accept: 'image/*', title: 'Upload an image', description: 'PNG or JPG up to 5 MB' } }
export const Disabled: Story = { args: { disabled: true } }
