"use client";
import Image from "next/image";
import { cn, formatDate } from "@/lib/utils";
import { IBlog } from "@/types";
import { Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDeleteBlogMutation } from "@/redux/api/blogApi";
import { Error_Modal } from "@/modals";
import { toast } from "sonner";
import { AddBlogModal } from "@/app/(private)/(vendor)/vendor/blogs/_components/AddBlogModal";
import { useState } from "react";

interface BlogCardProps {
  post: IBlog;
  ownBlog?: boolean;
}

export default function BlogCard({ post, ownBlog }: BlogCardProps) {
  const router = useRouter();
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation();
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleCardClick = () => {
    router.push(`/blogs/${post.id}`);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
   setOpenEditModal(true);
  };

  const handleDeleteClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.loading("Deleting blog...", { id: "deleteBlog" });
    try{
       await deleteBlog(post?.id).unwrap();
       toast.success("Blog deleted successfully");
       toast.dismiss("deleteBlog");
    }catch(error: any){
     Error_Modal({title: error?.data?.message})
     toast.dismiss("deleteBlog");
    }

    // Add your delete logic here
  };

  return (
    <>
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <Image
          src={post?.blogImage?.[0]}
          alt={`${post?.blogName} blog image`}
          width={1200}
          height={1200}
          placeholder="blur"
          blurDataURL={"/blurImage.jpg"}
          className="object-cover h-[220px]"
        />
      </div>
      <div className="p-4 md:space-y-4 space-y-3">
        <div className="space-y-1">
          <h2 className="text-lg font-medium line-clamp-1">
            {post?.blogName}
          </h2>
        </div>
        <hr />
        <div className="flex gap-x-2 justify-between items-center mt-4 text-sm text-[#333]">
          <span className="truncate">{formatDate(post.createdAt)}</span>
          <span className="w-[30px] bg-[#8A8A8A] h-px"></span>
          <span className={cn("flex justify-end truncate", ownBlog && "hidden")}>{post.category?.[0]}</span>
          {ownBlog && (
            <div className="flex gap-x-1 justify-end">
              <div
                className="size-7 bg-green-800 text-white flex justify-center items-center rounded-full hover:cursor-pointer"
                onClick={handleEditClick}
              >
                <Edit size={16} />
              </div>
              <div
                className="size-7 bg-red-800 text-white flex justify-center items-center rounded-full hover:cursor-pointer"
                onClick={handleDeleteClick}
              >
                <Trash2 size={16} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
     <AddBlogModal open={openEditModal} setOpen={setOpenEditModal} defaultValues={post} />
    </>
  );
}
