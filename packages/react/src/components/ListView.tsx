import { useEffect, useRef, type ReactNode } from 'react'
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

export interface ListViewProps {
  columns: ListViewColumn[]
  rows: Row[]
  rowKey?: string
  selectable?: boolean
  selection?: (string | number)[]
  onSelectionChange?: (keys: (string | number)[]) => void
  onRowClick?: (row: Row) => void
  renderCell?: (column: ListViewColumn, row: Row) => ReactNode
  emptyText?: ReactNode
  selectionActions?: ReactNode
  className?: string
}

function HeaderCheckbox({
  checked,
  indeterminate,
  onChange,
}: {
  checked: boolean
  indeterminate: boolean
  onChange: () => void
}) {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate
  }, [indeterminate])
  return (
    <input
      ref={ref}
      type="checkbox"
      className={checkboxVariants({ size: 'md' })}
      checked={checked}
      aria-label="Select all"
      onChange={onChange}
    />
  )
}

export function ListView({
  columns,
  rows,
  rowKey = 'id',
  selectable = false,
  selection = [],
  onSelectionChange,
  onRowClick,
  renderCell,
  emptyText = 'No records found',
  selectionActions,
  className,
}: ListViewProps) {
  const rowId = (row: Row) => row[rowKey] as string | number
  const allSelected = rows.length > 0 && selection.length === rows.length
  const someSelected = selection.length > 0 && !allSelected

  function toggleRow(row: Row) {
    const id = rowId(row)
    onSelectionChange?.(
      selection.includes(id)
        ? selection.filter((key) => key !== id)
        : [...selection, id],
    )
  }

  return (
    <div className={cx(listViewClass, className)}>
      {selectable && selection.length > 0 && (
        <div className={listViewSelectionBarClass}>
          <span>{selection.length} selected</span>
          <button
            type="button"
            className="text-ink-gray-5 underline-offset-2 hover:underline"
            onClick={() => onSelectionChange?.([])}
          >
            Clear
          </button>
          {selectionActions}
        </div>
      )}
      <table className={listViewTableClass}>
        <thead className={listViewHeadClass}>
          <tr>
            {selectable && (
              <th className={listViewCheckboxCellClass}>
                <HeaderCheckbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={() =>
                    onSelectionChange?.(allSelected ? [] : rows.map(rowId))
                  }
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={listViewHeaderCellClass}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={String(rowId(row))}
              className={listViewRowVariants({
                selected: selection.includes(rowId(row)),
                clickable: !!onRowClick,
              })}
              onClick={() => onRowClick?.(row)}
            >
              {selectable && (
                <td
                  className={listViewCheckboxCellClass}
                  onClick={(event) => event.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    className={checkboxVariants({ size: 'md' })}
                    checked={selection.includes(rowId(row))}
                    aria-label={`Select row ${String(rowId(row))}`}
                    onChange={() => toggleRow(row)}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td key={column.key} className={listViewCellClass}>
                  {renderCell?.(column, row) ?? (row[column.key] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)}>
                <div className={listViewEmptyClass}>{emptyText}</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
