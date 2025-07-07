"use client"

import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  maxStars?: number
  size?: "sm" | "md" | "lg"
  showRating?: boolean
}

export default function StarRating({ rating, maxStars = 5, size = "md", showRating = true }: StarRatingProps) {
  const sizeClasses = {
    sm: "size-3",
    md: "size-5",
    lg: "size-6",
  }

  const renderStar = (index: number) => {
    const starNumber = index + 1
    const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100

    return (
      <div key={index} className="relative">
        {/* Background star (empty) */}
        <Star className={`${sizeClasses[size]} fill-gray-200 text-gray-200`} />

        {/* Foreground star (filled) with clip path for percentage */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}>
          <Star className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">{[...Array(maxStars)].map((_, i) => renderStar(i))}</div>
      {showRating && (
        <span className="text-sm text-gray-600 font-medium">
          {rating.toFixed(1)} ({maxStars})
        </span>
      )}
    </div>
  )
}