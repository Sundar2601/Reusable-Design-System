import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardAspectRatioComponent } from '@/shared/components/aspect-ratio'

const meta: Meta<ZardAspectRatioComponent> = {
  title: 'Aspect Ratio',
  component: ZardAspectRatioComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Aspect Ratio (ZardUI). Same as the React AspectRatio: `zRatio` is width / height.' } } },
  decorators: [moduleMetadata({ imports: [ZardAspectRatioComponent] })],
  argTypes: { zRatio: { name: 'ratio', control: 'number' } },
  args: { zRatio: 16 / 9 },
  render: (args) => ({
    props: args,
    template: `<div class="w-72"><z-aspect-ratio [zRatio]="zRatio" class="flex items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">{{ zRatio }}</z-aspect-ratio></div>`,
  }),
}
export default meta
type Story = StoryObj<ZardAspectRatioComponent>

export const Widescreen: Story = {}
export const Square: Story = { args: { zRatio: 1 } }
export const Classic: Story = { args: { zRatio: 4 / 3 } }
