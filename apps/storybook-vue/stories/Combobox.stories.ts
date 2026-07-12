import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Combobox } from '@fluffy/vue'

const meta: Meta<typeof Combobox> = {
  title: 'Advanced/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  args: {
    placeholder: 'Add labels...',
    options: [
      { label: 'Bug', value: 'bug' },
      { label: 'Feature', value: 'feature' },
      { label: 'Docs', value: 'docs' },
      { label: 'Design', value: 'design' },
      { label: 'Performance', value: 'perf' },
    ],
  },
  decorators: [() => ({ template: '<div class="h-72 w-80"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof Combobox>

export const Playground: Story = {
  render: (args) => ({
    components: { Combobox },
    setup() {
      const value = ref(['bug', 'docs'])
      return { args, value }
    },
    template: `
      <div class="space-y-2">
        <Combobox v-bind="args" v-model="value" />
        <p class="text-sm text-ink-gray-5">Selected: {{ value.join(', ') || 'none' }}</p>
      </div>
    `,
  }),
}
