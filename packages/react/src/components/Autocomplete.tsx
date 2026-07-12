import { useState } from 'react'
import {
  Combobox,
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
import { Check, ChevronsUpDown } from 'lucide-react'

export interface AutocompleteProps {
  value?: string
  onChange: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  variant?: NonNullable<InputVariantProps['variant']>
  size?: NonNullable<InputVariantProps['size']>
  disabled?: boolean
  error?: boolean
  className?: string
}

export function Autocomplete({
  value = '',
  onChange,
  options,
  placeholder = 'Search...',
  variant = 'subtle',
  size = 'md',
  disabled = false,
  error = false,
  className,
}: AutocompleteProps) {
  const [query, setQuery] = useState('')
  const selected = options.find((option) => option.value === value) ?? null
  const filtered = query
    ? options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase()),
      )
    : options

  return (
    <Combobox
      value={selected}
      onChange={(option: SelectOption | null) => onChange(option?.value ?? '')}
      onClose={() => setQuery('')}
      disabled={disabled}
    >
      <div className={cx('relative w-full', className)}>
        <ComboboxInput
          className={cx(
            inputVariants({ variant, size, state: error ? 'error' : 'normal' }),
            'pr-8',
          )}
          displayValue={(option: SelectOption | null) => option?.label ?? ''}
          placeholder={placeholder}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2 text-ink-gray-5">
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
          <ComboboxOption
            key={option.value}
            value={option}
            disabled={option.disabled}
          >
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
    </Combobox>
  )
}
