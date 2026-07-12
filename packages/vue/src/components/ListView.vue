<template>
  <div :class="cx(listViewClass, $attrs.class as string)">
    <div v-if="selectable && selection.length" :class="listViewSelectionBarClass">
      <span>{{ selection.length }} selected</span>
      <button
        type="button"
        class="text-ink-gray-5 underline-offset-2 hover:underline"
        @click="clearSelection"
      >
        Clear
      </button>
      <slot name="selection-actions" :selection="selection" />
    </div>
    <table :class="listViewTableClass">
      <thead :class="listViewHeadClass">
        <tr>
          <th v-if="selectable" :class="listViewCheckboxCellClass">
            <input
              type="checkbox"
              :class="checkboxVariants({ size: 'md' })"
              :checked="allSelected"
              :indeterminate="someSelected"
              aria-label="Select all"
              @change="toggleAll"
            />
          </th>
          <th
            v-for="column in columns"
            :key="column.key"
            :class="listViewHeaderCellClass"
            :style="column.width ? { width: column.width } : undefined"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="String(row[rowKey])"
          :class="
            listViewRowVariants({
              selected: isSelected(row),
              clickable: rowClickable,
            })
          "
          @click="rowClickable && $emit('row-click', row)"
        >
          <td v-if="selectable" :class="listViewCheckboxCellClass" @click.stop>
            <input
              type="checkbox"
              :class="checkboxVariants({ size: 'md' })"
              :checked="isSelected(row)"
              :aria-label="`Select row ${String(row[rowKey])}`"
              @change="toggleRow(row)"
            />
          </td>
          <td v-for="column in columns" :key="column.key" :class="listViewCellClass">
            <slot :name="`cell-${column.key}`" :row="row" :column="column">
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>
        <tr v-if="rows.length === 0">
          <td :colspan="columns.length + (selectable ? 1 : 0)">
            <div :class="listViewEmptyClass">
              <slot name="empty">No records found</slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  checkboxVariants,
  cx,
  listViewCellClass,
  listViewCheckboxCellClass,
  listViewClass,
  listViewEmptyClass,
  listViewHeadClass,
  listViewHeaderCellClass,
  listViewRowVariants,
  listViewSelectionBarClass,
  listViewTableClass,
  type ListViewColumn,
} from '@fluffy/core'

type Row = Record<string, unknown>

defineOptions({ name: 'FListView', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    columns: ListViewColumn[]
    rows: Row[]
    rowKey?: string
    selectable?: boolean
    selection?: (string | number)[]
    rowClickable?: boolean
  }>(),
  {
    rowKey: 'id',
    selectable: false,
    selection: () => [],
    rowClickable: false,
  },
)

const emit = defineEmits<{
  'update:selection': [keys: (string | number)[]]
  'row-click': [row: Row]
}>()

const allSelected = computed(
  () => props.rows.length > 0 && props.selection.length === props.rows.length,
)
const someSelected = computed(
  () => props.selection.length > 0 && !allSelected.value,
)

function rowId(row: Row): string | number {
  return row[props.rowKey] as string | number
}

function isSelected(row: Row) {
  return props.selection.includes(rowId(row))
}

function toggleRow(row: Row) {
  const id = rowId(row)
  emit(
    'update:selection',
    props.selection.includes(id)
      ? props.selection.filter((key) => key !== id)
      : [...props.selection, id],
  )
}

function toggleAll() {
  emit('update:selection', allSelected.value ? [] : props.rows.map(rowId))
}

function clearSelection() {
  emit('update:selection', [])
}
</script>
