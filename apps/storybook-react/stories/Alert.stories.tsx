import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '@fluffy/react'

const meta: Meta<typeof Alert> = {
  title: 'Foundation/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['gray', 'info', 'success', 'warning', 'danger'] },
  },
  args: { theme: 'info', title: 'Heads up', dismissible: false },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Playground: Story = {
  render: (args) => (
    <Alert {...args}>Your trial ends in 7 days. Upgrade to keep your data.</Alert>
  ),
}

export const Themes: Story = {
  render: () => (
    <div className="w-96 space-y-3">
      <Alert theme="gray" title="Announcement">A new version is available.</Alert>
      <Alert theme="info" title="Information">Sync runs every 15 minutes.</Alert>
      <Alert theme="success" title="Payment received">Invoice #1042 has been settled.</Alert>
      <Alert theme="warning" title="Storage almost full">You have used 90% of your quota.</Alert>
      <Alert theme="danger" title="Sync failed" dismissible>Could not reach the server.</Alert>
    </div>
  ),
}
