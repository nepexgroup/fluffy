import type { Meta, StoryObj } from '@storybook/vue3'
import { Button, Tooltip } from '@fluffy/vue'

const meta: Meta<typeof Tooltip> = {
  title: 'Foundation/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
  args: { text: 'Tooltips explain things', placement: 'top', delay: 200 },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Playground: Story = {
  render: (args) => ({
    components: { Tooltip, Button },
    setup: () => ({ args }),
    template: `
      <div class="p-16">
        <Tooltip v-bind="args">
          <Button label="Hover me" variant="outline" />
        </Tooltip>
      </div>
    `,
  }),
}

export const Placements: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <div class="flex gap-3 p-16">
        <Tooltip v-for="placement in ['top', 'bottom', 'left', 'right']" :key="placement"
          :text="placement" :placement="placement" :delay="0">
          <Button :label="placement" variant="outline" />
        </Tooltip>
      </div>
    `,
  }),
}
