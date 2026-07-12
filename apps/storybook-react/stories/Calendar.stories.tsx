import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '@fluffy/react'

const meta: Meta<typeof Calendar> = {
  title: 'Advanced/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState('2026-07-12')
    return (
      <div className="space-y-2">
        <Calendar value={value} onChange={setValue} />
        <p className="text-sm text-ink-gray-5">Selected: {value || 'none'}</p>
      </div>
    )
  },
}
