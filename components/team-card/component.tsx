"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";

export default function TeamCard({
  userName,
  realName,
  bio,
  rankName,
  twitterHandle,
  entryDate,
}: any) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  async function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // @ts-ignore
  function getImageUrl(userName): any {
    return "https://cravatar.eu/helmavatar/" + userName + "/250.png";
  }

  return (
    <div className="tc bg-[#1A1A1A] p-2 rounded-md mx-2 flex w-[200px]">
      <div className="">
        <Image
          className="h-12 w-12 rounded"
          width={80}
          height={80}
          alt="alt"
          src={getImageUrl(userName)}
        />
      </div>
      <div className="ml-4">
        <p>{userName}</p>
        <span className="text-xs text-[#B2B2B2]">{rankName}</span>
      </div>
    </div>
  );
}
