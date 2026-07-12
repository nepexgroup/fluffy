import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Badge, Button, ListView } from '@fluffy/vue'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role', width: '120px' },
  { key: 'status', label: 'Status', width: '110px' },
]

const rows = [
  { id: 1, name: 'Sandesh Rana', email: 'sandesh@nepexgroup.com', role: 'Owner', status: 'Active' },
  { id: 2, name: 'Asha Gurung', email: 'asha@nepexgroup.com', role: 'Admin', status: 'Active' },
  { id: 3, name: 'Bikram Thapa', email: 'bikram@nepexgroup.com', role: 'Editor', status: 'Invited' },
  { id: 4, name: 'Maya Shrestha', email: 'maya@nepexgroup.com', role: 'Viewer', status: 'Disabled' },
]

const meta: Meta<typeof ListView> = {
  title: 'Advanced/ListView',
  component: ListView,
  tags: ['autodocs'],
  args: { columns, rows, selectable: true, rowClickable: true },
  decorators: [() => ({ template: '<div class="w-[42rem]"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof ListView>

export const Playground: Story = {
  render: (args) => ({
    components: { ListView, Badge, Button },
    setup() {
      const selection = ref<(string | number)[]>([2])
      return { args, selection }
    },
    template: `
      <ListView v-bind="args" v-model:selection="selection" @row-click="(row) => console.log(row)">
        <template #cell-status="{ row }">
          <Badge :label="row.status"
            :theme="row.status === 'Active' ? 'green' : row.status === 'Invited' ? 'blue' : 'gray'" />
        </template>
        <template #selection-actions>
          <Button label="Delete" theme="red" variant="subtle" size="sm" />
        </template>
      </ListView>
    `,
  }),
}

export const Empty: Story = {
  args: { rows: [], selectable: false },
}
