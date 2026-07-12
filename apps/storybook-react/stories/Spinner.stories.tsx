import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '@fluffy/react'

const meta: Meta<typeof Spinner> = {
  title: 'Foundation/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
  args: { size: 'md' },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Playground: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Spinner key={size} size={size} />
      ))}
    </div>
  ),
}
