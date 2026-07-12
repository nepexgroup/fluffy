import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Switch } from '@fluffy/vue'

const meta: Meta<typeof Switch> = {
  title: 'Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { label: 'Enable notifications', size: 'md', disabled: false },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Playground: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const on = ref(true)
      return { args, on }
    },
    template: `<Switch v-bind="args" v-model="on" />`,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const on = ref(true)
      return { on }
    },
    template: `
      <div class="space-y-3">
        <Switch v-model="on" size="sm" label="Small" />
        <Switch v-model="on" size="md" label="Medium" />
        <Switch v-model="on" size="lg" label="Large" />
      </div>
    `,
  }),
}
