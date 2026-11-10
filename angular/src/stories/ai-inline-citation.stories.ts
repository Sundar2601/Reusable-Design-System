import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AiInlineCitationComponent } from '@/shared/extended/ai-inline-citation.component'

const meta: Meta<AiInlineCitationComponent> = {
  title: 'AI Elements/Inline Citation',
  component: AiInlineCitationComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'AI Inline Citation (hand-built, mirrors the React InlineCitation). Cited text as content, a numbered chip (`index`) with a hover card (`title`, `url`, `description`).' } } },
  decorators: [moduleMetadata({ imports: [AiInlineCitationComponent] })],
}
export default meta
type Story = StoryObj<AiInlineCitationComponent>

export const Default: Story = {
  render: () => ({
    template: `<div class="w-96 pb-40 text-sm leading-relaxed"><ai-inline-citation [index]="1" title="Server Components - React" url="https://react.dev/reference/rsc/server-components" description="Server Components render ahead of time, before bundling, in an environment separate from your client app.">Server components render on the server and ship no JavaScript for themselves.</ai-inline-citation></div>`,
  }),
}
