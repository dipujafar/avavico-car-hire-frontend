"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
import { AppleIcon, GoogleIcon } from "@/components/icons";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useLoginMutation } from "@/redux/api/authApi";
import LoadingSpin from "@/components/ui/loading-spin";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/authSlice";
import { jwtDecode } from "jwt-decode";
import { Error_Modal } from "@/modals";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password is required" })
    .min(8, { message: " passwords must be at least 8 characters long" })
    .max(64, { message: " passwords must be at most 64 characters long" }),
});

const SignInForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const redirectUrl = useSearchParams()?.get("redirect");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const formattedData = {
      data: {
        email: data?.email,
        password: data?.password,
      },
    };

    try {
      const res = await login(formattedData).unwrap();
      toast.success("Login Successfully");
      dispatch(
        setUser({
          user: jwtDecode(res?.data?.accessToken),
          token: res?.data?.accessToken,
        })
      );
      if(res?.data?.user?.role && redirectUrl){
        router.push(decodeURIComponent(redirectUrl));
        return
      }
      if (res?.data?.user?.role === "User") {
        router.replace("/user/profile");
        return
      }
      if(res?.data?.user?.role === "Vendor"){
        router.push("/vendor/profile");
        return
      }
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <Card
      className="max-w-[742px] mx-auto shadow-none border-none"
      style={{ boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.08)" }}
    >
      <CardHeader>
        <div className="flex justify-between">
          <Link
            href={"/sign-up"}
            className="flex-1 flex justify-center items-center px-2.5 py-3 hover:bg-gray-100  hover:text-primary-cyan duration-500 rounded-l-sm"
          >
            Sign Up
          </Link>

          <div className="flex-1 flex justify-center items-center bg-primary-cyan text-white rounded-r-sm px-2.5 py-3">
            Sign In
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="md:space-y-6 space-y-4"
          >
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

            <div className="flex flex-col justify-between gap-y-3 md:flex-row">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="border-[#545454]" />
                <label htmlFor="terms" className="text-[#545454]">
                  Remember me
                </label>
              </div>
              <Link href="/forget-password">
                <p className="text-[#545454]">Forgot Password</p>
              </Link>
            </div>

            <Button
              disabled={isLoading}
              className="w-full group py-5 bg-primary-cyan hover:bg-cyan-600"
            >
              SIGN IN <AnimatedArrow></AnimatedArrow>
              {isLoading && <LoadingSpin />}
            </Button>

            <div className="flex items-center justify-center gap-x-2">
              <p className="text-secondary-gray">Don&apos;t have an account?</p>
              <Link href={"/sign-up"}>
                <span className="text-lg text-[#E12728] font-medium underline">
                  Sign Up
                </span>
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
      {/* <CardFooter className="flex-col gap-y-3">
        <div className="flex  items-center justify-center w-full gap-x-2 text-primary-gray">
          <span className="w-16 h-[0.5px] bg-primary-gray"></span>
          <p className="w-fit">Or, Log in with </p>
          <span className="w-16   h-[0.5px] bg-primary-gray"></span>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <GoogleIcon />
          <AppleIcon />
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default SignInForm;
