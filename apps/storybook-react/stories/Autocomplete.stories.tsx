import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete } from '@fluffy/react'

const options = [
  { label: 'Nepal', value: 'np' },
  { label: 'India', value: 'in' },
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Germany', value: 'de' },
  { label: 'Japan', value: 'jp' },
  { label: 'Australia', value: 'au', disabled: true },
]

const meta: Meta<typeof Autocomplete> = {
  title: 'Advanced/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  args: { options, placeholder: 'Search a country...' },
  decorators: [(Story) => <div className="h-72 w-72"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Autocomplete>

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState('np')
    return (
      <div className="space-y-2">
        <Autocomplete {...args} value={value} onChange={setValue} />
        <p className="text-sm text-ink-gray-5">Selected: {value || 'none'}</p>
      </div>
    )
  },
}
