import type { Meta, StoryObj } from '@storybook/angular'
import { AndroidTextFieldComponent } from '@/shared/extended/android-text-field.component'

const search = '<svg slot="leading" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>'
const clear = '<svg slot="trailing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>'

const meta: Meta<AndroidTextFieldComponent> = {
  title: 'Mobile/Android/Text Field',
  component: AndroidTextFieldComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Text Field (extended, hand-built). Same API as the React AndroidTextField: `variant` filled / outlined, `label`, `supportingText`, `error`, `disabled`, two-way `value`. Icons via `[slot=leading]` / `[slot=trailing]`.' } },
  },
  argTypes: { variant: { control: 'inline-radio', options: ['filled', 'outlined'] }, error: { control: 'boolean' }, disabled: { control: 'boolean' } },
  args: { variant: 'filled', label: 'Label', supportingText: 'Supporting text', error: false, disabled: false, value: '' },
  render: (args) => ({
    props: args,
    template: `<android-text-field class="w-72" [variant]="variant" [label]="label" [supportingText]="supportingText" [error]="error" [disabled]="disabled" [(value)]="value" />`,
  }),
}
export default meta
type Story = StoryObj<AndroidTextFieldComponent>

export const Filled: Story = {}
export const Outlined: Story = { args: { variant: 'outlined' } }
export const WithIcons: Story = {
  args: { value: 'Hello' },
  render: (args) => ({ props: args, template: `<android-text-field class="w-72" label="Search" [value]="value">${search}${clear}</android-text-field>` }),
}
export const Error: Story = { args: { error: true, value: 'abc', supportingText: 'Enter a valid email' } }
export const Disabled: Story = { args: { disabled: true } }
