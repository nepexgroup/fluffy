import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '@fluffy/react'

const meta: Meta<typeof Divider> = {
  title: 'Foundation/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant: { control: 'select', options: ['solid', 'dashed', 'dotted'] },
  },
  args: { orientation: 'horizontal', variant: 'solid' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Divider>

export const Playground: Story = {}

export const Examples: Story = {
  render: () => (
    <div className="w-80 space-y-6 text-base text-ink-gray-7">
      <div>
        Above
        <Divider className="my-3" />
        Below
      </div>
      <Divider variant="dashed" />
      <Divider label="OR" />
      <div className="flex h-8 items-center gap-3">
        Left
        <Divider orientation="vertical" />
        Right
      </div>
    </div>
  ),
}
