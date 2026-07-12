import type { Meta, StoryObj } from '@storybook/vue3'
import { Button, Popover } from '@fluffy/vue'

const meta: Meta<typeof Popover> = {
  title: 'Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: { label: 'Open popover', placement: 'left' },
  decorators: [() => ({ template: '<div class="h-64 p-4"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Playground: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup: () => ({ args }),
    template: `
      <Popover v-bind="args" v-slot="{ close }">
        <div class="w-56 space-y-2">
          <p class="text-sm font-medium text-ink-gray-8">Share this document</p>
          <p class="text-sm text-ink-gray-6">Anyone with the link can view.</p>
          <Button label="Copy link" size="sm" variant="solid" @click="close" />
        </div>
      </Popover>
    `,
  }),
}
