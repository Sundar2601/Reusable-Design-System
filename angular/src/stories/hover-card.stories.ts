import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardHoverCardDirective } from '@/shared/components/hover-card/hover-card.component'
import { ZardHoverCardComponent } from '@/shared/components/hover-card/hover-card.component'

const meta: Meta<ZardHoverCardDirective> = {
  title: 'Hover Card',
  component: ZardHoverCardDirective,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Hover Card (ZardUI). Add `zHoverCard` with a `zContent` template to the trigger, like the React HoverCard.' } } },
  decorators: [moduleMetadata({ imports: [ZardHoverCardDirective, ZardHoverCardComponent, ZardButtonComponent] })],
  render: () => ({
    template: `<div class="p-4 pb-40">
      <button z-button zType="link" zHoverCard [zContent]="card">@nextjs</button>
      <ng-template #card>
        <div class="flex flex-col gap-1">
          <h4 class="text-sm font-semibold">@nextjs</h4>
          <p class="text-sm text-muted-foreground">The React Framework, created and maintained by @vercel.</p>
          <div class="text-xs text-muted-foreground">Joined December 2021</div>
        </div>
      </ng-template>
    </div>`,
  }),
}
export default meta
type Story = StoryObj<ZardHoverCardDirective>

export const Default: Story = {}
