import React from "react";
import { Metadata } from "next";
import AccountSettings from "@/app/(private)/(user)/user/account-settings/_components/AccountSettings";
import ChangePasswordForm from "@/app/(private)/(user)/user/account-settings/_components/ChangePasswordForm";

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Account Settings page of Chez Tati",
};

const AccountSettingPage = () => {
  return (
    <div className="space-y-7">
      <AccountSettings></AccountSettings>
      <ChangePasswordForm></ChangePasswordForm>
    </div>
  );
};

export default AccountSettingPage;
