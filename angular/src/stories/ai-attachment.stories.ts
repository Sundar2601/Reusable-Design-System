import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { provideIcons } from '@ng-icons/core'
import { lucideFileText, lucideX } from '@ng-icons/lucide'
import { NgIcon } from '@ng-icons/core'
import { ZardAttachmentImports } from '@/shared/components/attachment/attachment.imports'
import { ZardAttachmentComponent } from '@/shared/components/attachment/attachment.component'

const file = (title: string, desc: string) => `
  <z-attachment-media><ng-icon name="lucideFileText" /></z-attachment-media>
  <z-attachment-content><z-attachment-title>${title}</z-attachment-title><z-attachment-description>${desc}</z-attachment-description></z-attachment-content>
  <z-attachment-actions><button z-attachment-action aria-label="Remove attachment"><ng-icon name="lucideX" /></button></z-attachment-actions>`

const meta: Meta<ZardAttachmentComponent> = {
  title: 'AI Elements/Attachment',
  component: ZardAttachmentComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Attachment (ZardUI). Same as the React Attachment: `zState` idle / uploading / processing / done / error, `zSize` default / sm / xs, `zOrientation` horizontal / vertical.' } } },
  decorators: [moduleMetadata({ imports: [...ZardAttachmentImports, NgIcon], providers: [provideIcons({ lucideFileText, lucideX })] })],
  argTypes: {
    zState: { control: 'select', options: ['idle', 'uploading', 'processing', 'done', 'error'] },
    zSize: { control: 'inline-radio', options: ['default', 'sm', 'xs'] },
    zOrientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  args: { zState: 'done', zSize: 'default', zOrientation: 'horizontal' },
  render: (args) => ({
    props: args,
    template: `<z-attachment class="w-72" [zState]="zState" [zSize]="zSize" [zOrientation]="zOrientation">${file('quarterly-report.pdf', 'PDF, 2.4 MB')}</z-attachment>`,
  }),
}
export default meta
type Story = StoryObj<ZardAttachmentComponent>

export const File: Story = {}
export const States: Story = {
  render: () => ({
    template: `<div class="flex flex-col gap-3">
      <z-attachment class="w-72" zState="uploading">${file('notes.docx', 'Uploading...')}</z-attachment>
      <z-attachment class="w-72" zState="done">${file('notes.docx', '12 KB')}</z-attachment>
      <z-attachment class="w-72" zState="error">${file('huge.zip', 'File is too large')}</z-attachment>
    </div>`,
  }),
}
export const Sizes: Story = {
  render: () => ({
    template: `<div class="flex flex-col items-start gap-3">
      <z-attachment zSize="default"><z-attachment-media><ng-icon name="lucideFileText" /></z-attachment-media><z-attachment-content><z-attachment-title>default.pdf</z-attachment-title></z-attachment-content></z-attachment>
      <z-attachment zSize="sm"><z-attachment-media><ng-icon name="lucideFileText" /></z-attachment-media><z-attachment-content><z-attachment-title>sm.pdf</z-attachment-title></z-attachment-content></z-attachment>
      <z-attachment zSize="xs"><z-attachment-media><ng-icon name="lucideFileText" /></z-attachment-media><z-attachment-content><z-attachment-title>xs.pdf</z-attachment-title></z-attachment-content></z-attachment>
    </div>`,
  }),
}
export const Group: Story = {
  render: () => ({
    template: `<z-attachment-group class="w-96">
      @for (n of ['a.pdf','b.pdf','c.pdf','d.pdf']; track n) {
        <z-attachment zSize="sm"><z-attachment-media><ng-icon name="lucideFileText" /></z-attachment-media><z-attachment-content><z-attachment-title>{{ n }}</z-attachment-title></z-attachment-content></z-attachment>
      }
    </z-attachment-group>`,
  }),
}
