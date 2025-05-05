"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.png";
import Container from "../Container";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Car Fleet", href: "/car-fleet" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  {
    name: "Pages",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Blogs", href: "/blogs" },
      { name: "Reviews", href: "/reviews" },
      { name: "FAQs", href: "/faqs" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const currentPathName = usePathname();

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="w-full  ">
      <Container>
        <div className=" mx-auto px-4 lg:py-3 py-1 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="logo"
              width={1200}
              quality={100}
              height={1200}
              className="h-auto  w-auto md:max-w-[100px] max-w-[70px]"
            />
          </Link>
          <div className="flex items-center lg:gap-x-10 gap-x-6">
            {/* Mobile menu button */}
            <button
              className="lg:hidden flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-gray-700  transition-colors py-2 group z-0"
                    )}
                    onClick={() =>
                      item.hasDropdown && toggleDropdown(item.name)
                    }
                  >
                    <span
                      className={cn(
                        "flex items-center group text-base font-bold hover:text-primary-cyan duration-500 z-10  ",
                        item.href === currentPathName &&
                          "border-b-2 border-primary-cyan text-primary-cyan font-extrabold "
                      )}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          size={16}
                          className="ml-1 group-hover:rotate-180 duration-300"
                        />
                      )}
                    </span>

                    {/* hover effect */}
                    <span
                      className={cn(
                        "absolute inset-0 bg-primary-cyan/15  transform scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-150  rounded -z-10 group-hover:text-primary-cyan",
                        "z-0"
                      )}
                    ></span>
                  </Link>

                  {/* Dropdown menu */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-cyan"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button className="bg-primary-cyan hover:bg-cyan-600 text-white rounded-md">
                Join Now
              </Button>
              <Button
                variant="outline"
                className="border-primary-cyan text-primary-cyan hover:bg-cyan-50"
              >
                Login
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="absolute top-20 left-0 right-0 bg-white shadow-lg z-20 lg:hidden">
              <div className="px-4 py-2 space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <div
                      className="flex items-center justify-between py-2"
                      onClick={() =>
                        item.hasDropdown && toggleDropdown(item.name)
                      }
                    >
                      <Link
                        href={item.hasDropdown ? "#" : item.href}
                        className={cn(
                          "text-gray-700 block w-full",
                          item.name === "Home" && "text-primary-cyan"
                        )}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform",
                            activeDropdown === item.name && "rotate-180"
                          )}
                        />
                      )}
                    </div>

                    {/* Mobile dropdown */}
                    {item.hasDropdown && activeDropdown === item.name && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-primary-cyan"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 pb-2 space-y-2">
                  <Button className="bg-primary-cyan hover:bg-cyan-600 text-white rounded-md w-full">
                    Join Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary-cyan text-cyan-500 hover:bg-cyan-50 w-full"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
