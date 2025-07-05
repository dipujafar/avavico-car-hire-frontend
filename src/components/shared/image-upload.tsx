"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Plus, X } from "lucide-react"

interface UploadedImage {
  file: File
  preview: string
}

interface ImageUploadProps {
  onChange: (value: UploadedImage[]) => void
  value: UploadedImage[]
  maxImages?: number,
  defaultImages?: string[] | null,
  setDefaultImages?: React.Dispatch<React.SetStateAction<string[]>> | any
}

export const ImageUpload = ({ onChange, value = [], maxImages = 4, defaultImages, setDefaultImages,  handleDeleteImage }: ImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true)

    const files = e.target.files
    if (!files) return

    const newItems: UploadedImage[] = []
    let processedCount = 0

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          newItems.push({ file, preview: event.target.result as string })
        }
        processedCount++
        if (processedCount === files.length) {
          const updated = [...value, ...newItems].slice(0, maxImages)
          onChange(updated)
          setIsUploading(false)
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
        { defaultImages && defaultImages.map((image, index) => (
          <div key={index} className="relative w-24 h-24 rounded border overflow-hidden">
            <Image fill src={image} alt={`Image ${index + 1}`} placeholder="blur"
            blurDataURL={"/blurImage.jpg"}   className="object-cover"  />
          
          {defaultImages.length > 1 &&  <button
              type="button"
              onClick={()=>  handleDeleteImage(image)}
              className="absolute top-1 right-1 bg-black/50 rounded-full p-1 text-white cursor-pointer hover:bg-black hover:text-red-600"
            >
              <X className="h-3 w-3" />
            </button>}
          </div>
        ))}

        {value.map((item, index) => (
          <div key={index} className="relative w-24 h-24 rounded border overflow-hidden">
            <Image fill src={item.preview} alt={`Image ${index + 1}`} className="object-cover" />
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
          <label className="flex items-center justify-center w-24 h-24 bg-[#F8FAFC] border border-dashed rounded cursor-pointer hover:bg-muted transition">
            <div className="flex flex-col items-center justify-center text-muted-foreground">
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
