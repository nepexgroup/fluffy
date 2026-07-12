import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Autocomplete } from '@fluffy/vue'

const meta: Meta<typeof Autocomplete> = {
  title: 'Advanced/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  args: {
    placeholder: 'Search a country...',
    options: [
      { label: 'Nepal', value: 'np' },
      { label: 'India', value: 'in' },
      { label: 'United States', value: 'us' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Germany', value: 'de' },
      { label: 'Japan', value: 'jp' },
      { label: 'Australia', value: 'au', disabled: true },
    ],
  },
  decorators: [() => ({ template: '<div class="h-72 w-72"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof Autocomplete>

export const Playground: Story = {
  render: (args) => ({
    components: { Autocomplete },
    setup() {
      const value = ref('np')
      return { args, value }
    },
    template: `
      <div class="space-y-2">
        <Autocomplete v-bind="args" v-model="value" />
        <p class="text-sm text-ink-gray-5">Selected: {{ value || 'none' }}</p>
      </div>
    `,
  }),
}
