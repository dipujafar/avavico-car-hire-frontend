"use client";
import { Card, CardContent } from "@/components/ui/card";
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
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { useForgetPasswordMutation } from "@/redux/api/authApi";
import LoadingSpin from "@/components/ui/loading-spin";
import { Error_Modal } from "@/modals";
import { toast } from "sonner";
import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
});

const ForgetPassForm = () => {
  const [forgetPass, { isLoading }] = useForgetPasswordMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await forgetPass(data).unwrap();
      if (res?.data?.token) {
        dispatch(
          setUser({
            token: res?.data?.token,
          })
        );
        toast.success("Sent OTP on your email! Please check your inbox.");
         router.push("/verify-otp?for=forgetPassword");
      }

     
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <Card
      className="max-w-[742px] mx-auto shadow-none border-none"
      style={{ boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.14)" }}
    >
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

            <Button
              disabled={isLoading}
              className="w-full bg-primary-cyan group hover:bg-cyan-600"
            >
              Send <AnimatedArrow></AnimatedArrow>{" "}
              {isLoading && <LoadingSpin />}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ForgetPassForm;
