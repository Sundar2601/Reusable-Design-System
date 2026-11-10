import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { TypographyComponent } from '@/shared/extended/typography.component'

const meta: Meta<TypographyComponent> = {
  title: 'Typography',
  component: TypographyComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Typography. ZardUI has no typography component, so this is a small hand-built component (`app-typography`, in `shared/extended`) using the same Tailwind classes and tokens as the React Typography file. Variants: h1-h4, p, lead, large, small, muted, code, blockquote.' } } },
  decorators: [moduleMetadata({ imports: [TypographyComponent] })],
}
export default meta
type Story = StoryObj<TypographyComponent>

export const Headings: Story = {
  render: () => ({
    template: `<div class="flex flex-col gap-4">
      <app-typography variant="h1">Heading 1</app-typography>
      <app-typography variant="h2">Heading 2</app-typography>
      <app-typography variant="h3">Heading 3</app-typography>
      <app-typography variant="h4">Heading 4</app-typography>
    </div>`,
  }),
}
export const Paragraph: Story = {
  render: () => ({ template: `<app-typography variant="p">The king, seeing how much happier his subjects were, realized the error of his ways.</app-typography>` }),
}
export const Lead: Story = { render: () => ({ template: `<app-typography variant="lead">A modal dialog that interrupts the user with important content.</app-typography>` }) }
export const Large: Story = { render: () => ({ template: `<app-typography variant="large">Are you absolutely sure?</app-typography>` }) }
export const Small: Story = { render: () => ({ template: `<app-typography variant="small">Email address</app-typography>` }) }
export const Muted: Story = { render: () => ({ template: `<app-typography variant="muted">Enter your email address.</app-typography>` }) }
export const Code: Story = { render: () => ({ template: `<app-typography variant="code">@radix-ui/react-alert-dialog</app-typography>` }) }
export const Blockquote: Story = {
  render: () => ({ template: `<app-typography variant="blockquote">"After all," he said, "everyone enjoys a good joke."</app-typography>` }),
}
