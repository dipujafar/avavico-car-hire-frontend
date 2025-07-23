import React from "react";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Container from "../Container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/icons";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <div className="bg-black md:py-20 py-12 ">
      <Container className="text-white">
        {/* =============== footer content ======================= */}
        <div className="flex flex-col flex-wrap lg:justify-between justify-center gap-y-10  lg:flex-row  items-start 2xl:gap-x-40 xl:gap-x-24 md:gap-x-10 gap-x-3">
          {/* Logo and description */}
          <div className="flex flex-col xl:items-start items-center  mx-auto">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={1200}
                height={1200}
                className="w-auto h-auto max-w-[120px]"
              />
            </Link>
            <p className=" mt-5 max-w-xs text-primary-gray mx-auto">
              We provide reliable and affordable car rental services to make
              your journey smooth and hassle-free. we've got the perfect ride
              for you.
            </p>

            <div className="flex gap-x-4 mt-5">
              <Link
                href={"#"}
                className="size-8 flex justify-center items-center rounded-2xl border border-gray-600 hover:bg-primary-cyan/60 hover:border-none duration-500"
              >
                <FacebookIcon className="rounded-full"></FacebookIcon>
              </Link>

              <Link
                href={"#"}
                className="size-8 flex justify-center items-center rounded-2xl border border-gray-600 hover:bg-primary-cyan/60 hover:border-none duration-500"
              >
                <TwitterIcon className="rounded-full"></TwitterIcon>
              </Link>
              <Link
                href={"#"}
                className="size-8 flex justify-center items-center rounded-2xl border border-gray-600 hover:bg-primary-cyan/60 hover:border-none duration-500"
              >
                <InstagramIcon className="rounded-full"></InstagramIcon>
              </Link>

              <Link
                href={"#"}
                className="size-8 flex justify-center items-center rounded-2xl border border-gray-600 hover:bg-primary-cyan/60 hover:border-none duration-500"
              >
                <LinkedInIcon className="rounded-full"></LinkedInIcon>
              </Link>
            </div>
          </div>

          {/* Links and supports informations */}
          <div className="flex justify-between  flex-wrap flex-1 gap-5  w-full">
            {/* Quick Links */}
            <div>
              <h3 className="lg:mb-8 mb-4  ">Quick Links</h3>
              <ul className="lg:space-y-4 space-y-2  text-primary-gray ">
                <li className="hover:text-primary-cyan duration-300">
                  <Link href="/">Home</Link>
                </li>

                <li className="hover:text-primary-cyan duration-300">
                  <Link href="/car-fleet">Car Fleet</Link>
                </li>
                <li className="hover:text-primary-cyan duration-300">
                  <Link href="/about-us">About US</Link>
                </li>
                <li className="hover:text-primary-cyan duration-300">
                  <Link href="/services">Services</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="lg:mb-8 mb-4">Pages</h3>
              <ul className="lg:space-y-4 space-y-2  text-primary-gray ">
                <li className="hover:text-primary-cyan duration-300">
                  <Link href="/contact-us">Contact Us</Link>
                </li>

                <li className="hover:text-primary-cyan duration-300">
                  <Link href="/blogs">Blog</Link>
                </li>
                <li className="hover:text-primary-cyan duration-300">
                  <Link href="/reviews">Reviews</Link>
                </li>
                <li className="hover:text-primary-cyan duration-300">
                  <Link href="/faqs">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Support Information */}
            <div>
              <h3 className="lg:mb-8 mb-4">Contact Info</h3>
              {/* <LocationMap></LocationMap> */}
              <ul className="lg:space-y-4 space-y-2  text-primary-gray ">
                <li className="flex items-center gap-x-2">
                  <MapIcon></MapIcon>
                  <p>Dublin, Ireland</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <PhoneIcon></PhoneIcon>
                  <Link
                    href="tel:+1 234 567 8900"
                    className="hover:text-primary-cyan duration-300"
                  >
                    +1 234 567 8900
                  </Link>
                </li>
                <li className="flex items-center gap-x-2">
                  <MailIcon></MailIcon>
                  <Link
                    href="mailto:info@avavico.com"
                    className="hover:text-primary-cyan duration-300"
                  >
                    Info@avavico.com
                  </Link>
                </li>
                <li className="flex items-center gap-x-2">
                  <MailIcon></MailIcon>
                  <Link
                    href="mailto:info@avavico.com"
                    className="hover:text-primary-cyan duration-300"
                  >
                    Sales@avavico.com
                  </Link>
                </li>
                <li className="flex items-center gap-x-2">
                  <MailIcon></MailIcon>
                  <Link
                    href="mailto:info@avavico.com"
                    className="hover:text-primary-cyan duration-300"
                  >
                    Suppliers@avavico.com
                  </Link>
                </li>
                <li className="flex items-center gap-x-2">
                  <MailIcon></MailIcon>
                  <Link
                    href="mailto:info@avavico.com"
                    className="hover:text-primary-cyan duration-300"
                  >
                    Victor@avavico.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-5">
          {/* social media links */}
          <div className="flex gap-x-2 items-center xl:justify-start justify-center  w-full mt-2 xl:ml-16">
            <Link href="https://www.youtube.com/@churchscroll" target="_blank">
              {/* <Image
                  src={youtubeLogo}
                  alt="youtube"
                  className="size-8"
                ></Image> */}
            </Link>
            <Link
              href="https://www.instagram.com/churchscroll?igsh=Znc1Njhld3FudXNm"
              target="_blank"
            >
              {/* <Image
                  src={instagramIcon}
                  alt="instagramIcon"
                  className="size-7"
                ></Image> */}
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61551473257006&rdid=X4Ofuk1uhr1kUQUr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18KusYJYoR%2F#"
              target="_blank"
            >
              {/* <Image
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="size-7"
                ></Image> */}
            </Link>
            <Link
              href="https://www.tiktok.com/@churchscroll?_t=ZT-8sEixGTVpFe&_r=1"
              target="_blank"
            >
              {/* <Image src={tiktokIcon} alt="xIcon" className="size-7"></Image> */}
            </Link>
          </div>
        </div>

        <hr className="border-[#1F2937]" />

        <QuickLinks></QuickLinks>
      </Container>
    </div>
  );
};

export default Footer;
