import type { Meta, StoryObj } from '@storybook/angular'

/**
 * `shimmer` is an optional Tailwind utility (src/utilities.css), same as in React. It sweeps a
 * highlight across text for loading and "thinking" states. Respects `prefers-reduced-motion`.
 * Modifiers: `shimmer-once`, `shimmer-reverse`, `shimmer-none`, `shimmer-color-<color>`,
 * `shimmer-duration-<ms>`, `shimmer-spread-<n>`, `shimmer-angle-<deg>`.
 */
const meta: Meta = {
  title: 'Utilities/Shimmer',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Animated highlight across text. Add `shimmer` to a text element.' } } },
}
export default meta
type Story = StoryObj

const p = (cls: string, text: string): Story => ({ render: () => ({ template: `<p class="shimmer ${cls}">${text}</p>` }) })

export const Default: Story = p('text-base font-medium text-foreground', 'Thinking…')
export const Muted: Story = p('text-sm text-muted-foreground', 'Searching 12 sources…')
export const Once: Story = p('shimmer-once text-base font-medium', 'Loaded once')
export const Reverse: Story = p('shimmer-reverse text-base font-medium', 'Reverse direction')
export const Slow: Story = p('shimmer-duration-4000 text-base font-medium', 'Slow, four seconds')
export const Wide: Story = p('shimmer-spread-24 text-lg font-semibold', 'Wide highlight')
export const Colored: Story = p('shimmer-color-primary text-lg font-semibold text-muted-foreground', 'Primary highlight')
