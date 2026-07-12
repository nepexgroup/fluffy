import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@fluffy/react'
import { Search } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['subtle', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: {
    placeholder: 'Enter your name',
    variant: 'subtle',
    size: 'md',
    disabled: false,
    error: false,
  },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Input>

export const Playground: Story = {}

export const States: Story = {
  render: () => (
    <div className="w-72 space-y-3">
      <Input placeholder="Subtle (default)" />
      <Input variant="outline" placeholder="Outline" />
      <Input placeholder="With icon" iconLeft={<Search />} />
      <Input error defaultValue="Bad value" />
      <Input disabled placeholder="Disabled" />
    </div>
  ),
}
