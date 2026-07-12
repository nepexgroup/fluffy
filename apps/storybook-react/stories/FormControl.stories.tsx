import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormControl, Input, Select, Textarea } from '@fluffy/react'

const meta: Meta<typeof FormControl> = {
  title: 'Forms/FormControl',
  component: FormControl,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    description: 'We never share your email.',
    error: '',
    required: true,
    size: 'md',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof FormControl>

export const Playground: Story = {
  render: (args) => (
    <FormControl {...args}>
      {({ id, error }) => (
        <Input id={id} error={error} placeholder="you@example.com" />
      )}
    </FormControl>
  ),
}

export const FullForm: Story = {
  render: () => {
    const [country, setCountry] = useState('')
    return (
      <div className="w-80 space-y-4">
        <FormControl label="Full name" required>
          {({ id }) => <Input id={id} placeholder="Jane Doe" />}
        </FormControl>
        <FormControl label="Country">
          {({ id }) => (
            <Select
              id={id}
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Choose"
              options={['Nepal', 'India', 'USA']}
            />
          )}
        </FormControl>
        <FormControl label="Bio" description="A short introduction.">
          {({ id }) => <Textarea id={id} placeholder="Tell us about yourself" />}
        </FormControl>
        <FormControl label="Password" error="Password is too short">
          {({ id, error }) => (
            <Input id={id} error={error} type="password" defaultValue="123" />
          )}
        </FormControl>
      </div>
    )
  },
}
