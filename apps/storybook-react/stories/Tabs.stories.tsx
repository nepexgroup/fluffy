import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from '@fluffy/react'

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Activity', value: 'activity' },
  { label: 'Settings', value: 'settings' },
  { label: 'Billing', value: 'billing', disabled: true },
]

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['underline', 'pill'] },
  },
  args: { tabs, variant: 'underline' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Playground: Story = {
  render: (args) => {
    const [active, setActive] = useState('overview')
    return (
      <Tabs {...args} value={active} onChange={setActive}>
        {(value) => (
          <p className="text-base text-ink-gray-6">
            Content of the <b className="text-ink-gray-8">{value}</b> tab.
          </p>
        )}
      </Tabs>
    )
  },
}

export const Pill: Story = {
  ...Playground,
  args: { tabs, variant: 'pill' },
}
