import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DatePicker } from '@fluffy/vue'

const meta: Meta<typeof DatePicker> = {
  title: 'Advanced/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['subtle', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: {
    placeholder: 'Select date',
    variant: 'subtle',
    size: 'md',
    disabled: false,
    error: false,
  },
  decorators: [() => ({ template: '<div class="h-96 w-64"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Playground: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <div class="space-y-2">
        <DatePicker v-bind="args" v-model="value" />
        <p class="text-sm text-ink-gray-5">Value: {{ value || 'none' }}</p>
      </div>
    `,
  }),
}
