import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, CommandPalette } from '@fluffy/react'

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
  render: (args) => {
    const [open, setOpen] = useState(false)
    const [lastSelected, setLastSelected] = useState('')
    return (
      <div className="space-y-2">
        <Button label="Open command palette (⌘K)" variant="solid" onClick={() => setOpen(true)} />
        <CommandPalette
          {...args}
          open={open}
          onClose={setOpen}
          onSelect={(item) => setLastSelected(item.label)}
        />
        <p className="text-sm text-ink-gray-5">Last action: {lastSelected || 'none'}</p>
      </div>
    )
  },
}
