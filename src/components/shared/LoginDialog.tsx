"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LoginDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const location = usePathname();
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Authentication Required!</AlertDialogTitle>
          <AlertDialogDescription>
            You are not logged in user. Please login to move forward.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Link href={`/sign-in?redirect=${encodeURIComponent(location)}`}>
            <AlertDialogAction className="bg-[#1EC1E2]">
              Login
            </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}