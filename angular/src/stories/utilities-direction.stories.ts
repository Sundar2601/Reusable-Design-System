import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardInputComponent } from '@/shared/components/input'

/**
 * Direction. Set `dir="rtl"` on an ancestor (Angular CDK `Directionality` reads it too). Layout uses
 * logical properties so components mirror automatically.
 */
const meta: Meta = {
  title: 'Utilities/Direction',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Right-to-left support. Set `dir` on an ancestor; components mirror.' } } },
  decorators: [moduleMetadata({ imports: [ZardButtonComponent, ZardInputComponent] })],
}
export default meta
type Story = StoryObj

const form = (dir: 'ltr' | 'rtl', label: string, hint: string, cta: string) => `
  <div dir="${dir}" class="flex w-80 flex-col gap-4 rounded-lg border border-border p-4">
    <div class="flex flex-col gap-2">
      <label for="email-${dir}" class="text-sm font-medium">${label}</label>
      <input z-input id="email-${dir}" placeholder="name@example.com" />
      <p class="text-sm text-muted-foreground">${hint}</p>
    </div>
    <button z-button>${cta}</button>
  </div>`

export const LeftToRight: Story = { render: () => ({ template: form('ltr', 'Email', 'We never share it.', 'Submit') }) }
export const RightToLeft: Story = { render: () => ({ template: form('rtl', 'البريد الإلكتروني', 'لن نشاركه مع أحد.', 'إرسال') }) }
