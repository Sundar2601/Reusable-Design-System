import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardComboboxImports } from '@/shared/components/combobox/combobox.imports'
import { ZardComboboxComponent } from '@/shared/components/combobox/combobox.component'

const options = [
  { value: 'next', label: 'Next.js' },
  { value: 'svelte', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro', disabled: true },
]

const meta: Meta<ZardComboboxComponent> = {
  title: 'Combobox',
  component: ZardComboboxComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...ZardComboboxImports] })],
  parameters: { docs: { description: { component: 'Combobox (ZardUI). Searchable select: `z-combobox` with `[options]`, `placeholder`, `searchPlaceholder`, `emptyText`, `zInvalid`, `zDisabled`, two-way `[(zValue)]`.' } } },
  argTypes: {
    placeholder: { control: 'text' },
    zDisabled: { name: 'disabled', control: 'boolean' },
    zInvalid: { name: 'invalid', control: 'boolean' },
    options: { table: { disable: true } },
  },
  args: { placeholder: 'Select framework...', zDisabled: false, zInvalid: false, options },
  render: (args) => ({
    props: args,
    template: `<z-combobox class="w-64" [options]="options" [placeholder]="placeholder" [zDisabled]="zDisabled" [zInvalid]="zInvalid" />`,
  }),
}
export default meta
type Story = StoryObj<ZardComboboxComponent>

export const Default: Story = {}
export const WithValue: Story = {
  render: (args) => ({ props: args, template: `<z-combobox class="w-64" [options]="options" zValue="remix" />` }),
}
export const Invalid: Story = { args: { zInvalid: true } }
export const Disabled: Story = { args: { zDisabled: true } }
