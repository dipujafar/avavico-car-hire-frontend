import image1 from "@/assets/images/expertise_image1.png"
import image2 from "@/assets/images/expertise_image2.png"
import image3 from "@/assets/images/expertise_image3.png"
import image4 from "@/assets/images/expertise_image4.png"
import image5 from "@/assets/images/expertise_image5.png"
import Image from "next/image"

const ExpertiseImageDisplay = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
    <div className="grid md:max-h-[550px] w-full md:gap-4 gap-2 bg-transparent p-2 md:grid-cols-3 md:grid-rows-3 grid-cols-2 grid-rows-2 rounded-lg">
    
      <div 
        className="col-span-1 row-span-3 flex items-center justify-center"
      >
         <Image src={image1} alt="expertise_image2" className="w-full h-full object-cover rounded-[100px] xl:max-h-[400px] md:max-h-[300px]"></Image>
      </div>
    
      <div 
        className="col-span-1 row-span-2 flex items-center justify-center"
      >
        <Image src={image2} alt="expertise_image2" className="w-full h-full object-cover rounded-[100px]"></Image>
      </div>
    
      <div 
        className="col-span-1 row-span-1 b flex items-center justify-center"
      >
        <Image src={image5} alt="expertise_image2" className="w-full h-full object-cover rounded-[100px]"></Image>
      </div>
    
      <div 
        className="col-span-1 row-span-2 flex items-center justify-center"
      >
       <Image src={image4} alt="expertise_image2" className="w-full h-full object-cover rounded-[100px]"></Image>
      </div>
    
      <div 
        className="col-span-1 row-span-1  flex items-center justify-center"
      >
        <Image src={image3} alt="expertise_image2" className="w-full h-full object-cover rounded-[100px]"></Image>
      </div>
    
    </div>
  </div>
  );
};

export default ExpertiseImageDisplay;
