import PageTopBanner from "@/components/shared/PageTopBanner";
import React from "react";
import AllBlogs from "./_components/AllBlogs";
import AllCarBrands from "@/components/shared/AllCarBrands";

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
    active: true,
  },
];

const BlogsPage = () => {
  return (
    <div className="xl:space-y-20 md:space-y-12 space-y-8 bg-[#F8F9FA]  md:pb-16  pb-8">
      <PageTopBanner
        image="/blog_page_bg.png"
        title="Blogs"
        className="opacity-40"
        pathsData={pathsData}
      ></PageTopBanner>
      <AllBlogs></AllBlogs>
      <AllCarBrands></AllCarBrands>
    </div>
  );
};

export default BlogsPage;
