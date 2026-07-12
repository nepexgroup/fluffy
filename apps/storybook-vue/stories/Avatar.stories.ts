import type { Meta, StoryObj } from '@storybook/vue3'
import { Avatar } from '@fluffy/vue'

const meta: Meta<typeof Avatar> = {
  title: 'Foundation/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] },
    shape: { control: 'select', options: ['circle', 'square'] },
    indicator: { control: 'select', options: [null, 'gray', 'green', 'red', 'amber', 'blue'] },
  },
  args: {
    label: 'Sandesh Rana',
    image: 'https://i.pravatar.cc/128?img=13',
    size: 'xl',
    shape: 'circle',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Playground: Story = {}

export const SizesAndFallback: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-end gap-2">
          <Avatar v-for="size in ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']" :key="size"
            :size="size" image="https://i.pravatar.cc/128?img=32" label="Jane Doe" />
        </div>
        <div class="flex items-end gap-2">
          <Avatar v-for="size in ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']" :key="size"
            :size="size" label="Jane Doe" shape="square" />
        </div>
        <div class="flex items-end gap-2">
          <Avatar size="2xl" image="https://i.pravatar.cc/128?img=5" label="Online" indicator="green" />
          <Avatar size="2xl" image="https://i.pravatar.cc/128?img=8" label="Busy" indicator="red" />
          <Avatar size="2xl" label="Away" indicator="amber" />
        </div>
      </div>
    `,
  }),
}
