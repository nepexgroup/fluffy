import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FileUploader } from '@fluffy/react'

const meta: Meta<typeof FileUploader> = {
  title: 'Advanced/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  args: {
    multiple: true,
    disabled: false,
    hint: 'PNG, JPG or PDF up to 10 MB',
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof FileUploader>

export const Playground: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([
      new File([new ArrayBuffer(153600)], 'design-tokens.pdf'),
      new File([new ArrayBuffer(51200)], 'logo.png'),
    ])
    return <FileUploader {...args} files={files} onChange={setFiles} />
  },
}
