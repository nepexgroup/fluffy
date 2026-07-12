import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Tabs } from '@fluffy/vue'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['underline', 'pill'] },
  },
  args: {
    variant: 'underline',
    tabs: [
      { label: 'Overview', value: 'overview' },
      { label: 'Activity', value: 'activity' },
      { label: 'Settings', value: 'settings' },
      { label: 'Billing', value: 'billing', disabled: true },
    ],
  },
  decorators: [() => ({ template: '<div class="w-96"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Playground: Story = {
  render: (args) => ({
    components: { Tabs },
    setup() {
      const active = ref('overview')
      return { args, active }
    },
    template: `
      <Tabs v-bind="args" v-model="active" v-slot="{ value }">
        <p class="text-base text-ink-gray-6">Content of the <b class="text-ink-gray-8">{{ value }}</b> tab.</p>
      </Tabs>
    `,
  }),
}

export const Pill: Story = {
  ...Playground,
  args: { variant: 'pill' },
}
