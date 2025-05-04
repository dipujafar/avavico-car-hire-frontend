import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { CalenderIcon, CarIcon2, SettingIcon } from "@/components/icons";

// Define the type for our service items
type ServiceItem = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Create an array of service data
const servicesData: ServiceItem[] = [
  {
    id: "car-rentals",
    icon: <CarIcon2/>,
    title: "Car Rentals",
    description:
      "Choose from a variety of cars, including economy, luxury, SUVs, and electric vehicles. Whether you're going on a business trip or a weekend getaway, we have the perfect vehicle for you.",
  },
  {
    id: "flexible-plans",
    icon: <CalenderIcon/>,
    title: "Flexible Rental Plans",
    description:
      "Enjoy flexible rental durations. Whether you need a car for a few hours, a week, or a month, we have options that suit your schedule and budget.",
  },
  {
    id: "customer-support",
    icon: <SettingIcon/>,
    title: "24/7 Customer Support",
    description:
      "Our 24/7 roadside assistance is just a call away, ensuring that you're never left stranded. From flat tires to fuel issues, we're here to help.",
  },
];

export default function OurServices() {
  return (
    <Container>
      <div className=" xl:mb-10 mb-7">
        <p className="text-xl  uppercase tracking-wider text-black">
          WHAT WE DO
        </p>
        <SectionTitle title="Our Services"></SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <Card
            key={service.id}
            className="border bg-white shadow-none hover:shadow-md transition-shadow border-none"
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-start gap-4">
                <div>{service.icon}</div>
                <h3 className="text-xl font-semibold text-[]">
                  {service.title}
                </h3>
                <p className=" text-[#5B5B5B]">{service.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
