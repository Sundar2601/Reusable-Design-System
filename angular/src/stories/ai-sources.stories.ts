import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AiSourcesComponent } from '@/shared/extended/ai-sources.component'

const meta: Meta<AiSourcesComponent> = {
  title: 'AI Elements/Sources',
  component: AiSourcesComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'AI Sources (hand-built, mirrors the React Sources). Collapsible "Used N sources" list; `sources` is a list of { href, title }.' } } },
  decorators: [moduleMetadata({ imports: [AiSourcesComponent] })],
}
export default meta
type Story = StoryObj<AiSourcesComponent>

const sources = [
  { href: 'https://react.dev/reference/react/use', title: 'use - React' },
  { href: 'https://developer.mozilla.org/docs/Web/API/Fetch_API', title: 'Fetch API - MDN' },
  { href: 'https://www.w3.org/WAI/ARIA/apg/', title: 'ARIA Authoring Practices Guide' },
]
export const Closed: Story = { render: () => ({ props: { sources }, template: `<ai-sources class="w-80" [sources]="sources" />` }) }
export const Open: Story = { render: () => ({ props: { sources }, template: `<ai-sources class="w-80" [sources]="sources" [open]="true" />` }) }
