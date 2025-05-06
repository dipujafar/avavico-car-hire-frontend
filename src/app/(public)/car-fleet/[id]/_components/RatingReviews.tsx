"use client"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingCategory {
  name: string
  value: number
}

interface RatingProps {
  overallRating?: number
  reviewCount?: number
  categories?: RatingCategory[]
  className?: string
}

export default function RatingReviews({
  overallRating = 4.95,
  reviewCount = 672,
  categories = [
    { name: "Price", value: 4.8 },
    { name: "Service", value: 4.2 },
    { name: "Safety", value: 4.9 },
    { name: "Entertainment", value: 4.7 },
    { name: "Accessibility", value: 5 },
    { name: "Support", value: 5 },
  ],
  className,
}: RatingProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className={cn("w-full", className)}>
      <h2 className="text-xl font-bold mb-3">Rate & Reviews</h2>

      <div className="flex flex-col sm:flex-row gap-6   ">
        {/* Left side - Overall rating */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center p-4 border-2 border-[#DDE1DE] rounded-lg min-w-[200px]">
          <div className="text-2xl font-bold text-[#101010]">{overallRating} / 5</div>
          <div className="text-sm text-[#8E8E8E] mb-2">({reviewCount} reviews)</div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Right side - Category ratings */}
        <div className="flex-grow space-y-3 max-w-sm">
          {categories.map((category) => (
            <div key={category.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{category.name}</span>
                <span>{category.value}/5</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: `${(category.value / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
