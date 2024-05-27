"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { renderTextToHtml } from "@/lib/utils";

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
    <Dialog>
      <DialogTrigger className="tc bg-[#1A1A1A] p-2 rounded-md mx-2 flex w-[200px]">
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
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-row w-full items-center">
          <div className="w-1/5">
            <Avatar className="h-24 w-24 rounded">
              <AvatarImage src={getImageUrl(userName)} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className=" -ml-4 w-4/5">
            <DialogTitle>{userName}</DialogTitle>
            <DialogDescription className="mt-3">
              <Badge className="uppercase px-[12px] py-[4px]" variant={"black"}>
                {rankName}
              </Badge>
            </DialogDescription>
          </div>
        </DialogHeader>
        <Card className="mb-10">
          <CardHeader>Über Mich</CardHeader>
          <CardContent>
            <CardDescription
              dangerouslySetInnerHTML={renderTextToHtml(bio)}
            ></CardDescription>
          </CardContent>
        </Card>
        <div className="flex-start">
          <span className="text-[12px] text-gray-400">
            Mitglied seit dem {entryDate}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
