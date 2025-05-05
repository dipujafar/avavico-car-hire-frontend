"use client"

import { AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow"
import { AlertIcon } from "@/components/icons"

export default function InsuranceCoverage() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className=" rounded-lg border border-gray-200 p-5 bg-white shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Checkbox
          id="insurance-checkbox"
          checked={isChecked}
          onCheckedChange={(checked) => setIsChecked(checked === true)}
        />
        <label htmlFor="insurance-checkbox" className="md:text-2xl text-xl font-medium text-gray-800 cursor-pointer">
          Insurance Coverage
        </label>
      </div>

      <div className="border-t border-gray-200 my-2"></div>

      <div className="bg-[#FFFBEB] border-l-4 border-amber-500 p-4 rounded my-5">
        <div className="flex items-center gap-2">
          <AlertIcon></AlertIcon>
          <p className="text-[#78350F] text-sm font-medium">You car is not covered. Will you take risk ?</p>
        </div>
      </div>

      <Link
        href="#"
        className="flex items-center justify-center gap-2 w-full bg-primary-cyan hover:bg-cyan-600 text-white font-medium py-3 px-4 rounded-md transition-colors group lg:text-base text-sm"
      >
        <span>Choose Your Insurance Coverage</span>
       <AnimatedArrow size={20}></AnimatedArrow>
      </Link>
    </div>
  )
}
