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
import { toast } from "sonner";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { useSubscribeMutation } from "@/redux/api/newsLetterApi";
import { Error_Modal } from "@/modals";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function NewsletterForm() {
  const [subscribe, { isLoading }] = useSubscribeMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await subscribe(values).unwrap();
      toast.success("Successfully subscribed to our newsletter!");
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
    // Handle form submission here
    // console.log(values);
    form.reset();
  }

  return (
    <Container className="w-full  p-6 max-w-6xl">
      <div className="text-center mb-6">
        <SectionTitle
          title="Subscribe Our Newsletter"
          subtitle="Get the latest updates and news delivered to your inbox."
          subTitleClassName="text-center  max-w-full"
          //   className="xl:text-4xl md:text-3xl text-2xl font-semibold text-gray-800 mb-2"
        ></SectionTitle>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex  gap-x-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent flex-1 bg-gray-50 shadow-lg"
                    {...field}
                  />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            type="submit"
            className=" bg-gray-800 hover:bg-gray-700 text-white font-medium h-[40px] px-4 rounded-md transition-colors  shadow-lg"
          >
            Subscribe
          </Button>
        </form>
      </Form>
    </Container>
  );
}
