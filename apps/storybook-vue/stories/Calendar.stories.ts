import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Calendar } from '@fluffy/vue'

const meta: Meta<typeof Calendar> = {
  title: 'Advanced/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Playground: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const value = ref('2026-07-12')
      return { value }
    },
    template: `
      <div class="space-y-2">
        <Calendar v-model="value" />
        <p class="text-sm text-ink-gray-5">Selected: {{ value || 'none' }}</p>
      </div>
    `,
  }),
}
