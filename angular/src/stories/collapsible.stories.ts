import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardCollapsibleImports } from '@/shared/components/collapsible/collapsible.imports'
import { ZardCollapsibleDirective } from '@/shared/components/collapsible/collapsible.component'

const body = `
  <div class="flex items-center justify-between gap-4">
    <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
    <button z-button z-collapsible-trigger zType="ghost" zSize="sm" aria-label="Toggle">+/-</button>
  </div>
  <div class="rounded-lg px-4 py-2 font-mono text-sm ring-1 ring-border">@radix-ui/primitives</div>
  <z-collapsible-content class="flex flex-col gap-2">
    <div class="rounded-lg px-4 py-2 font-mono text-sm ring-1 ring-border">@radix-ui/colors</div>
    <div class="rounded-lg px-4 py-2 font-mono text-sm ring-1 ring-border">@stitches/react</div>
  </z-collapsible-content>`

const meta: Meta<ZardCollapsibleDirective> = {
  title: 'Collapsible',
  component: ZardCollapsibleDirective,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Collapsible (ZardUI). Same as the React Collapsible: `zOpen`, `zDisabled`, a trigger and a content part.' } } },
  decorators: [moduleMetadata({ imports: [...ZardCollapsibleImports, ZardButtonComponent] })],
}
export default meta
type Story = StoryObj<ZardCollapsibleDirective>

export const Closed: Story = { render: () => ({ template: `<z-collapsible class="flex w-80 flex-col gap-2">${body}</z-collapsible>` }) }
export const Open: Story = { render: () => ({ template: `<z-collapsible zOpen class="flex w-80 flex-col gap-2">${body}</z-collapsible>` }) }
export const Disabled: Story = { render: () => ({ template: `<z-collapsible zDisabled class="flex w-80 flex-col gap-2">${body}</z-collapsible>` }) }
