import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge, Button, ListView } from '@fluffy/react'

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
  args: { columns, rows, selectable: true },
  decorators: [(Story) => <div className="w-[42rem]"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof ListView>

export const Playground: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<(string | number)[]>([2])
    return (
      <ListView
        {...args}
        selection={selection}
        onSelectionChange={setSelection}
        onRowClick={(row) => console.log(row)}
        renderCell={(column, row) => {
          if (column.key === 'status') {
            const status = row.status as string
            return (
              <Badge
                label={status}
                theme={status === 'Active' ? 'green' : status === 'Invited' ? 'blue' : 'gray'}
              />
            )
          }
          return row[column.key] as string
        }}
        selectionActions={<Button label="Delete" theme="red" variant="subtle" size="sm" />}
      />
    )
  },
}

export const Empty: Story = {
  args: { rows: [], selectable: false },
}
