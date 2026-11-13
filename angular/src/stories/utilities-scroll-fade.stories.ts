import type { Meta, StoryObj } from '@storybook/angular'

/**
 * `scroll-fade` is an optional Tailwind utility (src/utilities.css), same as in React. It masks the
 * edges of a scroll container so content fades where more is available.
 * Axis: `scroll-fade` / `scroll-fade-y`, `scroll-fade-x`, or one edge (`-t`, `-b`, `-s`, `-e`).
 * Size: `scroll-fade-<n>`, per edge `-t-<n>` / `-b-<n>`. `scroll-fade-none` turns it off.
 */
const meta: Meta = {
  title: 'Utilities/Scroll Fade',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Fades the edges of a scrolling container. Add the class to the element that scrolls.' } } },
}
export default meta
type Story = StoryObj

const items = Array.from({ length: 14 }, (_, i) => `<li class="rounded-md bg-muted px-3 py-2">Item ${i + 1}</li>`).join('')
const list = (cls: string, horizontal = false) =>
  `<div class="rounded-lg border border-border bg-card ${cls}" tabindex="0" role="region" aria-label="Scrollable list"><ul class="flex gap-2 p-4 text-sm ${horizontal ? 'w-max' : 'flex-col'}">${items}</ul></div>`

export const Vertical: Story = { render: () => ({ template: list('h-56 w-64 overflow-y-auto scroll-fade scroll-fade-y') }) }
export const Horizontal: Story = { render: () => ({ template: list('w-80 overflow-x-auto scroll-fade scroll-fade-x', true) }) }
export const TopOnly: Story = { render: () => ({ template: list('h-56 w-64 overflow-y-auto scroll-fade scroll-fade-t') }) }
export const BottomOnly: Story = { render: () => ({ template: list('h-56 w-64 overflow-y-auto scroll-fade scroll-fade-b') }) }
export const CustomSize: Story = { render: () => ({ template: list('h-56 w-64 overflow-y-auto scroll-fade scroll-fade-y scroll-fade-16') }) }
export const Off: Story = { render: () => ({ template: list('h-56 w-64 overflow-y-auto scroll-fade scroll-fade-none') }) }
