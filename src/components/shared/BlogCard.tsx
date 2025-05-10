import Image from "next/image";

import { formatDate } from "@/lib/utils";
import { TBlogPost } from "@/types";
import Link from "next/link";
import { Edit, Trash2 } from "lucide-react";

interface BlogCardProps {
  post: TBlogPost;
  ownBlog?: boolean;
}

export default function BlogCard({ post, ownBlog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${post.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative ">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={1200}
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-6">
          <h2 className="text-lg font-medium line-clamp-2">{post.title}</h2>
          <hr />
          <div className="flex j gap-x-2 justify-between items-center mt-4 text-sm text-[#333]">
            <span>{formatDate(post.date)}</span>
            <span className="w-[30px] bg-[#8A8A8A] h-px"></span>
            <span>{post.category}</span>
            {ownBlog && (
              <div className="flex gap-x-1">
                <div className="size-7 bg-green-800 text-white flex justify-center items-center rounded-full hover:cursor-pointer">
                  <Edit size={16}></Edit>
                </div>
                <div className="size-7 bg-red-800 text-white flex justify-center items-center rounded-full hover:cursor-pointer">
                  <Trash2 size={16}></Trash2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
