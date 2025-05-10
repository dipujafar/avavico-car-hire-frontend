"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Plus, X } from "lucide-react"

interface ImageUploadProps {
  onChange: (value: string[]) => void
  value: string[]
  maxImages?: number
}

export const ImageUpload = ({ onChange, value = [], maxImages = 4 }: ImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false)

  // This would be replaced with your actual upload logic
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true)

    const files = e.target.files
    if (!files) return

    // Simulate upload - in a real app, you'd upload to a server/storage
    const newImages: string[] = []

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          newImages.push(event.target.result as string)

          // When all files are processed
          if (newImages.length === files.length) {
            onChange([...value, ...newImages].slice(0, maxImages))
            setIsUploading(false)
          }
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const handleRemove = (index: number) => {
    const newImages = [...value]
    newImages.splice(index, 1)
    onChange(newImages)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {value.map((image, index) => (
          <div key={index} className="relative w-24 h-24 rounded border overflow-hidden">
            <Image fill src={image} alt={`Car image ${index + 1}`} className="object-cover" />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-1 right-1 bg-black/50 rounded-full p-1 text-white cursor-pointer hover:bg-black hover:text-red-600"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}

        {value.length < maxImages && (
          <label className="flex items-center justify-center w-24 h-24 bg-[#F8FAFC]  border border-dashed rounded cursor-pointer hover:bg-muted transition">
            <div className="flex flex-col items-center justify-center text-muted-foreground ">
              <Plus className="h-6 w-6 mb-1 text-orange-500" />
              <span className="text-xs text-orange-500">Add Image</span>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleUpload}
              disabled={isUploading}
            />
          </label>
        )}
      </div>
    </div>
  )
}
