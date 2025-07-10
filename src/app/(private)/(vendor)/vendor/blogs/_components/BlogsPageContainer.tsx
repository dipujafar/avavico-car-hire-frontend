"use client";
import BlogCard from "@/components/shared/BlogCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddBlogModal } from "./AddBlogModal";
import { useState } from "react";
import { useGetMyBlogsQuery } from "@/redux/api/blogApi";
import PaginationSection from "@/components/shared/pagination/PaginationSection";
import { useSearchParams } from "next/navigation";
import Empty from "@/components/ui/empty";
import BlogCardSkeleton from "@/components/skeletons/BlogSkeleton/BlogCardSkeleton";




const BlogsPageContainer = () => {
  const [openAddBlogModal, setOpenAddBlogModal] = useState(false);
  const pagePostsLimit = 9;
  const page = useSearchParams()?.get("page");
  const query: Record<string, string | number> = {};
  query["limit"] = pagePostsLimit;
  query["page"] = Number(page) || 1;

  const { data: myBlogs, isLoading } = useGetMyBlogsQuery(query);
  return (
    <>
      <div className="flex justify-between mb-5">
        <div></div>
        <Button
          onClick={() => setOpenAddBlogModal(true)}
          className="bg-primary-cyan hover:bg-gray-500"
        >
          <Plus></Plus> Add Blog
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          // --------------------------------if data is loading ---------------------//
          isLoading ? (
            Array(8)
              .fill(0)
              .map((_, i) => <BlogCardSkeleton key={i}></BlogCardSkeleton>)
          ) : // --------------------- if data is exists then display them other wise display show empty ---------------------//
          myBlogs?.data?.blogs?.length ? (
            myBlogs?.data?.blogs?.map((post: any) => (
              <BlogCard key={post.id} post={post} ownBlog={true} />
            ))
          ) : (
            <div className="w-full md:h-[350px] h-[200px] flex justify-center items-center sm:col-span-2 lg:col-span-3">
              <Empty message="No Blogs Uploaded"></Empty>{" "}
            </div>
          )
        }
      </div>

      <PaginationSection
        totalItems={myBlogs?.data?.meta?.total || 0}
        pagePostsLimitProps={pagePostsLimit}
      ></PaginationSection>

      <AddBlogModal
        open={openAddBlogModal}
        setOpen={setOpenAddBlogModal}
      ></AddBlogModal>
    </>
  );
};

export default BlogsPageContainer;
