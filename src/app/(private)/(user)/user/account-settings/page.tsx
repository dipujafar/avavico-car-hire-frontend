import React from "react";
import AccountSettings from "./_components/AccountSettings";
import { Metadata } from "next";
import ChangePasswordForm from "./_components/ChangePasswordForm";

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
