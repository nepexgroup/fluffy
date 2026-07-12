import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '@fluffy/react'

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['subtle', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: {
    placeholder: 'Pick a fruit',
    options: ['Apple', 'Banana', 'Mango', 'Orange'],
    variant: 'subtle',
    size: 'md',
    disabled: false,
    error: false,
  },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Select>

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select {...args} value={value} onChange={(event) => setValue(event.target.value)} />
    )
  },
}
