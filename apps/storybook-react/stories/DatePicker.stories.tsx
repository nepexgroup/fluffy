import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from '@fluffy/react'

const meta: Meta<typeof DatePicker> = {
  title: 'Advanced/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['subtle', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: {
    placeholder: 'Select date',
    variant: 'subtle',
    size: 'md',
    disabled: false,
    error: false,
  },
  decorators: [(Story) => <div className="h-96 w-64"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div className="space-y-2">
        <DatePicker {...args} value={value} onChange={setValue} />
        <p className="text-sm text-ink-gray-5">Value: {value || 'none'}</p>
      </div>
    )
  },
}
