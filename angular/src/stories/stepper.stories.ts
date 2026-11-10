import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { StepperComponent } from '@/shared/extended/stepper.component'

const steps = [
  { title: 'Account', description: 'Create your account' },
  { title: 'Profile', description: 'Tell us about you' },
  { title: 'Review', description: 'Confirm details' },
  { title: 'Done' },
]

const meta: Meta<StepperComponent> = {
  title: 'Stepper',
  component: StepperComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Stepper (extended, hand-built). Same API as the React Stepper: `steps`, zero-based `current`, `orientation` horizontal / vertical.' } } },
  decorators: [moduleMetadata({ imports: [ZardButtonComponent] })],
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] }, current: { control: { type: 'number', min: 0, max: 4 } } },
  args: { steps, current: 1, orientation: 'horizontal' },
  render: (args) => ({
    props: args,
    template: `<div class="w-[560px]"><ui-stepper [steps]="steps" [current]="current" [orientation]="orientation" /></div>`,
  }),
}
export default meta
type Story = StoryObj<StepperComponent>

export const Horizontal: Story = {}
export const Vertical: Story = { args: { orientation: 'vertical' } }
export const Interactive: Story = {
  render: (args) => ({
    props: { ...args, current: 0, count: steps.length },
    template: `<div class="flex w-[560px] flex-col gap-6">
      <ui-stepper [steps]="steps" [current]="current" />
      <div class="flex gap-2">
        <button z-button zType="outline" [zDisabled]="current === 0" (click)="current = current - 1">Back</button>
        <button z-button [zDisabled]="current === count" (click)="current = current + 1">Next</button>
      </div>
    </div>`,
  }),
}
