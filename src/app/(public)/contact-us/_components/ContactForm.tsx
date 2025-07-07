"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { PhoneInput } from "@/components/ui/phone-input";
import { useContactMutation } from "@/redux/api/contactApi";
import { toast } from "sonner";
import { Error_Modal } from "@/modals";
import LoadingSpin from "@/components/ui/loading-spin";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [sendMail, { isLoading }] = useContactMutation();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      await sendMail(values).unwrap();
      toast.success("Message sent successfully! We will get back to you soon.");
      form.reset();
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  }

  return (
    <div>
      <h2 className="xl:text-4xl md:text-3xl text-2xl font-bold mb-6">
        Get in touch
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      className="py-5 focus-visible:ring-0 bg-[#F5F5F5]"
                      placeholder="Enter your first name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      className="py-5 focus-visible:ring-0 bg-[#F5F5F5]"
                      placeholder="Enter your last name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    className="py-5 focus-visible:ring-0 bg-[#F5F5F5]"
                    placeholder="Enter your email"
                    {...field}
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
                <FormLabel>Phone number</FormLabel>
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Leave us a message..."
                    className="min-h-[100px] bg-[#F5F5F5]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            type="submit"
            className="w-full bg-primary-cyan hover:bg-cyan-600 group"
          >
            Send message {isLoading && <LoadingSpin/>}
            <AnimatedArrow></AnimatedArrow>
          </Button>
        </form>
      </Form>
    </div>
  );
}
