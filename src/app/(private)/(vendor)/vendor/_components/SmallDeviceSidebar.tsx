"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SIDEBAR_LINKS } from "./DashboardSidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";

const SmallDeviceSidebar = () => {
  const pathname = usePathname();
  const path = pathname?.split("/")[2];
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  relative mb-5"
    >
      <CarouselContent className="mx-3">
        {SIDEBAR_LINKS?.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={cn(
              "flex items-center md:gap-x-3 gap-x-1.5 px-3 mx-1 py-1 md:text-lg text-gray-scale-600 rounded transition-all duration-300 ease-in-out bg-gray-200 ",
              pathname === link.href &&
                "bg-primary-cyan text-white font-medium rounded",
              link.href.includes(path) &&
                "bg-primary-cyan text-white rounded font-medium"
            )}
          >
            {link.icon}
            <span className=" truncate">{link.label}</span>
          </Link>
        ))}

        <button
          onClick={() => {
            dispatch(logout());
            router.refresh();
          }}
          className="flex items-center md:gap-x-3 gap-x-1.5  px-3 mx-1  py-1 md:text-lg rounded  hover:bg-primary-gray/40 bg-gray-200 hover:text-primary-white  transition-all duration-300 ease-in-out"
        >
          <LogOut className="md:size-6 size-4" />
          <span className="">Logout</span>
        </button>
      </CarouselContent>
      <CarouselPrevious className="text-primary-cyan  absolute md:-left-6 -left-3 bg-white md:size-8 size-7 p-1 hover:bg-gray-700" />
      <CarouselNext className="text-primary-cyan bg-white absolute -right-3 md:size-8 size-7 p-1 hover:bg-gray-700" />
    </Carousel>
  );
};

export default SmallDeviceSidebar;
