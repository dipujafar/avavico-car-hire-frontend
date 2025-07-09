"use client";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { useSearchParams } from "next/navigation";
import { CancelIcon, SuccessIcon } from "@/components/icons";
import { useState } from "react";
import { ReviewModal } from "./ReviewModal";

export function OrderStatus({cardId, orderId}: {cardId: string, orderId: string}) {
  const status = useSearchParams().get("status");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const onCancel = () => {
    console.log("Cancel");
  };
  if (status === "complete") {
    return (
      <div>
        <div
          style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
          className="flex flex-col items-center justify-center p-6  text-center mb-4 gap-y-2 bg-white rounded-lg "
        >
          <SuccessIcon />

          <h2 className="text-xl font-semibold ">Order Completed</h2>

          <p className="text-[#747474] ">
            Your order has been successfully completed
          </p>
        </div>
        <Button onClick={() => setIsReviewModalOpen(true)} className="w-full bg-[#10B981] hover:bg-emerald-600 group">
          Write Review 
        </Button>

        <ReviewModal
          open={isReviewModalOpen}
          setOpen={setIsReviewModalOpen}
          carId={cardId}
          orderId={orderId}
        ></ReviewModal>
      </div>
    );
  }
  if (status === "cancel") {
    return (
      <div
        style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
        className="flex flex-col items-center justify-center p-6  text-center mb-4 gap-y-2 bg-white rounded-lg "
      >
        <CancelIcon />

        <h2 className="text-xl font-semibold ">Order Canceled</h2>

        <p className="text-[#747474] ">Your order had been canceled</p>
      </div>
    );
  }
  return (
    <Card
      style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
      className="border-none"
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-[#EF4444] mt-1 flex-shrink-0" />
            <h3 className="text-lg font-medium">Do you want to modify?</h3>
          </div>

          <p className="text-[#747474]">
            You can modify your order pickup and drop date and time before 2 hour of rent time start .
          </p>

          <Button
            variant="destructive"
            className="w-full bg-[#EF4444] hover:bg-red-600 group"
            onClick={onCancel}
          >
            Change 
            <AnimatedArrow></AnimatedArrow>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
