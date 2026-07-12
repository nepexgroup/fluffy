import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from '@fluffy/react'

const meta: Meta<typeof Dropdown> = {
  title: 'Overlays/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    label: 'Actions',
    placement: 'left',
    options: [
      { label: 'Edit', onClick: () => console.log('edit') },
      { label: 'Duplicate', onClick: () => console.log('duplicate') },
      { label: 'Archive', onClick: () => console.log('archive') },
      { label: 'Delete', danger: true, onClick: () => console.log('delete') },
    ],
  },
  decorators: [(Story) => <div className="h-64 p-4"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Playground: Story = {}

export const Grouped: Story = {
  args: {
    label: 'File',
    options: [
      {
        label: 'Document',
        items: [{ label: 'New document' }, { label: 'Open recent' }],
      },
      {
        label: 'Danger zone',
        items: [
          { label: 'Move to trash', danger: true },
          { label: 'Delete forever', danger: true, disabled: true },
        ],
      },
    ],
  },
}
