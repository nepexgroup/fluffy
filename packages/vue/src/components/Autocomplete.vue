<template>
  <HCombobox
    :model-value="selectedOption"
    :disabled="disabled"
    nullable
    as="div"
    :class="cx('relative w-full', $attrs.class as string)"
    @update:model-value="onSelect"
  >
    <div class="relative">
      <HComboboxInput
        :class="[inputVariants({ variant, size, state: error ? 'error' : 'normal' }), 'pr-8']"
        :display-value="(option: unknown) => (option as SelectOption | null)?.label ?? ''"
        :placeholder="placeholder"
        @change="query = $event.target.value"
      />
      <HComboboxButton
        class="absolute inset-y-0 right-0 flex items-center pr-2 text-ink-gray-5"
      >
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
            :class="
              menuItemVariants({ active, selected, disabled: !!option.disabled })
            "
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
import { Check, ChevronsUpDown } from 'lucide-vue-next'

defineOptions({ name: 'FAutocomplete', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    modelValue?: string
    options: SelectOption[]
    placeholder?: string
    variant?: NonNullable<InputVariantProps['variant']>
    size?: NonNullable<InputVariantProps['size']>
    disabled?: boolean
    error?: boolean
  }>(),
  {
    modelValue: '',
    placeholder: 'Search...',
    variant: 'subtle',
    size: 'md',
    disabled: false,
    error: false,
  },
)

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const query = ref('')

const selectedOption = computed(
  () => props.options.find((option) => option.value === props.modelValue) ?? null,
)

const filteredOptions = computed(() => {
  if (!query.value) return props.options
  const q = query.value.toLowerCase()
  return props.options.filter((option) => option.label.toLowerCase().includes(q))
})

function onSelect(option: SelectOption | null) {
  emit('update:modelValue', option?.value ?? '')
}
</script>
