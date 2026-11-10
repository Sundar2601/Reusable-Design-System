import type { Meta, StoryObj } from '@storybook/angular'
import { AndroidTopAppBarComponent } from '@/shared/extended/android-top-app-bar.component'

const back = '<svg slot="navigation" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7M19 12H5" /></svg>'
const search = '<span slot="actions" class="flex size-12 items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg></span>'

const meta: Meta<AndroidTopAppBarComponent> = {
  title: 'Mobile/Android/Top App Bar',
  component: AndroidTopAppBarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Top App Bar (extended, hand-built). Same API as the React AndroidTopAppBar: `variant` small / center / medium / large, `title`, `scrolled`. Slots `[slot=navigation]` and `[slot=actions]`.' } },
  },
  argTypes: { variant: { control: 'inline-radio', options: ['small', 'center', 'medium', 'large'] }, scrolled: { control: 'boolean' } },
  args: { variant: 'small', title: 'Inbox', scrolled: false },
  render: (args) => ({
    props: args,
    template: `<div class="w-[360px] overflow-hidden rounded-lg border border-border"><android-top-app-bar [variant]="variant" [title]="title" [scrolled]="scrolled">${back}${search}</android-top-app-bar></div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidTopAppBarComponent>

export const Small: Story = {}
export const CenterAligned: Story = { args: { variant: 'center' } }
export const Medium: Story = { args: { variant: 'medium' } }
export const Large: Story = { args: { variant: 'large' } }
export const Scrolled: Story = { args: { scrolled: true } }
