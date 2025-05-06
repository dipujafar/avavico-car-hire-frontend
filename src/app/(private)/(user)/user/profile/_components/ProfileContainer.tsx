"use client";
import ProfileInfo from "./ProfileInfo";
import RecentOrders from "./RecentOrders";

export default function ProfileContainer() {
  return (
    <div className="space-y-8 text-primary-black">
      <ProfileInfo />
      <RecentOrders />
    </div>
  );
}
