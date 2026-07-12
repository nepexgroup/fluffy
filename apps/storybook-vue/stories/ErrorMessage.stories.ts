import type { Meta, StoryObj } from '@storybook/vue3'
import { ErrorMessage } from '@fluffy/vue'

const meta: Meta<typeof ErrorMessage> = {
  title: 'Foundation/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  args: { message: 'This field is required' },
}

export default meta
type Story = StoryObj<typeof ErrorMessage>

export const Playground: Story = {}
