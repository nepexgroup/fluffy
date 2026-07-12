import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { FileUploader } from '@fluffy/vue'

const meta: Meta<typeof FileUploader> = {
  title: 'Advanced/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  args: {
    multiple: true,
    disabled: false,
    hint: 'PNG, JPG or PDF up to 10 MB',
    accept: '',
  },
  decorators: [() => ({ template: '<div class="w-96"><story /></div>' })],
}

export default meta
type Story = StoryObj<typeof FileUploader>

export const Playground: Story = {
  render: (args) => ({
    components: { FileUploader },
    setup() {
      const files = ref<File[]>([
        new File([new ArrayBuffer(153600)], 'design-tokens.pdf'),
        new File([new ArrayBuffer(51200)], 'logo.png'),
      ])
      return { args, files }
    },
    template: `<FileUploader v-bind="args" v-model="files" />`,
  }),
}
