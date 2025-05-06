import { userRoleData } from "@/lib/dummyData";
import UserRoleCard from "./UserRoleCard";

const UserRoleContainer = () => {
  return (
    <div className="flex justify-center flex-col sm:flex-row lg:gap-10 gap-6">
      {userRoleData?.map((role) => (
        <UserRoleCard data={role}></UserRoleCard>
      ))}
    </div>
  );
};

export default UserRoleContainer;
