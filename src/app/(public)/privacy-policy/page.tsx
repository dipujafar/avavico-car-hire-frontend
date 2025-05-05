import AllCarBrands from '@/components/shared/AllCarBrands';
import PageTopBanner from '@/components/shared/PageTopBanner';
import React from 'react';
import PrivacyPolicyContainer from './_components/PrivacyPolicyContainer';
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
      name: "Privacy Policy",
      href: "/privacy-policys",
      active: true,
    },
  ]

const PrivacyPolicyPage = () => {
    
    return (
        <div className="xl:space-y-20 md:space-y-12 space-y-8 bg-[#F8F9FA]  md:pb-16  pb-8">
        <PageTopBanner
          image="/privacy_policy_page_bg.png"
          title="Privacy Policy"
          description="Last update: 25 April, 2025"
          className="opacity-40"
          pathsData={pathsData}
        ></PageTopBanner>
        <PrivacyPolicyContainer></PrivacyPolicyContainer>
        <AllCarBrands></AllCarBrands>
      </div>
    );
};

export default PrivacyPolicyPage;