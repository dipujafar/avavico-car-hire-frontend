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
import { useAddNewCarMutation, useUpdateCarMutation } from "@/redux/api/carApi";
import { Label } from "@/components/ui/label";
import CountryStateCitySelector from "@/components/ui/country-state-city-selector";
import LoadingSpin from "@/components/ui/loading-spin";
import { Error_Modal } from "@/modals";
import { toast } from "sonner";
import { ICar } from "@/types";
import { formSchema } from "./schema";

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

const bodyStyles = [
  { id: "sedan", label: "Sedan" },
  { id: "suv", label: "SUV" },
  { id: "coupe", label: "Coupe" },
  { id: "bmw", label: "BMW" },
  { id: "hatchback", label: "Hatchback" },
];

const fuelTypes = [
  { id: "Petrol", label: "Petrol" },
  { id: "Piesel", label: "Diesel" },
  { id: "Electric", label: "Electric" },
  { id: "Hybrid", label: "Hybrid" },
  { id: "Gas", label: "Gas" },
];

const transmissions = [
  { value: "Manual", label: "Manual" },
  { value: "Automatic", label: "Automatic" },
];

const additionalOptions = [
  { id: "child_seat", label: "Child Seat" },
  { id: "additional_driver", label: "Additional Driver" },
  { id: "young_driver", label: "Young Driver" },
  { id: "one_way_fees", label: "One way Fees" },
  { id: "GPS", label: "GPS" },
  { id: "cross_border", label: "Cross Border" },
];

type FormValues = z.infer<typeof formSchema>;

export function AddCarModal({
  open,
  setOpen,
  defaultData,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  defaultData?: ICar;
}) {
  const [addNewCar, { isLoading }] = useAddNewCarMutation();
  const [updateCar, { isLoading: updateLoading }] = useUpdateCarMutation();
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
  const [defaultImages, setDefaultImages] = useState<string[] | null>(
    defaultData?.carImage || []
  );

  const additionalOptionsDefault = {
    child_seat: {
      option: defaultData?.childSeat?.select?.toString(),
      price: defaultData?.childSeat?.price,
    },
    additional_driver: {
      option: defaultData?.additionalDriver?.select?.toString(),
      price: defaultData?.additionalDriver?.price,
    },
    young_driver: {
      option: defaultData?.youngDriver?.select?.toString(),
      price: defaultData?.youngDriver?.price,
    },
    one_way_fees: {
      option: defaultData?.oneWayFees?.select?.toString(),
      price: defaultData?.oneWayFees?.price,
    },
    GPS: {
      option: defaultData?.gps?.select?.toString(),
      price: defaultData?.gps?.price,
    },
    cross_border: {
      option: defaultData?.crossBorder?.select?.toString(),
      price: defaultData?.crossBorder?.price,
    },
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: defaultData?.carName || "",
      description: defaultData?.description || "",
      model: defaultData?.model || "",
      price: defaultData?.price || undefined,
      discount: Number(defaultData?.discount) || 0,
      mileage: defaultData?.mileage?.rate || undefined,
      mileageType: defaultData?.mileage?.type || "",
      brand: defaultData?.brand || "",
      seats: defaultData?.seat.toString() || "",
      doors: defaultData?.door.toString() || "",
      vin: defaultData?.vin || "",
      fuelLoad: defaultData?.fuel || undefined,
      bodyStyle: defaultData?.bodyStyle || [],
      gearType: defaultData?.gearType || "",
      fuelType: defaultData?.fuelType || "",
      country: defaultData?.rentingLocation?.country || "",
      streetAddress: defaultData?.rentingLocation?.streetAddress || "",
      city: defaultData?.rentingLocation?.city || "",
      state: defaultData?.rentingLocation?.state || "",
      zipCode: defaultData?.rentingLocation?.zipCode || "",
      additionalOptions: additionalOptionsDefault || {},
    },
  });

  const { register, setValue, control } = form;

  async function onSubmit(data: FormValues) {
    const formattedData = {
      carName: data?.name,
      description: data?.description,
      rentingLocation: {
        country: data?.country,
        state: data?.state,
        city: data?.city || data?.state,
        streetAddress: data?.streetAddress,
        zipCode: data?.zipCode,
      },
      model: data?.model,
      brand: data?.brand,
      price: data?.price,
      discount: data?.discount,
      mileage: {
        rate: data?.mileage,
        type: data?.mileageType,
      },
      seat: data?.seats,
      door: data?.doors,
      vin: data?.vin,
      fuel: data?.fuelLoad,
      fuelType: data?.fuelType,
      gearType: data?.gearType,
      bodyStyle: data?.bodyStyle,
      childSeat: {
        select: Number(data?.additionalOptions?.child_seat?.option) || 0,
        price: data?.additionalOptions?.child_seat?.price || 0,
      },
      additionalDriver: {
        select: Number(data?.additionalOptions?.additional_driver?.option) || 0,
        price: data?.additionalOptions?.additional_driver?.price || 0,
      },
      youngDriver: {
        select: Number(data?.additionalOptions?.young_driver?.option) || 0,
        price: data?.additionalOptions?.young_driver?.price || 0,
      },
      oneWayFees: {
        select: Number(data?.additionalOptions?.one_way_fees?.option) || 0,
        price: data?.additionalOptions?.one_way_fees?.price || 0,
      },
      gps: {
        select: Number(data?.additionalOptions?.GPS?.option) || 0,
        price: data?.additionalOptions?.GPS?.price || 0,
      },
      crossBorder: {
        select: Number(data?.additionalOptions?.cross_border?.option) || 0,
        price: data?.additionalOptions?.cross_border?.price || 0,
      },
    };

    if (defaultData) {
      const formData = new FormData();
      data?.images?.forEach((image) => {
        formData.append("carImage", image.file);
      });

      formData.append(
        "data",
        JSON.stringify({ carImage: defaultData?.carImage, ...formattedData })
      );
      try {
        await updateCar({
          id: defaultData?.id,
          data: formData,
        }).unwrap();
      } catch (err: any) {
        Error_Modal({ title: err?.data?.message });
      }
    } else {
      if (!data?.images?.length)
        return toast.error("Please upload at least one image.");

      const formData = new FormData();
      data?.images?.forEach((image) => {
        formData.append("carImage", image.file);
      });

      formData.append("data", JSON.stringify(formattedData));

      try {
        await addNewCar(formData).unwrap();
        toast.success("Car Successfully Uploaded.");
        form.reset();
        setOpen(false);
      } catch (err: any) {
        Error_Modal({ title: err?.data?.message });
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full h-screen overflow-y-auto px-0 scroll-hide ">
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
                      <FormLabel>
                        Attach Image{" "}
                        <span className="text-xs">
                          (Recommendation: upload 9 images)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <ImageUpload
                          // @ts-ignore
                          value={field.value}
                          onChange={field.onChange}
                          maxImages={9}
                          defaultImages={defaultImages}
                          setDefaultImages={setDefaultImages}
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

                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Car Brand</FormLabel>
                      <Input
                        placeholder="Enter car brand name"
                        {...field}
                        className="bg-[#F8FAFC] py-5 border-[#707071 rounded-none"
                      />
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
                  name="discount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount (%)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter discount percentage"
                          {...field}
                          className="bg-[#F8FAFC] py-5 border-[#707071 rounded-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
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
                  </div>
                  <FormField
                    control={form.control}
                    name="mileageType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <FormControl>
                          <select
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="w-full border border-gray-300 px-3 py-2 bg-[#F8FAFC]"
                          >
                            <option value="" disabled className="text-gray-500">
                              Select
                            </option>
                            <option key={"km"} value={"km"}>
                              km
                            </option>
                            <option key={"mi"} value={"mi"}>
                              mi
                            </option>
                            <option key={"m"} value={"m"}>
                              m
                            </option>
                            <option key={"nmi"} value={"nmi"}>
                              nmi
                            </option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                      <FormLabel>Fuel Capacity (Liters)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter how much fuel able to carry"
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
                            className="text-[#C99400] flex items-center gap-x-1 cursor-pointer text-sm "
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
                    name="fuelType"
                    render={({ field }) => (
                      <FormItem>
                        <div className="mb-1">
                          <FormLabel>Fuel Type</FormLabel>
                        </div>
                        <FormControl>
                          <select
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="w-full border   px-3 py-2 bg-[#F8FAFC]"
                          >
                            <option value="" disabled>
                              Select fuel type
                            </option>
                            {[...fuelTypes, ...customFuelTypes].map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.label}
                              </option>
                            ))}
                          </select>
                        </FormControl>

                        <div className="mt-0.5">
                          <p
                            className="text-[#C99400] flex items-center gap-x-1 cursor-pointer text-sm"
                            onClick={() =>
                              setShowAdditionalOptionsFuelType(true)
                            }
                          >
                            <PlusIcon size={20} />
                            Add More Fuel Types
                          </p>
                        </div>

                        {/* Add additional input */}
                        <div
                          className={cn(
                            "mt-1 items-center gap-2 hidden relative",
                            showAdditionalFuelType && "flex"
                          )}
                        >
                          <div className="relative flex-1">
                            <div
                              className="absolute right-1 top-0.5 bg-red-500 rounded-full size-4 flex justify-center items-center text-white cursor-pointer"
                              onClick={() =>
                                setShowAdditionalOptionsFuelType(false)
                              }
                            >
                              <X size={14} />
                            </div>
                            <Input
                              value={newFuelType}
                              onChange={(e) => setNewFuelType(e.target.value)}
                              placeholder="Add Another  Fuel Type"
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
                  name="gearType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gear Type</FormLabel>
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

                <div className="grid w-full  items-center gap-1.5">
                  <Label>Pick Up Location</Label>
                  <CountryStateCitySelector
                    control={control}
                    setValue={setValue}
                    register={register}
                    className="w-full rounded-none bg-[#F8FAFC] py-5"
                    userAddress={{
                      country: defaultData?.rentingLocation?.country,
                      state: defaultData?.rentingLocation?.state,
                      city: defaultData?.rentingLocation?.city,
                    }}
                  />
                  <div className="flex gap-1.5 flex-wrap">
                    {
                      // @ts-ignore
                      form.formState.errors?.country && (
                        <p className="text-red-600 text-sm mt-1">
                          {form.formState.errors?.country.message}
                        </p>
                      )
                    }
                    {
                      // @ts-ignore
                      form.formState.errors?.state && (
                        <p className="text-red-600 text-sm mt-1">
                          {form.formState.errors?.state.message}
                        </p>
                      )
                    }

                    {
                      // @ts-ignore
                      form.formState.errors?.city && (
                        <p className="text-red-600 text-sm mt-1">
                          {form.formState.errors?.city.message}
                        </p>
                      )
                    }

                    {
                      // @ts-ignore
                      form.formState.errors?.streetAddress && (
                        <p className="text-red-600 text-sm mt-1">
                          {form.formState.errors?.streetAddress.message}
                        </p>
                      )
                    }
                    {
                      // @ts-ignore
                      form.formState.errors?.zipCode && (
                        <p className="text-red-600 text-sm mt-1">
                          {form.formState.errors?.zipCode.message}
                        </p>
                      )
                    }
                  </div>
                </div>

                {additionalOptions?.map((option) => {
                  const selected = form.watch(
                    `additionalOptions.${option.id}.option`
                  );
                  return (
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
                                <SelectTrigger className="w-full bg-[#F8FAFC] py-5 border-[#707071] rounded-none">
                                  <SelectValue placeholder="Select One" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">Yes</SelectItem>
                                <SelectItem value="0">No</SelectItem>
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
                                placeholder="Amount for 1"
                                {...field}
                                disabled={!selected}
                                className={`w-full bg-[#F8FAFC] py-5 border-[#707071] rounded-none ${
                                  !selected
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }`}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  );
                })}

                <Button
                  disabled={isLoading || updateLoading}
                  type="submit"
                  className="w-full bg-primary-cyan hover:bg-cyan-600 rounded-none py-5"
                >
                  Upload {(isLoading || updateLoading) && <LoadingSpin />}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
