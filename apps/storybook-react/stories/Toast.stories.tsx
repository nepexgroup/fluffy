import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toasts, toast } from '@fluffy/react'

const meta: Meta = {
  title: 'Overlays/Toast',
  component: Toasts,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Playground: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Toasts />
      <Button
        label="Info"
        onClick={() => toast({ title: 'Syncing', message: 'Your changes are being saved.' })}
      />
      <Button
        label="Success"
        theme="green"
        onClick={() => toast.success('Invoice sent')}
      />
      <Button
        label="Warning"
        onClick={() => toast.warning('Low storage', { message: '90% of quota used.' })}
      />
      <Button
        label="Error (bottom)"
        theme="red"
        onClick={() =>
          toast.error('Upload failed', {
            message: 'Network unreachable.',
            position: 'bottom-center',
          })
        }
      />
      <Button
        label="Sticky"
        variant="outline"
        onClick={() =>
          toast({ title: 'Sticky toast', message: 'Stays until dismissed.', duration: 0 })
        }
      />
    </div>
  ),
}
