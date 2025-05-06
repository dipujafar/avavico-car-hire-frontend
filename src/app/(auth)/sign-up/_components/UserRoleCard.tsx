import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TUserRoleData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserRoleCard = ({ data }: { data: TUserRoleData }) => {
  return (
    <Card className="shadow-none py-6">
      <CardContent className="lg:space-y-6 space-y-4">
        <Image
          src={data?.image}
          alt="user_role_image"
          width={1200}
          height={1200}
          className="w-full  max-h-[175px]"
        ></Image>
        <div className="space-y-0.5">
          <h1 className="text-xl font-medium text-center">{data?.title}</h1>
          <p className="md:text-sm text-xs text-primary-gray text-center">{data?.description}</p>
        </div>
        <Link href={data?.link}>
          <Button className="w-full md:py-4 bg-primary-cyan group hover:bg-cyan-600">Join Now <AnimatedArrow></AnimatedArrow></Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default UserRoleCard;
