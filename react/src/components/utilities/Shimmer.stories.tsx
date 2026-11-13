import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * `shimmer` is an optional Tailwind utility (src/theme/utilities.css). It sweeps a highlight across
 * text, for loading and "thinking" states. Respects `prefers-reduced-motion`.
 * - `shimmer-once`, `shimmer-reverse`, `shimmer-none`
 * - `shimmer-color-<color>`, `shimmer-duration-<ms>`, `shimmer-spread-<n>`, `shimmer-angle-<deg>`
 */
const meta = {
  title: 'Utilities/Shimmer',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Animated highlight across text. Add `shimmer` to a text element.' } } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { render: () => <p className="shimmer text-base font-medium text-foreground">Thinking…</p> }
export const Muted: Story = { render: () => <p className="shimmer text-sm text-muted-foreground">Searching 12 sources…</p> }
export const Once: Story = { render: () => <p className="shimmer shimmer-once text-base font-medium">Loaded once</p> }
export const Reverse: Story = { render: () => <p className="shimmer shimmer-reverse text-base font-medium">Reverse direction</p> }
export const Slow: Story = { render: () => <p className="shimmer shimmer-duration-4000 text-base font-medium">Slow, four seconds</p> }
export const Wide: Story = { render: () => <p className="shimmer shimmer-spread-24 text-lg font-semibold">Wide highlight</p> }
export const Colored: Story = { render: () => <p className="shimmer shimmer-color-primary text-lg font-semibold text-muted-foreground">Primary highlight</p> }
