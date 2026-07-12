import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Checkbox } from '@fluffy/vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { label: 'Accept terms and conditions', size: 'md', disabled: false },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Playground: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true)
      return { args, checked }
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
}
