import { Field, Label, Switch as HSwitch } from '@headlessui/react'
import {
  checkboxLabelVariants,
  cx,
  switchThumbVariants,
  switchTrackVariants,
  type SwitchTrackVariantProps,
} from '@fluffy/core'

export interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  size?: NonNullable<SwitchTrackVariantProps['size']>
  disabled?: boolean
  className?: string
}

export function Switch({
  checked,
  onChange,
  label,
  size = 'md',
  disabled = false,
  className,
}: SwitchProps) {
  return (
    <Field className={cx('flex items-center gap-2', className)} disabled={disabled}>
      <HSwitch
        checked={checked}
        onChange={onChange}
        className={switchTrackVariants({ size, checked })}
      >
        <span className={switchThumbVariants({ size, checked })} />
      </HSwitch>
      {label && (
        <Label className={checkboxLabelVariants({ size: size === 'lg' ? 'lg' : 'md' })}>
          {label}
        </Label>
      )}
    </Field>
  )
}
