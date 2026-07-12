import type { Meta, StoryObj } from '@storybook/vue3'
import { Dropdown } from '@fluffy/vue'

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
  decorators: [() => ({ template: '<div class="h-64 p-4"><story /></div>' })],
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
        items: [
          { label: 'New document' },
          { label: 'Open recent' },
        ],
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
