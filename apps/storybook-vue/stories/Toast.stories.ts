import type { Meta, StoryObj } from '@storybook/vue3'
import { Button, Toasts, toast } from '@fluffy/vue'

const meta: Meta = {
  title: 'Overlays/Toast',
  component: Toasts,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Playground: Story = {
  render: () => ({
    components: { Button, Toasts },
    setup() {
      return {
        info: () =>
          toast({ title: 'Syncing', message: 'Your changes are being saved.' }),
        success: () => toast.success('Invoice sent'),
        warning: () =>
          toast.warning('Low storage', { message: '90% of quota used.' }),
        error: () =>
          toast.error('Upload failed', {
            message: 'Network unreachable.',
            position: 'bottom-center',
          }),
        sticky: () =>
          toast({ title: 'Sticky toast', message: 'Stays until dismissed.', duration: 0 }),
      }
    },
    template: `
      <div class="flex flex-wrap gap-2">
        <Toasts />
        <Button label="Info" @click="info" />
        <Button label="Success" theme="green" variant="subtle" @click="success" />
        <Button label="Warning" @click="warning" />
        <Button label="Error (bottom)" theme="red" variant="subtle" @click="error" />
        <Button label="Sticky" variant="outline" @click="sticky" />
      </div>
    `,
  }),
}
