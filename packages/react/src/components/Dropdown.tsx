import { Fragment, type ReactNode } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  cx,
  menuGroupLabelClass,
  menuItemIconClass,
  menuItemVariants,
  menuPanelClass,
  menuSeparatorClass,
  type ButtonVariantProps,
} from '@fluffy/core'
import { ChevronDown } from 'lucide-react'
import { Button } from './Button'

export interface DropdownItem {
  label: string
  icon?: ReactNode
  onClick?: () => void
  danger?: boolean
  disabled?: boolean
}

export interface DropdownGroup {
  label?: string
  items: DropdownItem[]
}

export interface DropdownProps {
  options: DropdownItem[] | DropdownGroup[]
  label?: string
  theme?: NonNullable<ButtonVariantProps['theme']>
  variant?: NonNullable<ButtonVariantProps['variant']>
  size?: NonNullable<ButtonVariantProps['size']>
  placement?: 'left' | 'right'
  /** Custom trigger; replaces the default button. */
  trigger?: ReactNode
  className?: string
}

export function Dropdown({
  options,
  label = 'Options',
  theme = 'gray',
  variant = 'subtle',
  size = 'md',
  placement = 'left',
  trigger,
  className,
}: DropdownProps) {
  const groups: DropdownGroup[] =
    options.length && 'items' in options[0]
      ? (options as DropdownGroup[])
      : [{ items: options as DropdownItem[] }]

  return (
    <Menu as="div" className={cx('relative inline-block', className)}>
      <MenuButton as={Fragment}>
        {trigger ?? (
          <Button
            label={label}
            theme={theme}
            variant={variant}
            size={size}
            iconRight={<ChevronDown className="h-4 w-4" />}
          />
        )}
      </MenuButton>
      <MenuItems
        transition
        anchor={placement === 'right' ? 'bottom end' : 'bottom start'}
        className={cx(
          menuPanelClass,
          '[--anchor-gap:6px] origin-top transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
        )}
      >
        {groups.map((group, groupIndex) => (
          <Fragment key={groupIndex}>
            {groupIndex > 0 && <div className={menuSeparatorClass} />}
            {group.label && (
              <div className={menuGroupLabelClass}>{group.label}</div>
            )}
            {group.items.map((item) => (
              <MenuItem key={item.label} disabled={item.disabled}>
                {({ focus }) => (
                  <button
                    type="button"
                    className={menuItemVariants({
                      active: focus,
                      danger: !!item.danger,
                      disabled: !!item.disabled,
                    })}
                    onClick={item.onClick}
                  >
                    {item.icon && <span className={menuItemIconClass}>{item.icon}</span>}
                    {item.label}
                  </button>
                )}
              </MenuItem>
            ))}
          </Fragment>
        ))}
      </MenuItems>
    </Menu>
  )
}
