"use client";
import ProfileInfo from "@/components/shared/ProfileInfo/ProfileInfo";
import RecentOrders from "./RecentOrders";

export default function ProfileContainer() {
  return (
    <div className="space-y-8 text-primary-black">
      <ProfileInfo editLink="/user/account-settings#profile" />
      <RecentOrders />
    </div>
  );
}
