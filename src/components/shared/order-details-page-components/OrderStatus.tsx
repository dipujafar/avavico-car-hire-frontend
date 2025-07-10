"use client";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { useSearchParams } from "next/navigation";
import { CancelIcon, SuccessIcon } from "@/components/icons";
import { useState } from "react";
import { ReviewModal } from "./ReviewModal";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUpdateOrderInfoMutation } from "@/redux/api/orderApi";
import { toast } from "sonner";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { Error_Modal } from "@/modals";
import { isWithin2HoursOrPassed } from "@/utils/CheckIsAbleToModifyOrder";
import MakeChangeOrderDetailsModal from "./MakeChangeOrderDetailsModal";
import { IOrderData } from "@/types";
import LoadingSpin from "@/components/ui/loading-spin";

export function OrderStatus({
  cardId,
  orderId,
  orderData,
}: {
  cardId: string;
  orderId: string;
  orderData: IOrderData;
}) {
  const status = useSearchParams().get("status");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [updateOrder, { isLoading }] = useUpdateOrderInfoMutation();
  const updateSearchParam = useUpdateSearchParams();
  const isAbleToModify = isWithin2HoursOrPassed(orderData?.pickUp);
  const [openChangeModal, setOpenChangeModal] = useState(false);

  const handleStatusComplete = async () => {
    try {
      await updateOrder({ id: orderId, data: { status: "complete" } }).unwrap();
      updateSearchParam("status", "complete");
      toast.success("Order completed successfully");
      setIsReviewModalOpen(true);
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

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
        <Button
          onClick={() => setIsReviewModalOpen(true)}
          className="w-full bg-[#10B981] hover:bg-emerald-600 group"
        >
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
    <>
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
              You can modify your order pickup and drop date and time before 2
              hour of rent time start .
            </p>

            <Button
              disabled={isAbleToModify}
              variant="destructive"
              className="w-full bg-[#EF4444] hover:bg-red-600 group"
              onClick={() => setOpenChangeModal(true)}
            >
              Change
              <AnimatedArrow></AnimatedArrow>
            </Button>
          </div>
        </CardContent>
      </Card>
      <div>
        <Popover>
          <PopoverTrigger className="w-full px-6">
            <Button
              variant="destructive"
              className="w-full bg-green-700 hover:bg-green-900 group"
              onClick={onCancel}
            >
              Make Complete
              <AnimatedArrow></AnimatedArrow>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full space-y-2">
            <h4 className="text-lg font-semibold">Are you sure?</h4>
            <p>You want to make this order complete.</p>
            <div className="flex justify-end">
              <Button
                disabled={isLoading}
                onClick={handleStatusComplete}
                size={"sm"}
                className="bg-green-900"
              >
                Confirm {isLoading && <LoadingSpin />}
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <MakeChangeOrderDetailsModal
        open={openChangeModal}
        setOpen={setOpenChangeModal}
        data={orderData}
      />
    </>
  );
}
