"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { History, LayoutDashboard, LogOut, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";


export  const SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard  className="md:size-6 size-4" />,
    href: "/user/profile",
  },
  {
    key: "orders",
    label: "Order",
    icon: <History  className="md:size-6 size-4" />,
    href: "/user/orders",
  },
  {
    key: "settings",
    label: "Settings",
    icon: <Settings  className="md:size-6 size-4" />,
    href: "/user/account-settings",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const path = pathname?.split("/")[2];
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();


  

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Close the sidebar when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    const sidebar = document.getElementById("dashboardSidebar");
    if (sidebar && !sidebar.contains(event.target as Node)) {
      setIsSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div>
      <div
        style={{ boxShadow: "0px 0px 7px 0px rgba(96, 96, 96, 0.16" }}
        id="dashboardSidebar"
        className={`2xl:w-[270px] w-64 bg-white rounded-md`}
      >
        <div className=" bg-white py-5 rounded-md ">
          <h4 className=" px-5 text-xl text-[#262626] font-bold">Navigation</h4>
          <hr className="mt-3 mb-5" />
          <div className="space-y-2">
            {SIDEBAR_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={cn(
                  "flex items-center gap-x-3 px-5 py-3 text-base text-gray-scale-600 transition-all duration-300 ease-in-out text-[#595959]",
                  pathname === link.href &&
                    "border-l-4 border-l-green-600 bg-[#1EC1E2]/70 text-white",
                  link.href.includes(path) &&
                    "border-l-4 border-l-green-600 bg-[#1EC1E2]/70 text-white "
                )}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}

            <button
              onClick={() => {dispatch(logout()); router.refresh();}}
              type="button"
              className="flex items-center gap-x-3 px-5 py-4 text-lg text-[#595959] cursor-pointer "
            >
              <LogOut size={22} />
              <span>{"Logout"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
