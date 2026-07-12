import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from '@fluffy/react'

const meta: Meta<typeof Rating> = {
  title: 'Advanced/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: { max: 5, size: 'md', readonly: false },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(3)
    return (
      <div className="space-y-2">
        <Rating {...args} value={value} onChange={setValue} />
        <p className="text-sm text-ink-gray-5">
          {value} / {args.max}
        </p>
      </div>
    )
  },
}

export const Readonly: Story = {
  render: () => <Rating value={4} readonly size="lg" />,
}
