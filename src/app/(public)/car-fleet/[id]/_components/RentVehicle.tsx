"use client";
import { useState } from "react";
import { format, differenceInDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";

const DAILY_RATE = 450;
const DISCOUNT = 50;

type Extra = {
  id: string;
  label: string;
  price: number;
  checked: boolean;
};

export function RentVehicle() {
  const [pickupDate, setPickupDate] = useState<Date | undefined>(
    new Date("2025-04-17")
  );
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>(
    new Date("2025-04-19")
  );

  const [extras, setExtras] = useState<Extra[]>([
    { id: "childSeat", label: "Child Seat", price: 24, checked: true },
    {
      id: "additionalDriver",
      label: "Additional Driver",
      price: 32,
      checked: false,
    },
    { id: "youngDriver", label: "Young Driver", price: 32, checked: false },
    { id: "oneWayFees", label: "One way fees", price: 125, checked: false },
    {
      id: "gpsNavigation",
      label: "GPS Navigation System",
      price: 25,
      checked: true,
    },
    { id: "crossBorder", label: "Cross Border", price: 25, checked: false },
    {
      id: "insuranceCoverage",
      label: "Insurance Coverage",
      price: 750,
      checked: true,
    },
  ]);

  const toggleExtra = (id: string) => {
    setExtras(
      extras.map((extra) =>
        extra.id === id ? { ...extra, checked: !extra.checked } : extra
      )
    );
  };

  // Calculate rental days
  const days =
    pickupDate && dropoffDate
      ? Math.max(1, differenceInDays(dropoffDate, pickupDate))
      : 0;

  // Calculate base rental cost
  const baseRental = days * DAILY_RATE;

  // Calculate extras cost
  const extrasCost = extras
    .filter((extra) => extra.checked)
    .reduce((sum, extra) => sum + extra.price, 0);

  // Calculate subtotal
  const subtotal = baseRental + extrasCost;

  // Calculate grand total
  const grandTotal = subtotal - DISCOUNT;

  return (
    <Card>
      <h3 className="text-xl font-bold px-4 border-b pb-2 text-[#101010]">Rent This Vehicle</h3>

      <CardContent className="p-0">
        <div className="border-b">
          <div className="flex items-center justify-between px-4 pb-2">
            <div className="font-medium">Pick-Up</div>
            <div className="flex items-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal",
                      !pickupDate && "text-muted-foreground"
                    )}
                  >
                    {pickupDate
                      ? format(pickupDate, "dd/MM/yyyy")
                      : "Select date"}
                    <CalendarIcon className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={pickupDate}
                    onSelect={setPickupDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 border-b pb-2">
            <div className="font-medium">Drop-Off</div>
            <div className="flex items-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal",
                      !dropoffDate && "text-muted-foreground"
                    )}
                  >
                    {dropoffDate
                      ? format(dropoffDate, "dd/MM/yyyy")
                      : "Select date"}
                    <CalendarIcon className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dropoffDate}
                    onSelect={setDropoffDate}
                    initialFocus
                    disabled={(date) =>
                      (pickupDate ? date < pickupDate : false) ||
                      date < new Date()
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 ">
            <div className="font-medium">Rent :</div>
            <div className="flex items-center gap-1">
              <span>
                ${DAILY_RATE} x {days} days
              </span>
              <span className="ml-auto font-medium">
                ${baseRental.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="font-medium mb-2">Add Extra:</div>
          <div className="space-y-2">
            {extras.map((extra) => (
              <div key={extra.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    className="border-primary-gray data-[state=checked]:bg-[#00B74A] data-[state=checked]:border-[#00B74A]"
                    id={extra.id}
                    checked={extra.checked}
                    onCheckedChange={() => toggleExtra(extra.id)}
                  />
                  <label
                    htmlFor={extra.id}
                    className=" xl:text-base text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#737373]"
                  >
                    {extra.label}
                  </label>
                </div>
                <div className="  xl:text-base text-sm">
                  ${extra.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-b-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">Subtotal</div>
            <div className="font-medium">${subtotal.toFixed(2)}</div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="font-medium">Discount</div>
            <div className="font-medium text-primary-cyan">
              -${DISCOUNT.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="flex items-center justify-between">
            <div className="font-medium text-lg">Grand Total</div>
            <div className="font-bold text-lg">${grandTotal.toFixed(2)}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 ">
        <Button className="w-full bg-primary-cyan hover:bg-cyan-600 group">
          Rent Now <AnimatedArrow></AnimatedArrow>
        </Button>
      </CardFooter>
    </Card>
  );
}
