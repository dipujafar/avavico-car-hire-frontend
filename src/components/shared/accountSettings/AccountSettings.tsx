"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/api/userProfileApi";
import AccountSettingSkeleton from "@/components/Skeletons/Profile/AccountSettingSkeleton";
import { Error_Modal } from "@/modals";
import LoadingSpin from "@/components/ui/loading-spin";
import { toast } from "sonner";

// Define form input type
interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  mobile: string;
}

const AccountSettings = () => {
  const [fileName, setFileName] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [updateProfile, { isLoading: isUpdateLoading }] =
    useUpdateUserProfileMutation();
  const { data: userData, isLoading } = useGetUserProfileQuery(undefined);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<FormInputs>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setFileName(file);
    } else {
      setImageUrl(null);
      setFileName(null);
    }

    input.value = "";
  };

  //   setDefault value using useEffect
  useEffect(() => {
    if (userData) {
      setValue("firstName", userData?.data?.firstName);
      setValue("lastName", userData?.data?.lastName);
      setValue("userName", userData?.data?.userName);
      setValue("email", userData?.data?.email);
      setValue("mobile", userData?.data?.mobile);
    }
  }, [userData, setValue]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (fileName) {
      formData.append("photo", fileName);
    }
    try {
      await updateProfile(formData).unwrap();
      toast.success("Profile updated successfully");
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  if (isLoading) {
    return <AccountSettingSkeleton />;
  }

  return (
    <div
      style={{
        boxShadow: "0px 0px 8.925px 0px rgba(96, 96, 96, 0.16)",
      }}
      className="bg-white rounded-lg"
    >
      <h1 id="profile" className="px-7 py-5 text-2xl font-medium">
        Account Settings
      </h1>
      <hr />
      {/* user information */}
      <div id="profile" className="px-7 py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col-reverse gap-5 lg:flex-row">
            <div className="flex-1 space-y-5">
              <div className="grid md:grid-cols-2 gap-2">
                {/* first name (handled by react hook form) */}
                <div className="mb-4 space-y-1">
                  <Label>First Name</Label>
                  <Input
                    {...register("firstName")}
                    defaultValue={userData?.name}
                    placeholder={"Enter your name"}
                    className="py-5"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                {/* last name (handled by react hook form) */}
                <div className="mb-4 space-y-1">
                  <Label>Last Name</Label>
                  <Input
                    {...register("lastName")}
                    defaultValue={userData?.name}
                    placeholder={"Enter your name"}
                    className="py-5"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/*  userName (handled by react hook form) */}
              <div className="mb-4 space-y-1">
                <Label>User Name</Label>
                <Input
                  {...register("userName")}
                  defaultValue={userData?.name}
                  placeholder={"Enter your name"}
                  className="py-5"
                />
                {errors.userName && (
                  <p className="text-sm text-red-500">
                    {errors.userName.message}
                  </p>
                )}
              </div>

              {/* user email */}
              <div className="mb-4 space-y-1">
                <Label> Email</Label>
                <Input
                  defaultValue={userData?.data?.email}
                  className="py-5"
                  disabled
                />
              </div>

              {/* user phone number */}
              <div className="mb-2 space-y-1">
                <Label>Phone Number</Label>
                <Controller
                  // @ts-ignore
                  name="mobile"
                  // rules={{ required: "Phone number is required" }}
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      // @ts-ignore
                      value={userData?.data?.mobile || field.value}
                      onChange={field.onChange}
                      international
                      defaultCountry="US"
                    />
                  )}
                />
              </div>

              <Button
                type="submit"
                disabled={isUpdateLoading}
                className="mt-5 rounded-full bg-primary-cyan px-10 hover:bg-cyan-600"
              >
                Save Changes {isUpdateLoading && <LoadingSpin />}
              </Button>
            </div>

            {/* profile image */}
            <div className="flex flex-1 flex-col items-center justify-center gap-y-5">
              <div className="group relative">
                <Avatar className="size-52">
                  <AvatarImage
                    src={imageUrl || userData?.data?.photo?.[0]}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-5xl uppercase">
                    {userData?.data?.firstName?.charAt(0)}
                    {userData?.data?.lastName?.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                {/* cancel button */}
                {fileName && imageUrl && (
                  <div
                    className="absolute right-4 top-2 cursor-pointer rounded-md bg-primary-pink opacity-0 duration-1000 group-hover:opacity-100"
                    onClick={() => {
                      setFileName(null);
                      setImageUrl(null);
                    }}
                  >
                    <X color="red" />
                  </div>
                )}
              </div>

              {/* upload image */}
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              {/* upload button */}
              <label
                htmlFor="fileInput"
                className="flex cursor-pointer flex-col items-center"
              >
                <div className="rounded-full border-2 border-primary-color px-5 py-2 font-semibold text-primary-color">
                  Choose Image
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
