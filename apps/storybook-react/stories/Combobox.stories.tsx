import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Combobox } from '@fluffy/react'

const options = [
  { label: 'Bug', value: 'bug' },
  { label: 'Feature', value: 'feature' },
  { label: 'Docs', value: 'docs' },
  { label: 'Design', value: 'design' },
  { label: 'Performance', value: 'perf' },
]

const meta: Meta<typeof Combobox> = {
  title: 'Advanced/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  args: { options, placeholder: 'Add labels...' },
  decorators: [(Story) => <div className="h-72 w-80"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Combobox>

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['bug', 'docs'])
    return (
      <div className="space-y-2">
        <Combobox {...args} value={value} onChange={setValue} />
        <p className="text-sm text-ink-gray-5">Selected: {value.join(', ') || 'none'}</p>
      </div>
    )
  },
}
