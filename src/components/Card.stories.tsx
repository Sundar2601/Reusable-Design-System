import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: { size: { control: 'inline-radio', options: ['default', 'sm'] } },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
        <CardAction>
          <Button variant="link">Sign up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>The card body goes here.</CardContent>
      <CardFooter>
        <Button>Login</Button>
        <Button variant="outline">Login with Google</Button>
      </CardFooter>
    </Card>
  ),
}

export const Small: Story = {
  args: { size: 'sm' },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Small card</CardTitle>
        <CardDescription>This card uses the small size variant.</CardDescription>
      </CardHeader>
      <CardContent>The card component supports a size prop for a more compact appearance.</CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          Action
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const WithImage: Story = {
  render: (args) => (
    <Card {...args}>
      <CardImage />
      <CardHeader>
        <CardTitle>Event cover</CardTitle>
        <CardDescription>An image sits above the header.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Book now</Button>
      </CardFooter>
    </Card>
  ),
}
