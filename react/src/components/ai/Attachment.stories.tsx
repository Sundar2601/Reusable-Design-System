import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileText, X, TriangleAlert, LoaderCircle } from 'lucide-react'
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from './Attachment'

const meta = {
  title: 'AI Elements/Attachment',
  component: Attachment,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['idle', 'uploading', 'processing', 'done', 'error'] },
    size: { control: 'inline-radio', options: ['default', 'sm', 'xs'] },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj<typeof meta>

export const File: Story = {
  render: (args) => (
    <Attachment {...args} className="w-72">
      <AttachmentMedia>
        <FileText />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>quarterly-report.pdf</AttachmentTitle>
        <AttachmentDescription>PDF, 2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment">
          <X />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Attachment state="uploading" className="w-72">
        <AttachmentMedia><LoaderCircle className="animate-spin" /></AttachmentMedia>
        <AttachmentContent><AttachmentTitle>notes.docx</AttachmentTitle><AttachmentDescription>Uploading...</AttachmentDescription></AttachmentContent>
      </Attachment>
      <Attachment state="done" className="w-72">
        <AttachmentMedia><FileText /></AttachmentMedia>
        <AttachmentContent><AttachmentTitle>notes.docx</AttachmentTitle><AttachmentDescription>12 KB</AttachmentDescription></AttachmentContent>
      </Attachment>
      <Attachment state="error" className="w-72">
        <AttachmentMedia><TriangleAlert /></AttachmentMedia>
        <AttachmentContent><AttachmentTitle>huge.zip</AttachmentTitle><AttachmentDescription>File is too large</AttachmentDescription></AttachmentContent>
      </Attachment>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3">
      {(['default', 'sm', 'xs'] as const).map((size) => (
        <Attachment key={size} size={size}>
          <AttachmentMedia><FileText /></AttachmentMedia>
          <AttachmentContent><AttachmentTitle>{size}.pdf</AttachmentTitle></AttachmentContent>
        </Attachment>
      ))}
    </div>
  ),
}

export const ImageCard: Story = {
  render: () => (
    <Attachment orientation="vertical" className="w-48">
      <AttachmentMedia variant="image">
        <div className="size-full bg-linear-to-br from-muted to-secondary" />
      </AttachmentMedia>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment"><X /></AttachmentAction>
      </AttachmentActions>
      <AttachmentContent><AttachmentTitle>screenshot.png</AttachmentTitle><AttachmentDescription>PNG, 840 KB</AttachmentDescription></AttachmentContent>
    </Attachment>
  ),
}

export const Group: Story = {
  render: () => (
    <AttachmentGroup className="w-96">
      {['a.pdf', 'b.pdf', 'c.pdf', 'd.pdf'].map((n) => (
        <Attachment key={n} size="sm">
          <AttachmentMedia><FileText /></AttachmentMedia>
          <AttachmentContent><AttachmentTitle>{n}</AttachmentTitle></AttachmentContent>
        </Attachment>
      ))}
    </AttachmentGroup>
  ),
}
