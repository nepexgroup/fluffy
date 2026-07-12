import type { Meta, StoryObj } from '@storybook/vue3'
import { Progress } from '@fluffy/vue'

const meta: Meta<typeof Progress> = {
  title: 'Foundation/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    theme: { control: 'select', options: ['gray', 'blue', 'green', 'red', 'amber'] },
    value: { control: { type: 'range', min: 0, max: 100 } },
  },
  args: { value: 60, size: 'md', theme: 'gray', label: 'Uploading', showValue: true },
  decorators: [() => ({ template: '<div class="w-80"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof Progress>

export const Playground: Story = {}

export const Themes: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-80 space-y-4">
        <Progress v-for="(value, theme) in { gray: 20, blue: 40, green: 60, red: 80, amber: 100 }"
          :key="theme" :theme="theme" :value="value" :label="theme" showValue />
      </div>
    `,
  }),
}
