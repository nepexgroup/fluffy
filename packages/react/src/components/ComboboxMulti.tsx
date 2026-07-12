import { useState } from 'react'
import {
  Combobox as HCombobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import {
  cx,
  inputVariants,
  menuEmptyClass,
  menuItemVariants,
  menuPanelClass,
  type InputVariantProps,
  type SelectOption,
} from '@fluffy/core'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import { Badge } from './Badge'

export interface ComboboxProps {
  value?: string[]
  onChange: (value: string[]) => void
  options: SelectOption[]
  placeholder?: string
  variant?: NonNullable<InputVariantProps['variant']>
  size?: NonNullable<InputVariantProps['size']>
  disabled?: boolean
  error?: boolean
  className?: string
}

/** Multi-select combobox with tag-style selected values. */
export function Combobox({
  value = [],
  onChange,
  options,
  placeholder = 'Select options...',
  variant = 'subtle',
  size = 'md',
  disabled = false,
  error = false,
  className,
}: ComboboxProps) {
  const [query, setQuery] = useState('')
  const selectedOptions = options.filter((option) => value.includes(option.value))
  const filtered = query
    ? options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase()),
      )
    : options

  function remove(option: SelectOption) {
    onChange(value.filter((entry) => entry !== option.value))
  }

  return (
    <HCombobox
      multiple
      value={selectedOptions}
      onChange={(next: SelectOption[]) => onChange(next.map((option) => option.value))}
      onClose={() => setQuery('')}
      disabled={disabled}
    >
      <div
        className={cx(
          inputVariants({ variant, size, state: error ? 'error' : 'normal' }),
          'flex h-auto min-h-8 flex-wrap items-center gap-1 py-1',
          className,
        )}
      >
        {selectedOptions.map((option) => (
          <Badge
            key={option.value}
            label={option.label}
            iconRight={
              <button
                type="button"
                className="rounded-full hover:text-ink-gray-9"
                aria-label={`Remove ${option.label}`}
                onClick={(event) => {
                  event.stopPropagation()
                  remove(option)
                }}
              >
                <X className="h-3 w-3" />
              </button>
            }
          />
        ))}
        <ComboboxInput
          className="min-w-20 flex-1 bg-transparent text-base placeholder:text-ink-gray-4 focus:outline-none"
          placeholder={selectedOptions.length ? '' : placeholder}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="ml-auto flex items-center text-ink-gray-5">
          <ChevronsUpDown className="h-4 w-4" />
        </ComboboxButton>
      </div>
      <ComboboxOptions
        transition
        anchor="bottom start"
        className={cx(
          menuPanelClass,
          '[--anchor-gap:6px] w-[var(--input-width)] max-h-60 overflow-auto origin-top transition duration-100 ease-out data-[closed]:opacity-0',
        )}
      >
        {filtered.length === 0 && (
          <div className={menuEmptyClass}>No results found</div>
        )}
        {filtered.map((option) => (
          <ComboboxOption key={option.value} value={option} disabled={option.disabled}>
            {({ focus, selected: isSelected }) => (
              <div
                className={menuItemVariants({
                  active: focus,
                  selected: isSelected,
                  disabled: !!option.disabled,
                })}
              >
                <span className="flex-1 truncate">{option.label}</span>
                {isSelected && <Check className="h-4 w-4 shrink-0" />}
              </div>
            )}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </HCombobox>
  )
}
