import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileText, Paperclip, X } from 'lucide-react'
import { Button } from '../Button'
import { Attachment, AttachmentAction, AttachmentActions, AttachmentContent, AttachmentMedia, AttachmentTitle } from './Attachment'
import {
  PromptInput,
  PromptInputAttachments,
  PromptInputModel,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from './PromptInput'

const meta = {
  title: 'AI Elements/Prompt Input',
  component: PromptInput,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="w-120"><Story /></div>],
} satisfies Meta<typeof PromptInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <PromptInput {...args}>
      <PromptInputTextarea placeholder="Ask anything" />
      <PromptInputToolbar>
        <PromptInputTools>
          <Button variant="ghost" size="sm" type="button" leftIcon={<Paperclip />} aria-label="Attach files" />
          <PromptInputModel>Claude Sonnet</PromptInputModel>
        </PromptInputTools>
        <PromptInputSubmit />
      </PromptInputToolbar>
    </PromptInput>
  ),
}

export const WithAttachments: Story = {
  render: (args) => (
    <PromptInput {...args} defaultValue="Summarize this file">
      <PromptInputAttachments>
        <Attachment size="xs">
          <AttachmentMedia><FileText /></AttachmentMedia>
          <AttachmentContent><AttachmentTitle>report.pdf</AttachmentTitle></AttachmentContent>
          <AttachmentActions><AttachmentAction aria-label="Remove"><X /></AttachmentAction></AttachmentActions>
        </Attachment>
      </PromptInputAttachments>
      <PromptInputTextarea placeholder="Ask anything" />
      <PromptInputToolbar>
        <PromptInputTools><PromptInputModel>Claude Sonnet</PromptInputModel></PromptInputTools>
        <PromptInputSubmit />
      </PromptInputToolbar>
    </PromptInput>
  ),
}

export const Streaming: Story = {
  render: (args) => (
    <PromptInput {...args}>
      <PromptInputTextarea placeholder="Ask anything" disabled />
      <PromptInputToolbar>
        <PromptInputTools />
        <PromptInputSubmit status="streaming" />
      </PromptInputToolbar>
    </PromptInput>
  ),
}
