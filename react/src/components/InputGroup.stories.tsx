import type { Meta, StoryObj } from '@storybook/react-vite'
import { Copy, Mail, Search } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './InputGroup'

const meta = {
  title: 'Components/Input Group',
  component: InputGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const WithIcon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
}
export const WithText: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}
export const WithButton: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput defaultValue="https://design.example/share" readOnly />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="secondary">
          <Copy /> Copy
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
export const Invalid: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <Mail />
      </InputGroupAddon>
      <InputGroupInput aria-invalid placeholder="you@example.com" />
    </InputGroup>
  ),
}
export const Disabled: Story = {
  render: () => (
    <InputGroup data-disabled="true">
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupInput disabled placeholder="Search..." />
    </InputGroup>
  ),
}
export const WithTextarea: Story = {
  render: () => (
    <InputGroup>
      <InputGroupTextarea placeholder="Write a comment..." rows={3} />
      <InputGroupAddon align="block-end">
        <InputGroupText>0 / 280</InputGroupText>
        <InputGroupButton variant="default" className="ms-auto">
          Send
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
