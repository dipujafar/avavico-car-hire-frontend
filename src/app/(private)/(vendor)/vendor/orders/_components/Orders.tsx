"use client";
import { OrderCarRentalCard } from "@/components/shared/cards/OrderCarRentalCard"
import PaginationSection from "@/components/shared/pagination/PaginationSection";
const carRentals = [
  {
    id: "1",
    name: "Mercedes AMG Sports",
    description: "Powerful engine, luxurious interiors, perfect for road trips",
    image: "/details_image1.png",
    pickUpDate: "May 1, 2025",
    dropOffDate: "May 3, 2025",
    pickUpLocation: "New York City, Central Park",
    dropOffLocation: "New York City, Downtown",
    duration: "1 days",
    price: 125.0,
  },
  {
    id: "2",
    name: "BMW M4 Competition",
    description: "High-performance sports car with premium features",
    image: "/details_image1.png",
    pickUpDate: "June 10, 2025",
    dropOffDate: "June 15, 2025",
    pickUpLocation: "Los Angeles, Airport",
    dropOffLocation: "San Francisco, Downtown",
    duration: "5 days",
    price: 175.0,
  },
  {
    id: "3",
    name: "Tesla Model S Plaid",
    description: "Electric luxury sedan with incredible acceleration",
    image: "/details_image1.png",
    pickUpDate: "July 5, 2025",
    dropOffDate: "July 8, 2025",
    pickUpLocation: "Miami, South Beach",
    dropOffLocation: "Miami, Airport",
    duration: "3 days",
    price: 200.0,
  },
]

export default function Orders({status}: {status: string}) {
  return (
    <div className="py-4">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {carRentals.map((carRental) => (
          <OrderCarRentalCard
            status={status}
            key={carRental.id}
            carRental={carRental}
            onAccept={(id) => console.log(`Accepted rental for car ID: ${id}`)}
          />
        ))}
      </div>
      <PaginationSection totalItems={10}></PaginationSection>
    </div>
  )
}
