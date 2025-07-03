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
import { useAddNewBlogMutation, useUpdateBlogMutation } from "@/redux/api/blogApi";
import { Error_Modal } from "@/modals";
import LoadingSpin from "@/components/ui/loading-spin";
import { toast } from "sonner";
import { IBlog } from "@/types";
import { useState } from "react";
import Image from "next/image";

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
  images: z.array(imageSchema).optional() || [],
});

export type CarFormValues = z.infer<typeof formSchema>;

export function AddBlogModal({
  open,
  setOpen,
  defaultValues
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  defaultValues? : IBlog;
}) {
  const [uploadBlog, { isLoading }] = useAddNewBlogMutation();
  const [updateBlog, { isLoading: updateLoading }] = useUpdateBlogMutation();
  const [defaultImages, setDefaultImages] = useState<string[] | null>(defaultValues?.blogImage || []);

  console.log(defaultImages);
  
  const form = useForm<CarFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: defaultValues?.blogName || "",
      category: defaultValues?.category[0] || "",
      details: defaultValues?.details,
    },
  });

  const onSubmit = async (values: CarFormValues) => {
    // console.log("Form submitted:", values);

    const formattedData = {
      blogName: values?.name,
      details: values?.details,
      category: [values?.category],
    };

  

    if(defaultValues){

        const formData = new FormData();
    values?.images?.forEach((image) => {
      formData.append("blogImage", image.file);
    });

    formData.append("data", JSON.stringify({blogImage: defaultImages,...formattedData}));



      try {
        await updateBlog({ id: defaultValues?.id, data: formData }).unwrap();
        toast.success("Blog Updated Successfully");
        setOpen(false);
      } catch (error: any) {
        Error_Modal({ title: error?.data?.message });
      }
    }else{

    const formData = new FormData();
    values?.images?.forEach((image) => {
      formData.append("blogImage", image.file);
    });

    formData.append("data", JSON.stringify(formattedData));

    try {
      if (!values?.images?.length)
        return toast.error("Please upload at least one blog image.");

      await uploadBlog(formData).unwrap();
      toast.success("Blog Posted Successfully");
      form.reset();
      setOpen(false);
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
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
          <div> 
             {/* ------------------------- if have default images when update blog ---------------------
            <div className="flex gap-2 flex-wrap">
              {
                defaultImages && defaultImages?.length > 0 &&
                defaultImages?.map((image, index) => (
                                    <Image
                    src={image}
                    width={100}
                    height={100}
                    alt="blog Image"
                  />
                ))
              }
            </div> */}
            
            
             <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Blog Image <span className="text-xs translate-y-0.5">(Recommended: Upload 4 images)</span></FormLabel>
                  <FormControl>
                    <ImageUpload
                    // @ts-ignore
                      value={field.value}
                      onChange={field.onChange}
                      maxImages={4}
                      defaultImages={defaultImages}
                      setDefaultImages={setDefaultImages}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
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
              disabled={isLoading || updateLoading}
              type="submit"
              className="w-full bg-primary-cyan rounded-none py-5"
            >
              Upload {(isLoading || updateLoading) && <LoadingSpin />}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
