import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardAlertComponent } from '@/shared/components/alert'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardEmptyComponent } from '@/shared/components/empty'
import { ZardInputComponent } from '@/shared/components/input'
import { ZardFieldImports } from '@/shared/components/field/field.imports'

const meta: Meta = {
  title: 'Patterns/Error states',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Error state pattern (ZardUI) at three scopes: a single field, a whole page with retry, and an offline notice.' } } },
  decorators: [moduleMetadata({ imports: [...ZardFieldImports, ZardInputComponent, ZardAlertComponent, ZardButtonComponent, ZardEmptyComponent] })],
}
export default meta
type Story = StoryObj

export const InlineFieldError: Story = {
  render: () => ({
    template: `<z-field class="w-80">
      <label z-field-label for="u1">Username</label>
      <input z-input id="u1" value="ada" aria-invalid="true" aria-describedby="u1-err" />
      <p id="u1-err" role="alert" class="text-sm text-text-destructive">That username is already taken.</p>
    </z-field>`,
  }),
}
export const PageLevelErrorWithRetry: Story = {
  render: () => ({
    template: `<div class="flex w-[28rem] flex-col gap-4">
      <z-alert zType="destructive" zTitle="Could not load your invoices" zDescription="Something went wrong on our side. Your data is safe." />
      <z-empty class="border" zTitle="Something went wrong" zDescription="We could not load this page. Try again in a moment." [zActions]="[a]" />
    </div>
    <ng-template #a><button z-button>Try again</button></ng-template>`,
  }),
}
export const OfflineBanner: Story = {
  render: () => ({
    template: `<div class="flex w-[40rem] items-center justify-between gap-4 rounded-md border border-border bg-muted px-4 py-2 text-sm" role="status">
      <span><span class="font-medium">You are offline.</span> Changes will sync when your connection returns.</span>
      <button z-button zType="outline" zSize="sm">Retry</button>
    </div>`,
  }),
}
