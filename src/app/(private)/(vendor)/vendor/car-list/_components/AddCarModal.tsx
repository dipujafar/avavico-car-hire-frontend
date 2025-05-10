"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ImageUpload } from "@/components/shared/image-upload";
import { PlusIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

const colors = [
  { label: "Black", value: "black" },
  { label: "White", value: "white" },
  { label: "Silver", value: "silver" },
  { label: "Gray", value: "gray" },
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
];

const dropdownData = [
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
];

const years = Array.from({ length: 30 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { label: year.toString(), value: year.toString() };
});

const bodyStyles = [
  { id: "sedan", label: "Sedan" },
  { id: "suv", label: "SUV" },
  { id: "coupe", label: "Coupe" },
  { id: "bmw", label: "BMW" },
  { id: "hatchback", label: "Hatchback" },
];

const fuelTypes = [
  { id: "petrol", label: "Petrol" },
  { id: "diesel", label: "Diesel" },
  { id: "electric", label: "Electric" },
  { id: "hybrid", label: "Hybrid" },
  { id: "gas", label: "Gas" },
];

const transmissions = [
  { value: "manual", label: "Manual" },
  { value: "automatic", label: "Automatic" },
];

const additionalOptions = [
  { id: "child_seat", label: "Child Seat" },
  { id: "additional_driver", label: "Additional Driver" },
  { id: "young_driver", label: "Young Driver" },
  { id: "one_way_fees", label: "One way Fees" },
  { id: "GPS", label: "GPS" },
  { id: "cross_border", label: "Cross Border" },
];

const formSchema = z.object({
  images: z.array(z.string()).min(1, "At least one image is required"),
  name: z.string().min(1, "Car model is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  model: z.string().min(1, "Make is required"),
  price: z.coerce.number().positive("Price must be a positive number"),
  mileage: z.coerce.number().positive("Mileage must be a positive number"),
  year: z.string().min(1, "Year is required"),
  color: z.string().min(1, "Color is required"),
  seats: z.string().min(1, "Door configuration is required"),
  doors: z.string().min(1, "Door configuration is required"),
  vin: z.string().min(1, "VIN is required"),
  fuelLoad: z.coerce.number().positive("Fuel load must be a positive number"),
  bodyStyle: z.array(z.string()).min(1, "At least one body style is required"),
  transmission: z.string().min(1, "Transmission is required"),
  fuelType: z.array(z.string()).min(1, "At least one fuel type is required"),
  additionalOptions: z.record(
    z.string(),
    z.object({
      option: z.string().optional(),
      price: z.coerce.number().optional(),
    })
  ),
});

type FormValues = z.infer<typeof formSchema>;

export function AddCarModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [customBodyStyles, setCustomBodyStyles] = useState<
    { id: string; label: string }[]
  >([]);
  const [customFuelTypes, setCustomFuelTypes] = useState<
    { id: string; label: string }[]
  >([]);
  const [newBodyStyle, setNewBodyStyle] = useState("");
  const [newFuelType, setNewFuelType] = useState("");
  const [showAdditionalOptionsBody, setShowAdditionalOptionsBody] =
    useState(false);
  const [showAdditionalFuelType, setShowAdditionalOptionsFuelType] =
    useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      images: [],
      name: "",
      description: "",
      model: "",
      price: undefined,
      mileage: undefined,
      year: "",
      color: "",
      doors: "",
      vin: "",
      fuelLoad: undefined,
      bodyStyle: [],
      transmission: "",
      fuelType: [],
      additionalOptions: additionalOptions.reduce((acc, option) => {
        acc[option.id] = { option: "", price: undefined };
        return acc;
      }, {} as Record<string, { option?: string; price?: number }>),
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className="w-full h-screen overflow-y-auto px-0 scroll-hide">
        <Card className="border-none shadow-none">
          <CardContent className="pt-3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Image Upload Section */}
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Attach Image</FormLabel>
                      <FormControl>
                        <ImageUpload
                          value={field.value}
                          onChange={field.onChange}
                          maxImages={10}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Car Name</FormLabel>
                      <Input
                        placeholder="Enter car name"
                        {...field}
                        className="bg-[#F8FAFC] py-5 border-[#707071 rounded-none"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-[#F8FAFC] border-[#707071 rounded-none"
                          rows={5}
                          placeholder="Write a description..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Rest of the form fields remain the same */}

                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Model</FormLabel>
                      <Input
                        placeholder="Enter model"
                        {...field}
                        className="bg-[#F8FAFC] py-5 border-[#707071 rounded-none"
                      ></Input>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter price for per day"
                          {...field}
                          className="bg-[#F8FAFC] py-5 border-[#707071 rounded-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mileage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mileage</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="100"
                          {...field}
                          className="bg-[#F8FAFC] py-5 border-[#707071 rounded-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="seats"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seat</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-[#F8FAFC] py-5 border-[#707071 rounded-none">
                            <SelectValue placeholder="2" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {dropdownData.map((door) => (
                            <SelectItem key={door.value} value={door.value}>
                              {door.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="doors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Doors</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-[#F8FAFC] py-5 border-[#707071 rounded-none">
                            <SelectValue placeholder="4" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {dropdownData.map((door) => (
                            <SelectItem key={door.value} value={door.value}>
                              {door.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="vin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>VIN (Vehicle Information Number)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter VIN number"
                          {...field}
                          className="w-full bg-[#F8FAFC] py-5 border-[#707071 rounded-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fuelLoad"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Level</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter fuel level"
                          {...field}
                          className="w-full bg-[#F8FAFC] py-5 border-[#707071 rounded-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Rest of the form remains the same */}
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="bodyStyle"
                    render={() => (
                      <FormItem>
                        <div className="mb-1">
                          <FormLabel>Body style</FormLabel>
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-2 items-center">
                          {[...bodyStyles, ...customBodyStyles].map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="bodyStyle"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-1 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        className="bg-[#F8FAFC]"
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                item.id,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                          <p
                            className="text-[#C99400] flex items-center gap-x-1 cursor-pointer "
                            onClick={() => setShowAdditionalOptionsBody(true)}
                          >
                            <PlusIcon size={20}></PlusIcon> Add additional
                          </p>
                        </div>

                        {/* Add additional input */}
                        <div
                          className={cn(
                            "mt-1 x items-center gap-2 hidden relative",
                            showAdditionalOptionsBody && "flex"
                          )}
                        >
                          <div className="relative flex-1">
                            <div
                              className="absolute right-1 top-0.5 bg-red-500 rounded-full size-4 flex justify-center items-center text-white cursor-pointer"
                              onClick={() =>
                                setShowAdditionalOptionsBody(false)
                              }
                            >
                              <X size={14}></X>
                            </div>
                            <Input
                              value={newBodyStyle}
                              onChange={(e) => setNewBodyStyle(e.target.value)}
                              placeholder="Add Another Body Style"
                              className="w-full pr-5"
                            />
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              if (!newBodyStyle.trim()) return;
                              const newId = newBodyStyle
                                .toLowerCase()
                                .replace(/\s+/g, "-");
                              setCustomBodyStyles((prev) => [
                                ...prev,
                                { id: newId, label: newBodyStyle },
                              ]);
                              setNewBodyStyle("");
                            }}
                          >
                            Add
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ========= fuel type ============ */}
                  <FormField
                    control={form.control}
                    name="bodyStyle"
                    render={() => (
                      <FormItem>
                        <div className="mb-1">
                          <FormLabel>Fuel Type</FormLabel>
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-2 items-center">
                          {[...fuelTypes, ...customFuelTypes].map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="bodyStyle"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-1 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                         className="bg-[#F8FAFC]"
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                item.id,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                          <p
                            className="text-[#C99400] flex items-center gap-x-1 cursor-pointer "
                            onClick={() =>
                              setShowAdditionalOptionsFuelType(true)
                            }
                          >
                            <PlusIcon size={20}></PlusIcon> Add additional
                          </p>
                        </div>

                        {/* Add additional input */}
                        <div
                          className={cn(
                            "mt-1 x items-center gap-2 hidden relative",
                            showAdditionalFuelType && "flex"
                          )}
                        >
                          <div className="relative flex-1">
                            <div
                              className="absolute right-1 top-0.5 bg-red-500 rounded-full size-4 flex justify-center items-center text-white cursor-pointer"
                              onClick={() =>
                                setShowAdditionalOptionsBody(false)
                              }
                            >
                              <X size={14}></X>
                            </div>
                            <Input
                              value={newFuelType}
                              onChange={(e) => setNewFuelType(e.target.value)}
                              placeholder="Add Another Body Style"
                              className="w-full pr-5"
                            />
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              if (!newFuelType.trim()) return;
                              const newId = newFuelType
                                .toLowerCase()
                                .replace(/\s+/g, "-");
                              setCustomFuelTypes((prev) => [
                                ...prev,
                                { id: newId, label: newFuelType },
                              ]);
                              setNewFuelType("");
                            }}
                          >
                            Add
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="transmission"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transmission</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-[#F8FAFC] py-5 border-[#707071 rounded-none">
                            <SelectValue placeholder="Select One" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {transmissions.map((transmission) => (
                            <SelectItem
                              key={transmission.value}
                              value={transmission.value}
                            >
                              {transmission.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {additionalOptions.map((option) => (
                  <div
                    key={option.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    <FormField
                      control={form.control}
                      name={`additionalOptions.${option.id}.option`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{option.label}</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full bg-[#F8FAFC] py-5 border-[#707071 rounded-none">
                                <SelectValue placeholder="Select One" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="option1"> 1</SelectItem>
                              <SelectItem value="option2"> 2</SelectItem>
                              <SelectItem value="option3"> 3</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`additionalOptions.${option.id}.price`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Amount"
                              {...field}
                              className="w-full bg-[#F8FAFC] py-5 border-[#707071 rounded-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}

                <Button
                  type="submit"
                  className="w-full bg-primary-cyan hover:bg-cyan-600 rounded-none py-5"
                >
                 Upload
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
