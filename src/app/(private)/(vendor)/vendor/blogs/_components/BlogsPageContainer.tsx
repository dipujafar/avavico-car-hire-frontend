'use client';
import BlogCard from "@/components/shared/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/dummyData";
import { Plus } from "lucide-react";
import { AddBlogModal } from "./AddBlogModal";
import { useState } from "react";

const BlogsPageContainer = () => {
  const [openAddBlogModal, setOpenAddBlogModal] = useState(false);
  return (
    <>
      <div className="flex justify-between mb-5">
        <div></div>
        <Button onClick={() => setOpenAddBlogModal(true)} className="bg-primary-cyan hover:bg-gray-500">
          <Plus></Plus> Add Blog
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(0, 9)?.map((post: any) => (
          <BlogCard key={post.id} post={post} ownBlog={true} />
        ))}
      </div>
      
      <AddBlogModal open={openAddBlogModal} setOpen={setOpenAddBlogModal} ></AddBlogModal>
    </>
  );
};

export default BlogsPageContainer;
