"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MessageSquare, Send, CheckCircle, Loader2 } from "lucide-react";
import { z } from "zod";
import { useAddFeedbackMutation } from "@/redux/api/feedbacksApi";
import { Error_Modal } from "@/modals";
import AllReceivedFeedbacks from "./AllReceivedFeedbacks";

export const feedbackSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  comment: z
    .string()
    .min(10, "Feedback must be at least 10 characters")
    .max(1000, "Feedback must be less than 1000 characters"),
});

export type FeedbackFormData = z.infer<typeof feedbackSchema>;

export default function ReceiveFeedbackSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addFeedback, { isLoading }] = useAddFeedbackMutation();

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await addFeedback({ message: data?.comment, ...data }).unwrap();

      setIsSubmitted(true);
      form.reset();

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 space-y-10">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-8 pb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                Your feedback has been submitted successfully. We appreciate
                your input and you will notify once our service is completely
                available.
              </p>
            </CardContent>
          </Card>
        </div>
        <AllReceivedFeedbacks />
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#F2F4F6] space-y-10">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl xl:text-3xl text-gray-900">
              Share Your Thoughts
            </CardTitle>
            <CardDescription className="text-gray-600 max-w-2xl text-lg mx-auto">
              Tell us what you think about our car rental service. We will
              appreciate your feedback. You will notify once our service is
              completely available.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Full Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-5 bg-slate-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-5 bg-slate-50"
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
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Your Feedback *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share your thoughts, suggestions, or expectations for our service."
                          rows={5}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none md:h-[100px] bg-slate-50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-[#0092B8] hover:bg-[#4e808f] text-white px-8 py-3 text-lg font-medium group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:rotate-45 duration-300" />
                        Submit Feedback
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <AllReceivedFeedbacks />
    </section>
  );
}
