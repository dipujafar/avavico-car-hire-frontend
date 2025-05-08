"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ChangePasswordFormInputs = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ChangePasswordFormInputs>();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSubmit: SubmitHandler<ChangePasswordFormInputs> = async (
    data: ChangePasswordFormInputs
  ) => {
    console.log(data);
  };

  return (
    <div
      style={{
        boxShadow: "0px 0px 8.925px 0px rgba(96, 96, 96, 0.16)",
      }}
      className="bg-white rounded-lg"
    >
      <h1 className="px-7 py-5 text-2xl font-medium"> Change Password</h1>
      <hr />
      <div className="px-7 py-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Current password */}
          <div className="flex-1">
            <div className="relative flex flex-col space-y-1.5">
              <Label>Current Password</Label>
              <div className="relative">
                <Input
                  type={showOldPassword ? "text" : "password"}
                  {...register("oldPassword", {
                    required: "Current password is required",
                  })}
                  id="currentPassword"
                  placeholder="Current Password"
                  className="py-5"
                />
                <div
                  className="absolute right-0 top-1/2 -translate-1/2 transform cursor-pointer"
                  onClick={() => setShowOldPassword(!showOldPassword)}
                >
                  {showOldPassword ? (
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>
            </div>
            {errors.oldPassword && (
              <p className="mt-2 text-sm text-red-500">
                {errors.oldPassword.message}
              </p>
            )}
          </div>

          {/* new and confirm password */}
          <div className="flex flex-col gap-5 lg:flex-row">
            {/* new password */}
            <div className="flex-1">
              <div className="relative flex flex-col space-y-1.5">
                <Label>New Password</Label>
                <div className="relative">
                  <Input
                    type={showNewPassword ? "text" : "password"}
                    {...register("newPassword", {
                      required: "New password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                        message:
                          "Password must contain an uppercase letter and a symbol",
                      },
                    })}
                    id="newPassword"
                    placeholder="New Password"
                    className="py-5"
                  />
                  <div
                    className="absolute right-0 top-1/2 -translate-1/2 transform cursor-pointer"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff color="#1A1A1A" />
                    ) : (
                      <Eye color="#1A1A1A" />
                    )}
                  </div>
                </div>
              </div>
              {errors.newPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            {/* confirm password */}
            <div className="flex-1">
              <div className="relative flex flex-col space-y-1.5">
                <Label>Confirm Password</Label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === watch("newPassword") ||
                        "Passwords do not match with New Password",
                    })}
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="py-5"
                  />
                  <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff color="#1A1A1A" />
                    ) : (
                      <Eye color="#1A1A1A" />
                    )}
                  </div>
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* submit button */}
          <Button
            type="submit"
            className="mt-5 rounded-full bg-primary-cyan px-10 hover:bg-cyan-600"
          >
            Change Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
