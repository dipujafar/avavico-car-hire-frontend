"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface StarRatingProps {
  value?: number
  onChange?: (value: number) => void
  readOnly?: boolean
}

export function StarRating({ value = 0, onChange, readOnly = false }: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  const handleMouseOver = (index: number) => {
    if (readOnly) return
    setHoverValue(index)
  }

  const handleMouseLeave = () => {
    if (readOnly) return
    setHoverValue(null)
  }

  const handleClick = (index: number) => {
    if (readOnly) return
    onChange?.(index)
  }

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          size={20}
          className={`cursor-pointer ${
            (hoverValue !== null ? index <= hoverValue : index <= value)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
          onMouseOver={() => handleMouseOver(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}
