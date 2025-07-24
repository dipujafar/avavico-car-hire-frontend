import { cn } from "@/lib/utils";
import Link from "next/link";

const quickLink = [
  {
    id: 1,
    label: "Terms & Conditions",
    href: "/terms-conditions",
  },
  {
    id: 2,
    label: "Privacy Policy",
    href: "/privacy-policy",
  }
 
];

const QuickLinks = () => {
  return (
    <div className="py-2 border-t border-t-black/30 w-full xl:mt-8 md:mt-6 mt-3 flex flex-col md:flex-row justify-between text-primary-black/70 gap-y-1 items-center">
      <p className="md:text-base text-sm"> © {new Date().getFullYear()} AvaVico Car Hire. All rights reserved.</p>
      <div className="flex flex-wrap  gap-x-4 gap-y-1 ">
        {quickLink.map((link) => (
          <div key={link.id} className="relative group truncate ">
            <Link href={link.href}>
              {link.label}
            </Link>
            <span
              className={cn(
                "absolute left-0  h-[2px] w-full bg-white transform scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100 origin-left"
              )}
            >
              <Link href={link.href}>
                {link.label}
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
