import type { Meta, StoryObj } from '@storybook/vue3'
import { Input } from '@fluffy/vue'
import { Search } from 'lucide-vue-next'

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['subtle', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: {
    placeholder: 'Enter your name',
    variant: 'subtle',
    size: 'md',
    disabled: false,
    error: false,
  },
  decorators: [() => ({ template: '<div class="w-72"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof Input>

export const Playground: Story = {}

export const States: Story = {
  render: () => ({
    components: { Input, Search },
    template: `
      <div class="w-72 space-y-3">
        <Input placeholder="Subtle (default)" />
        <Input variant="outline" placeholder="Outline" />
        <Input placeholder="With icon">
          <template #prefix><Search /></template>
        </Input>
        <Input error model-value="Bad value" />
        <Input disabled placeholder="Disabled" />
      </div>
    `,
  }),
}
