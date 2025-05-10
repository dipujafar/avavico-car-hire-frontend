import BlogCard from "@/components/shared/BlogCard";
import Container from "@/components/shared/Container";
import PaginationSection from "@/components/shared/pagination/PaginationSection";
import SectionTitle from "@/components/shared/SectionTitle";
import { blogPosts } from "@/lib/dummyData";

const AllBlogs = () => {
  return (
    <Container>
      <div className=" xl:mb-10 mb-7">
        <p className="text-xl  uppercase tracking-wider text-black">Blog</p>
        <SectionTitle title="Latest Articles"></SectionTitle>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogPosts.map((post: any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <PaginationSection></PaginationSection>
    </Container>
  );
};

export default AllBlogs;
