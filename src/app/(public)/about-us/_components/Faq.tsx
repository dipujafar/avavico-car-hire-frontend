"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import Container from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Faq() {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  const faqs = [
    {
      id: "item-0",
      number: "01",
      question: "How do I book a car rental with AVA VICO?",
      answer:
        "Booking a car rental with AVA VICO is simple and can be done through our online platform. Include information when searching for destinations, selecting dates, choosing accommodation, and confirming the booking process. Mention any special features or tools that can help users find the best deals.",
    },
    {
      id: "item-1",
      number: "02",
      question:
        "How do I book a car rental with AVA VICO, and what options are available during the renting process?",
      answer:
        "We offer a variety of options during the rental process including vehicle types, insurance coverage, additional drivers, and special equipment. You can select these options during the booking process on our website or mobile app.",
    },
    {
      id: "item-2",
      number: "03",
      question:
        "What specific documents and identification are required to rent a car from AVA VICO?",
      answer:
        "You'll need a valid driver's license, a major credit card in the renter's name, and proof of insurance. International renters may need an International Driving Permit alongside their national driver's license.",
    },
    {
      id: "item-3",
      number: "04",
      question:
        "Is insurance automatically included in the rental price, and what additional coverage options are available?",
      answer:
        "Basic insurance is included in the rental price, but we offer additional coverage options like Collision Damage Waiver (CDW), Personal Accident Insurance (PAI), and Roadside Assistance for comprehensive protection during your rental period.",
    },
    {
      id: "item-4",
      number: "05",
      question:
        "Can I modify or cancel my booking after it's been confirmed, and what are the terms and conditions?",
      answer:
        "Yes, you can modify or cancel your booking through your account. Modifications are subject to availability, and cancellations follow our refund policy based on how far in advance you cancel. Please refer to our terms and conditions for specific details.",
    },
  ];

  const handleAccordionChange = (value: string) => {
    setOpenItem(value === openItem ? null : value);
  };

  return (
    <Container className="2xl:w-[80%] xl:w-[85%] mx-auto">
      <div className=" flex flex-col  gap-y-2 items-center mb-8">
        <Button
          variant="outline"
          className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-md px-4 py-2 text-sm"
        >
          Our Support
        </Button>
        <SectionTitle title="Frequently Asked Questions"></SectionTitle>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <Accordion
          type="single"
          value={openItem || ""}
          onValueChange={handleAccordionChange}
          className="border border-gray-100 rounded-lg"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className={cn(
                "border-b last:border-b-0",
                openItem === faq.id && "bg-[#F2F4F6]"
              )}
            >
              <div className="flex items-start p-4 md:p-6">
                <div className="text-xl md:text-2xl font-semibold text-gray-400 mr-4 mt-1 w-8">
                  {faq.number}
                </div>
                <div className="flex-1">
                  <AccordionTrigger
                    showIcon={false}
                    className="flex justify-between items-start py-2 hover:no-underline"
                  >
                    <h3 className="text-left font-semibold text-xl ">
                      {faq.question}
                    </h3>
                    {openItem === faq.id ? (
                      <div onClick={() => handleAccordionChange("")} className="bg-[#101010]">
                        <X color="#fff" className="h-5 w-5 shrink-" />
                      </div>
                    ) : (
                      <div className="bg-[#E4E6E8]">
                        <Plus color="#000" className="h-5 w-5 shrink-0 " />
                      </div>
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
