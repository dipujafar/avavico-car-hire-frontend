import Image from "next/image";

const DetailsPageImages = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid h-full w-full gap-4  grid-cols-6 grid-rows-3 ">
        <div className="col-span-4 row-span-2  shadow-md rounded-md  flex items-center justify-center">
          <Image src="/details_image1.png"  alt="details_image1" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </div>

        <div className="col-span-2 row-span-1  shadow-md rounded-md flex items-center justify-center">
        <Image src="/details_image2.png"  alt="details_image1" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </div>

        <div className="col-span-2 row-span-1  shadow-md rounded-md flex items-center justify-center">
        <Image src="/details_image3.png"  alt="details_image1" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </div>

        <div className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image4.png"  alt="details_image1" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </div>

        <div className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image5.png"  alt="details_image1" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </div>

        <div className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image6.png"  alt="details_image" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </div>

        <div className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image7.png"  alt="details_image" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </div>

        <div className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image9.png"  alt="details_image" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </div>

        <div className="col-span-1 row-span-1  shadow-md rounded-md  flex items-center justify-center">
        <Image src="/details_image10.png"  alt="details_image" className="w-full h-full object-cover rounded-md" width={1900} height={1900}></Image>
        </div>
      </div>
    </div>
  );
};

export default DetailsPageImages;
