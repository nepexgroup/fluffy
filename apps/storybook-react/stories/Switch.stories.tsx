import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@fluffy/react'

const meta: Meta<typeof Switch> = {
  title: 'Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { label: 'Enable notifications', size: 'md', disabled: false },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Playground: Story = {
  render: (args) => {
    const [on, setOn] = useState(true)
    return <Switch {...args} checked={on} onChange={setOn} />
  },
}

export const Sizes: Story = {
  render: () => {
    const [on, setOn] = useState(true)
    return (
      <div className="space-y-3">
        <Switch checked={on} onChange={setOn} size="sm" label="Small" />
        <Switch checked={on} onChange={setOn} size="md" label="Medium" />
        <Switch checked={on} onChange={setOn} size="lg" label="Large" />
      </div>
    )
  },
}
