import type { Meta, StoryObj } from '@storybook/vue3'
import { Spinner } from '@fluffy/vue'

const meta: Meta<typeof Spinner> = {
  title: 'Foundation/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
  args: { size: 'md' },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Playground: Story = {}

export const Sizes: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-end gap-3">
        <Spinner v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size" :size="size" />
      </div>
    `,
  }),
}
