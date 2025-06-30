"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { ImageUpload } from "@/components/shared/image-upload";
import { TextEditor } from "@/components/shared/TextEditor/text-editor";
import { useAddNewBlogMutation } from "@/redux/api/blogApi";
import { Error_Modal } from "@/modals";
import LoadingSpin from "@/components/ui/loading-spin";
import { toast } from "sonner";

const imageSchema = z.object({
  file: z.instanceof(File),
  preview: z.string().url().or(z.string().startsWith("data:image/")),
});

// Define the form schema with Zod
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Car name must be at least 2 characters." }),
  category: z.string().min(1, { message: "Category is required." }),
  details: z
    .string()
    .min(10, { message: "Details must be at least 10 characters." }),
  images: z.array(imageSchema).min(1, "At least one image is required"),
});

export type CarFormValues = z.infer<typeof formSchema>;

export function AddBlogModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [uploadBlog, { isLoading }] = useAddNewBlogMutation();
  const form = useForm<CarFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      details: "",
    },
  });

  const onSubmit = async (values: CarFormValues) => {
    // console.log("Form submitted:", values);

    const formattedData = {
      blogName: values?.name,
      details: values?.details,
      category: [values?.category],
    };

    const formData = new FormData();
    values?.images?.forEach((image) => {
      formData.append("blogImage", image.file);
    });

    formData.append("data", JSON.stringify(formattedData));

    try {
      await uploadBlog(formData).unwrap();
      toast.success("Blog Posted Successfully");
      setOpen(false);
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }

    // Here you would typically send the data to your API
    // Don't forget to handle the image upload separately if needed
    // Close the modal after submission
    // setOpen(false)
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Add Blog
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Image Upload */}
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Blog Image <span className="text-xs translate-y-0.5">(Recommended: Upload 4 images)</span></FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                      maxImages={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Car Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter blog name..."
                      {...field}
                      className="bg-[#F8FAFC] py-5 border-[#707071] rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Car Category */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Category</FormLabel>
                  <Input
                    placeholder="Enter blog category..."
                    {...field}
                    className="bg-[#F8FAFC] py-5 border-[#707071] rounded-none"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Blog Details with Rich Text Editor */}
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Details</FormLabel>
                  <FormControl>
                    <TextEditor
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Write blog details..."
                      className="bg-[#F8FAFC] min-h-[100px] border-[#707071] rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Submit Button */}
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full bg-primary-cyan rounded-none py-5"
            >
              Upload {isLoading && <LoadingSpin />}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
