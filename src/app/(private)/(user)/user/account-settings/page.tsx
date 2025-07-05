import React from "react";

import { Metadata } from "next";
import ChangePasswordForm from "./_components/ChangePasswordForm";
import AccountSettings from "@/components/shared/accountSettings/AccountSettings";

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Account Settings page of Avavico car hire"
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
