import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardProgressComponent } from '@/shared/components/progress'
import { ZardSkeletonComponent } from '@/shared/components/skeleton'
import { ZardSpinnerComponent } from '@/shared/components/spinner'

const meta: Meta = {
  title: 'Patterns/Loading',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Loading pattern (ZardUI): skeletons for content of known shape, a spinner for short actions, progress when the amount done is known.' } } },
  decorators: [moduleMetadata({ imports: [ZardButtonComponent, ZardProgressComponent, ZardSkeletonComponent, ZardSpinnerComponent] })],
}
export default meta
type Story = StoryObj

export const SkeletonList: Story = {
  render: () => ({
    template: `<div class="flex w-96 flex-col gap-4" aria-busy="true">
      @for (i of [1, 2, 3]; track i) {
        <div class="flex items-center gap-4">
          <z-skeleton class="size-12 rounded-full" />
          <div class="flex flex-col gap-2"><z-skeleton class="h-4 w-64" /><z-skeleton class="h-4 w-44" /></div>
        </div>
      }
    </div>`,
  }),
}
export const SpinnerButton: Story = {
  render: () => ({ template: `<button z-button zDisabled><z-spinner /> Saving</button>` }),
}
export const ProgressBar: Story = {
  render: () => ({
    template: `<div class="flex w-72 flex-col gap-2">
      <div class="flex justify-between text-sm"><span>Uploading report.pdf</span><span>60%</span></div>
      <z-progress [value]="60" />
    </div>`,
  }),
}
