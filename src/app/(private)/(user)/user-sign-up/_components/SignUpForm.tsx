"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { useCreateUserMutation } from "@/redux/api/authApi";
import LoadingSpin from "@/components/ui/loading-spin";
import { Label } from "@/components/ui/label";
import CountryStateCitySelector from "@/components/ui/country-state-city-selector";
import { Error_Modal } from "@/modals";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z
  .object({
    firstName: z
      .string({ required_error: "First Name is required" })
      .min(1, { message: "First Name is required" }),
    lastName: z
      .string({ required_error: "Last Name is required" })
      .min(1, { message: "Last Name is required" }),
    userName: z
      .string({ required_error: "User Name is required" })
      .min(1, { message: "User Name is required" }),
    phoneNumber: z
      .string({ required_error: "Phone Number is required" })
      .min(1, { message: "Phone Number is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),
    location: z
      .string({ required_error: "Location is required" })
      .min(1, { message: "Location is required" }),
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
    password: z
      .string({ required_error: "Password is required" })
      .min(1, { message: "Password is required" })
      .min(8, { message: " passwords must be at least 8 characters long" })
      .max(64, { message: " passwords must be at most 64 characters long" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
        }
      ),
    confirmPassword: z
      .string({ required_error: "Confirm Password is required" })
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpForm = () => {
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, setValue, control } = form;

  // ============================ Form Submit to API for Create User ====================================
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const formattedData = {
      data: {
        firstName: data?.firstName,
        lastName: data?.lastName,
        userName: data?.userName,
        email: data?.email,
        location: data?.location,
        // location: {
        //   country: data?.country,
        //   state: data?.state,
        //   city: data?.city,
        //   streetAddress: data?.streetAddress,
        //   zipCode: data?.zipCode,
        // },
        mobile: data?.phoneNumber,
        password: data?.password,
        role: "User",
        agreeTcp: true,
      },
    };

    try {
      const res = await createUser(formattedData).unwrap();
      if (res.success) {
        toast.success("User Created Successfully");
        toast.success("Please verify your email with OTP, which has been send to your email.");
        router.push("/verify-otp");
      }
    } catch (error: any) {
      Error_Modal({ title: "Error", text: error?.data?.message });
    }
  };

  return (
    <Card
      className="max-w-[742px] mx-auto shadow-none border-none"
      style={{ boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.14)" }}
    >
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex-1 flex justify-center items-center bg-primary-cyan  rounded-l-sm text-white px-2.5 py-3">
            Sign Up
          </div>

          <Link
            href={"/sign-in"}
            className="flex-1 flex justify-center items-center px-2.5 py-3 hover:bg-gray-100  hover:text-primary-cyan duration-500 rounded-r-sm"
          >
            Sign In
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="md:space-y-6 space-y-4"
          >
            <div className=" flex flex-col md:flex-row md:items-center  gap-4 ">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your First Name"
                          {...field}
                          className="focus-visible:ring-0  focus-visible:ring-offset-0  rounded bg-[#F5F5F5] md:py-5 "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Last Name"
                          {...field}
                          className="focus-visible:ring-0  focus-visible:ring-offset-0  rounded bg-[#F5F5F5] md:py-5 "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your User Name"
                      {...field}
                      className="focus-visible:ring-0  focus-visible:ring-offset-0  rounded bg-[#F5F5F5] md:py-5 "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      // @ts-ignore
                      value={field.value}
                      onChange={field.onChange}
                      international
                      defaultCountry="US"
                      bgColor="#F5F5F5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Location"
                      {...field}
                      className="focus-visible:ring-0  focus-visible:ring-offset-0  rounded bg-[#F5F5F5] md:py-5 "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country, State, City Selector */}
            <div className="grid w-full  items-center gap-1.5">
              <Label>Location</Label>
              <CountryStateCitySelector
                control={control}
                setValue={setValue}
                register={register}
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

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Email"
                      {...field}
                      className="focus-visible:ring-0  focus-visible:ring-offset-0  rounded bg-[#F5F5F5] md:py-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        {...field}
                        className="focus-visible:ring-0  focus-visible:ring-offset-0  rounded bg-[#F5F5F5] md:py-5"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        {showPassword ? (
                          <div
                            onClick={() => setShowPassword(false)}
                            className="cursor-pointer"
                          >
                            <Eye color="#A5A7A9" />
                          </div>
                        ) : (
                          <div
                            onClick={() => setShowPassword(true)}
                            className="cursor-pointer"
                          >
                            <EyeOff color="#A5A7A9" />
                          </div>
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        {...field}
                        className="focus-visible:ring-0  focus-visible:ring-offset-0  rounded bg-[#F5F5F5] md:py-5"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        {showConfirmPassword ? (
                          <div
                            onClick={() => setShowConfirmPassword(false)}
                            className="cursor-pointer"
                          >
                            <Eye color="#A5A7A9" />
                          </div>
                        ) : (
                          <div
                            onClick={() => setShowConfirmPassword(true)}
                            className="cursor-pointer"
                          >
                            <EyeOff color="#A5A7A9" />
                          </div>
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                className="border-[#545454]"
                checked={agree}
                onCheckedChange={() => setAgree(!agree)}
              />
              <label htmlFor="terms" className="text-[#545454]">
                By hitting the "Register" button, you agree to the{" "}
                <Link
                  href={"/terms-conditions"}
                  className="text-[#E12728] font-medium"
                >
                  Terms conditions
                </Link>{" "}
                &{" "}
                <Link
                  href={"/terms-conditions"}
                  className="text-[#E12728] font-medium"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              disabled={!agree || isLoading}
              className="w-full group py-5 bg-primary-cyan hover:bg-cyan-600"
            >
              SIGN UP <AnimatedArrow></AnimatedArrow>
              {isLoading && <LoadingSpin />}
            </Button>

            <div className="flex justify-center gap-x-2">
              <p className="text-secondary-gray">Have an account?</p>
              <Link href={"/sign-in"}>
                <span className="text-lg text-primary-red font-medium underline">
                  Sign In
                </span>
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
