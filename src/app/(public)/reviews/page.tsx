import AllCarBrands from '@/components/shared/AllCarBrands';
import PageTopBanner from '@/components/shared/PageTopBanner';
import React from 'react';
import { AllReviewsContainer } from './_components/AllReviewsContainer';


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
      name: "Reviews",
      href: "/reviews",
      active: true,
    },
  ];


const ReviewPage = () => {
    return (
        <div className="xl:space-y-20 md:space-y-12 space-y-8 bg-[#F8F9FA] md:pb-16  pb-8">
        <PageTopBanner
          image="/reviews_page_bg.png"
          title="Reviews"
          className="opacity-40"
          pathsData={pathsData}
        ></PageTopBanner>
        <AllReviewsContainer/>
        <AllCarBrands/>
      </div>
    );
};

export default ReviewPage;