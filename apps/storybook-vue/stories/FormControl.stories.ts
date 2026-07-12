import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { FormControl, Input, Select, Textarea } from '@fluffy/vue'

const meta: Meta<typeof FormControl> = {
  title: 'Forms/FormControl',
  component: FormControl,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    description: 'We never share your email.',
    error: '',
    required: true,
    size: 'md',
  },
  decorators: [() => ({ template: '<div class="w-80"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof FormControl>

export const Playground: Story = {
  render: (args) => ({
    components: { FormControl, Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <FormControl v-bind="args" v-slot="{ id, error }">
        <Input :id="id" :error="error" v-model="value" placeholder="you@example.com" />
      </FormControl>
    `,
  }),
}

export const FullForm: Story = {
  render: () => ({
    components: { FormControl, Input, Select, Textarea },
    setup() {
      const name = ref('')
      const country = ref('')
      const bio = ref('')
      return { name, country, bio }
    },
    template: `
      <div class="w-80 space-y-4">
        <FormControl label="Full name" required v-slot="{ id }">
          <Input :id="id" v-model="name" placeholder="Jane Doe" />
        </FormControl>
        <FormControl label="Country" v-slot="{ id }">
          <Select :id="id" v-model="country" placeholder="Choose"
            :options="['Nepal', 'India', 'USA']" />
        </FormControl>
        <FormControl label="Bio" description="A short introduction." v-slot="{ id }">
          <Textarea :id="id" v-model="bio" placeholder="Tell us about yourself" />
        </FormControl>
        <FormControl label="Password" error="Password is too short" v-slot="{ id, error }">
          <Input :id="id" :error="error" type="password" model-value="123" />
        </FormControl>
      </div>
    `,
  }),
}
