
import { carBrandsData } from "@/lib/CarBrandsData";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const AllCarBrands = () => {
  return (
    <Marquee
      pauseOnHover
      gradient
      gradientWidth={50}
      gradientColor={"#ebe6e6"}
      speed={40}
    >
      {carBrandsData?.map((brand) => (
        <div
          key={brand._id}
          className="py-6 px-16 mx-10 flex flex-col items-center gap-y-3 bg-white rounded-sm "
        >
          <Image
            src={brand.image}
            alt={`${brand.name} logo`}
            width={1200}
            height={1200}
            className="w-[60px] h-[40px]"
          ></Image>
          <h3 className="text-center">{brand?.name}</h3>
        </div>
      ))}
    </Marquee>
  );
};

export default AllCarBrands;
