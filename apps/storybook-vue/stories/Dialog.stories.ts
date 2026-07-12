import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Button, Dialog } from '@fluffy/vue'

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
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <Button label="Open dialog" variant="solid" @click="open = true" />
        <Dialog v-bind="args" v-model="open">
          This action cannot be undone. All data associated with the project
          will be permanently removed.
          <template #actions="{ close }">
            <Button label="Cancel" variant="outline" @click="close" />
            <Button label="Delete" theme="red" variant="solid" @click="close" />
          </template>
        </Dialog>
      </div>
    `,
  }),
}
