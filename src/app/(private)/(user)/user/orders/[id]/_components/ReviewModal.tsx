"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { ArrowRight } from "lucide-react"
import { StarRating } from "@/components/ui/star-rating"
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow"
export function ReviewModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const [ratings, setRatings] = useState<Record<string, number>>({
    Price: 0,
    Safety: 0,
    Accessibility: 0,
    Service: 0,
    Entertainment: 0,
    Support: 0,
  })

  const handleRatingChange = (category: string, value: number) => {
    setRatings((prev) => ({
      ...prev,
      [category]: value,
    }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl font-bold">Add a review</DialogTitle>
        </DialogHeader>

        <div className="px-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Price</span>
              <StarRating value={ratings.Price} onChange={(value) => handleRatingChange("Price", value)} />
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Safety</span>
              <StarRating value={ratings.Safety} onChange={(value) => handleRatingChange("Safety", value)} />
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Accessibility</span>
              <StarRating
                value={ratings.Accessibility}
                onChange={(value) => handleRatingChange("Accessibility", value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Service</span>
              <StarRating value={ratings.Service} onChange={(value) => handleRatingChange("Service", value)} />
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Entertainment</span>
              <StarRating
                value={ratings.Entertainment}
                onChange={(value) => handleRatingChange("Entertainment", value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Support</span>
              <StarRating value={ratings.Support} onChange={(value) => handleRatingChange("Support", value)} />
            </div>
          </div>

          <div className="border-t my-4"></div>

          <div className="mb-4">
            <h3 className="font-medium mb-4">Leave feedback</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input placeholder="Your name" />
              <Input placeholder="Email address" />
            </div>
            <Textarea placeholder="Your comment" className="min-h-[120px] resize-none" />
          </div>
        </div>

        <div className="px-6 pb-6">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-md px-4 py-2  flex items-center justify-between group">
            Submit review
           <AnimatedArrow></AnimatedArrow>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
