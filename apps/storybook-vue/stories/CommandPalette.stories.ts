import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Button, CommandPalette } from '@fluffy/vue'

const items = [
  { label: 'New document', value: 'new-doc', group: 'Create', keywords: 'add file' },
  { label: 'New project', value: 'new-project', group: 'Create' },
  { label: 'Go to settings', value: 'settings', group: 'Navigate' },
  { label: 'Go to dashboard', value: 'dashboard', group: 'Navigate' },
  { label: 'Invite teammate', value: 'invite', group: 'Team' },
  { label: 'Delete workspace', value: 'delete', group: 'Team', disabled: true },
]

const meta: Meta<typeof CommandPalette> = {
  title: 'Advanced/CommandPalette',
  component: CommandPalette,
  tags: ['autodocs'],
  args: { items, placeholder: 'Search commands...' },
}

export default meta
type Story = StoryObj<typeof CommandPalette>

export const Playground: Story = {
  render: (args) => ({
    components: { CommandPalette, Button },
    setup() {
      const open = ref(false)
      const lastSelected = ref('')
      return { args, open, lastSelected }
    },
    template: `
      <div class="space-y-2">
        <Button label="Open command palette (⌘K)" variant="solid" @click="open = true" />
        <CommandPalette v-bind="args" v-model="open" @select="(item) => (lastSelected = item.label)" />
        <p class="text-sm text-ink-gray-5">Last action: {{ lastSelected || 'none' }}</p>
      </div>
    `,
  }),
}
