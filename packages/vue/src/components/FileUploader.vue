<template>
  <div :class="$attrs.class as string">
    <button
      type="button"
      :class="dropzoneVariants({ active: dragActive, disabled })"
      :disabled="disabled"
      @click="fileInput?.click()"
      @dragover.prevent="dragActive = true"
      @dragleave.prevent="dragActive = false"
      @drop.prevent="onDrop"
    >
      <Upload :class="dropzoneIconClass" />
      <span :class="dropzoneTitleClass">
        <slot>Click to upload or drag and drop</slot>
      </span>
      <span v-if="hint" :class="dropzoneHintClass">{{ hint }}</span>
    </button>
    <input
      ref="fileInput"
      type="file"
      class="hidden"
      :accept="accept"
      :multiple="multiple"
      @change="onPick"
    />
    <ul v-if="modelValue.length" class="mt-2 space-y-1.5">
      <li v-for="(file, index) in modelValue" :key="`${file.name}-${index}`" :class="fileRowClass">
        <FileIcon :class="fileRowIconClass" />
        <span :class="fileRowNameClass">{{ file.name }}</span>
        <span :class="fileRowSizeClass">{{ fileSize(file.size) }}</span>
        <button
          type="button"
          :class="fileRowRemoveClass"
          :aria-label="`Remove ${file.name}`"
          @click="remove(index)"
        >
          <Trash2 class="h-3.5 w-3.5" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  dropzoneHintClass,
  dropzoneIconClass,
  dropzoneTitleClass,
  dropzoneVariants,
  fileRowClass,
  fileRowIconClass,
  fileRowNameClass,
  fileRowRemoveClass,
  fileRowSizeClass,
  fileSize,
} from '@fluffy/core'
import { File as FileIcon, Trash2, Upload } from 'lucide-vue-next'

defineOptions({ name: 'FFileUploader', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    modelValue?: File[]
    accept?: string
    multiple?: boolean
    disabled?: boolean
    hint?: string
  }>(),
  {
    modelValue: () => [],
    accept: '',
    multiple: false,
    disabled: false,
    hint: '',
  },
)

const emit = defineEmits<{ 'update:modelValue': [files: File[]] }>()

const fileInput = ref<HTMLInputElement | null>(null)
const dragActive = ref(false)

function addFiles(files: FileList | null) {
  if (!files?.length) return
  const incoming = Array.from(files)
  emit('update:modelValue', props.multiple ? [...props.modelValue, ...incoming] : incoming.slice(0, 1))
}

function onPick(event: Event) {
  addFiles((event.target as HTMLInputElement).files)
  if (fileInput.value) fileInput.value.value = ''
}

function onDrop(event: DragEvent) {
  dragActive.value = false
  if (props.disabled) return
  addFiles(event.dataTransfer?.files ?? null)
}

function remove(index: number) {
  const next = [...props.modelValue]
  next.splice(index, 1)
  emit('update:modelValue', next)
}
</script>
