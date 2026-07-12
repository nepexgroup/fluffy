import type { HTMLAttributes } from 'react'
import {
  clamp,
  cx,
  progressBarVariants,
  progressLabelClass,
  progressTrackVariants,
  type ProgressBarVariantProps,
  type ProgressTrackVariantProps,
} from '@fluffy/core'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  size?: NonNullable<ProgressTrackVariantProps['size']>
  theme?: NonNullable<ProgressBarVariantProps['theme']>
  label?: string
  showValue?: boolean
}

export function Progress({
  value,
  size = 'md',
  theme = 'gray',
  label = '',
  showValue = false,
  className,
  ...rest
}: ProgressProps) {
  const clamped = Math.round(clamp(value, 0, 100))
  return (
    <div className={cx(className)} {...rest}>
      {(label || showValue) && (
        <div className={progressLabelClass}>
          <span>{label}</span>
          {showValue && (
            <span className="text-xs text-ink-gray-5">{clamped}%</span>
          )}
        </div>
      )}
      <div
        className={progressTrackVariants({ size })}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progress'}
      >
        <div
          className={progressBarVariants({ theme })}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
