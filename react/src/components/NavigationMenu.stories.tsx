import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './NavigationMenu'

const meta = {
  title: 'Components/Navigation Menu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { viewport: true },
  argTypes: { viewport: { control: 'boolean' } },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

const links = [
  { title: 'Introduction', description: 'Re-usable components built with Radix and Tailwind.' },
  { title: 'Installation', description: 'How to install dependencies and structure your app.' },
  { title: 'Typography', description: 'Styles for headings, paragraphs and lists.' },
]

export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-96 gap-1">
              {links.map((link) => (
                <li key={link.title}>
                  <NavigationMenuLink href="#">
                    <div className="font-medium">{link.title}</div>
                    <p className="text-muted-foreground">{link.description}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1">
              <li><NavigationMenuLink href="#">Alert Dialog</NavigationMenuLink></li>
              <li><NavigationMenuLink href="#">Hover Card</NavigationMenuLink></li>
              <li><NavigationMenuLink href="#">Progress</NavigationMenuLink></li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">Docs</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const WithoutViewport: Story = {
  args: { viewport: false },
  render: Default.render,
}
