import Image from "next/image";

import { formatDate } from "@/lib/utils";
import { IBlog, TBlogPost } from "@/types";
import Link from "next/link";
import { Edit, Trash2 } from "lucide-react";

interface BlogCardProps {
  post: IBlog;
  ownBlog?: boolean;
}

export default function BlogCard({ post, ownBlog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${post.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative ">
          <Image
            src={post?.blogImage}
            alt={`${post?.blogName} blog image`}
            width={1200}
            height={1200}
            className="object-cover h-[220px]"
          />
        </div>
        <div className="p-4 space-y-6">
          <div className="space-y-1">
            <h2 className="text-lg font-medium line-clamp-1">
              {post?.blogName}
            </h2>
            
          </div>
          <hr />
          <div className="flex j gap-x-2 justify-between items-center mt-4 text-sm text-[#333]">
            <span className="truncate flex-1">{formatDate(post.createdAt)}</span>
            <span className="w-[30px] bg-[#8A8A8A] h-px"></span>
            <span className="flex-1 flex justify-end ">{post.category?.[0]}</span>
            {ownBlog && (
              <div className="flex gap-x-1 flex-1 justify-end">
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
