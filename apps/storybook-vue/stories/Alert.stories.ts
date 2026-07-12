import type { Meta, StoryObj } from '@storybook/vue3'
import { Alert } from '@fluffy/vue'

const meta: Meta<typeof Alert> = {
  title: 'Foundation/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['gray', 'info', 'success', 'warning', 'danger'] },
  },
  args: { theme: 'info', title: 'Heads up', dismissible: false },
  decorators: [() => ({ template: '<div class="w-96"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Playground: Story = {
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: `<Alert v-bind="args">Your trial ends in 7 days. Upgrade to keep your data.</Alert>`,
  }),
}

export const Themes: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="w-96 space-y-3">
        <Alert theme="gray" title="Announcement">A new version is available.</Alert>
        <Alert theme="info" title="Information">Sync runs every 15 minutes.</Alert>
        <Alert theme="success" title="Payment received">Invoice #1042 has been settled.</Alert>
        <Alert theme="warning" title="Storage almost full">You have used 90% of your quota.</Alert>
        <Alert theme="danger" title="Sync failed" dismissible>Could not reach the server.</Alert>
      </div>
    `,
  }),
}
