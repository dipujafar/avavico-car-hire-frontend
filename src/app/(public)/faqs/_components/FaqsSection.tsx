import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { faqItems } from "@/lib/faqData";
import sectionImage from "@/assets/images/faq_section_image.png";
import AnimatedArrowUp from "@/components/animatedArrows/AnimatedArrowUp";

export function FaqsSection() {
  return (
    <Container className="xl:space-y-12 space-y-8">
      <SectionTitle title="Have Any Questions?"></SectionTitle>
      <div className="grid gap-8 sm:grid-cols-2">
        {/* Left column with image and contact info */}
        <div className="flex flex-col">
          <Image
            src={sectionImage}
            alt="Customer support team"
            width={600}
            height={400}
            className="h-auto w-full object-cover"
          />

          <div className="mt-4 space-y-4">
            <p className=" text-black text-xl font-medium">
              Need more assistance? Reach out to us for personalized support.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white backdrop-blur-sm hover:bg-white/70 transition-colors  text-black px-6 py-2 rounded-md w-fit group  font-bold"
            >
              Contact Us
              <AnimatedArrowUp size={20} />
            </Link>
          </div>
        </div>

        {/* Right column with accordion */}
        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems?.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger
                  className="py-4 text-left  hover:no-underline xl:text-lg font-medium"
                  defaultChecked={item.defaultOpen}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-1 text-[#8A8A8A] font-medium">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
}
