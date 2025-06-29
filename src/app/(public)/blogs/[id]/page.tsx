import PageTopBanner from "@/components/shared/PageTopBanner";
import React from "react";
import DetailsPageContainer from "./_components/DetailsPageContainer";
import AllCarBrands from "@/components/shared/AllCarBrands";
import SimilarPosts from "./_components/SimilarPosts";

const pathsData = [
  {
    name: "Home",
    href: "/",
    active: false,
  },
  {
    name: "Pages",
    href: "#",
    active: false,
    hasDropdown: true,
  },
  {
    name: "Blogs",
    href: "/blogs",
    active: false,
  },
  {
    name: "Blog Details",
    href: "#",
    active: true,
  },
];
const BlogDetailsPage = async ({params}:{params:Promise<{id:string}>}) => {
   const {id} = await params;
  return (
    <div className="xl:space-y-20 md:space-y-12 space-y-8 bg-[#F8F9FA]  md:pb-16  pb-8">
      <PageTopBanner
        image="/blog_page_bg.png"
        title="Blogs"
        className="opacity-40"
        pathsData={pathsData}
      ></PageTopBanner>
      <DetailsPageContainer id={id}></DetailsPageContainer>
      <AllCarBrands></AllCarBrands>
      <SimilarPosts></SimilarPosts>
    </div>
  );
};

export default BlogDetailsPage;
