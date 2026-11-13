import type { Meta, StoryObj } from '@storybook/react-vite'
import { cn } from '@/lib/utils'

/**
 * `scroll-fade` is an optional Tailwind utility (src/theme/utilities.css). It masks the edges of a
 * scroll container so content fades out where more is available, and the fade disappears at the ends.
 * - Axis: `scroll-fade` / `scroll-fade-y` (top and bottom), `scroll-fade-x` (start and end), or a single edge (`-t`, `-b`, `-s`, `-e`)
 * - Size: `scroll-fade-<n>` (spacing scale) or an arbitrary length, per edge with `-t-<n>`, `-b-<n>`
 * - `scroll-fade-none` turns it off
 */
const meta = {
  title: 'Utilities/Scroll Fade',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Fades the edges of a scrolling container. Add the class to the element that scrolls.' } } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const items = Array.from({ length: 14 }, (_, i) => `Item ${i + 1}`)

function List({ className, horizontal }: { className: string; horizontal?: boolean }) {
  return (
    <div className={cn('rounded-lg border border-border bg-card', className)} tabIndex={0} role="region" aria-label="Scrollable list">
      <ul className={cn('flex gap-2 p-4 text-sm', horizontal ? 'w-max' : 'flex-col')}>
        {items.map((t) => (
          <li key={t} className="rounded-md bg-muted px-3 py-2">{t}</li>
        ))}
      </ul>
    </div>
  )
}

export const Vertical: Story = { render: () => <List className="h-56 w-64 overflow-y-auto scroll-fade scroll-fade-y" /> }
export const Horizontal: Story = { render: () => <List horizontal className="w-80 overflow-x-auto scroll-fade scroll-fade-x" /> }
export const TopOnly: Story = { render: () => <List className="h-56 w-64 overflow-y-auto scroll-fade scroll-fade-t" /> }
export const BottomOnly: Story = { render: () => <List className="h-56 w-64 overflow-y-auto scroll-fade scroll-fade-b" /> }
export const CustomSize: Story = { render: () => <List className="h-56 w-64 overflow-y-auto scroll-fade scroll-fade-y scroll-fade-16" /> }
export const Off: Story = { render: () => <List className="h-56 w-64 overflow-y-auto scroll-fade scroll-fade-none" /> }
