import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@fluffy/react'

const meta: Meta<typeof Badge> = {
  title: 'Foundation/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['gray', 'blue', 'green', 'red', 'amber'] },
    variant: { control: 'select', options: ['solid', 'subtle', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { label: 'Badge', theme: 'gray', variant: 'subtle', size: 'md' },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      {(['solid', 'subtle', 'outline'] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-2">
          {(['gray', 'blue', 'green', 'red', 'amber'] as const).map((theme) => (
            <Badge key={theme} theme={theme} variant={variant} label={theme} />
          ))}
        </div>
      ))}
    </div>
  ),
}
