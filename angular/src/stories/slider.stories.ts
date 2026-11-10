import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardSliderImports } from '@/shared/components/slider/slider.imports'
import { ZardSliderComponent } from '@/shared/components/slider/slider.component'

const meta: Meta<ZardSliderComponent> = {
  title: 'Slider',
  component: ZardSliderComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Slider (ZardUI). Same as the React Slider: `zDefault` takes an array (two values make a range), `zOrientation`, `zDisabled`, `zMin`, `zMax`, `zStep`.' } } },
  decorators: [moduleMetadata({ imports: [...ZardSliderImports] })],
  argTypes: {
    zDisabled: { name: 'disabled', control: 'boolean' },
    zStep: { name: 'step', control: 'number' },
    zOrientation: { name: 'orientation', control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  args: { zDefault: [50], zMin: 0, zMax: 100, zStep: 1, zDisabled: false, zOrientation: 'horizontal' },
  render: (args) => ({
    props: args,
    template: `<div class="w-72"><z-slider [zDefault]="zDefault" [zMin]="zMin" [zMax]="zMax" [zStep]="zStep" [zDisabled]="zDisabled" [zOrientation]="zOrientation" /></div>`,
  }),
}
export default meta
type Story = StoryObj<ZardSliderComponent>

export const Default: Story = {}
export const Range: Story = { args: { zDefault: [25, 75] } }
export const Disabled: Story = { args: { zDisabled: true } }
export const Vertical: Story = {
  render: () => ({ template: `<div class="h-40"><z-slider [zDefault]="[50]" zOrientation="vertical" /></div>` }),
}
