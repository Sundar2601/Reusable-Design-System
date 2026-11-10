import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AndroidButtonComponent } from '@/shared/extended/android-button.component'
import { AndroidCardComponent } from '@/shared/extended/android-card.component'

const body = `
  <div slot="media" class="h-40 w-full bg-primary/10"></div>
  <h3 class="text-base leading-6 font-medium">Weekend trip</h3>
  <p class="text-sm leading-5 text-muted-foreground">Two nights by the lake with friends, leaving Friday evening.</p>
  <ng-container slot="actions"></ng-container>`
const actions = `<android-button slot="actions" variant="text">Dismiss</android-button><android-button slot="actions" variant="filled">Open</android-button>`

const meta: Meta<AndroidCardComponent> = {
  title: 'Mobile/Android/Card',
  component: AndroidCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Card (extended, hand-built). Same API as the React AndroidCard: `variant` elevated / filled / outlined, `interactive`. Slots `[slot=media]`, default content and `[slot=actions]`.' } },
  },
  argTypes: { variant: { control: 'inline-radio', options: ['elevated', 'filled', 'outlined'] }, interactive: { control: 'boolean' } },
  decorators: [moduleMetadata({ imports: [AndroidButtonComponent] })],
  args: { variant: 'elevated', interactive: false },
  render: (args) => ({
    props: args,
    template: `<android-card class="w-80" [variant]="variant" [interactive]="interactive">${body.replace('<ng-container slot="actions"></ng-container>', '')}${actions}</android-card>`,
  }),
}
export default meta
type Story = StoryObj<AndroidCardComponent>

export const Elevated: Story = {}
export const Filled: Story = { args: { variant: 'filled' } }
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Interactive: Story = { args: { interactive: true } }
