import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@fluffy/react'

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { label: 'Accept terms and conditions', size: 'md', disabled: false },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true)
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />
    )
  },
}
