import type { Meta, StoryObj } from '@storybook/angular'
import { AndroidButtonComponent } from '@/shared/extended/android-button.component'

const plus = '<svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5v14" /></svg>'

const meta: Meta<AndroidButtonComponent> = {
  title: 'Mobile/Android/Button',
  component: AndroidButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Button (extended, hand-built). Same API as the React AndroidButton: `variant` filled / tonal / outlined / elevated / text, `disabled`, leading icon via `[slot=icon]`.' } },
  },
  argTypes: { variant: { control: 'select', options: ['filled', 'tonal', 'outlined', 'elevated', 'text'] }, disabled: { control: 'boolean' } },
  args: { variant: 'filled', disabled: false },
  render: (args) => ({ props: args, template: `<android-button [variant]="variant" [disabled]="disabled">Button</android-button>` }),
}
export default meta
type Story = StoryObj<AndroidButtonComponent>

export const Filled: Story = {}
export const Tonal: Story = { args: { variant: 'tonal' } }
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Elevated: Story = { args: { variant: 'elevated' } }
export const Text: Story = { args: { variant: 'text' } }
export const WithIcon: Story = { render: (args) => ({ props: args, template: `<android-button [variant]="variant">${plus}Add</android-button>` }) }
export const Disabled: Story = { args: { disabled: true } }
export const AllVariants: Story = {
  render: () => ({
    template: `<div class="flex flex-wrap items-center gap-3"><android-button variant="filled">filled</android-button><android-button variant="tonal">tonal</android-button><android-button variant="outlined">outlined</android-button><android-button variant="elevated">elevated</android-button><android-button variant="text">text</android-button></div>`,
  }),
}
