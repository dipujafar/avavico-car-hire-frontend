export type TCar = {
    id: string;
    name: string;
    location: string;
    imageUrl: string;
    rating: number;
    reviewCount: number;
    distanceIncluded: string;
    transmission: "";
    fuelType: "";
    seatingCapacity: number;
    pricePerDay: number;
    availability: boolean;
    licensePlate: string;
    vehicleType: "";
  };
  

  export type TBlogPost =  {
    id: string
    title: string
    imageUrl: string
    date: string
    category: "Road Trip" | "Eco Friendly" | "Safe Driving"
    slug: string
  }
  

  export type TTestimonial = {
    id: string
    name: string
    date: string
    rating: number
    comment: string
    avatar: string
  }