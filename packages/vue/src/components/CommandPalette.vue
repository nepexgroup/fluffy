<template>
  <TransitionRoot :show="modelValue" as="template" @after-leave="query = ''">
    <HDialog class="relative" @close="$emit('update:modelValue', false)">
      <TransitionChild
        as="template"
        enter="duration-150 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-100 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div :class="dialogOverlayClass" aria-hidden="true" />
      </TransitionChild>
      <div :class="dialogWrapperClass">
        <TransitionChild
          as="template"
          enter="duration-150 ease-out"
          enter-from="scale-95 opacity-0"
          enter-to="scale-100 opacity-100"
          leave="duration-100 ease-in"
          leave-from="scale-100 opacity-100"
          leave-to="scale-95 opacity-0"
        >
          <HDialogPanel :class="commandPalettePanelClass">
            <HCombobox nullable @update:model-value="onSelect">
              <div :class="commandPaletteInputWrapClass">
                <Search :class="commandPaletteSearchIconClass" />
                <HComboboxInput
                  :class="commandPaletteInputClass"
                  :placeholder="placeholder"
                  autocomplete="off"
                  @change="query = $event.target.value"
                />
              </div>
              <HComboboxOptions static :class="commandPaletteResultsClass">
                <div v-if="filteredItems.length === 0" :class="menuEmptyClass">
                  No results for “{{ query }}”
                </div>
                <template v-for="(group, groupIndex) in groupedItems" :key="group.label">
                  <div v-if="groupIndex > 0" :class="menuSeparatorClass" />
                  <div v-if="group.label" :class="menuGroupLabelClass">
                    {{ group.label }}
                  </div>
                  <HComboboxOption
                    v-for="item in group.items"
                    :key="item.value"
                    v-slot="{ active }"
                    :value="item"
                    :disabled="item.disabled"
                    as="template"
                  >
                    <li :class="menuItemVariants({ active, disabled: !!item.disabled })">
                      <span class="flex-1 truncate">{{ item.label }}</span>
                    </li>
                  </HComboboxOption>
                </template>
              </HComboboxOptions>
            </HCombobox>
          </HDialogPanel>
        </TransitionChild>
      </div>
    </HDialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Combobox as HCombobox,
  ComboboxInput as HComboboxInput,
  ComboboxOption as HComboboxOption,
  ComboboxOptions as HComboboxOptions,
  Dialog as HDialog,
  DialogPanel as HDialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  commandPaletteInputClass,
  commandPaletteInputWrapClass,
  commandPalettePanelClass,
  commandPaletteResultsClass,
  commandPaletteSearchIconClass,
  dialogOverlayClass,
  dialogWrapperClass,
  menuEmptyClass,
  menuGroupLabelClass,
  menuItemVariants,
  menuSeparatorClass,
  type CommandItem,
} from '@fluffy/core'
import { Search } from 'lucide-vue-next'

defineOptions({ name: 'FCommandPalette' })

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    items: CommandItem[]
    placeholder?: string
  }>(),
  { placeholder: 'Search commands...' },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  select: [item: CommandItem]
}>()

const query = ref('')

const filteredItems = computed(() => {
  if (!query.value) return props.items
  const q = query.value.toLowerCase()
  return props.items.filter(
    (item) =>
      item.label.toLowerCase().includes(q) ||
      item.keywords?.toLowerCase().includes(q),
  )
})

const groupedItems = computed(() => {
  const groups: { label: string; items: CommandItem[] }[] = []
  for (const item of filteredItems.value) {
    const label = item.group ?? ''
    let group = groups.find((candidate) => candidate.label === label)
    if (!group) {
      group = { label, items: [] }
      groups.push(group)
    }
    group.items.push(item)
  }
  return groups
})

function onSelect(item: CommandItem | null) {
  if (!item) return
  emit('select', item)
  emit('update:modelValue', false)
}
</script>
