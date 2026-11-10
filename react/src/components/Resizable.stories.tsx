import type { Meta, StoryObj } from '@storybook/react-vite'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './Resizable'

const meta = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

const box = (label: string) => <div className="flex h-full items-center justify-center p-4 text-sm font-medium">{label}</div>

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg inset-ring-1 inset-ring-border" style={{ height: 200 }}>
      <ResizablePanel defaultSize={50}>{box('One')}</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>{box('Two')}</ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup orientation="vertical" className="max-w-md rounded-lg inset-ring-1 inset-ring-border" style={{ height: 240 }}>
      <ResizablePanel defaultSize={30}>{box('Header')}</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={70}>{box('Content')}</ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const WithHandle: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg inset-ring-1 inset-ring-border" style={{ height: 200 }}>
      <ResizablePanel defaultSize={25}>{box('Sidebar')}</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>{box('Content')}</ResizablePanel>
    </ResizablePanelGroup>
  ),
}
