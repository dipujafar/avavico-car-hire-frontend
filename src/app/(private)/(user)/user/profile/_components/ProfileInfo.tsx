import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { userData } from "@/utils/user-data";
import Link from "next/link";

const ProfileInfo = () => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 8.925px 0px rgba(96, 96, 96, 0.16)",
      }}
      className="md:p-5 p-2 bg-white rounded-md "
    >
      <h4 className="w-fit ml-auto mb-2 underline text-primary-cyan hover:text-cyan-600">
        <Link href={"#"} className=" text-end w-full ">
          Edit Profile
        </Link>
      </h4>
      <div className=" flex gap-x-5">
        <Avatar className="xl:size-60 md:size-52 size-32">
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
          <div className="bg-[#F8F9FA] px-2.5 py-2 rounded border border-[#E6E6E6] text-lg text-black flex items-center gap-x-2 w-full">
            <h5>Name :</h5>
            <p>{userData?.name}</p>
          </div>
          <div className="bg-[#F8F9FA] px-2.5 py-2 rounded border border-[#E6E6E6] text-lg text-black flex items-center gap-x-2 w-full">
            <h5>Email :</h5>
            <p>{userData?.email}</p>
          </div>
          <div className="bg-[#F8F9FA] px-2.5 py-2 rounded border border-[#E6E6E6] text-lg text-black flex items-center gap-x-2 w-full">
            <h5>Location :</h5>
            <p>{userData?.address}</p>
          </div>
          <div className="bg-[#F8F9FA] px-2.5 py-2 rounded border border-[#E6E6E6] text-lg text-black flex items-center gap-x-2 w-full">
            <h5>Phone :</h5>
            <p>{userData?.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
