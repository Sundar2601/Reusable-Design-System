import type { Meta, StoryObj } from '@storybook/angular'
import { AiSuggestionsComponent } from '@/shared/extended/ai-suggestions.component'

const prompts = ['Summarize this document', 'Draft a reply', 'Explain like I am five', 'Find action items', 'Translate to French']

const meta: Meta<AiSuggestionsComponent> = {
  title: 'AI Elements/Suggestions',
  component: AiSuggestionsComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Suggestions (extended, composed from ZardUI Button). Same as the React Suggestions: `suggestions` list, `layout` wrap / scroll, `selected` output.' } } },
  argTypes: { layout: { control: 'inline-radio', options: ['wrap', 'scroll'] } },
  args: { suggestions: prompts, layout: 'wrap' },
  render: (args) => ({ props: args, template: `<ui-ai-suggestions class="w-96" [suggestions]="suggestions" [layout]="layout" />` }),
}
export default meta
type Story = StoryObj<AiSuggestionsComponent>

export const Wrap: Story = {}
export const Scroll: Story = { args: { layout: 'scroll' } }
