import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardTooltipImports } from '@/shared/components/tooltip/tooltip.imports'
import { ZardTooltipDirective } from '@/shared/components/tooltip/tooltip'

const meta: Meta<ZardTooltipDirective> = {
  title: 'Tooltip',
  component: ZardTooltipDirective,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Tooltip (ZardUI). Add `zTooltip` to any element; `zPosition` top / right / bottom / left like the React `side`. Hover or focus the button.' } } },
  decorators: [moduleMetadata({ imports: [...ZardTooltipImports, ZardButtonComponent] })],
  argTypes: { zPosition: { name: 'side', control: 'inline-radio', options: ['top', 'right', 'bottom', 'left'] }, zTooltip: { table: { disable: true } } },
  args: { zPosition: 'top' },
  render: (args) => ({
    props: args,
    template: `<div class="p-16"><button z-button zType="outline" zTooltip="Add to library" [zPosition]="zPosition">Hover</button></div>`,
  }),
}
export default meta
type Story = StoryObj<ZardTooltipDirective>

export const Top: Story = {}
export const Right: Story = { args: { zPosition: 'right' } }
export const Bottom: Story = { args: { zPosition: 'bottom' } }
export const Left: Story = { args: { zPosition: 'left' } }
