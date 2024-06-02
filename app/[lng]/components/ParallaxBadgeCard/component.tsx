"use client";
import { motion } from "framer-motion";

import { StarBadge } from "../ui/star-badge";
import { useParallax } from "@/lib/framer-utils";

export default function ParallaxBadgeCard({ primaryX, primaryY }: any) {
  // @ts-ignore
  function getImageUrl(userName): any {
    return "https://cravatar.eu/helmavatar/" + userName + "/250.png";
  }

  const StarBadgeMotion = motion(StarBadge);

  return (
    <div className=" xl:w-4/4 w-4/6 hidden xl:block lg:block relative ">
      <StarBadgeMotion
        username="dieserjohn"
        color="#FF00C7"
        x={primaryX}
        y={primaryY}
      />
      <StarBadgeMotion
        className="bottom-12 right-10"
        username="TA1RU"
        color="#5CC599"
        x={primaryX}
        y={primaryY}
      />
      <StarBadgeMotion
        className="top-52 -right-10"
        username="EgyBoy"
        color="#FF0000"
        x={primaryX}
        y={primaryY}
      />
      <StarBadgeMotion
        className="bottom-28 left-10"
        username="D151l"
        color="#0085FF"
        x={primaryX}
        y={primaryY}
      />
      <StarBadgeMotion
        className="top-12 right-24"
        username="EinsLucaaa"
        color="#8C9937"
        x={primaryX}
        y={primaryY}
      />

      <motion.img
        className="p-6"
        src="/assets/images/custom/header.svg"
        width={1000}
        height={1000}
        alt="A Desktop App"
      />
    </div>
  );
}
