import Image from "next/image"

import { formatDate } from "@/lib/utils"
import { TBlogPost } from "@/types"
import Link from "next/link"

interface BlogCardProps {
  post: TBlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blogs/${post.id}`}>
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative ">
        <Image src={post.imageUrl} alt={post.title} width={1200} height={1200} className="object-cover" />
      </div>
      <div className="p-4 space-y-6">
        <h2 className="text-lg font-medium line-clamp-2">{post.title}</h2>
        <hr />
        <div className="flex j gap-x-2 justify-between items-center mt-4 text-sm text-[#333]">
          <span>{formatDate(post.date)}</span>
          <span className="w-[30px] bg-[#8A8A8A] h-px"></span>
          <span >{post.category}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}
