import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { DsRadio, DsRadioGroup } from './radio'

const meta: Meta<DsRadioGroup> = {
  title: 'Components/Radio',
  component: DsRadioGroup,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [DsRadioGroup, DsRadio] })],
  args: { value: 'comfortable', disabled: false },
  render: (args) => ({
    props: args,
    template: `<ds-radio-group [(value)]="value" [disabled]="disabled">
      <ds-radio value="default" label="Default" />
      <ds-radio value="comfortable" label="Comfortable" description="Slightly more space." />
      <ds-radio value="compact" label="Compact" />
    </ds-radio-group>`,
  }),
}
export default meta
type Story = StoryObj<DsRadioGroup>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
