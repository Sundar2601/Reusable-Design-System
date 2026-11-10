import type { Meta, StoryObj } from '@storybook/angular'
import { AndroidFabComponent } from '@/shared/extended/android-fab.component'

const plus = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5v14" /></svg>'
const pencil = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.4 3.6a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>'

const meta: Meta<AndroidFabComponent> = {
  title: 'Mobile/Android/FAB',
  component: AndroidFabComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android FAB (extended, hand-built). Same API as the React AndroidFab: `variant` primary / secondary / surface, `size` small / default / large, `label` for the extended FAB. Icon is projected content.' } },
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'surface'] },
    size: { control: 'inline-radio', options: ['small', 'default', 'large'] },
  },
  args: { variant: 'primary', size: 'default', ariaLabel: 'Add' },
  render: (args) => ({ props: args, template: `<android-fab [variant]="variant" [size]="size" [ariaLabel]="ariaLabel">${plus}</android-fab>` }),
}
export default meta
type Story = StoryObj<AndroidFabComponent>

export const Default: Story = {}
export const Extended: Story = {
  render: (args) => ({ props: args, template: `<android-fab [variant]="variant" label="Compose">${pencil}</android-fab>` }),
}
export const Sizes: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-4"><android-fab size="small" ariaLabel="Add">${plus}</android-fab><android-fab ariaLabel="Add">${plus}</android-fab><android-fab size="large" ariaLabel="Add">${plus}</android-fab></div>`,
  }),
}
export const Variants: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-4"><android-fab variant="primary" ariaLabel="Add">${plus}</android-fab><android-fab variant="secondary" ariaLabel="Add">${plus}</android-fab><android-fab variant="surface" ariaLabel="Add">${plus}</android-fab></div>`,
  }),
}
