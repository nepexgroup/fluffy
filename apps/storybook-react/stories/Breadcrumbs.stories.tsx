import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from '@fluffy/react'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Fluffy', href: '#' },
      { label: 'Settings' },
    ],
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Playground: Story = {}
