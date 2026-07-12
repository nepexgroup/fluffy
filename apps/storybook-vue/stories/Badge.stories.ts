import type { Meta, StoryObj } from '@storybook/vue3'
import { Badge } from '@fluffy/vue'

const meta: Meta<typeof Badge> = {
  title: 'Foundation/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['gray', 'blue', 'green', 'red', 'amber'] },
    variant: { control: 'select', options: ['solid', 'subtle', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { label: 'Badge', theme: 'gray', variant: 'subtle', size: 'md' },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="space-y-3">
        <div v-for="variant in ['solid', 'subtle', 'outline']" :key="variant" class="flex items-center gap-2">
          <Badge v-for="theme in ['gray', 'blue', 'green', 'red', 'amber']" :key="theme"
            :theme="theme" :variant="variant" :label="theme" />
        </div>
      </div>
    `,
  }),
}
