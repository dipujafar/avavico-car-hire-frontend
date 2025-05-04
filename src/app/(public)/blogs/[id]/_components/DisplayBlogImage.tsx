import Image from "next/image";
import React from "react";

const DisplayBlogImage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
    <div className="grid max-h-[700px] w-full gap-4  grid-cols-4 grid-rows-5 rounded-lg">
    
      <div 
        className="col-span-2 row-span-3  flex items-center justify-center"
      >
        <Image src={"/blog_details_image.png"} alt="blog_details_image" className="w-full h-full object-cover rounded-md" width={1200} height={1200} ></Image>
      </div>
    
      <div 
        className="col-span-2 row-span-2  flex items-center justify-center"
      >
        <Image src={"/about_page_bg.png"} alt="blog_details_image" className="w-full h-full object-cover rounded-md" width={1200} height={1200} ></Image>
      </div>
    
      <div 
        className="col-span-2 row-span-3  flex items-center justify-center"
      >
         <Image src={"/carFleetPageBanner.png"} alt="blog_details_image" className="w-full h-full object-cover rounded-md" width={1200} height={1200} ></Image>
      </div>
    
      <div 
        className="col-span-2 row-span-2  flex items-center justify-center"
      >
        <Image src={"/service_page_bg.png"} alt="blog_details_image" className="w-full h-full object-cover rounded-md" width={1200} height={1200} ></Image>
      </div>
    
    </div>
  </div>
  );
};

export default DisplayBlogImage;
