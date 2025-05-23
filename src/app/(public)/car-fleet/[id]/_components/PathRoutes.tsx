import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const PathRoutes = () => {
  const pathsData = [
    {
      name: "Home",
      href: "/",
      active: false,
    },
    {
      name: "Car Fleet",
      href: "/car-fleet",
      active: false,
    },
    {
      name: "Mercedes AMG Sports",
      href: "#",
      active: true,
    },
  ];

  return (
    <div className="flex  gap-x-2.5">
      {pathsData?.map((item, index) => (
        <div key={index} className="relative group">
          <div className="flex items-center md:gap-x-2.5 gap-x-0.5">
            <Link
              href={item?.href as string}
              className={cn(
                " font-medium text-[#4D4D4D] hover:text-primary-cyan duration-300 md:text-base text-xs ",
                item?.active && "text-[#101010] font-bold"
              )}
            >
              {item?.name}
            </Link>
            {index !== pathsData.length - 1 && (
              <ChevronRight color="#737373" className="md:size-5 size-4 " />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PathRoutes;
