import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Tree } from '@fluffy/vue'

const nodes = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Button.vue', value: 'src/components/Button.vue' },
          { label: 'Dialog.vue', value: 'src/components/Dialog.vue' },
        ],
      },
      { label: 'index.ts', value: 'src/index.ts' },
    ],
  },
  {
    label: 'docs',
    value: 'docs',
    children: [{ label: 'README.md', value: 'docs/README.md' }],
  },
  { label: 'package.json', value: 'package.json' },
]

const meta: Meta<typeof Tree> = {
  title: 'Advanced/Tree',
  component: Tree,
  tags: ['autodocs'],
  args: { nodes, defaultExpanded: ['src', 'src/components'] },
  decorators: [() => ({ template: '<div class="w-72"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof Tree>

export const Playground: Story = {
  render: (args) => ({
    components: { Tree },
    setup() {
      const selected = ref('src/index.ts')
      return { args, selected }
    },
    template: `
      <div class="space-y-2">
        <Tree v-bind="args" v-model="selected" />
        <p class="text-sm text-ink-gray-5">Selected: {{ selected || 'none' }}</p>
      </div>
    `,
  }),
}
