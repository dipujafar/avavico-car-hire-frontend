"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentPageContainer() {
  const [showContent, setShowContent] = useState(false);
  const orderId = useSearchParams().get("orderId");
  console.log(orderId);

  useEffect(() => {
    // Trigger confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Show content with delay for better UX
    setTimeout(() => setShowContent(true), 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        {/* Success Header */}
        <div className="text-center space-y-4">
          <div className="relative">
            <CheckCircle
              className={`w-20 h-20 text-green-500 mx-auto transition-all duration-1000 ${
                showContent ? "scale-100 rotate-0" : "scale-0 rotate-180"
              }`}
            />
            <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-green-500/20 animate-ping" />
          </div>
          <div
            className={`space-y-2 transition-all duration-1000 delay-300 ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-3xl font-bold text-gray-900">
              Payment Successful!
            </h1>
            <p className="text-gray-600">
              Your car rental has been confirmed. Get ready for your adventure!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center items-center w-full">
            <Link href={`/user/orders/${orderId}`}>
            <Button
              className=" bg-[#1EC1E2] hover:bg-[#6bafbd] text-white group"
              size="lg"
            >
              View Details
              <AnimatedArrow />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
