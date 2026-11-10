import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AppCodeBlockComponent } from '@/shared/extended/code-block.component'

const meta: Meta<AppCodeBlockComponent> = {
  title: 'Code Block',
  component: AppCodeBlockComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Code Block. ZardUI has no code block, so this is a small hand-built component (src/app/shared/extended/code-block.component.ts): a styled pre/code with a language label and a copy button.' } } },
  decorators: [moduleMetadata({ imports: [AppCodeBlockComponent] })],
  args: {
    language: 'html',
    copyable: true,
    code: '<button z-button zType="outline">\n  Click me\n</button>',
  },
  render: (args) => ({ props: args, template: `<app-code-block [code]="code" [language]="language" [copyable]="copyable" />` }),
}
export default meta
type Story = StoryObj<AppCodeBlockComponent>

export const Default: Story = {}
export const NoHeader: Story = { args: { language: '', copyable: false, code: 'npm install @bounteous/ui' } }
export const LongLines: Story = {
  args: { language: 'bash', code: 'npx shadcn@latest add button card input checkbox radio avatar table calendar carousel resizable scroll-area --overwrite' },
  render: (args) => ({ props: args, template: `<app-code-block class="max-w-md" [code]="code" [language]="language" [copyable]="copyable" />` }),
}
