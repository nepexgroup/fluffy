import { useState } from 'react'
import {
  cx,
  treeChildrenClass,
  treeClass,
  treeNodeRowVariants,
  treeToggleVariants,
  type TreeNode as TreeNodeData,
} from '@fluffy/core'
import { ChevronRight, File as FileIcon, Folder } from 'lucide-react'

export interface TreeProps {
  nodes: TreeNodeData[]
  value?: string
  onChange?: (value: string) => void
  defaultExpanded?: string[]
  className?: string
}

function TreeNodeItem({
  node,
  selected,
  expandedValues,
  onSelect,
  onToggle,
}: {
  node: TreeNodeData
  selected: string
  expandedValues: string[]
  onSelect: (value: string) => void
  onToggle: (value: string) => void
}) {
  const hasChildren = !!node.children?.length
  const expanded = expandedValues.includes(node.value)
  return (
    <div>
      <button
        type="button"
        className={treeNodeRowVariants({
          selected: node.value === selected,
          disabled: !!node.disabled,
        })}
        disabled={node.disabled}
        onClick={() => {
          if (hasChildren) onToggle(node.value)
          onSelect(node.value)
        }}
      >
        <span className={treeToggleVariants({ expanded, leaf: !hasChildren })}>
          <ChevronRight className="h-3.5 w-3.5" />
        </span>
        {hasChildren ? (
          <Folder className="h-4 w-4 shrink-0 text-ink-gray-5" />
        ) : (
          <FileIcon className="h-4 w-4 shrink-0 text-ink-gray-5" />
        )}
        <span className="truncate">{node.label}</span>
      </button>
      {hasChildren && expanded && (
        <div className={treeChildrenClass}>
          {node.children!.map((child) => (
            <TreeNodeItem
              key={child.value}
              node={child}
              selected={selected}
              expandedValues={expandedValues}
              onSelect={onSelect}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function Tree({
  nodes,
  value = '',
  onChange,
  defaultExpanded = [],
  className,
}: TreeProps) {
  const [expandedValues, setExpandedValues] = useState<string[]>(defaultExpanded)

  function toggle(nodeValue: string) {
    setExpandedValues((current) =>
      current.includes(nodeValue)
        ? current.filter((expanded) => expanded !== nodeValue)
        : [...current, nodeValue],
    )
  }

  return (
    <div className={cx(treeClass, className)} role="tree">
      {nodes.map((node) => (
        <TreeNodeItem
          key={node.value}
          node={node}
          selected={value}
          expandedValues={expandedValues}
          onSelect={(next) => onChange?.(next)}
          onToggle={toggle}
        />
      ))}
    </div>
  )
}
