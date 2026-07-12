import { useState } from 'react'
import {
  cx,
  ratingGroupClass,
  ratingStarVariants,
  type RatingStarVariantProps,
} from '@fluffy/core'
import { Star } from 'lucide-react'

export interface RatingProps {
  value?: number
  onChange?: (value: number) => void
  max?: number
  size?: NonNullable<RatingStarVariantProps['size']>
  readonly?: boolean
  className?: string
}

export function Rating({
  value = 0,
  onChange,
  max = 5,
  size = 'md',
  readonly = false,
  className,
}: RatingProps) {
  const [hovered, setHovered] = useState(0)
  return (
    <div
      className={cx(ratingGroupClass, className)}
      role="radiogroup"
      aria-label="Rating"
      onMouseLeave={() => setHovered(0)}
    >
      {Array.from({ length: max }, (_, index) => {
        const star = index + 1
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={star === value}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
            disabled={readonly}
            className="focus-visible:outline-none"
            onMouseEnter={() => !readonly && setHovered(star)}
            onClick={() => !readonly && onChange?.(star === value ? 0 : star)}
          >
            <Star
              className={ratingStarVariants({
                size,
                filled: star <= (hovered || value),
                readonly,
              })}
            />
          </button>
        )
      })}
    </div>
  )
}
