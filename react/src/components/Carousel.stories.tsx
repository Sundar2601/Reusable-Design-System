import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './Carousel'

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  decorators: [(Story) => <div className="px-14 py-14">{Story()}</div>],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

const slide = (n: number) => (
  <div className="flex aspect-square items-center justify-center rounded-xl bg-card text-3xl font-semibold inset-ring-1 inset-ring-border">
    {n}
  </div>
)

export const Default: Story = {
  render: (args) => (
    <Carousel {...args} className="w-full max-w-xs">
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((n) => (
          <CarouselItem key={n}>{slide(n)}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const MultipleItems: Story = {
  render: (args) => (
    <Carousel {...args} opts={{ align: 'start' }} className="w-full max-w-sm">
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((n) => (
          <CarouselItem key={n} className="basis-1/2">
            {slide(n)}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <Carousel {...args} orientation="vertical" opts={{ align: 'start' }} className="w-full max-w-[200px]">
      <CarouselContent className="h-[200px]">
        {[1, 2, 3, 4].map((n) => (
          <CarouselItem key={n} className="basis-1/2">
            {slide(n)}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
