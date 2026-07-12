import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip } from '@fluffy/react'

const meta: Meta<typeof Tooltip> = {
  title: 'Foundation/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
  args: { text: 'Tooltips explain things', placement: 'top', delay: 200 },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Playground: Story = {
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Button label="Hover me" variant="outline" />
      </Tooltip>
    </div>
  ),
}

export const Placements: Story = {
  render: () => (
    <div className="flex gap-3 p-16">
      {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
        <Tooltip key={placement} text={placement} placement={placement} delay={0}>
          <Button label={placement} variant="outline" />
        </Tooltip>
      ))}
    </div>
  ),
}
