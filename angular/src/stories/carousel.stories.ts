import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardCarouselImports } from '@/shared/components/carousel/carousel.imports'
import { ZardCarouselComponent } from '@/shared/components/carousel/carousel.component'

const meta: Meta<ZardCarouselComponent> = {
  title: 'Carousel',
  component: ZardCarouselComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Carousel (ZardUI, Embla). Previous / next controls and keyboard arrows, horizontal or vertical, like the React Carousel.' } } },
  decorators: [moduleMetadata({ imports: [...ZardCarouselImports] })],
  argTypes: { zOrientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  args: { zOrientation: 'horizontal' },
}
export default meta
type Story = StoryObj<ZardCarouselComponent>

const slide = (n: number) => `<div class="flex aspect-square items-center justify-center rounded-xl bg-card text-3xl font-semibold inset-ring-1 inset-ring-border">${n}</div>`

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="px-14 py-14"><z-carousel class="w-full max-w-xs" [zOrientation]="zOrientation"><z-carousel-content>
      ${[1, 2, 3, 4, 5].map((n) => `<z-carousel-item>${slide(n)}</z-carousel-item>`).join('')}
    </z-carousel-content></z-carousel></div>`,
  }),
}

export const MultipleItems: Story = {
  render: (args) => ({
    props: { ...args, opts: { align: 'start' } },
    template: `<div class="px-14 py-14"><z-carousel class="w-full max-w-sm" [zOptions]="opts"><z-carousel-content>
      ${[1, 2, 3, 4, 5].map((n) => `<z-carousel-item class="basis-1/2">${slide(n)}</z-carousel-item>`).join('')}
    </z-carousel-content></z-carousel></div>`,
  }),
}

export const Vertical: Story = {
  render: () => ({
    props: { opts: { align: 'start' } },
    template: `<div class="px-14 py-14"><z-carousel class="w-full max-w-[200px]" zOrientation="vertical" [zOptions]="opts"><z-carousel-content class="h-[200px]">
      ${[1, 2, 3, 4].map((n) => `<z-carousel-item class="basis-1/2">${slide(n)}</z-carousel-item>`).join('')}
    </z-carousel-content></z-carousel></div>`,
  }),
}
