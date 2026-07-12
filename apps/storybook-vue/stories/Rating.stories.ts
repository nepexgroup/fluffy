import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Rating } from '@fluffy/vue'

const meta: Meta<typeof Rating> = {
  title: 'Advanced/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: { max: 5, size: 'md', readonly: false },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Playground: Story = {
  render: (args) => ({
    components: { Rating },
    setup() {
      const value = ref(3)
      return { args, value }
    },
    template: `
      <div class="space-y-2">
        <Rating v-bind="args" v-model="value" />
        <p class="text-sm text-ink-gray-5">{{ value }} / {{ args.max }}</p>
      </div>
    `,
  }),
}

export const Readonly: Story = {
  render: () => ({
    components: { Rating },
    template: `<Rating :model-value="4" readonly size="lg" />`,
  }),
}
