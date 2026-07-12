import type { Meta, StoryObj } from '@storybook/react'
import { Button, Popover } from '@fluffy/react'

const meta: Meta<typeof Popover> = {
  title: 'Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: { label: 'Open popover', placement: 'left' },
  decorators: [(Story) => <div className="h-64 p-4"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Playground: Story = {
  render: (args) => (
    <Popover {...args}>
      {({ close }) => (
        <div className="w-56 space-y-2">
          <p className="text-sm font-medium text-ink-gray-8">Share this document</p>
          <p className="text-sm text-ink-gray-6">Anyone with the link can view.</p>
          <Button label="Copy link" size="sm" variant="solid" onClick={close} />
        </div>
      )}
    </Popover>
  ),
}
