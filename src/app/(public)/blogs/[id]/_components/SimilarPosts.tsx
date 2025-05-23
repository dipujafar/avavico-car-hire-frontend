import BlogCard from "@/components/shared/BlogCard";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { blogPosts } from "@/lib/dummyData";
import React from "react";

const SimilarPosts = () => {
  return (
    <Container>
      <div className=" xl:mb-10 mb-7">
        <p className="text-xl  uppercase tracking-wider text-black">Related</p>
        <SectionTitle title="Similar Posts"></SectionTitle>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogPosts?.slice(0, 4)?.map((post: any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
};

export default SimilarPosts;
