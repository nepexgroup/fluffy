import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Select } from '@fluffy/vue'

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['subtle', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: {
    placeholder: 'Pick a fruit',
    options: ['Apple', 'Banana', 'Mango', 'Orange'],
    variant: 'subtle',
    size: 'md',
    disabled: false,
    error: false,
  },
  decorators: [() => ({ template: '<div class="w-72"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof Select>

export const Playground: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `<Select v-bind="args" v-model="value" />`,
  }),
}
