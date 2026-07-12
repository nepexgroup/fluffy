import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@fluffy/react'

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['subtle', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: {
    placeholder: 'Write a description...',
    variant: 'subtle',
    size: 'md',
    rows: 3,
    disabled: false,
    error: false,
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Playground: Story = {}
