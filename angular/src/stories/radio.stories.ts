import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardRadioGroupImports } from '@/shared/components/radio-group/radio-group.imports'
import { ZardRadioGroupComponent } from '@/shared/components/radio-group'

const meta: Meta<ZardRadioGroupComponent> = {
  title: 'Radio',
  component: ZardRadioGroupComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...ZardRadioGroupImports] })],
  args: { value: 'comfortable', zDisabled: false },
  render: (args) => ({
    props: args,
    template: `<z-radio-group [(value)]="value" [zDisabled]="zDisabled">
      <z-radio value="default">Default</z-radio>
      <z-radio value="comfortable">Comfortable</z-radio>
      <z-radio value="compact">Compact</z-radio>
    </z-radio-group>`,
  }),
}
export default meta
type Story = StoryObj<ZardRadioGroupComponent>

export const Group: Story = {}
export const Disabled: Story = { args: { zDisabled: true } }
