  "use client";
  import BlogCard from "@/components/shared/BlogCard";
  import Container from "@/components/shared/Container";
  import PaginationSection from "@/components/shared/pagination/PaginationSection";
  import SectionTitle from "@/components/shared/SectionTitle";
  import BlogCardSkeleton from "@/components/skeletons/BlogSkeleton/BlogCardSkeleton";
  import Empty from "@/components/ui/empty";
  import { blogPosts } from "@/lib/dummyData";
  import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
  import { IBlog } from "@/types";
  import { useSearchParams } from "next/navigation";

  const AllBlogs = () => {
    const pagePostsLimit = 8;
    const page = useSearchParams()?.get("page");
    const query: Record<string, string | number> = {};
    query["limit"] = pagePostsLimit;
    query["page"] = Number(page) || 1;

    const { data: allBlogData, isLoading } = useGetAllBlogsQuery(query);
    console.log(allBlogData?.data?.meta?.total);
    return (
      <Container>
        <div className=" xl:mb-10 mb-7">
          <p className="text-xl  uppercase tracking-wider text-black">Blog</p>
          <SectionTitle title="Latest Articles"></SectionTitle>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            // --------------------------------if data is loading ---------------------//
          isLoading ? (
            Array(8)
              .fill(0)
              .map((_, i) => <BlogCardSkeleton key={i}></BlogCardSkeleton>)
          ) :
          // --------------------------------if data is exists then display them other wise display show empty ---------------------//
          allBlogData?.data?.blog?.length ? (
            allBlogData?.data?.blog?.map((post: IBlog) => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="w-full md:h-[350px] h-[200px] flex justify-center items-center sm:col-span-2  lg:col-span-3  xl:col-span-4">
              <Empty message="No Blogs Available"></Empty>{" "}
            </div>
          )}
        </div>
        <PaginationSection
          totalItems={allBlogData?.data?.meta?.total || 0}
          pagePostsLimitProps={pagePostsLimit}
        ></PaginationSection>
      </Container>
    );
  };

  export default AllBlogs;
