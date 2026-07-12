import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tree } from '@fluffy/react'

const nodes = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
          { label: 'Dialog.tsx', value: 'src/components/Dialog.tsx' },
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
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Tree>

export const Playground: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('src/index.ts')
    return (
      <div className="space-y-2">
        <Tree {...args} value={selected} onChange={setSelected} />
        <p className="text-sm text-ink-gray-5">Selected: {selected || 'none'}</p>
      </div>
    )
  },
}
