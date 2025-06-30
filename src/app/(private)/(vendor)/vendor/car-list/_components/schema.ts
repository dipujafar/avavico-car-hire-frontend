import * as z from "zod";
const imageSchema = z.object({
  file: z.instanceof(File),
  preview: z.string().url().or(z.string().startsWith("data:image/")),
});

export const formSchema = z.object({
  images: z.array(imageSchema).optional() || [],
  name: z.string().min(1, "Car model is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Make is required"),
  price: z.coerce
    .number()
    .positive("Price must be a positive number")
    .optional(),
  discount: z.coerce.number().positive("Discount must be a positive number"),
  mileage: z.coerce.number().positive("Mileage must be a positive number"),
  mileageType: z.string().min(1, "Mileage type is required"),
  // year: z.string().min(1, "Year is required"),
  // color: z.string().min(1, "Color is required"),
  seats: z.string().min(1, "Door configuration is required"),
  doors: z.string().min(1, "Door configuration is required"),
  vin: z.string().min(1, "VIN is required"),
  fuelLoad: z.coerce.number().positive("Fuel load must be a positive number"),
  bodyStyle: z.array(z.string()).min(1, "At least one body style is required"),
  gearType: z.string().min(1, "Transmission is required"),
  fuelType: z.string().min(1, "Fuel type is required"),
  country: z.string({
    required_error: "Please select a country.",
  }),
  streetAddress: z.string().min(5, {
    message: "Street address required.",
  }),
  city: z.string().optional(),
  state: z.string({
    required_error: "Please select a state.",
  }),
  zipCode: z.string().min(5, {
    message: "Zip code must be at least 5 characters.",
  }),
  additionalOptions: z.record(
    z.string(),
    z.object({
      option: z.string().optional(),
      price: z.coerce.number().optional(),
    })
  ),
});

