import { Fragment, useState } from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog as HDialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import {
  commandPaletteInputClass,
  commandPaletteInputWrapClass,
  commandPalettePanelClass,
  commandPaletteResultsClass,
  commandPaletteSearchIconClass,
  cx,
  dialogOverlayClass,
  dialogWrapperClass,
  menuEmptyClass,
  menuGroupLabelClass,
  menuItemVariants,
  menuSeparatorClass,
  type CommandItem,
} from '@fluffy/core'
import { Search } from 'lucide-react'

export interface CommandPaletteProps {
  open: boolean
  onClose: (open: boolean) => void
  items: CommandItem[]
  onSelect?: (item: CommandItem) => void
  placeholder?: string
}

export function CommandPalette({
  open,
  onClose,
  items,
  onSelect,
  placeholder = 'Search commands...',
}: CommandPaletteProps) {
  const [query, setQuery] = useState('')

  const filtered = query
    ? items.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords?.toLowerCase().includes(query.toLowerCase()),
      )
    : items

  const groups: { label: string; items: CommandItem[] }[] = []
  for (const item of filtered) {
    const label = item.group ?? ''
    let group = groups.find((candidate) => candidate.label === label)
    if (!group) {
      group = { label, items: [] }
      groups.push(group)
    }
    group.items.push(item)
  }

  return (
    <HDialog
      open={open}
      onClose={() => {
        onClose(false)
        setQuery('')
      }}
      className="relative"
    >
      <DialogBackdrop
        transition
        className={cx(dialogOverlayClass, 'duration-150 ease-out data-[closed]:opacity-0')}
      />
      <div className={dialogWrapperClass}>
        <DialogPanel
          transition
          className={cx(
            commandPalettePanelClass,
            'duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
          )}
        >
          <Combobox
            onChange={(item: CommandItem | null) => {
              if (!item) return
              onSelect?.(item)
              onClose(false)
              setQuery('')
            }}
          >
            <div className={commandPaletteInputWrapClass}>
              <Search className={commandPaletteSearchIconClass} />
              <ComboboxInput
                className={commandPaletteInputClass}
                placeholder={placeholder}
                autoComplete="off"
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <ComboboxOptions static className={commandPaletteResultsClass}>
              {filtered.length === 0 && (
                <div className={menuEmptyClass}>No results for “{query}”</div>
              )}
              {groups.map((group, groupIndex) => (
                <Fragment key={group.label || groupIndex}>
                  {groupIndex > 0 && <div className={menuSeparatorClass} />}
                  {group.label && (
                    <div className={menuGroupLabelClass}>{group.label}</div>
                  )}
                  {group.items.map((item) => (
                    <ComboboxOption
                      key={item.value}
                      value={item}
                      disabled={item.disabled}
                    >
                      {({ focus }) => (
                        <div
                          className={menuItemVariants({
                            active: focus,
                            disabled: !!item.disabled,
                          })}
                        >
                          <span className="flex-1 truncate">{item.label}</span>
                        </div>
                      )}
                    </ComboboxOption>
                  ))}
                </Fragment>
              ))}
            </ComboboxOptions>
          </Combobox>
        </DialogPanel>
      </div>
    </HDialog>
  )
}
