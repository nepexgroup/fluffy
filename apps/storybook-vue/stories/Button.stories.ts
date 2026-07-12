import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '@fluffy/vue'
import { Plus, Settings } from 'lucide-vue-next'

const meta: Meta<typeof Button> = {
  title: 'Foundation/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['gray', 'blue', 'green', 'red'] },
    variant: { control: 'select', options: ['solid', 'subtle', 'outline', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', '2xl'] },
  },
  args: {
    label: 'Button',
    theme: 'gray',
    variant: 'subtle',
    size: 'md',
    loading: false,
    disabled: false,
    block: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-3">
        <div v-for="theme in ['gray', 'blue', 'green', 'red']" :key="theme" class="flex items-center gap-2">
          <Button v-for="variant in ['solid', 'subtle', 'outline', 'ghost']" :key="variant"
            :theme="theme" :variant="variant" :label="variant" />
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-end gap-2">
        <Button v-for="size in ['sm', 'md', 'lg', 'xl', '2xl']" :key="size"
          variant="solid" :size="size" :label="size" />
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { Button, Plus, Settings },
    template: `
      <div class="flex items-center gap-2">
        <Button variant="solid" label="New document">
          <template #prefix><Plus class="h-4 w-4" /></template>
        </Button>
        <Button variant="outline" label="Settings">
          <template #suffix><Settings class="h-4 w-4" /></template>
        </Button>
        <Button variant="subtle" aria-label="Add">
          <template #icon><Plus class="h-4 w-4" /></template>
        </Button>
        <Button variant="solid" loading label="Saving..." />
      </div>
    `,
  }),
}
