import Image from "next/image";
import React from "react";
import bgImage from "@/assets/images/user_section_bg.png";

const PageTopSection = ({ title }: { title: string }) => {
  return (
    <div className="max-h-[240px] relative">
      <Image
        src={bgImage}
        alt="bg_image"
        className="max-h-[240px] min-h-[100px] object-cover"
      ></Image>
      <div
        className="lg:max-w-3xl max-w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:px-16 lg:py-9 px-10 py-2 rounded-md text-primary-white lg:text-5xl md:text-3xl text-xl font-semibold text-center w-full md:backdrop-blur-[6px] backdrop-blur-[4px] text-white"
        style={{
          background: "rgba(217, 217, 217, 0.09)",
        }}
      >
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageTopSection;
