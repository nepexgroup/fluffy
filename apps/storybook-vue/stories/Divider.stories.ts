import type { Meta, StoryObj } from '@storybook/vue3'
import { Divider } from '@fluffy/vue'

const meta: Meta<typeof Divider> = {
  title: 'Foundation/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant: { control: 'select', options: ['solid', 'dashed', 'dotted'] },
  },
  args: { orientation: 'horizontal', variant: 'solid', label: '' },
  decorators: [() => ({ template: '<div class="w-80"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof Divider>

export const Playground: Story = {}

export const Examples: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div class="w-80 space-y-6 text-base text-ink-gray-7">
        <div>Above<Divider class="my-3" />Below</div>
        <Divider variant="dashed" />
        <Divider label="OR" />
        <div class="flex h-8 items-center gap-3">
          Left<Divider orientation="vertical" />Right
        </div>
      </div>
    `,
  }),
}
