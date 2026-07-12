import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@fluffy/react'
import { Plus, Settings } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Foundation/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['gray', 'blue', 'green', 'red'] },
    variant: { control: 'select', options: ['solid', 'subtle', 'outline', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', '2xl'] },
  },
  args: {
    label: 'Button',
    theme: 'gray',
    variant: 'subtle',
    size: 'md',
    loading: false,
    disabled: false,
    block: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      {(['gray', 'blue', 'green', 'red'] as const).map((theme) => (
        <div key={theme} className="flex items-center gap-2">
          {(['solid', 'subtle', 'outline', 'ghost'] as const).map((variant) => (
            <Button key={variant} theme={theme} variant={variant} label={variant} />
          ))}
        </div>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-2">
      {(['sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
        <Button key={size} variant="solid" size={size} label={size} />
      ))}
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="solid" label="New document" iconLeft={<Plus className="h-4 w-4" />} />
      <Button variant="outline" label="Settings" iconRight={<Settings className="h-4 w-4" />} />
      <Button variant="subtle" icon={<Plus className="h-4 w-4" />} aria-label="Add" />
      <Button variant="solid" loading label="Saving..." />
    </div>
  ),
}
