import { useState, type HTMLAttributes } from 'react'
import {
  avatarImageClass,
  avatarIndicatorClass,
  avatarVariants,
  cx,
  initials,
  type AvatarVariantProps,
} from '@fluffy/core'

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  image?: string
  label?: string
  size?: NonNullable<AvatarVariantProps['size']>
  shape?: NonNullable<AvatarVariantProps['shape']>
  indicator?: 'gray' | 'green' | 'red' | 'amber' | 'blue' | null
}

export function Avatar({
  image,
  label = '',
  size = 'md',
  shape = 'circle',
  indicator = null,
  className,
  ...rest
}: AvatarProps) {
  const [imageFailed, setImageFailed] = useState(false)
  return (
    <span className={cx(avatarVariants({ size, shape }), className)} {...rest}>
      {image && !imageFailed ? (
        <img
          className={avatarImageClass}
          src={image}
          alt={label}
          onError={() => setImageFailed(true)}
        />
      ) : (
        initials(label)
      )}
      {indicator && (
        <span className={avatarIndicatorClass({ color: indicator, size })} />
      )}
    </span>
  )
}
