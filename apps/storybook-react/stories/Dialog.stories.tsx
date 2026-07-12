import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Dialog } from '@fluffy/react'

const meta: Meta<typeof Dialog> = {
  title: 'Overlays/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    },
  },
  args: { title: 'Delete project', size: 'lg', dismissable: true },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Button label="Open dialog" variant="solid" onClick={() => setOpen(true)} />
        <Dialog
          {...args}
          open={open}
          onClose={setOpen}
          actions={
            <>
              <Button label="Cancel" variant="outline" onClick={() => setOpen(false)} />
              <Button label="Delete" theme="red" variant="solid" onClick={() => setOpen(false)} />
            </>
          }
        >
          This action cannot be undone. All data associated with the project
          will be permanently removed.
        </Dialog>
      </div>
    )
  },
}
