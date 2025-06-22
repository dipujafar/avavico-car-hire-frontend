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
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { useVerifyOtpMutation } from "@/redux/api/authApi";
import { error } from "console";
import LoadingSpin from "@/components/ui/loading-spin";

// ✅ Define form validation schema using Zod
const formSchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

const VerifyOtpForm = () => {
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await verifyOtp(data).unwrap();
      console.log(res);
      // router.push("/set-new-password");
    } catch (error) {
      // console.log(error)
    }
    // console.log("Submitted Data:", data);
    // router.push("/set-new-password");
  };

  return (
    <Card
      className="max-w-[742px] w-fit mx-auto shadow-none border-none lg:px-16 lg:py-10"
      style={{ boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.14)" }}
    >
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="md:space-y-6 space-y-4"
          >
            {/* OTP Input Field */}
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP
                      maxLength={6}
                      value={field.value}
                      onChange={field.onChange}
                      className="border "
                    >
                      <InputOTPGroup className="gap-x-2 ">
                        {Array(6)
                          .fill(null)
                          .map((_, index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="border lg:size-16 bg-[#F5F5F5]"
                            />
                          ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isLoading}
              className="w-full bg-primary-cyan group hover:bg-cyan-600"
            >
              Verify Code <AnimatedArrow></AnimatedArrow>
              {isLoading && <LoadingSpin />}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default VerifyOtpForm;
