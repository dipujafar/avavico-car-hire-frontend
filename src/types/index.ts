

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
 
}

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
  author: IUser
  blogName: string
  details: string
  blogImage: string[]
  category: string[]
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  id: string
}


// ---------------------- type for user ----------------------
export interface IUser {
  firstName: string
  lastName: string
  userName: string
  mobile: string
  email: string
  role: string
  isDeleted: boolean
  __t: string
  companyName: string
  isAuthProvider: boolean
  passwordUpdatedAt: string
  createdAt: string
  updatedAt: string
  image: string
  id: string
}