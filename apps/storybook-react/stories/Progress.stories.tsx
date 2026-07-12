import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from '@fluffy/react'

const meta: Meta<typeof Progress> = {
  title: 'Foundation/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    theme: { control: 'select', options: ['gray', 'blue', 'green', 'red', 'amber'] },
    value: { control: { type: 'range', min: 0, max: 100 } },
  },
  args: { value: 60, size: 'md', theme: 'gray', label: 'Uploading', showValue: true },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Progress>

export const Playground: Story = {}

export const Themes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      {(
        [
          ['gray', 20],
          ['blue', 40],
          ['green', 60],
          ['red', 80],
          ['amber', 100],
        ] as const
      ).map(([theme, value]) => (
        <Progress key={theme} theme={theme} value={value} label={theme} showValue />
      ))}
    </div>
  ),
}
