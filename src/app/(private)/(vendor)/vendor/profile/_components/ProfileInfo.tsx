"use client";
import { ProfileDetailsSkeleton } from "@/components/Skeletons/Profile/ProfileDetailsSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetUserProfileQuery } from "@/redux/api/userProfileApi";
import Link from "next/link";

const ProfileInfo = () => {
  const {data: userData, isLoading} = useGetUserProfileQuery(undefined);


  if(isLoading){
    return <ProfileDetailsSkeleton/>
  }
  
  return (
    <div
      style={{
        boxShadow: "0px 0px 8.925px 0px rgba(96, 96, 96, 0.16)",
      }}
      className="md:p-5 p-2 bg-white rounded-md "
    >
      <h4 className="w-fit ml-auto mb-2 underline text-primary-cyan hover:text-cyan-600">
        <Link href={"/vendor/account-settings#profile"} className=" text-end w-full ">
          Edit Profile
        </Link>
      </h4>
      <div className=" flex flex-col lg:flex-row   gap-x-5">
        <Avatar className="xl:size-60 md:size-52 size-32 mx-auto mb-5 lg:mb-0">
          <AvatarImage src={"/user_image2.png"} />
          <AvatarFallback className="md:text-5xl text-3xl uppercase">
            {userData?.name?.split(" ").length > 1 ? (
              <p>
                {userData?.name?.split(" ")[0].slice(0, 1)}
                {userData?.name?.split(" ")[1].slice(0, 1)}
              </p>
            ) : (
              userData?.name?.split(" ")[0].slice(0, 2)
            )}
          </AvatarFallback>
        </Avatar>

        <div className="md:space-y-4 space-y-3 flex-1">

<div className="grid md:grid-cols-2 gap-2">
          <div className="bg-[#F8F9FA] px-2.5 xl:py-2 py-1 rounded border border-[#E6E6E6] md:text-lg text-black flex items-center gap-x-2 w-full">
            <h5 className="text-sm md:text-base">First Name :</h5>
            <p className="text-sm md:text-base">{userData?.data?.firstName}</p>
          </div>


          <div className="bg-[#F8F9FA] px-2.5 xl:py-2 py-1 rounded border border-[#E6E6E6] md:text-lg text-black flex items-center gap-x-2 w-full">
            <h5 className="text-sm md:text-base">Last Name :</h5>
            <p className="text-sm md:text-base">{userData?.data?.lastName}</p>
          </div>
          </div>


          <div className="bg-[#F8F9FA] px-2.5 xl:py-2 py-1 rounded border border-[#E6E6E6] md:text-lg text-black flex items-center gap-x-2 w-full">
            <h5 className="text-sm md:text-base">User Name :</h5>
            <p className="text-sm md:text-base">{userData?.data?.userName}</p>
          </div>
          <div className="bg-[#F8F9FA] px-2.5 xl:py-2 py-1 rounded border border-[#E6E6E6] md:text-lg text-black flex items-center gap-x-2 w-full">
            <h5 className="text-sm md:text-base">Email :</h5>
            <p className="text-sm md:text-base">{userData?.data?.email}</p>
          </div>
          <div className="bg-[#F8F9FA] px-2.5 xl:py-2 py-1 rounded border border-[#E6E6E6] md:text-lg text-black flex items-center gap-x-2 w-full">
            <h5 className="text-sm md:text-base">Location :</h5>
            <p className="text-sm md:text-base">{userData?.data?.location?.streetAddress}, {userData?.data?.location?.city}{ userData?.data?.location?.city && ","} {userData?.data?.location?.state}, {userData?.data?.location?.country}</p>
          </div>
          <div className="bg-[#F8F9FA] px-2.5 xl:py-2 py-1 rounded border border-[#E6E6E6] md:text-lg text-black flex items-center gap-x-2 w-full">
            <h5 className="text-sm md:text-base">Phone :</h5>
            <p className="text-sm md:text-base">{userData?.data?.mobile}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
