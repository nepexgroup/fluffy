<template>
  <HCombobox
    :model-value="selectedOptions"
    multiple
    :disabled="disabled"
    as="div"
    :class="cx('relative w-full', $attrs.class as string)"
    @update:model-value="onSelect"
  >
    <div
      :class="[
        inputVariants({ variant, size, state: error ? 'error' : 'normal' }),
        'flex h-auto min-h-8 flex-wrap items-center gap-1 py-1',
      ]"
    >
      <Badge
        v-for="option in selectedOptions"
        :key="option.value"
        :label="option.label"
        size="md"
      >
        <template #suffix>
          <button
            type="button"
            class="rounded-full hover:text-ink-gray-9"
            :aria-label="`Remove ${option.label}`"
            @click.stop="remove(option)"
          >
            <X class="h-3 w-3" />
          </button>
        </template>
      </Badge>
      <HComboboxInput
        class="min-w-20 flex-1 bg-transparent text-base focus:outline-none placeholder:text-ink-gray-4"
        :placeholder="selectedOptions.length ? '' : placeholder"
        @change="query = $event.target.value"
      />
      <HComboboxButton class="ml-auto flex items-center text-ink-gray-5">
        <ChevronsUpDown class="h-4 w-4" />
      </HComboboxButton>
    </div>
    <transition
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      @after-leave="query = ''"
    >
      <HComboboxOptions
        :class="[menuPanelClass, 'absolute z-50 mt-1.5 max-h-60 w-full overflow-auto']"
      >
        <div v-if="filteredOptions.length === 0" :class="menuEmptyClass">
          No results found
        </div>
        <HComboboxOption
          v-for="option in filteredOptions"
          :key="option.value"
          v-slot="{ active, selected }"
          :value="option"
          :disabled="option.disabled"
          as="template"
        >
          <li
            :class="menuItemVariants({ active, selected, disabled: !!option.disabled })"
          >
            <span class="flex-1 truncate">{{ option.label }}</span>
            <Check v-if="selected" class="h-4 w-4 shrink-0" />
          </li>
        </HComboboxOption>
      </HComboboxOptions>
    </transition>
  </HCombobox>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Combobox as HCombobox,
  ComboboxButton as HComboboxButton,
  ComboboxInput as HComboboxInput,
  ComboboxOption as HComboboxOption,
  ComboboxOptions as HComboboxOptions,
} from '@headlessui/vue'
import {
  cx,
  inputVariants,
  menuEmptyClass,
  menuItemVariants,
  menuPanelClass,
  type InputVariantProps,
  type SelectOption,
} from '@fluffy/core'
import { Check, ChevronsUpDown, X } from 'lucide-vue-next'
import Badge from './Badge.vue'

defineOptions({ name: 'FCombobox', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    modelValue?: string[]
    options: SelectOption[]
    placeholder?: string
    variant?: NonNullable<InputVariantProps['variant']>
    size?: NonNullable<InputVariantProps['size']>
    disabled?: boolean
    error?: boolean
  }>(),
  {
    modelValue: () => [],
    placeholder: 'Select options...',
    variant: 'subtle',
    size: 'md',
    disabled: false,
    error: false,
  },
)

const emit = defineEmits<{ 'update:modelValue': [value: string[]] }>()

const query = ref('')

const selectedOptions = computed(() =>
  props.options.filter((option) => props.modelValue.includes(option.value)),
)

const filteredOptions = computed(() => {
  if (!query.value) return props.options
  const q = query.value.toLowerCase()
  return props.options.filter((option) => option.label.toLowerCase().includes(q))
})

function onSelect(options: SelectOption[]) {
  emit(
    'update:modelValue',
    options.map((option) => option.value),
  )
}

function remove(option: SelectOption) {
  emit(
    'update:modelValue',
    props.modelValue.filter((value) => value !== option.value),
  )
}
</script>
