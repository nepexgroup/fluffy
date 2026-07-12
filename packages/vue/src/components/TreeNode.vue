<template>
  <div>
    <button
      type="button"
      :class="treeNodeRowVariants({ selected: node.value === selected, disabled: !!node.disabled })"
      :disabled="node.disabled"
      @click="onClick"
    >
      <span :class="treeToggleVariants({ expanded, leaf: !hasChildren })">
        <ChevronRight class="h-3.5 w-3.5" />
      </span>
      <Folder v-if="hasChildren" class="h-4 w-4 shrink-0 text-ink-gray-5" />
      <FileIcon v-else class="h-4 w-4 shrink-0 text-ink-gray-5" />
      <span class="truncate">{{ node.label }}</span>
    </button>
    <div v-if="hasChildren && expanded" :class="treeChildrenClass">
      <TreeNode
        v-for="child in node.children"
        :key="child.value"
        :node="child"
        :selected="selected"
        :expanded-values="expandedValues"
        @select="$emit('select', $event)"
        @toggle="$emit('toggle', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  treeChildrenClass,
  treeNodeRowVariants,
  treeToggleVariants,
  type TreeNode as TreeNodeData,
} from '@fluffy/core'
import { ChevronRight, File as FileIcon, Folder } from 'lucide-vue-next'

defineOptions({ name: 'FTreeNode' })

const props = defineProps<{
  node: TreeNodeData
  selected: string
  expandedValues: string[]
}>()

const emit = defineEmits<{ select: [value: string]; toggle: [value: string] }>()

const hasChildren = computed(() => !!props.node.children?.length)
const expanded = computed(() => props.expandedValues.includes(props.node.value))

function onClick() {
  if (hasChildren.value) emit('toggle', props.node.value)
  emit('select', props.node.value)
}
</script>
