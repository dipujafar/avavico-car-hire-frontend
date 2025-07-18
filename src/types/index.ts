export type TTestimonial = {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
};

export type TUserRoleData = {
  _id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  role: string;
};

export interface ICar {
  vendor: Vendor;
  carName: string;
  description: string;
  rentingLocation: IRentingLocation;
  carAmenities: string[];
  model: string;
  price: number;
  mileage: Mileage;
  seat: number;
  door: number;
  vin: string;
  fuel: number;
  fuelType: string;
  gearType: string;
  bodyStyle: string[];
  carImage: string[];
  childSeat: ChildSeat;
  additionalDriver: AdditionalDriver;
  youngDriver: YoungDriver;
  oneWayFees: OneWayFees;
  gps: Gps;
  crossBorder: CrossBorder;
  published: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  discount: string;
  brand: string;
  id: string;
  carPicDates: ICarPicDates[];
}

export type ICarPicDates = {
  pickUp: string;
  dropOff: string;
  _id: string;
  id: string;
};

export interface Vendor {
  sub: string;
  authProviderName: string;
  email: string;
  role: string;
  isDeleted: boolean;
  __t: string;
  isAuthProvider: boolean;
  passwordUpdatedAt: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Mileage {
  rate: number;
  type: string;
}

export interface ChildSeat {
  select: number;
  price: number;
}

export interface AdditionalDriver {
  select: number;
  price: number;
}

export interface YoungDriver {
  select: number;
  price: number;
}

export interface OneWayFees {
  select: number;
  price: number;
}

export interface Gps {
  select: number;
  price: number;
}

export interface CrossBorder {
  select: number;
  price: number;
}

export interface IRentingLocation {
  country: string;
  state: string;
  city: string;
  streetAddress: string;
  zipCode: string;
}

// ---------------------- type for blog ----------------------
export interface IBlog {
  author: IUser;
  blogName: string;
  details: string;
  blogImage: string[];
  category: string[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface IUserLocation {
  country: string;
  state: string;
  streetAddress: string;
  zipCode: string;
  city: string;
}

// ---------------------- type for user ----------------------
export interface IUser {
  firstName: string;
  lastName: string;
  userName: string;
  mobile: string;
  email: string;
  role: string;
  isDeleted: boolean;
  location: IUserLocation;
  __t: string;
  companyName: string;
  isAuthProvider: boolean;
  passwordUpdatedAt: string;
  createdAt: string;
  updatedAt: string;
  photo: string[];
  image: string;
  id: string;
}

// ----------------------------- type for reviews ---------------------------
export interface IReview {
  carId: ICar;
  userId: IUser;
  orderId: string;
  price: number;
  safety: number;
  accessibility: number;
  services: number;
  entertainment: number;
  support: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface IAvarageRating {
  totalReviews: number;
  avgPrice: number;
  avgService: number;
  avgSafety: number;
  avgEntertainment: number;
  avgAccessibility: number;
  avgSupport: number;
  overallRating: number;
}

export interface IOrderData {
  carId: ICar;
  userId: IUser;
  pickUp: string;
  dropOff: string;
  pickUpLocation: string;
  dropOffLocation: string;
  addExtra: Record<string, number>;
  discount: number;
  subTotal: number;
  total: number;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}
