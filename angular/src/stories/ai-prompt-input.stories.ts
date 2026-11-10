import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardAttachmentImports } from '@/shared/components/attachment/attachment.imports'
import { ZardButtonComponent } from '@/shared/components/button/button.component'
import { AiPromptInputComponent } from '@/shared/extended/ai-prompt-input.component'

const meta: Meta<AiPromptInputComponent> = {
  title: 'AI Elements/Prompt Input',
  component: AiPromptInputComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Prompt Input (extended, hand-built). Same as the React PromptInput: `value` (two-way), `placeholder`, `status` ready / submitted / streaming / error, `submitted` and `stopped` outputs, `[attachments]` and `[tools]` slots. Enter submits.' } } },
  decorators: [moduleMetadata({ imports: [ZardButtonComponent, ...ZardAttachmentImports] })],
  argTypes: { status: { control: 'inline-radio', options: ['ready', 'submitted', 'streaming', 'error'] } },
  args: { value: '', placeholder: 'Ask anything', status: 'ready', disabled: false },
  render: (args) => ({
    props: args,
    template: `<ui-ai-prompt-input class="w-120" [(value)]="value" [placeholder]="placeholder" [status]="status" [disabled]="disabled">
      <span tools><button z-button zType="ghost" zSize="sm" type="button" class="text-muted-foreground">Claude Sonnet</button></span>
    </ui-ai-prompt-input>`,
  }),
}
export default meta
type Story = StoryObj<AiPromptInputComponent>

export const Default: Story = {}
export const WithAttachments: Story = {
  args: { value: 'Summarize this file' },
  render: (args) => ({
    props: args,
    template: `<ui-ai-prompt-input class="w-120" [(value)]="value" [status]="status">
      <z-attachment attachments zSize="xs"><z-attachment-content><z-attachment-title>report.pdf</z-attachment-title></z-attachment-content></z-attachment>
      <span tools><button z-button zType="ghost" zSize="sm" type="button" class="text-muted-foreground">Claude Sonnet</button></span>
    </ui-ai-prompt-input>`,
  }),
}
export const Streaming: Story = { args: { status: 'streaming', disabled: true } }
